import BannerCarousel from "@/components/banners/CarouselBanner";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import ServiceAreas from "@/components/ServiceAreas";

export default function Home() {
  return (
      <>
        <BannerCarousel />
        <ServiceAreas />
        <TestimonialSection />
      </>
  );
}

export const metadata = {
  title: "Chef Nikolai - Private Chef Newport RI | Personal Chef Services Rhode Island",
  description: "Looking for a private chef in Newport or Rhode Island? Chef Nikolai offers personalized culinary experiences, intimate dinners, and event catering. Book your exclusive dining experience today.",
  keywords: "private chef Newport, private chef Rhode Island, personal chef Newport RI, chef for hire Newport, private dining Newport, Newport chef services, Rhode Island private chef, private event chef Newport",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Chef Nikolai - Private Chef Newport RI | Personal Chef Services Rhode Island",
    description: "Looking for a private chef in Newport or Rhode Island? Chef Nikolai offers personalized culinary experiences, intimate dinners, and event catering.",
    type: "website",
    url: 'https://chefnikolai.com',
  },
};
