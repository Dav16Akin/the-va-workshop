import Image from "next/image";
import { Play } from "@phosphor-icons/react/dist/ssr";
import { PHOTOS, VIDEO } from "@/lib/content";
import { card, container } from "./primitives";

export function Video() {
  return (
    <section id="video" className="py-12 sm:py-16">
      <div className={container}>
        <div className={`${card} grid overflow-hidden lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]`}>
          <div className="flex flex-col justify-between gap-10 p-7 sm:p-10">
            <h2 className="font-d4-sans text-[clamp(2.2rem,4.6vw,3.6rem)] font-medium leading-[1] tracking-[-0.045em] text-white">
              {VIDEO.title}
            </h2>
            <p className="max-w-[340px] text-[16px] leading-relaxed text-d4-ash">{VIDEO.body}</p>
          </div>
          <div className="relative aspect-[16/10] min-h-[280px] lg:aspect-auto lg:min-h-[480px]">
            <Image
              src={VIDEO.poster}
              alt={PHOTOS.videoPoster.alt}
              fill
              sizes="(min-width:1024px) 720px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-d4-midnight/40" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="flex flex-col items-center gap-4">
                <span aria-hidden className="grid size-20 place-items-center rounded-full bg-d4-voltage text-white sm:size-24">
                  <Play weight="fill" className="size-8" />
                </span>
                <span className="rounded-full border border-white/15 bg-d4-midnight/80 px-3.5 py-1.5 font-d4-mono text-[12px] uppercase tracking-[0.14em] text-white">
                  {VIDEO.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
