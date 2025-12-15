import Image from "next/image";
import { getImages } from "../../lib/getImages";
import Link from "next/link";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const images = await getImages(`portfolio/${category}`);

  return (
    <main className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight capitalize">
          {category}
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#C67A2B] to-amber-600 mx-auto rounded-full"></div>
      </div>

      {/* Masonry Grid - 2 Columns */}
      <div className="max-w-6xl mx-auto">
        <div className="columns-1 lg:columns-2 gap-8 space-y-8">
          {images.map((img, index) => (
            <div
              key={img.id}
              className="break-inside-avoid opacity-0 animate-fadeInUp"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <Link
                href={`/portfolio/${category}/photo/${img.id}`}
                scroll={false}
              >
                <div className="group relative overflow-hidden  bg-zinc-900 shadow-xl hover:shadow-2xl hover:shadow-[#C67A2B]/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-1">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={img.url}
                      alt={img.title || "Portfolio image"}
                      width={img.width}
                      height={img.height}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={95}
                      priority={index < 4} // Prioritize first 4 images
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {/* Content on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {img.title && (
                          <h3 className="text-white text-2xl font-semibold! mb-4 tracking-wide">
                            {img.title}
                          </h3>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Subtle border effect on hover */}
                  <div className="absolute inset-0  border-2 border-transparent group-hover:border-[#C67A2B]/40 transition-colors duration-500 pointer-events-none"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {images.length === 0 && (
        <div className="text-center py-20">
          <div className="text-gray-500 text-xl">
            No images found in this category
          </div>
        </div>
      )}
    </main>
  );
}
