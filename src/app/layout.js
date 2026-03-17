import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Chef Nikolai - Private Chef in Newport, Rhode Island",
    description: "Private chef services in Newport and Rhode Island. Personalized culinary experiences for intimate dinners, events, and special occasions.",
    keywords: "private chef Newport RI, personal chef Rhode Island, private chef services Newport, chef for hire Newport, private dining Rhode Island, Newport private chef",
    metadataBase: new URL('https://chefnikolai.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "Chef Nikolai - Private Chef in Newport, Rhode Island",
        description: "Private chef services in Newport and Rhode Island. Personalized culinary experiences for intimate dinners, events, and special occasions.",
        type: "website",
        url: 'https://chefnikolai.com',
        siteName: 'Chef Nikolai',
    },
};

export default function RootLayout({ children }) {
    const businessJsonLd = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Chef Nikolai - Private Chef Services",
        "image": "https://chefnikolai.com/chef-nikolai-newport-ri.webp",
        "servesCuisine": ["Mediterranean", "French", "Italian", "Contemporary"],
        "priceRange": "$$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Newport",
            "addressRegion": "RI",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "41.4901",
            "longitude": "-71.3128"
        },
        "url": "https://chefnikolai.com",
        "telephone": "+1-401-855-8560",
        "description": "Private chef services in Newport and Rhode Island. Personalized culinary experiences for intimate dinners, events, and special occasions.",
        "areaServed": [
            {
                "@type": "City",
                "name": "Newport",
                "@id": "https://en.wikipedia.org/wiki/Newport,_Rhode_Island"
            },
            {
                "@type": "State",
                "name": "Rhode Island"
            }
        ]
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://chefnikolai.com"
            }
        ]
    };

    return (
        <html lang="en">
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}
