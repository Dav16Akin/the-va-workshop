"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Briefcase, Check, Lightning, Scales } from "@phosphor-icons/react";
import { COHORT, PHOTOS, PROGRAMMES, TRACK_META, TRACKS_INTRO } from "@/lib/content";
import type { Programme } from "@/lib/programmes";
import { cn } from "@/lib/utils";
import { CtaLink } from "./primitives";

const ICONS = [Briefcase, Lightning, Scales];

export function Tracks() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <h2 className="font-d4-sans text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.04em] text-balance text-white">
          {TRACKS_INTRO.title}
        </h2>
        <p className="mt-5 max-w-[400px] text-[17px] leading-relaxed text-d4-ash">{TRACKS_INTRO.sub}</p>
      </div>

      <div className="border-t border-white/10">
        {PROGRAMMES.map((p, i) => {
          const open = active === i;
          const Icon = ICONS[i] ?? Briefcase;
          const meta = TRACK_META[p.slug];
          const photo = meta ? PHOTOS[meta.photo] : null;
          return (
            <div key={p.slug} className="border-b border-white/10">
              <div className="flex items-center gap-3">
                <h3 className="min-w-0 flex-1">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`d4-track-${p.slug}`}
                    onClick={() => setActive(i)}
                    className="flex w-full items-center gap-4 rounded-xl py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d4-signal sm:py-7"
                  >
                    <span
                      className={cn(
                        "grid size-10 shrink-0 place-items-center rounded-xl border transition-all duration-300",
                        open
                          ? "border-d4-voltage bg-d4-voltage text-white shadow-d4-glow"
                          : "border-white/10 bg-white/[0.03] text-d4-fog",
                      )}
                    >
                      <Icon weight="regular" className="size-5" />
                    </span>
                    <span
                      className={cn(
                        "font-d4-sans text-[clamp(1.35rem,2.6vw,2rem)] font-medium tracking-[-0.03em] transition-colors",
                        open ? "text-white" : "text-d4-ash",
                      )}
                    >
                      {p.name}
                    </span>
                  </button>
                </h3>
                <Link
                  href={`/programmes/${p.slug}`}
                  aria-label={`${p.name} track details`}
                  className="group/lvl flex shrink-0 items-center gap-2 rounded-full py-2 pl-2 font-d4-mono text-[12px] text-d4-fog transition-colors hover:text-white"
                >
                  <span className="hidden lg:inline">{meta?.level}</span>
                  <span className="grid size-8 place-items-center rounded-full border border-white/10 transition-colors group-hover/lvl:border-d4-signal/60">
                    <ArrowUpRight weight="bold" className="size-3.5 transition-transform duration-200 group-hover/lvl:-translate-y-px group-hover/lvl:translate-x-px" />
                  </span>
                </Link>
              </div>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    id={`d4-track-${p.slug}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={reduce ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-6 pb-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                      <div className="flex flex-col">
                        {photo && (
                          <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] border border-white/10">
                            <Image
                              src={photo.src}
                              alt={photo.alt}
                              fill
                              sizes="(min-width:1024px) 320px, (min-width:768px) 40vw, 100vw"
                              className="object-cover"
                            />
                            <span className="absolute bottom-3 left-3 rounded-full bg-d4-midnight/80 px-2.5 py-1 font-d4-mono text-[11px] text-white lg:hidden">
                              {meta?.level}
                            </span>
                          </div>
                        )}
                        <p className="mt-5 text-[15.5px] leading-relaxed text-d4-ash">{p.short}</p>
                        <CtaLink href={`/programmes/${p.slug}`} variant="ghost" className="mt-6 w-fit">
                          View the {p.name} track
                        </CtaLink>
                      </div>
                      <TrackFacts programme={p} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TrackFacts({ programme }: { programme: Programme }) {
  return (
    <div className="rounded-[16px] border border-white/10 bg-d4-midnight p-5 sm:p-6">
      <dl className="grid grid-cols-2 gap-4 border-b border-white/[0.07] pb-5">
        <div>
          <dt className="text-[12.5px] text-d4-fog">Next cohort</dt>
          <dd className="mt-1 text-[15px] text-white">{programme.nextCohort ?? "Waitlist"}</dd>
        </div>
        <div>
          <dt className="text-[12.5px] text-d4-fog">Duration</dt>
          <dd className="mt-1 text-[15px] text-white">{COHORT.facts[0].value}</dd>
        </div>
      </dl>
      <h4 className="mt-5 text-[13px] font-medium text-d4-ash">Skills you&apos;ll learn</h4>
      <ul className="mt-3 space-y-2">
        {programme.skills.map((s) => (
          <li key={s} className="flex gap-2.5 text-[14.5px] leading-snug text-white">
            <Check weight="bold" className="mt-0.5 size-4 shrink-0 text-d4-signal" />
            {s}
          </li>
        ))}
      </ul>
      <h4 className="mt-6 text-[13px] font-medium text-d4-ash">Tools</h4>
      <ul className="mt-3 flex flex-wrap gap-2">
        {programme.tools.map((t) => (
          <li key={t} className="rounded-full border border-white/10 px-3 py-1 text-[13px] text-d4-ash">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
