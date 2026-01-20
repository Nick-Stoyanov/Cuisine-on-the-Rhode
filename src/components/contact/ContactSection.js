"use client";
import React from "react";
import ContactForm from "../contact/ContactForm";

const ContactSection = () => {
    return (
        <section className="bg-gray-100 w-full py-6">
            <div className="container mx-auto px-4 pb-6 pt-6">
                <div className="flex flex-col md:flex-row md:space-x-6">
                    {/* Office Info and Google Map */}
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                        <div className="text-center text-black md:text-left mb-6">
                            <h2 className="text-2xl font-bold mb-2">Chef Nikolai</h2>
                            <p className="font-semibold">
                                Newport, RI

                            </p>
                            <p>
                                401-855-8560
                            </p>
                        </div>
                        {/* Google Map iframe */}
                        <div className="w-full h-64 md:h-80 border rounded-md overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps?q=Newport%2C%20RI&z=12&output=embed"
                                style={{
                                    border: "0",
                                    width: "100%",
                                    height: "100%",
                                }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full md:w-1/2 text-gray-900">
                        <div className="bg-white p-6 rounded-md shadow-lg">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
