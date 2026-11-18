import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { PHOTOS, PROGRAMMES, TRACK_META, TRACKS_INTRO } from "@/lib/content";
import { BlurFade } from "@/components/ui/blur-fade";
import { Band, SectionHead } from "./primitives";

export function D1Tracks() {
  return (
    <Band id="tracks" tone="taupe" innerClassName="py-24 sm:py-32">
      <SectionHead eyebrow="Training tracks" title={TRACKS_INTRO.title} sub={TRACKS_INTRO.sub} />

      <div className="mt-14 grid gap-3 md:grid-cols-3">
        {PROGRAMMES.map((p, i) => {
          const meta = TRACK_META[p.slug];
          const photo = PHOTOS[meta.photo];
          return (
            <BlurFade inView delay={0.08 * i} key={p.slug}>
              <Link
                href={`/programmes/${p.slug}`}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[24px] bg-d1-ink p-6 text-white sm:p-7"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/0" />
                <span className="absolute top-5 left-5 rounded-full bg-white px-3 py-1.5 text-[12px] text-d1-ink">
                  {p.nextCohort ? `Next cohort · ${p.nextCohort}` : "Waitlist open"}
                </span>
                <span className="absolute top-5 right-5 grid size-10 place-items-center rounded-full bg-white/15 backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-d1-ink">
                  <ArrowUpRightIcon size={16} />
                </span>
                <div className="relative">
                  <p className="font-d1-mono text-[11px] tracking-[0.08em] text-white/70 uppercase">{meta.level}</p>
                  <h3 className="mt-2 font-d1-display text-[26px] font-light tracking-[-0.02em]">{p.name}</h3>
                  <p className="mt-2 text-[15px] leading-[1.5] text-white/80">{p.short}</p>
                </div>
              </Link>
            </BlurFade>
          );
        })}
      </div>
    </Band>
  );
}
