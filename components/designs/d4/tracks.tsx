"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Briefcase, Check, Copy, Lightning, Scales } from "@phosphor-icons/react";
import { COHORT, PHOTOS, PROGRAMMES, TRACK_META, TRACKS_INTRO } from "@/lib/content";
import type { Programme } from "@/lib/programmes";
import { cn } from "@/lib/utils";
import { CtaLink } from "./primitives";

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
                          ? "border-d4-voltage bg-d4-voltage text-white"
                          : "border-white/10 text-d4-fog",
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
                  <span className="grid size-8 place-items-center rounded-full border border-white/10 transition-colors group-hover/lvl:border-white/35">
                    <ArrowUpRight weight="bold" className="size-3.5" />
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
    <div className="overflow-hidden rounded-[16px] border border-white/10 bg-d4-midnight">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-2.5">
        <span className="flex min-w-0 items-center gap-2 font-d4-mono text-[12px] text-d4-ash">
          <span className="truncate">{programme.slug}.config</span>
        </span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 font-d4-mono text-[11.5px] text-d4-ash transition-colors hover:border-white/35 hover:text-white active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d4-signal"
        >
          {copied ? <Check weight="bold" className="size-3.5 text-d4-signal" /> : <Copy className="size-3.5" />}
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
