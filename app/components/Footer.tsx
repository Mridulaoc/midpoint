"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 ">
      <div className="max-w-7xl mx-auto px-6 py-5">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-[120px] h-10 sm:w-[150px] sm:h-[50px] md:w-[200px] md:h-[60px]">
              <Image
                src="/logo.png"
                alt="midpoint logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav
            className="flex flex-col items-center gap-4 text-xs 
  sm:text-sm sm:flex-row sm:flex-wrap sm:gap-6 uppercase tracking-wide"
          >
            {[
              { label: "Home", href: "/" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-medium text-black hover:text-[#C67A2B] transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 sm:gap-5 text-lg sm:text-xl md:text-2xl text-black">
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
              <FaFacebookF />
            </Link>

            <Link
              href="https://wa.me/918000000000"
              target="_blank"
              className="hover:text-[#C67A2B] transition"
            >
              <FaWhatsapp />
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

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Copyright */}
        <small className="text-[10px] sm:text-xs text-center text-black tracking-wide block">
          © {new Date().getFullYear()} MidPoint Art — All Rights Reserved.
        </small>
      </div>
    </footer>
  );
}
