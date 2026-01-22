"use client";
import React, { useState } from "react";
import MyButton from "../my-button/MyButton";
import { Toaster, toast } from "react-hot-toast";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

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
                toast.error(typeof msg === "string" ? msg : "Error submitting form. Please reach out by phone or email.");
                return;
            }

            console.log(payload?.message);
            setSubmitted(true);
            toast.success("Thank you for submitting, we will reach out shortly!");
            setFormData({
                fullname: "",
                email: "",
                phone: "",
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
                    <h2 className="text-2xl font-bold text-center mb-6">Quick Contact</h2>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="fullname" className="block font-semibold">
                                Full Name <span className="text-red-500">*</span>
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
