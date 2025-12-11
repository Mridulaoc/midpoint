"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      text: "Sidharth is very professional, organized and understood the brief to deliver it efficiently. He was able to help us with our corporate requirement and delivered great quality pictures that were appreciated both by internal teams and our clients at the conference. I would definitely recommend him for any creative services.",
      author: "Ranjana Pillai.",
    },
    {
      text: "It’s always a pleasure to work with Sidhu.. he makes amazing frames and has this magic to make the client go wow when he delivers the end product. His experience working with national and international clients makes him one of the best in the industry.",
      author: "Jithin Babu.",
    },
    {
      text: "Siddharth has done a couple of projects for me. I must say he is fantastic at his job. He spends time with you before the start of the project to understand your requirements, perspective, shares his inputs and rest what you see as a final product is just MAGIC!! He has an eye for detail and his OCD will not let him compromise on any frame. The final product will that he shares has always exceeded my expectations. I highly recommend him!!!.",
      author: "Rajeswari Jayaraman.",
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
