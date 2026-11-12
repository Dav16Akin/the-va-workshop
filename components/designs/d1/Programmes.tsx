"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { PHOTOS, PROGRAMMES, type Photo } from "@/lib/home-content";

const photoFor: Record<string, Photo> = {
  "executive-assistance": PHOTOS.manSuit,
  "ai-automation-for-vas": PHOTOS.manStudio,
  "legal-virtual-assistant": PHOTOS.office,
};

export default function Programmes() {
  const [active, setActive] = useState(PROGRAMMES[0].slug);
  const p = PROGRAMMES.find((x) => x.slug === active) ?? PROGRAMMES[0];

  return (
    <section id="programmes" className="scroll-mt-16 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[24px] bg-[var(--d1-panel)] text-white">
        <div className="px-6 pt-10 md:px-12 md:pt-14">
          <p className="d1-mono text-[13px] font-medium text-[var(--d1-lav)]">Programmes</p>
          <h2 className="d1-display mt-4 max-w-[20ch] text-[34px] md:text-[56px] md:tracking-[-1.6px]">
            Three tracks, one six-week format.
          </h2>

          <LayoutGroup id="d1-programmes">
            <div
              role="tablist"
              aria-label="Programmes"
              className="d1-noscroll -mx-6 mt-10 flex gap-1 overflow-x-auto px-6 md:mx-0 md:px-0"
            >
              {PROGRAMMES.map((x) => {
                const selected = x.slug === active;
                return (
                  <button
                    key={x.slug}
                    role="tab"
                    id={`d1-tab-${x.slug}`}
                    aria-selected={selected}
                    aria-controls="d1-programme-panel"
                    onClick={() => setActive(x.slug)}
                    className={`relative shrink-0 rounded-full px-5 py-2.5 text-[14px] font-medium tracking-[-0.02em] transition-colors duration-200 ${
                      selected ? "text-[var(--d1-ink)]" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="d1-tab-pill"
                        className="absolute inset-0 rounded-full bg-white"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{x.name}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </div>

        <div
          id="d1-programme-panel"
          role="tabpanel"
          aria-labelledby={`d1-tab-${p.slug}`}
          className="mt-8 grid gap-0 md:grid-cols-[1fr_1.1fr]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col justify-between gap-10 px-6 pb-10 md:px-12 md:pb-14"
            >
              <div>
                <p className="max-w-[44ch] text-[17px] leading-[1.4] tracking-[-0.02em] text-white/80">
                  {p.short}
                </p>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="d1-mono text-[11px] text-white/55">Skills you build</p>
                    <ul className="mt-3 space-y-2 text-[14px] text-white/90">
                      {p.skills.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="d1-mono text-[11px] text-white/55">Tools you use</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {p.tools.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-white/15 px-3 py-1 text-[13px] text-white/85"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href={`/programmes/${p.slug}`} className="d1-pill d1-pill-light">
                  View programme
                  <ArrowRight size={16} />
                </Link>
                {p.nextCohort && (
                  <span className="text-[14px] text-white/60">Next cohort: {p.nextCohort}</span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="relative min-h-[300px] md:min-h-[460px]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={photoFor[p.slug].src}
                  alt={photoFor[p.slug].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
