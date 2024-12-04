"use client";
import React, { useState } from "react";

const menus = [
    { title: "Nice To Meat You", description: "Prime steak, pomme Anna, au poivre sauce, Yorkshire pudding, Caesar salad, and chocolate mousse for dessert." },
    { title: "Notte Italiana", description: "Homemade pasta, creamy burrata, roasted tomato bruschetta, chicken piccata, and tiramisu to end the night." },
    { title: "All Out Thai", description: "Authentic pad Thai, green curry, som tum salad, mango sticky rice, and more for a vibrant Thai feast." },
    { title: "Tacos Tuesday", description: "Build-your-own taco station with beef barbacoa, pulled pork, grilled veggies, fresh salsas, and churros for dessert." },
    { title: "Vegetarian Tasting Menu", description: "Grilled eggplant stack, roasted beet salad, wild mushroom risotto, and a decadent chocolate avocado mousse." },
    { title: "Seasonal Tasting Menu", description: "Delight in the flavors of the season with dishes featuring local and sustainable ingredients, ending with a fruit tart." },
    { title: "When in New England...", description: "Clam chowder, lobster rolls, maple-glazed salmon, apple pie, and more to celebrate New England’s finest flavors." },
];

const Menus = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (index) => {
        setActiveMenu(activeMenu === index ? null : index);
    };

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-black text-center mb-8">Sample Menus</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {menus.map((menu, index) => (
                        <div
                            key={index}
                            className="relative group bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 cursor-pointer"
                            onClick={() => handleMenuClick(index)}
                        >
                            {/* Image */}
                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    src="/Pasta.webp"
                                    alt={menu.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Title and Small Text */}
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold">{menu.title}</h3>
                                <p className="text-sm text-gray-500 mt-2 hidden sm:block group-hover:hidden">
                                    Click for more info
                                </p>
                            </div>

                            {/* Additional Info (Revealed on Hover or Click) */}
                            <div
                                className={`absolute inset-0 bg-black/80 text-white flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${
                                    activeMenu === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                }`}
                            >
                                <h3 className="text-lg font-semibold">{menu.title}</h3>
                                <p className="text-sm mt-2">{menu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menus;
