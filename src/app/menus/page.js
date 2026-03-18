"use client";
import React, { useState } from "react";

const menus = [
    {
        title: "Chef’s Seasonal Tasting Menu",
        image: "/private-chef-seasonal-tasting-menu-newport-ri.webp",
        alt: "Chef’s seasonal tasting menu private chef Newport Rhode Island",
        description:
            "A refined multi-course dining experience showcasing the best ingredients of the season. Each menu is fully customized to your preferences, with a focus on balance, technique, and presentation.",
        details:
            "Available as a 3, 5, or extended tasting menu of up to 7+ courses for a refined fine dining experience.",
    },
    {
        title: "Seasonal Italian Dinner",
        image: "/newport-chef-fresh-pasta.webp",
        alt: "Seasonal Italian dinner private chef Newport Rhode Island",
        description:
            "Inspired by regional Italian cuisine, this menu features handmade pastas, fresh vegetables, and classic flavors reinterpreted with a modern approach.",
        details:
            "Offered as a multi-course plated or family-style experience.",
    },
    {
        title: "Steakhouse Dinner",
        image: "/private-chef-steak-dinner-newport-ri.webp",
        alt: "Steakhouse dinner private chef Newport Rhode Island",
        description:
            "A bold, satisfying menu centered around high-quality cuts of meat, seasonal sides, and rich, balanced flavors reminiscent of a classic steakhouse experience.",
        details:
            "Ideal for celebratory dinners and gatherings. Can be plated or served family-style.",
    },
    {
        title: "New England Coastal Dinner",
        image: "/private-chef-new-england-seafood-newport-ri.webp",
        alt: "New England seafood private chef Newport Rhode Island",
        description:
            "A menu inspired by the flavors of coastal New England, featuring local seafood, seasonal produce, and dishes that reflect the region’s culinary identity.",
        details:
            "Perfect for guests looking for a locally inspired dining experience.",
    },
    {
        title: "Southeast Asian Dinner",
        image: "/private-chef-thai-asian-dinner-newport-ri.webp",
        alt: "Southeast Asian dinner private chef Newport Rhode Island",
        description:
            "A vibrant menu inspired by Southeast Asian cuisine, featuring bold flavors, fresh herbs, balanced spice, and depth of flavor.",
        details:
            "Can be customized to focus on Thai or broader regional influences.",
    },
    {
        title: "Vegetarian Tasting Menu",
        image: "/private-chef-vegetarian-tasting-menu-newport-ri.webp",
        alt: "Vegetarian tasting menu private chef Newport Rhode Island",
        description:
            "A creative multi-course vegetarian experience highlighting seasonal produce, thoughtful compositions, and refined techniques.",
        details:
            "Designed as a plated tasting menu with full customization available.",
    },
];

const Menus = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (index) => {
        setActiveMenu(activeMenu === index ? null : index);
    };

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-6">
                    Dining Experiences
                </h1>

                {/* Intro */}
                <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                    Each experience is thoughtfully designed around your preferences,
                    your event, and the season. Menus are fully customized to create a
                    seamless and memorable private dining experience.
                </p>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                    {menus.map((menu, index) => (
                        <div
                            key={index}
                            className="relative group bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 cursor-pointer transition hover:shadow-lg"
                            onClick={() => handleMenuClick(index)}
                        >
                            {/* Image */}
                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    src={menu.image}
                                    alt={menu.alt}
                                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Title */}
                            <div className="p-5 text-center">
                                <h3 className="text-lg font-semibold">
                                    {menu.title}
                                </h3>
                                <p className="text-sm text-gray-500 mt-2 hidden sm:block group-hover:hidden">
                                    View details
                                </p>
                            </div>

                            {/* Overlay */}
                            <div
                                className={`absolute inset-0 bg-black/85 text-white flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300 ${
                                    activeMenu === index
                                        ? "opacity-100"
                                        : "opacity-0 group-hover:opacity-100"
                                }`}
                            >
                                <h3 className="text-xl font-semibold mb-2">
                                    {menu.title}
                                </h3>

                                <p className="text-sm mb-3 leading-relaxed">
                                    {menu.description}
                                </p>

                                <p className="text-xs text-gray-300 mb-4">
                                    {menu.details}
                                </p>

                                {/* CTA BUTTON */}
                                <a
                                    href={`/contact?menu=${encodeURIComponent(menu.title)}`}
                                    className="mt-2 inline-block rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-700 transition duration-200"
                                >
                                    Inquire About This Menu →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CUSTOM SECTION */}
                <div className="mt-20">
                    <div className="mx-auto max-w-5xl rounded-3xl bg-gray-900 px-8 py-14 text-center text-white shadow-xl">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                            Fully Customized Dining Experiences
                        </h2>

                        <p className="text-lg leading-relaxed text-gray-200 mb-6 max-w-3xl mx-auto">
                            In addition to the featured dining experiences, every menu is
                            completely tailored to your preferences, your event, and the
                            ingredients at their peak.
                        </p>

                        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
                            Whether you're envisioning a 5–7 course tasting menu, a
                            vegetarian-focused dinner, or cuisine inspired by a specific
                            region such as Southeast Asia or the Mediterranean, each
                            experience is designed from scratch to match your vision.
                        </p>

                        <a
                            href="/contact"
                            className="inline-block rounded-full bg-orange-600 px-8 py-4 text-white font-semibold hover:bg-orange-700 transition duration-200"
                        >
                            Plan Your Experience
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menus;