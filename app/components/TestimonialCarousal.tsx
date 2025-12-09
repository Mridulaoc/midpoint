"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      text: "Absolutely stunning work! The photos captured emotions I didn’t even realize at the moment.",
      author: "Priya R.",
    },
    {
      text: "Very professional, creative, and easy to work with. Highly recommend!",
      author: "Rahul V.",
    },
    {
      text: "The final edits were beyond my expectations. A true artist.",
      author: "Divya S.",
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500 }}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 }, // Mobile
        768: { slidesPerView: 1 }, // Tablet
        1024: { slidesPerView: 1 }, // Desktop
      }}
      className="max-w-2xl md:max-w-3xl mx-auto px-4"
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-black  p-8 md:p-10 rounded-md text-center shadow-lg">
            <p className="text-white! italic text-base md:text-lg! leading-relaxed">
              “{item.text}”
            </p>
            <p className="text-white! mt-4 font-medium text-lg! md:text-xl">
              — {item.author}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
