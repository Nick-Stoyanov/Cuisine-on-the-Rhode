"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css"; // Swiper core styles
import "swiper/css/pagination"; // Optional: Pagination styles
import "swiper/css/navigation"; // Optional: Navigation styles

const BannerHero = () => {
    const slides = [
        {
            src: "/food-1.webp",
            alt: "Delicious pasta dish",
        },
        {
            src: "/food-2.webp",
            alt: "Fresh Thai cuisine",
        },
        {
            src: "/food-7.webp",
            alt: "Tacos for every occasion",
        },
    ];

    return (
        <div className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative h-full">
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                                Welcome to Cuisine on the Rhode
                            </h1>
                            <p className="text-xl md:text-2xl lg:text-3xl mt-4 max-w-2xl">
                                Bringing unique culinary experiences from around the world to your table
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Call to Action Buttons */}
            <div className="absolute bottom-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 z-10 w-full justify-center">
                <a
                    href="tel:401-855-8560"
                    className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-center"
                >
                    Call Us at 401-855-8560
                </a>
                <a
                    href="/contact"
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-center"
                >
                    Email Us
                </a>
            </div>
        </div>
    );
};

export default BannerHero;
