export const revalidate = 0;
import Link from "next/link";
import Image from "next/image";
import { getImages } from "../lib/getImages";

export default async function PortfolioPage() {
  const categoryImages = await getImages("portfolio");

  return (
    <main className="bg-black text-white py-20">
      <h2 className="text-5xl text-center font-semibold tracking-wide">
        Portfolio
      </h2>
      <hr className="w-20 h-0.5 bg-[#C67A2B] border-0 mx-auto mt-4 mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-32 md:mt-20  max-w-6xl mx-auto px-6">
        {categoryImages.map((cat) => (
          <Link
            key={cat.id}
            href={`/portfolio/${cat.title?.toLowerCase() || "untitled"}`}
          >
            <div className="group cursor-pointer">
              {cat.url && (
                <div className="relative w-full h-[500px]  overflow-hidden  group ">
                  <Image
                    src={cat.url}
                    alt={cat.title || "Portfolio Category"}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 md:bg-black/0 md:group-hover:bg-black/60 transition duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500">
                    <h3 className="text-white font-semibold!  tracking-wide ">
                      {cat.title}
                    </h3>
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
