import Image from "next/image";
import ContactBanner from "@/components/banners/ContactBanner";

export const metadata = {
    title: "Contact Chef Nikolai | Private Chef Newport RI",
    description: "Contact Chef Nikolai for private chef services in Newport and Rhode Island. Book your culinary experience today.",
    alternates: {
        canonical: '/contact',
    },
};

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
                            src="/chef-nikolai-newport-cuisine.webp"
                            alt="Chef Nikolai Newport RI at work"
                            width={500}
                            height={300}
                            className="rounded-md shadow-lg mb-6"
                        />
                        <p className="text-lg text-gray-800 mb-6">
                            Let's create a culinary experience like no other. Whether it's a
                            private dinner, event catering, or personalized tasting menus.
                        </p>

                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col items-center justify-center text-center md:text-left">
                        <Image
                            src="/newport-private-dining-entree.webp"
                            alt="Private chef Newport RI plated dish"
                            width={500}
                            height={300}
                            className="rounded-md shadow-lg mb-6"
                        />
                        <p className="text-lg text-gray-800 mb-6">
                            I'm here to help you plan your next culinary adventure. Contact
                            to discuss your needs, whether it's a special occasion, a
                            casual gathering, or a once-in-a-lifetime event.
                        </p>

                    </div>
                </div>
            </section>
        </div>
    );
}
