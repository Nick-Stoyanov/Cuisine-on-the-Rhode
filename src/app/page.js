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
  title: "Cuisine on the Rhode",
  description: "Private cooking and chef services based in Newport, Rhode Island",
};
