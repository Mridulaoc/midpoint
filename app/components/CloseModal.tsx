"use client";

import { useRouter } from "next/navigation";

export default function CloseModal() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition-colors z-10 cursor-pointer"
      aria-label="Close modal"
    >
      ✕
    </button>
  );
}
