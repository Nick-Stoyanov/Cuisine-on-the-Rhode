"use client";
import Image from "next/image";
import ContactBanner from "@/components/banners/ContactBanner";

export default function ContactPage() {
    return (
        <div className="bg-gray-300 min-h-screen text-black">
            {/* Contact Banner */}
            <ContactBanner />

            {/* Contact Section */}
            <section className="container mx-auto px-4 py-12">
                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Section */}
                    <div className="flex flex-col items-center justify-center text-center md:text-left">
                        <Image
                            src="/food-9.webp"
                            alt="Chef at Work"
                            width={500}
                            height={300}
                            className="rounded-md shadow-lg mb-6"
                        />
                        <p className="text-lg text-gray-800 mb-6">
                            Let's create a culinary experience like no other. Whether it's a
                            private dinner, event catering, or personalized tasting menus,
                            Cuisine on the Rhode delivers unforgettable moments.
                        </p>
                        <a
                            href="#contact-form"
                            className="inline-block px-8 py-4 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition duration-300"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col items-center justify-center text-center md:text-left">
                        <Image
                            src="/food-8.webp"
                            alt="Plated Dish"
                            width={500}
                            height={300}
                            className="rounded-md shadow-lg mb-6"
                        />
                        <p className="text-lg text-gray-800 mb-6">
                            We're here to help you plan your next culinary adventure. Contact
                            us to discuss your needs, whether it's a special occasion, a
                            casual gathering, or a once-in-a-lifetime event.
                        </p>
                        <a
                            href="tel:+14018558560"
                            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Call Us: (401) 855-8560
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
