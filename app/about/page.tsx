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
            Meet Sidharth
          </h3>

          <p className="text-gray-700 leading-relaxed tracking-normal mb-4 text-justify px-6">
            “Moments, though fleeting, can be captured” is probably his motto.
            What his eyes can see and soul can feel, his camera immortalises.
          </p>

          <p className="text-gray-700 leading-relaxed tracking-normal mb-4 text-justify px-6">
            Sidharth’s passion doesn’t just extend to photography but to life
            itself. What he captures aren’t mere photographs but stories and
            experiences. Every single conversation and moment he has spent with
            his muse can be seen in his works. After all, what is a photograph
            if not the timelessness of a lifetime captured!
          </p>

          <p className="text-gray-700 leading-relaxed tracking-normal text-justify px-6">
            He might be based in Bangalore but he carries the heritage of places
            far travelled in his frames.
          </p>
        </div>

        {/* Right Column - Photo */}
        <div className="flex justify-center md:justify-end items-stretch md:col-span-1">
          <div className="relative w-full h-full  min-h-[450px]  overflow-hidden ">
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
        <h3 className="  text-center mb-10">What Clients Are Saying</h3>
        <hr className="w-20 h-0.5 bg-[#C67A2B] border-0 mx-auto mt-4" />
        <TestimonialsCarousel />
      </section>
    </main>
  );
}
