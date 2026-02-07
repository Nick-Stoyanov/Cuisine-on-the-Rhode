import BannerCarousel from "@/components/banners/CarouselBanner";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
export default function Home() {
  return (
      <>
        <BannerCarousel />
        <TestimonialSection />
      </>
  );
}

export const metadata = {
  title: "Chef Nikolai",
  description: "Private chef services based in Newport, Rhode Island",
};
