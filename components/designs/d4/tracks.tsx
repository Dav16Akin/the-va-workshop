"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Briefcase, Check, Copy, Lightning, Scales } from "@phosphor-icons/react";
import { COHORT, PHOTOS, PROGRAMMES, TRACK_META, TRACKS_INTRO } from "@/lib/content";
import type { Programme } from "@/lib/programmes";
import { cn } from "@/lib/utils";

const ICONS = [Briefcase, Lightning, Scales];

type Tok = { t: string; c?: "key" | "str" | "punc" | "com" };

function configLines(p: Programme): Tok[][] {
  const meta = TRACK_META[p.slug];
  const list = (key: string, items: string[]): Tok[][] => [
    [
      { t: key, c: "key" },
      { t: ": [", c: "punc" },
    ],
    ...items.map((s, i) => [
      { t: "  " },
      { t: `"${s}"`, c: "str" as const },
      { t: i < items.length - 1 ? "," : "", c: "punc" as const },
    ]),
    [{ t: "]", c: "punc" }],
  ];
  return [
    [{ t: `# ${p.slug}.config`, c: "com" }],
    [
      { t: "track", c: "key" },
      { t: ": ", c: "punc" },
      { t: `"${p.name}"`, c: "str" },
    ],
    [
      { t: "level", c: "key" },
      { t: ": ", c: "punc" },
      { t: `"${meta?.level ?? ""}"`, c: "str" },
    ],
    [
      { t: "next_cohort", c: "key" },
      { t: ": ", c: "punc" },
      { t: `"${p.nextCohort ?? "Waitlist"}"`, c: "str" },
    ],
    [
      { t: "duration", c: "key" },
      { t: ": ", c: "punc" },
      { t: `"${COHORT.facts[0].value}"`, c: "str" },
    ],
    ...list("skills", p.skills),
    ...list("tools", p.tools),
  ];
}

const plain = (lines: Tok[][]) => lines.map((l) => l.map((x) => x.t).join("")).join("\n");

export function Tracks() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="inline-flex items-center gap-2 font-d4-mono text-[12px] uppercase tracking-[0.15em] text-d4-signal">
          <span aria-hidden className="size-1.5 rounded-full bg-d4-voltage shadow-[0_0_10px_#2f6bff]" />
          Training tracks
        </p>
        <h2 className="mt-5 font-d4-sans text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.04em] text-balance text-white">
          {TRACKS_INTRO.title}
        </h2>
        <p className="mt-5 max-w-[400px] text-[17px] leading-relaxed text-d4-ash">{TRACKS_INTRO.sub}</p>
        <div className="mt-8 flex gap-2" role="tablist" aria-label="Training tracks">
          {PROGRAMMES.map((p, i) => (
            <button
              key={p.slug}
              role="tab"
              aria-selected={active === i}
              aria-label={p.name}
              onClick={() => setActive(i)}
              className={cn(
                "grid h-12 w-14 place-items-center border font-d4-mono text-[14px] transition-all duration-300",
                i % 2 === 0 ? "rounded-[14px]" : "rounded-full",
                active === i
                  ? "border-d4-voltage bg-d4-voltage text-white shadow-d4-glow"
                  : "border-white/15 text-d4-ash hover:border-d4-signal/60 hover:text-white",
              )}
            >
              0{i + 1}
            </button>
          ))}
        </div>
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
                    className="flex w-full items-center gap-4 py-6 text-left sm:py-7"
                  >
                    <span
                      className={cn(
                        "grid size-10 shrink-0 place-items-center rounded-xl border transition-all duration-300",
                        open
                          ? "border-d4-voltage bg-d4-voltage text-white shadow-d4-glow"
                          : "border-white/10 bg-white/[0.03] text-d4-fog",
                      )}
                    >
                      <Icon weight="fill" className="size-5" />
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
                    <ArrowRight weight="bold" className="size-3.5 -rotate-45" />
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
                          <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] border border-white/10">
                            <Image
                              src={photo.src}
                              alt={photo.alt}
                              fill
                              sizes="(min-width:1024px) 320px, (min-width:768px) 40vw, 100vw"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-d4-midnight/70 via-transparent to-transparent" />
                            <span className="absolute bottom-3 left-3 rounded-full bg-d4-midnight/70 px-2.5 py-1 font-d4-mono text-[11px] text-white backdrop-blur sm:hidden">
                              {meta?.level}
                            </span>
                          </div>
                        )}
                        <p className="mt-5 text-[15.5px] leading-relaxed text-d4-ash">{p.short}</p>
                        <Link
                          href={`/programmes/${p.slug}`}
                          className="group/btn mt-6 inline-flex h-11 w-fit items-center gap-2.5 rounded-d4-pill border border-white/15 px-5 text-[14.5px] font-medium text-white transition-colors hover:border-d4-signal/60 hover:bg-white/[0.04]"
                        >
                          Explore {p.name}
                          <ArrowRight
                            weight="bold"
                            className="size-4 transition-transform group-hover/btn:translate-x-0.5"
                          />
                        </Link>
                      </div>
                      <ConfigPanel programme={p} />
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

function ConfigPanel({ programme }: { programme: Programme }) {
  const [copied, setCopied] = useState(false);
  const lines = configLines(programme);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(plain(lines));
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  const color = { key: "text-d4-signal", str: "text-[#e6edf9]", punc: "text-d4-fog", com: "text-d4-fog" } as const;

  return (
    <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#0e0f12] shadow-[0_0_50px_rgba(47,107,255,0.14)]">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-2.5">
        <span className="flex min-w-0 items-center gap-2 font-d4-mono text-[12px] text-d4-ash">
          <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-d4-cyan shadow-[0_0_8px_#3dd6f5]" />
          <span className="truncate">{programme.slug}.config</span>
        </span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 font-d4-mono text-[11.5px] text-d4-ash transition-colors hover:border-d4-signal/50 hover:text-white"
        >
          {copied ? <Check weight="bold" className="size-3.5 text-d4-cyan" /> : <Copy className="size-3.5" />}
          <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <pre className="max-h-[360px] overflow-auto p-4 font-d4-mono text-[12.5px] leading-[1.7] sm:text-[13px]">
        <code>
          {lines.map((l, i) => (
            <span key={i} className="flex">
              <span aria-hidden className="mr-4 w-5 shrink-0 select-none text-right text-d4-steel">
                {i + 1}
              </span>
              <span className="whitespace-pre">
                {l.map((tok, j) => (
                  <span key={j} className={tok.c ? color[tok.c] : undefined}>
                    {tok.t}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
