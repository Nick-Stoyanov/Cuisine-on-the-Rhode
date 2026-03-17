"use client";

export const metadata = {
    title: "FAQ - Private Chef Newport RI | Chef Nikolai",
    description: "Frequently asked questions about private chef services in Newport and Rhode Island. Learn about booking, pricing, dietary restrictions, and more.",
    alternates: {
        canonical: '/faq',
    },
};

const faqs = [
    {
        question: "What areas do you serve?",
        answer: "I primarily serve Newport and the surrounding Rhode Island area, including Middletown, Portsmouth, Jamestown, Narragansett, and other nearby towns. For events outside this area, please contact me to discuss availability."
    },
    {
        question: "How far in advance should I book?",
        answer: "I recommend booking at least 2-3 weeks in advance for most events. However, I may be able to accommodate last-minute requests depending on my availability. Contact me as soon as possible to secure your preferred date."
    },
    {
        question: "What is included in your private chef service?",
        answer: "My service includes menu planning, grocery shopping, meal preparation, plating, and kitchen cleanup. I work with you to create a personalized dining experience tailored to your preferences and dietary needs."
    },
    {
        question: "Can you accommodate dietary restrictions?",
        answer: "Absolutely! I can accommodate various dietary restrictions and preferences including vegetarian, vegan, gluten-free, dairy-free, and food allergies. Just let me know your requirements when booking."
    },
    {
        question: "How does pricing work?",
        answer: "Pricing varies based on the menu, number of guests, and type of event. After our initial consultation, I'll provide a detailed quote that includes food costs, preparation, and service. Contact me for a personalized estimate."
    },
    {
        question: "What types of events do you cater?",
        answer: "I cater a wide range of events including intimate dinners, birthday celebrations, anniversaries, corporate events, yacht parties, and special occasions. Whether it's a romantic dinner for two or a gathering of 20+ guests, I can create the perfect experience."
    },
    {
        question: "Do you provide staff for larger events?",
        answer: "For larger events, I can arrange additional staff including servers and assistants to ensure your event runs smoothly. This will be discussed during our consultation."
    },
    {
        question: "What equipment do you need?",
        answer: "I bring most of my own cooking tools and equipment. I'll just need access to your kitchen including stove, oven, and basic appliances. If your event is at a venue without a full kitchen, we can discuss alternative arrangements."
    },
];

export default function FAQPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Everything you need to know about private chef services in Newport, RI
                    </p>
                </div>
            </div>

            {/* FAQ Section */}
            <section className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 mb-6"
                        >
                            <h2 className="text-xl font-bold text-gray-900 mb-3">
                                {faq.question}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="text-center mt-12">
                    <p className="text-lg text-gray-700 mb-6">
                        Still have questions?
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition duration-300"
                    >
                        Contact Chef Nikolai
                    </a>
                </div>
            </section>

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
        </div>
    );
}
