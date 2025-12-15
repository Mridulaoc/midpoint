import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";
import { getImages } from "./lib/getImages";
import localFont from "next/font/local";

const headlineFont = localFont({
  src: [
    {
      path: "./fonts/UniNeue-Trial-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default async function Home() {
  const hero = (await getImages("hero"))[0];

  return (
    <section className="relative h-[80vh] md:h-screen w-full">
      {/* Hero Image */}
      <Image
        src={hero.url}
        alt="Hero"
        fill
        priority={true}
        className="object-cover md:object-center object-[50%_30%]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1
          className={`text-4xl md:text-6xl font-semibold ${headlineFont.className}`}
        >
          mid<span className="text-[#C67A2B]">.</span>point
        </h1>

        <hr className="w-32 md:w-40 h-0.5 bg-[#C67A2B] border-0 mt-3" />

        <h5 className="text-sm! md:text-base tracking-widest uppercase mt-4">
          capturing timeless beauty
        </h5>

        <Link href="/portfolio">
          <Button className="mt-6">View Portfolio</Button>
        </Link>
      </div>
    </section>
  );
}
