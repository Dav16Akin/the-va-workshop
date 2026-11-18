import Image from "next/image";
import { PATHS, PATHS_INTRO, PHOTOS } from "@/lib/content";
import { BlurFade } from "@/components/ui/blur-fade";
import { Pill, SectionHead } from "./primitives";

const ITEMS = [
  { ...PATHS.talent, photo: PHOTOS.talentPool, variant: "ink" as const },
  { ...PATHS.hire, photo: PHOTOS.hireVa, variant: "outline" as const },
];

export function D1Paths() {
  return (
    <section id="paths" className="border-t border-d1-stone bg-d1-canvas">
      <div className="mx-auto max-w-[1180px] border-d1-stone px-5 pt-24 pb-14 sm:px-8 sm:pt-32 xl:border-x">
        <SectionHead eyebrow="Talent pool & hiring" title={PATHS_INTRO.title} sub={PATHS_INTRO.sub} />
      </div>
      <div className="border-t border-d1-stone">
        <div className="mx-auto grid max-w-[1180px] border-d1-stone md:grid-cols-2 md:divide-x md:divide-d1-stone xl:border-x">
          {ITEMS.map((item, i) => (
            <BlurFade
              inView
              delay={i * 0.08}
              key={item.title}
              className="flex flex-col border-b border-d1-stone px-5 py-10 sm:px-8 md:border-b-0 md:py-12"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-d1-taupe">
                <Image
                  src={item.photo.src}
                  alt={item.photo.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1.5 text-[12px] text-d1-ink">
                  {item.label}
                </span>
              </div>
              <h3 className="mt-8 font-d1-display text-[28px] font-light tracking-[-0.02em] sm:text-[32px]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[48ch] text-[16px] leading-[1.6] text-d1-smoke">{item.body}</p>
              <ol className="mt-6 divide-y divide-d1-stone border-y border-d1-stone">
                {item.steps.map((s, n) => (
                  <li key={s} className="flex items-baseline gap-4 py-3.5 text-[15px] text-d1-ink">
                    <span className="font-d1-mono text-[12px] text-d1-ash">{String(n + 1).padStart(2, "0")}</span>
                    {s}
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <Pill href={item.cta.href} variant={item.variant}>
                  {item.cta.label}
                </Pill>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
