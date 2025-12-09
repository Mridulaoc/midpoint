import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Form from "../components/Form";

export default function ContactPage() {
  return (
    <main className="bg-black text-white pb-24">
      {/* Headline Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-semibold tracking-wide">Get In Touch</h1>
        <hr className="w-20 h-0.5 bg-[#C67A2B] border-0 mx-auto mt-4" />
      </section>

      {/* Contact Form + Contact details */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 px-6 pt-32 pb-16 bg-white ">
        {/* Contact details  */}
        <div className="bg-white text-justify md:px-8  flex flex-col gap-2   text-black">
          <h5 className="text-lg! text-gray-700 leading-relaxed tracking-normal mb-5 ">
            For inquiries fill out the form and someone will get back to you.
          </h5>
          <p className="md:text-sm!">108, Syndicate Bank Colony Main Rd</p>
          <p className="md:text-sm!">Syndicate Bank Colony, Omkar Nagar, </p>
          <p className="md:text-sm!">Bengaluru, Karnataka 560076</p>
          <p className="md:text-sm! mt-2">sidart.connect@gmail.com</p>
          {/* Social Icons */}
          <div className="flex gap-4 sm:gap-5 text-lg sm:text-xl md:text-2xl text-black mt-10">
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-[#C67A2B] transition"
            >
              <FaInstagram />
            </Link>

            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-[#C67A2B] transition"
            >
              <FaFacebook />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-[#C67A2B] transition"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
        <Form />
      </section>
    </main>
  );
}
