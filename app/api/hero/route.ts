import cloudinary from "../../lib/cloudinary";

export async function GET() {
  try {
    const result = await cloudinary.search
      .expression("folder:hero")
      .max_results(1)
      .execute();
    return Response.json({ success: true, result });
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return Response.json({ success: false });
  }
}
