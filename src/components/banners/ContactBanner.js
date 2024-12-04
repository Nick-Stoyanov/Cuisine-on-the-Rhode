"use client";
import Image from "next/image";

const ContactBanner = () => {
    return (
        <div className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full">
            {/* Background Image */}
            <Image
                src="/food-2.webp"
                alt="Cuisine on the Rhode - Contact Us"
                fill
                priority
                className="object-cover" // Uses Tailwind to handle full cover
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>

            {/* Text and Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                    Let’s Talk About Your Culinary Needs
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl mt-4 max-w-2xl">
                    Contact us today to start planning your perfect dining experience.
                </p>

                {/* Call Us Button */}
                <div className="mt-8">
                    <a
                        href="tel:401-855-8560"
                        className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-center"
                    >
                        Call Us at 401-855-8560
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactBanner;
