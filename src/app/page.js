import Link from "next/link";
import BannerCarousel from "@/components/banners/CarouselBanner";
import TestimonialSection from "@/components/testimonials/TestimonialSection";

export const metadata = {
    title: "Private Chef Newport RI | Chef Nikolai",
    description:
        "Private chef in Newport, Rhode Island offering personalized in-home dining, private dinners, special event menus, and coastal New England culinary experiences.",
    keywords:
        "private chef Newport RI, personal chef Rhode Island, in-home chef Newport, private dining Newport, chef for hire Newport, Rhode Island private chef",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Private Chef Newport RI | Chef Nikolai",
        description:
            "Private chef services in Newport, Rhode Island for intimate dinners, celebrations, and personalized seasonal menus.",
        type: "website",
        url: "https://chefnikolai.com",
    },
};

const services = [
    {
        title: "Private Dinners",
        description:
            "Refined multi-course dinners for intimate gatherings, anniversaries, and special evenings at home.",
    },
    {
        title: "Vacation Rental Dining",
        description:
            "Restaurant-quality meals in the comfort of your Airbnb, summer rental, or coastal getaway.",
    },
    {
        title: "Special Occasions",
        description:
            "Customized menus for birthdays, family celebrations, dinner parties, and memorable hosted evenings.",
    },
    {
        title: "Seasonal Menus",
        description:
            "Thoughtfully crafted dishes inspired by the season, local ingredients, and a personalized culinary approach.",
    },
];

export default function Home() {
    return (
        <>
            <BannerCarousel />

            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-5xl">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-center text-gray-900 md:text-4xl">
                                A Private Dining Experience Designed Around You
                            </h2>
                            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
                                I offers private chef services in Newport, Rhode
                                Island and throughout Southern New England for guests looking to enjoy thoughtful, personalized
                                dining in the comfort of their home, vacation rental, or event
                                space. Each experience is built around your preferences, your
                                occasion, and the ingredients best suited to the season.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="rounded-2xl text-center bg-gray-200 p-8 shadow-sm">
                                <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                                    Personalized Menus
                                </h3>
                                <p className="leading-relaxed text-gray-700">
                                    From elegant plated dinners to more relaxed family-style
                                    meals, every menu is tailored to your tastes. My goal is to
                                    create a dining experience that reflects local seasonal produce at it's best.
                                </p>
                            </div>

                            <div className="rounded-2xl text-center bg-gray-200 p-8 shadow-sm">
                                <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                                    Newport, Rhode Island & Southern New England
                                </h3>
                                <p className="leading-relaxed text-gray-700">
                                    Based in Newport, I serves clients throughout
                                    Rhode Island & Southern New England with private chef dinners, celebration
                                    menus, and intimate gatherings that reflect both the setting
                                    and the season.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-orange-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700"
                            >
                                Inquire About a Dinner
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-gray-300 px-8 py-4 font-semibold text-gray-900 transition hover:bg-gray-100"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-300 py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                                Private Chef Services in Newport, RI
                            </h2>
                            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
                                Whether you are planning a romantic dinner, hosting friends, or
                                celebrating a major occasion, each service is designed to bring
                                a restaurant-level experience into a more personal setting.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {services.map((service) => (
                                <div
                                    key={service.title}
                                    className="rounded-2xl text-center bg-white p-6 shadow-sm"
                                >
                                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                        {service.title}
                                    </h3>
                                    <p className="leading-relaxed text-gray-700">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            <TestimonialSection />

            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl rounded-3xl bg-gray-900 px-8 py-12 text-center text-white shadow-lg">
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                            Start Planning Your Dining Experience
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-200">
                            Tell me about your dinner, celebration, or event, and I will begin building a menu tailored to your vision,
                            preferences, and occasion.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}