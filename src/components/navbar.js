"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);
    const closeNavbar = () => setIsOpen(false);

    const linkClasses = (href) =>
        `block transition duration-200 ${
            pathname === href
                ? "text-orange-400 border-b-2 border-orange-400"
                : "text-white hover:text-orange-400"
        }`;

    return (
        <nav className="bg-gray-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Link
                        href="/"
                        className="text-2xl font-serif tracking-wide hover:text-orange-300 transition duration-200"
                        onClick={closeNavbar}
                    >
                        Chef Nikolai
                    </Link>
                </div>

                {/* Hamburger Icon for Mobile */}
                <button
                    className="text-2xl md:hidden"
                    onClick={toggleNavbar}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

                {/* Navigation Links */}
                <div
                    className={`${
                        isOpen ? "flex" : "hidden"
                    } absolute left-0 top-full w-full flex-col bg-gray-600 px-4 py-4 space-y-4 shadow-md md:static md:w-auto md:flex md:flex-row md:items-center md:space-y-0 md:space-x-8 md:bg-transparent md:p-0 md:shadow-none text-lg`}
                >
                    <Link
                        href="/about"
                        className={linkClasses("/about")}
                        onClick={closeNavbar}
                    >
                        About
                    </Link>

                    <Link
                        href="/menus"
                        className={linkClasses("/menus")}
                        onClick={closeNavbar}
                    >
                        Menus
                    </Link>

                    <Link
                        href="/contact"
                        onClick={closeNavbar}
                        className="inline-block rounded-full bg-orange-600 px-5 py-2 text-white font-semibold hover:bg-orange-700 transition duration-200 text-center"
                    >
                        Inquire
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;