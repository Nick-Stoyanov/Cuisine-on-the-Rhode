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
                    About Cuisine on the Rhode
                </h2>

                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Image Section */}
                    <div className="flex justify-center">
                        <Image
                            src="/thechef.webp"
                            alt="About Cuisine on the Rhode"
                            width={500}
                            height={300}
                            className="rounded-md shadow-lg w-full max-w-md"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col items-center text-gray-700 text-center md:text-left">
                        <p className="text-lg mb-6 max-w-lg mx-auto md:mx-0">
                            At Cuisine on the Rhode, we bring the finest culinary experiences
                            directly to your table. From intimate dinners to grand celebrations,
                            Chef Nikolai combines creativity, fresh ingredients, and global
                            inspiration to craft unforgettable meals.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-9 py-5 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
