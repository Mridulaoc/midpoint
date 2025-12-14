import Image from "next/image";
import { getImages } from "@/app/lib/getImages";
import Link from "next/link";

export default async function FullImagePage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { category, id } = await params;

  const images = await getImages(`portfolio/${category}`);
  const img = images.find((i) => i.id === id);
  console.log("Full Page - Total images found:", images.length);
  console.log(
    "Full Page - Image IDs:",
    images.map((i) => i.id)
  );

  if (!img) return null;

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-10">
      <Link
        href={`/portfolio/${category}`}
        className="text-white text-2xl absolute top-6 left-6 hover:text-gray-300 transition-colors"
      >
        ← Back
      </Link>

      <Image
        src={img.url}
        alt={img.title || "Portfolio Image"}
        width={img.width}
        height={img.height}
        className="rounded-lg"
      />
    </main>
  );
}
