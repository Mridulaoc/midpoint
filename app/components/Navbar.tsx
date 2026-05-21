"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor">
          <div className="relative w-[150px] h-10 md:w-[200px] md:h-[60px]">
            <Image
              src="/logo.jpeg"
              alt="midpoint logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 150px, 200px"
              priority={true}
              quality={80}
            />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-black transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-black transition-all duration-300 origin-center ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-black transition-all duration-300 origin-center  ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center uppercase text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-black font-medium relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C67A2B] after:transition-all after:duration-500
                ${
                  isActive(link.href)
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col gap-6 px-6 pb-6 text-sm uppercase tracking-wide">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block w-fit text-black text-xs relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C67A2B] after:transition-all after:duration-500
                ${
                  isActive(link.href)
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
