import Image from "next/image";
import { Play } from "@phosphor-icons/react/dist/ssr";
import { PHOTOS, VIDEO } from "@/lib/content";
import { Reveal } from "./motion-bits";
import { container } from "./primitives";

export function Video() {
  return (
    <section id="video" className="py-12 sm:py-16">
      <div className={container}>
        <Reveal>
          <div className="grid overflow-hidden rounded-[32px] border border-white/[0.08] bg-black lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
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
              <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,10,11,0.15),rgba(10,10,11,0.65))]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="flex flex-col items-center gap-4">
                  <span aria-hidden className="grid size-20 place-items-center rounded-[22px] border border-white/20 bg-d4-voltage text-white shadow-[0_0_60px_rgba(47,107,255,0.6)] sm:size-24">
                    <Play weight="fill" className="size-8" />
                  </span>
                  <span className="rounded-full border border-white/15 bg-d4-midnight/75 px-3.5 py-1.5 font-d4-mono text-[12px] uppercase tracking-[0.14em] text-white backdrop-blur">
                    {VIDEO.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
