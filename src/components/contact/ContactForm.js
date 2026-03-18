"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import MyButton from "../my-button/MyButton";
import { Toaster, toast } from "react-hot-toast";

const ContactForm = () => {
    const searchParams = useSearchParams();
    const selectedMenu = searchParams.get("menu") || "";

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        date: "",
        menuInterest: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (!selectedMenu) return;

        setFormData((prev) => ({
            ...prev,
            menuInterest: prev.menuInterest || selectedMenu,
        }));
    }, [selectedMenu]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const contentType = res.headers.get("content-type") || "";
            let payload;

            try {
                if (contentType.includes("application/json")) {
                    payload = await res.json();
                } else {
                    const text = await res.text();
                    payload = text ? { message: text } : {};
                }
            } catch {
                payload = {};
            }

            if (!res.ok) {
                console.error("Form submission failed.", {
                    status: res.status,
                    statusText: res.statusText,
                    contentType,
                    body: payload,
                });

                const msg =
                    (payload && (payload.message || payload.error)) ||
                    `Request failed (${res.status})`;

                toast.error(
                    typeof msg === "string"
                        ? msg
                        : "Error submitting form. Please reach out by phone or email."
                );
                return;
            }

            toast.success("Thank you for submitting, we will reach out shortly!");

            // Reset EVERYTHING to blank after submit
            setFormData({
                fullname: "",
                email: "",
                phone: "",
                date: "",
                menuInterest: "",
                message: "",
            });
        } catch (err) {
            console.error("Error submitting form:", err);
            toast.error("Error submitting form. Please reach out by phone or email.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded p-6">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Booking your dining experience is easy!
                    </h2>
                    <h3 className="text-xl font-bold text-center mb-6">
                        Fill out the form or reach out to me via email at{" "}
                        <a
                            href="mailto:nicklovestocook@gmail.com"
                            className="underline hover:text-orange-500"
                        >
                            nicklovestocook@gmail.com
                        </a>
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="fullname" className="block font-semibold">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="fullname"
                                className="w-full border border-black p-2 rounded"
                                required
                                value={formData.fullname}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block font-semibold">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-black p-2 rounded"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block font-semibold">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full border border-black p-2 rounded"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="date" className="block font-semibold">
                                Event Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                id="date"
                                className="w-full border border-black p-2 rounded"
                                required
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </div>

                        {/* ONLY SHOW IF FROM MENU */}
                        {selectedMenu && (
                            <div>
                                <label htmlFor="menuInterest" className="block font-semibold">
                                    Interested In
                                </label>
                                <input
                                    type="text"
                                    id="menuInterest"
                                    className="w-full border border-black p-2 rounded"
                                    value={formData.menuInterest}
                                    onChange={handleChange}
                                />
                            </div>
                        )}

                        <div>
                            <label htmlFor="message" className="block font-semibold">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full border border-black p-2 rounded"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <MyButton
                                type="submit"
                                className={isSubmitting ? "opacity-60" : ""}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                            </MyButton>
                        </div>
                    </div>
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default ContactForm;