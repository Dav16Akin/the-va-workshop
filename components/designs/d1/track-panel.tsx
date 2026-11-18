"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRightIcon, CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { PROGRAMMES, TRACK_META } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Orb, type OrbTone } from "./primitives";

const TAB_TONES: OrbTone[] = ["cobalt", "azure", "navy"];
const ORB_CYCLE: OrbTone[][] = [
  ["mist", "azure", "cobalt", "navy", "ice"],
  ["ice", "navy", "azure", "cobalt", "mist"],
  ["mist", "cobalt", "navy", "azure", "ice"],
];

function useWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(1100);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, width] as const;
}

export function TrackPanel() {
  const [tab, setTab] = useState(0);
  const programme = PROGRAMMES[tab];
  const meta = TRACK_META[programme.slug];

  return (
    <div className="rounded-[24px] border border-d1-stone bg-d1-taupe p-1.5">
      {/* Tab switcher */}
      <div
        role="tablist"
        aria-label="Training tracks"
        className="d1-noscroll flex gap-1 overflow-x-auto"
      >
        {PROGRAMMES.map((p, i) => (
          <button
            key={p.slug}
            role="tab"
            type="button"
            id={`d1-track-tab-${p.slug}`}
            aria-selected={tab === i}
            aria-controls="d1-track-panel"
            onClick={() => setTab(i)}
            className={cn(
              "relative flex min-w-max flex-1 items-center justify-center gap-2.5 rounded-[16px] px-5 py-3 text-[15px] transition-colors sm:text-base",
              tab === i ? "text-d1-ink" : "text-d1-graphite hover:text-d1-ink",
            )}
          >
            {tab === i ? (
              <motion.span
                layoutId="d1-track-tab"
                className="absolute inset-0 rounded-[16px] bg-white shadow-d1-whisper"
                transition={{ type: "spring", stiffness: 380, damping: 34 }}
              />
            ) : null}
            <Orb tone={TAB_TONES[i]} className="relative size-3" />
            <span className="relative">{p.name}</span>
          </button>
        ))}
      </div>

      {/* Panel */}
      <div
        id="d1-track-panel"
        role="tabpanel"
        aria-labelledby={`d1-track-tab-${programme.slug}`}
        className="mt-1.5 overflow-hidden rounded-[20px] border border-d1-stone bg-d1-taupe"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={programme.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <SkillCarousel skills={programme.skills} tones={ORB_CYCLE[tab]} href={`/programmes/${programme.slug}`} />
          </motion.div>
        </AnimatePresence>

        {/* Bottom rail */}
        <div className="flex flex-col gap-5 border-t border-d1-stone bg-d1-canvas/60 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0 lg:max-w-[46%]">
            <p className="font-d1-mono text-[12px] tracking-[0.08em] text-d1-smoke uppercase">{meta.level}</p>
            <p className="mt-1.5 text-[15px] leading-[1.55] text-d1-graphite">{programme.short}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 lg:justify-end">
            {programme.tools.map((t) => (
              <span key={t} className="rounded-full border border-d1-stone bg-white px-3 py-1.5 text-[13px] text-d1-graphite">
                {t}
              </span>
            ))}
            <Link
              href={`/programmes/${programme.slug}`}
              className="ml-0 inline-flex h-10 items-center gap-1.5 rounded-full bg-d1-ink px-4.5 text-sm text-white transition-colors hover:bg-d1-graphite lg:ml-3"
            >
              Explore the track
              <ArrowUpRightIcon size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCarousel({ skills, tones, href }: { skills: string[]; tones: OrbTone[]; href: string }) {
  const n = skills.length;
  const half = Math.floor(n / 2);
  const [active, setActive] = useState(half);
  const [ref, width] = useWidth<HTMLDivElement>();
  const router = useRouter();

  const mobile = width < 640;
  const size = mobile ? 176 : 256;
  const step = mobile ? width * 0.42 : Math.min(width * 0.27, 320);

  const go = (d: number) => setActive((a) => (a + d + n) % n);

  return (
    <div className="px-2 pt-10 pb-6 sm:pt-14 sm:pb-8">
      <div ref={ref} className="relative mx-auto" style={{ height: size + 8 }}>
        {skills.map((skill, i) => {
          const pos = ((i - active + n + half) % n) - half;
          const abs = Math.abs(pos);
          const scale = abs === 0 ? 1 : abs === 1 ? 0.78 : 0.58;
          const x = Math.sign(pos) * (abs === 0 ? 0 : abs === 1 ? step : step * 1.72);
          return (
            <motion.button
              key={skill}
              type="button"
              aria-label={abs === 0 ? `Explore the track: ${skill}` : `Show ${skill}`}
              onClick={() => (abs === 0 ? router.push(href) : setActive(i))}
              className="absolute top-1 left-1/2 cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-d1-ink"
              style={{ width: size, height: size, marginLeft: -size / 2, zIndex: 10 - abs }}
              initial={false}
              animate={{ x, scale, opacity: abs === 2 ? 0.75 : 1 }}
              transition={{ type: "spring", stiffness: 140, damping: 22 }}
            >
              <Orb tone={tones[i % tones.length]} className="size-full">
                <AnimatePresence>
                  {abs === 0 ? (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.6 }}
                      className="grid size-12 place-items-center rounded-full bg-white text-d1-ink shadow-d1-whisper"
                    >
                      <ArrowUpRightIcon size={18} weight="bold" />
                    </motion.span>
                  ) : null}
                </AnimatePresence>
              </Orb>
            </motion.button>
          );
        })}
      </div>

      {/* Captions */}
      <div className="mx-auto mt-8 flex max-w-[640px] items-start justify-between gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous skill"
          className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full text-d1-ink transition-colors hover:bg-white hover:shadow-d1-whisper"
        >
          <CaretLeftIcon size={16} />
        </button>
        <div className="min-h-[52px] text-center" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={skills[active]}
              initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
              transition={{ duration: 0.25 }}
            >
              <Link href={href} className="inline-flex items-center gap-1.5 text-[17px] text-d1-ink hover:underline">
                {skills[active]}
                <ArrowUpRightIcon size={14} />
              </Link>
              <p className="mt-1 font-d1-mono text-[12px] tracking-[0.08em] text-d1-ash uppercase">
                Skill {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next skill"
          className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full text-d1-ink transition-colors hover:bg-white hover:shadow-d1-whisper"
        >
          <CaretRightIcon size={16} />
        </button>
      </div>
    </div>
  );
}
