import { NextResponse } from "next/server";

// Ensure we run in the Node.js runtime so process.env is available
export const runtime = "nodejs";

// Utility to safely mask an email in diagnostics
function maskEmail(email) {
    if (!email || typeof email !== "string") return "";
    const [user, domain] = email.split("@");
    if (!user || !domain) return email;
    const maskedUser = user.length <= 2 ? user[0] + "*" : user.slice(0, 2) + "*".repeat(Math.max(1, user.length - 2));
    return `${maskedUser}@${domain}`;
}

// Health/config check
export async function GET() {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO = process.env.CONTACT_TO_EMAIL;
    const FROM = process.env.CONTACT_FROM_EMAIL;

    const missing = [];
    if (!RESEND_API_KEY) missing.push("RESEND_API_KEY");
    if (!TO) missing.push("CONTACT_TO_EMAIL");

    const configured = missing.length === 0;
    return NextResponse.json(
        {
            ok: true,
            runtime,
            configured,
            missing,
            to: maskEmail(TO),
            from: maskEmail(FROM || "onboarding@resend.dev"),
            note: "Use CONTACT_FROM_EMAIL=onboarding@resend.dev for testing or a verified domain sender for production.",
        },
        { status: 200 }
    );
}

export async function POST(request) {
    try {
        // Parse payload
        let data;
        try {
            data = await request.json();
        } catch (e) {
            return NextResponse.json(
                {
                    message: "Invalid JSON body.",
                    code: "BAD_REQUEST",
                    hint: "Ensure the request has 'Content-Type: application/json' and a valid JSON body.",
                },
                { status: 400 }
            );
        }

        const { fullname, email, phone, message } = data || {};
        if (!fullname || !email || !phone || !message) {
            return NextResponse.json(
                {
                    message: "Missing required fields.",
                    code: "VALIDATION_ERROR",
                    details: { missing: ["fullname", "email", "phone", "message"].filter((k) => !data?.[k]) },
                },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { message: "Invalid email address.", code: "VALIDATION_ERROR" },
                { status: 400 }
            );
        }

        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        const TO = process.env.CONTACT_TO_EMAIL;
        const FROM = process.env.CONTACT_FROM_EMAIL;

        const missing = [];
        if (!RESEND_API_KEY) missing.push("RESEND_API_KEY");
        if (!TO) missing.push("CONTACT_TO_EMAIL");

        if (missing.length) {
            return NextResponse.json(
                {
                    message: "Email service is not configured.",
                    code: "CONFIG_MISSING",
                    missing,
                    hint:
                        "Set RESEND_API_KEY and CONTACT_TO_EMAIL in your environment. For sender, use CONTACT_FROM_EMAIL=onboarding@resend.dev for testing.",
                },
                { status: 500 }
            );
        }

        // If a Gmail address is configured as sender, explain why it won't work with Resend.
        if (FROM && /@gmail\.com$/i.test(FROM)) {
            return NextResponse.json(
                {
                    message:
                        "The configured sender (CONTACT_FROM_EMAIL) is a Gmail address. Email providers like Resend require a verified custom domain for the From address.",
                    code: "SENDER_NOT_ALLOWED",
                    hint:
                        "Use CONTACT_FROM_EMAIL=onboarding@resend.dev for testing, or verify your own domain and use something like contact@your-domain.com.",
                },
                { status: 400 }
            );
        }

        // Allow a safe default sender for testing if CONTACT_FROM_EMAIL is not set.
        const fromAddress = FROM || "onboarding@resend.dev";

        const subject = `New contact form submission from ${fullname}`;
        const text = [
            "New contact form submission:",
            `Full name: ${fullname}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            "",
            "Message:",
            message,
        ].join("\n");

        const html = `
            <div>
                <p><strong>New contact form submission:</strong></p>
                <p><strong>Full name:</strong> ${fullname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong></p>
                <p>${(message || "").replace(/\n/g, "<br/>")}</p>
            </div>
        `;

        const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: fromAddress,
                to: TO,
                subject,
                text,
                html,
                reply_to: email,
            }),
        });

        let result = {};
        try {
            result = await resendResponse.json();
        } catch {
            // keep {}
        }

        if (!resendResponse.ok) {
            console.error("Resend API error:", result);
            return NextResponse.json(
                {
                    message: result?.message || "Failed to send email.",
                    code: "PROVIDER_ERROR",
                    providerStatus: resendResponse.status,
                    providerError: result,
                    hint:
                        "Verify RESEND_API_KEY is valid, the 'to' email is correct, and the sender is allowed. Try CONTACT_FROM_EMAIL=onboarding@resend.dev for testing.",
                },
                { status: 502 }
            );
        }

        return NextResponse.json(
            {
                message: "Form submitted successfully.",
                id: result?.id,
            },
            { status: 200 }
        );
    } catch (err) {
        console.error("Error handling /api/contact POST:", err);
        return NextResponse.json(
            { message: "Internal server error.", code: "INTERNAL_ERROR" },
            { status: 500 }
        );
    }
}
