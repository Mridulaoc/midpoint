import Image from "next/image";
import { getImages } from "../lib/getImages";
import TestimonialsCarousel from "../components/TestimonialCarousal";

export default async function AboutPage() {
  const profileImage = (await getImages("profile"))[0];
  return (
    <main className="bg-black text-white">
      {/* Headline */}
      <section className="py-20 text-center">
        <h2 className="text-5xl font-semibold tracking-wide">About</h2>
        <hr className="w-20 h-0.5 bg-[#C67A2B] border-0 mx-auto mt-4" />
      </section>

      {/* Two Columns */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3  px-6 pb-24">
        {/* Left Column - Text */}
        <div className="bg-white  md:px-12 py-16 md:col-span-2 text-justify">
          <h3 className="text-3xl md:text-4xl font-semibold text-center text-black tracking-wide mb-6">
            Meet the Photographer
          </h3>

          <p className="text-gray-700 leading-relaxed tracking-normal mb-4 text-justify px-6">
            With a passion for capturing raw emotions and authentic stories, I
            have been documenting life’s fleeting moments through my lens for
            over 7+ years. My work blends creativity, minimalism, and natural
            aesthetics to create images that feel timeless.
          </p>

          <p className="text-gray-700 leading-relaxed tracking-normal mb-4 text-justify px-6">
            Whether it’s portraits, nature, lifestyle, or storytelling imagery,
            my goal is to create photographs that make you feel something — a
            memory, a connection, a moment in time.
          </p>

          <p className="text-gray-700 leading-relaxed tracking-normal text-justify px-6">
            Based in Bangalore, available for freelance and commissioned work.
          </p>
        </div>

        {/* Right Column - Photo */}
        <div className="flex justify-center md:justify-end items-center md:col-span-1">
          <div className="relative w-full  h-[450px]  overflow-hidden ">
            <Image
              src={profileImage.url}
              alt="Photographer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black py-20">
        <h2 className="text-4xl font-semibold text-center mb-10">
          What Clients Are Saying
        </h2>
        <hr className="w-20 h-0.5 bg-[#C67A2B] border-0 mx-auto mt-4" />
        <TestimonialsCarousel />
      </section>
    </main>
  );
}
