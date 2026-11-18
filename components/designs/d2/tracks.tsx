import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { PHOTOS, PROGRAMMES, TRACKS_INTRO, TRACK_META } from "@/lib/content";
import { Chip, Container, SectionHead } from "./primitives";
import { Reveal } from "./reveal";

export function Tracks() {
  return (
    <section id="tracks" className="pt-24 sm:pt-32">
      <Container>
        <Reveal>
          <SectionHead
            chip="Training tracks"
            title={TRACKS_INTRO.title}
            sub={TRACKS_INTRO.sub}
            cta={{ label: "Compare programmes", href: "/services#training" }}
          />
        </Reveal>

        <div className="mt-12 rounded-[32px] bg-d2-paper p-2 sm:mt-14 sm:rounded-d2-tray sm:p-3">
          <ul className="grid gap-2 sm:gap-3 md:grid-cols-3">
            {PROGRAMMES.map((p, i) => {
              const meta = TRACK_META[p.slug];
              const photo = PHOTOS[meta.photo];
              return (
                <li key={p.slug}>
                  <Reveal delay={i * 0.07} className="h-full">
                    <Link
                      href={`/programmes/${p.slug}`}
                      className="group flex h-full flex-col rounded-[28px] border border-d2-cloud bg-d2-snow p-2 transition-colors hover:border-d2-mist sm:rounded-d2-card"
                    >
                      <div className="relative aspect-[16/11] overflow-hidden rounded-[22px] sm:rounded-[28px]">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                        <span className="d2-glass absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full py-1.5 pr-3 pl-1.5 text-[12.5px] font-medium text-d2-obsidian">
                          <span className="grid size-5 place-items-center rounded-full bg-d2-obsidian text-[10px] text-white">
                            {String(i + 1)}
                          </span>
                          {meta.level}
                        </span>
                        {p.nextCohort && (
                          <Chip tone="electric" className="absolute top-3 right-3">
                            {p.nextCohort}
                          </Chip>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col px-4 pt-5 pb-5 sm:px-5">
                        <p className="text-[13px] text-d2-fog tabular-nums">0{i + 1}</p>
                        <div className="mt-1 flex items-start justify-between gap-3">
                          <h3 className="text-[23px] leading-tight font-semibold tracking-[-0.03em] text-d2-obsidian">
                            {p.name}
                          </h3>
                          <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-d2-cloud text-d2-obsidian transition-colors group-hover:border-d2-obsidian group-hover:bg-d2-obsidian group-hover:text-white">
                            <ArrowUpRight weight="bold" className="size-3.5" />
                          </span>
                        </div>
                        <p className="mt-2 text-[15px] leading-[1.5] text-d2-steel">{p.short}</p>
                        <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                          {p.tools.slice(0, 3).map((t) => (
                            <li key={t}>
                              <Chip>{t}</Chip>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
