"use client";
import CarouselBanner from "@/components/banners/CarouselBanner";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="bg-gray-300 min-h-screen">
            {/* Hero Carousel */}
            <CarouselBanner />

            {/* About Section */}
            <section className="container mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-center mb-8">
                    About Chef Nikolai
                </h2>

                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Image Section */}
                    <div className="flex justify-center">
                        <Image
                            src="/thechef.webp"
                            alt="About Chef Nikolai"
                            width={500}
                            height={300}
                            className="rounded-md shadow-lg w-full max-w-md"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col items-center text-gray-700 text-center md:text-left">
                        <p className="text-lg mb-6 max-w-lg mx-auto md:mx-0">
                            Food and travel have always been among my greatest passions, and I strive to express that through my cooking. Through years of travel and hands-on experience in diverse kitchens, I’ve developed a style rooted in technique, curiosity, and respect for ingredients.
</p>
                        <p className="text-lg mb-6 max-w-lg mx-auto md:mx-0">
                            Each meal I create draws inspiration from the places I’ve lived, eaten, and learned—bringing global flavors into a refined, thoughtful dining experience. I focus on seasonal ingredients and local producers to craft menus that feel personal, intentional, and memorable.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-9 py-5 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition duration-300"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
