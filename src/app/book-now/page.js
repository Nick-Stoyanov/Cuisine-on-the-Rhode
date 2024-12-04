"use client";
import React from "react";
import Image from "next/image";

const BookNowPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[400px] w-full">
                <Image
                    src="/Pasta.webp" // Placeholder image
                    alt="Book Your Culinary Experience"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
                {/* Hero Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Book Your Culinary Experience
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl">
                        Plan your next unforgettable dining experience with Cuisine on the
                        Rhode. Check our availability or contact us to reserve your event.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Thank you for your interest in booking with Cuisine on the Rhode! We're
                    currently setting up our booking platform. In the meantime, take a look
                    at the calendar to check availability, and feel free to contact us at{" "}
                    <a
                        href="mailto:info@cuisineontherhode.com"
                        className="text-blue-600 hover:underline"
                    >
                        info@cuisineontherhode.com
                    </a>{" "}
                    or{" "}
                    <a
                        href="tel:401-855-8560"
                        className="text-blue-600 hover:underline"
                    >
                        (401) 855-8560
                    </a>{" "}
                    to schedule your event.
                </p>

                {/* Calendar Placeholder */}
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl mx-auto">
                    <div className="flex items-center justify-between mb-4">
                        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                            ←
                        </button>
                        <h2 className="text-lg font-semibold">December 2024</h2>
                        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                            →
                        </button>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center">
                        {/* Weekday Headers */}
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                            <div key={day} className="font-semibold text-gray-700">
                                {day}
                            </div>
                        ))}
                        {/* Placeholder Dates */}
                        {Array.from({ length: 30 }).map((_, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-lg text-gray-700 ${
                                    index + 1 === 15
                                        ? "bg-orange-600 text-white font-semibold"
                                        : "bg-gray-100"
                                } hover:bg-orange-300 hover:text-white cursor-pointer`}
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookNowPage;
