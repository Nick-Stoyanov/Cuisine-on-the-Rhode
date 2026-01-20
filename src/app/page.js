import Image from "next/image";
import BannerCarousel from "@/components/banners/CarouselBanner";
export default function Home() {
  return (
      <>
        <BannerCarousel />
      </>
  );
}

export const metadata = {
  title: "Chef Nikolai",
  description: "Private chef services based in Newport, Rhode Island",
};
