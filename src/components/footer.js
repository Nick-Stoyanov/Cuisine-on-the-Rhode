"use client";
import Link from "next/link";
import ContactSection from "@/components/contact/ContactSection";

function Footer() {
    return (
        <>
            <ContactSection />
            <footer className="bg-gray-100 border-t border-gray-200 py-4">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                    <div className="text-gray-600">
                        © 2024 Copyright by Cuisine on the Rhode. All rights reserved.
                    </div>
                    <div className="mt-2 md:mt-0">
                        <Link
                            href="/Privacy-Policy.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-red-500 ml-4"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
