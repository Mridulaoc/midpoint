export const revalidate = 0;
import Image from "next/image";
import { getImages } from "./lib/getImages";

export default async function Home() {
  const hero = (await getImages("hero"))[0];

  return (
    <section className="relative h-svh w-full">
      <Image
        src={hero.url}
        alt="Hero"
        fill
        priority={true}
        className="object-cover object-center"
      />
    </section>
  );
}
