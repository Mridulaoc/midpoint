import Image from "next/image";
import { getImages } from "@/app/lib/getImages";
import Link from "next/link";
import CloseModal from "@/app/components/CloseModal";

export default async function ImageModal({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { category, id } = await params;

  const images = await getImages(`portfolio/${category}`);
  const img = images.find((i) => i.id === id);

  console.log("Modal - Total images found:", images.length);
  console.log(
    "Modal - Image IDs:",
    images.map((i) => i.id)
  );
  console.log("Category is :", category);

  if (!img) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <CloseModal />

      <div className="relative w-full max-w-4xl h-auto">
        <Image
          src={img.url}
          alt={img.title || "Portfolio Image"}
          width={img.width}
          height={img.height}
          className="rounded-lg"
        />

        {img.title && (
          <p className="text-center text-white mt-4 tracking-wide text-lg">
            {img.title}
          </p>
        )}
      </div>
    </div>
  );
}
