import Image from "next/image";
import { PHOTOS } from "@/lib/home-content";
import Reveal from "./Reveal";

// The MD is photography-free; the user mandated photos. They are graded into a navy/blue
// duotone so they read as part of the midnight plane rather than as stock imagery.
const FRAMES = [
  { photo: PHOTOS.heroWoman, className: "col-span-2 aspect-[4/5] md:col-span-5 md:row-span-2 md:aspect-auto" },
  { photo: PHOTOS.manStudio, className: "aspect-square md:col-span-4 md:aspect-[4/3]" },
  { photo: PHOTOS.floorLaptop, className: "aspect-square md:col-span-3 md:row-span-2 md:aspect-auto" },
  { photo: PHOTOS.manSuit, className: "col-span-2 aspect-[16/9] md:col-span-4 md:aspect-[4/3]" },
];

export default function PhotoBand() {
  return (
    <section className="bg-[var(--d5-deep)] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="d5-thin-xl mx-auto max-w-[30ch] text-center text-[var(--d5-text)]">
            Built for VAs who want to work with founders, executives and legal teams, from wherever they are.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-12 md:grid-rows-2 md:gap-4">
          {FRAMES.map((f, i) => (
            <Reveal key={f.photo.src} delay={i * 0.08} className={f.className}>
              <div className="d5-duotone h-full min-h-[160px] w-full">
                <Image
                  src={f.photo.src}
                  alt={f.photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 480px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
