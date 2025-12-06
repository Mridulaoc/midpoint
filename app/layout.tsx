"use client";

import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <nav className="sticky top-0 z-50 bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="midpoint logo"
                width={200}
                height={60}
              />
            </Link>
            <ul className="flex gap-8 items-center uppercase text-sm">
              <li>
                <Link
                  href="/portfolio"
                  className={`text-gray-800 font-medium relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C67A2B] after:transition-all after:duration-300 ${
                    isActive("/portfolio")
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }`}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`text-gray-800 font-medium relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C67A2B] after:transition-all after:duration-300 ${
                    isActive("/about")
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`text-gray-800 font-medium relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C67A2B] after:transition-all after:duration-300 ${
                    isActive("/contact")
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
