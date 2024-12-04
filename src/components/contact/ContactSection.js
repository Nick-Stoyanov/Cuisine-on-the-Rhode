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
                            <h2 className="text-2xl font-bold mb-2">Our Location</h2>
                            <p className="font-semibold">
                                Cuisine on the Rhode
                            </p>
                            <p>
                                Newport, RI
                                <br />
                                Phone: 401-855-8560
                            </p>
                        </div>
                        {/* Google Map iframe */}
                        <div className="w-full h-64 md:h-80 border rounded-md overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.674743728043!2d-71.31329638468222!3d41.49010247925514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e446b2451e6f91%3A0x749fc768ace75df0!2sNewport%2C%20RI%2C%20USA!5e0!3m2!1sen!2sus!4v1701638556397!5m2!1sen!2sus"
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
