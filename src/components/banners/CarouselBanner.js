"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
    {
        src: "/chef-nikolai-newport-ri.webp",
        alt: "Chef Nikolai preparing a private dining experience in Newport Rhode Island",
    },
    {
        src: "/newport-private-dining-entree.webp",
        alt: "Private chef plated entree in Newport Rhode Island",
    },
    {
        src: "/private-chef-newport-seafood.webp",
        alt: "Seafood dish prepared by a private chef in Newport Rhode Island",
    },
    {
        src: "/newport-ri-private-chef-dessert.webp",
        alt: "Dessert from a private chef dining experience in Newport Rhode Island",
    },
];

export default function CarouselBanner() {
    return (
        <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                slidesPerView={1}
                loop
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.src} className="relative h-full w-full">
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            priority
                            className="object-cover"
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-black/45" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
                <div className="mx-auto max-w-4xl text-center text-white">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-300 md:text-base">
                        Private Dining • Events • Seasonal Menus
                    </p>

                    <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                        Private Chef in Newport, Rhode Island
                    </h1>

                    <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-100 md:text-xl">
                        Seasonal, personalized dining experiences for intimate dinners,
                        celebrations, vacation stays, and special events across Newport and
                        Southern New England.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-orange-700"
                        >
                            Inquire Now
                        </Link>

                        <Link
                            href="/menus"
                            className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/80 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                            View Sample Menus
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}