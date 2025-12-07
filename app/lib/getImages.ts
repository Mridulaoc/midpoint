import cloudinary from "./cloudinary";
import { CloudinaryImage, CloudinaryResource } from "@/types/cloudinary";

export async function getImages(
  folderPath: string
): Promise<CloudinaryImage[]> {
  try {
    const result = await cloudinary.search
      .expression(`folder:${folderPath}`)
      .sort_by("public_id", "desc")
      .max_results(50)
      .execute();

    return (result.resources as CloudinaryResource[]).map((file) => ({
      id: file.asset_id,
      url: file.secure_url.replace("/upload/", "/upload/f_auto,q_auto/"),
      width: file.width,
      height: file.height,
      title: file.context?.custom?.title ?? null,
    }));
  } catch (err) {
    console.error("Cloudinary Error:", err);
    return [];
  }
}
