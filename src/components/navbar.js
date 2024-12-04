"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gray-600 text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Image
                        src="/logo.png"
                        alt="Cuisine on the Rhode Logo"
                        width={40}
                        height={40}
                    />
                    <Link href="/" className="text-2xl font-serif">
                        Cuisine on the Rhode
                    </Link>
                </div>

                {/* Hamburger Icon for Mobile */}
                <button
                    className="text-xl md:hidden"
                    onClick={toggleNavbar}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

                {/* Navigation Links */}
                <div
                    className={`${
                        isOpen ? "block" : "hidden"
                    } md:flex md:items-center md:space-x-8 text-lg`}
                >
                    <Link
                        href="/about"
                        className={`block ${
                            pathname === "/about"
                                ? "text-orange-400 border-b-2 border-orange-400"
                                : "text-white"
                        } hover:text-orange-400`}
                    >
                        About
                    </Link>
                    <Link
                        href="/menus"
                        className={`block ${
                            pathname === "/menus"
                                ? "text-orange-400 border-b-2 border-orange-400"
                                : "text-white"
                        } hover:text-orange-400`}
                    >
                        Menus
                    </Link>
                    <Link
                        href="/book-now"
                        className={`block ${
                            pathname === "/book-now"
                                ? "text-orange-400 border-b-2 border-orange-400"
                                : "text-white"
                        } hover:text-orange-400`}
                    >
                        Book Now
                    </Link>
                    <Link
                        href="/contact"
                        className={`block ${
                            pathname === "/contact"
                                ? "text-orange-400 border-b-2 border-orange-400"
                                : "text-white"
                        } hover:text-orange-400`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
