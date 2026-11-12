"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, CircleDashed, Circle } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { PATHS } from "@/lib/home-content";
import Reveal from "./Reveal";

type PathKey = keyof typeof PATHS;
const order: PathKey[] = ["talent", "hire"];

/**
 * A small, real walkthrough of each path: step through the actual stages
 * from lib/home-content. No invented metrics.
 */
export default function Paths() {
  const [path, setPath] = useState<PathKey>("talent");
  const [step, setStep] = useState(0);
  const data = PATHS[path];
  const last = data.steps.length - 1;

  const choose = (k: PathKey) => {
    setPath(k);
    setStep(0);
  };

  return (
    <section id="work-with-us" className="scroll-mt-16 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <Reveal>
          <h2 className="d1-display max-w-[14ch] text-[34px] md:text-[56px] md:tracking-[-1.6px]">
            Two ways to work with us.
          </h2>
          <p className="mt-5 max-w-[44ch] text-[16px] leading-[1.35] tracking-[-0.025em] text-[var(--d1-graphite)]">
            Ready to earn as a VA, or ready to delegate? Pick your path and our team takes it from there.
          </p>
          <div className="mt-8 inline-flex rounded-full bg-[var(--d1-surface)] p-1" role="group" aria-label="Choose a path">
            {order.map((k) => (
              <button
                key={k}
                type="button"
                aria-pressed={path === k}
                onClick={() => choose(k)}
                className={`rounded-full px-4 py-2 text-[14px] font-medium tracking-[-0.02em] transition-colors duration-200 sm:px-5 ${
                  path === k ? "bg-[var(--d1-navy)] text-white" : "text-[var(--d1-graphite)] hover:text-[var(--d1-ink)]"
                }`}
              >
                {PATHS[k].title}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[16px] bg-[var(--d1-panel)] p-6 text-white md:p-10">
            <div className="flex items-center justify-between gap-4">
              <p className="d1-mono text-[11px] text-white/55">
                {path === "talent" ? "Talent pool application" : "VA request"}
              </p>
              <p className="d1-mono text-[11px] text-white/55" aria-live="polite">
                Step {step + 1} of {data.steps.length}
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={path}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] md:text-[28px]">{data.title}</h3>
                <p className="mt-2 max-w-[48ch] text-[14px] leading-[1.45] text-white/70">{data.body}</p>

                <ol className="mt-8 space-y-2">
                  {data.steps.map((s, i) => {
                    const state = i < step ? "done" : i === step ? "current" : "next";
                    return (
                      <li
                        key={s}
                        className={`flex items-center gap-3 rounded-[12px] border px-4 py-3.5 transition-colors duration-300 ${
                          state === "current" ? "border-white/25 bg-white/[0.07]" : "border-white/10"
                        }`}
                      >
                        <span className="grid size-7 shrink-0 place-items-center rounded-full border border-white/20">
                          {state === "done" ? (
                            <Check size={14} weight="bold" className="text-[var(--d1-lav)]" />
                          ) : state === "current" ? (
                            <CircleDashed size={16} className="text-[var(--d1-accent)]" />
                          ) : (
                            <Circle size={10} className="text-white/35" />
                          )}
                        </span>
                        <span className={`flex-1 text-[14px] tracking-[-0.02em] ${state === "next" ? "text-white/55" : "text-white"}`}>
                          {s}
                        </span>
                        <span
                          className={`d1-mono rounded-full px-2 py-1 text-[10px] leading-none ${
                            state === "done"
                              ? "bg-[var(--d1-lav)] text-[var(--d1-navy)]"
                              : state === "current"
                                ? "bg-[var(--d1-accent)] text-[var(--d1-navy)]"
                                : "bg-white/10 text-white/60"
                          }`}
                        >
                          {state === "done" ? "Done" : state === "current" ? "Now" : "Next"}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {step < last ? (
                <button type="button" onClick={() => setStep((s) => s + 1)} className="d1-pill d1-pill-light">
                  Next step
                  <ArrowRight size={16} />
                </button>
              ) : (
                <Link href={data.cta.href} className="d1-pill d1-pill-light">
                  {data.cta.label}
                  <ArrowRight size={16} />
                </Link>
              )}
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="rounded-full px-4 py-3 text-[14px] text-white/70 transition-colors duration-200 hover:text-white"
                >
                  Start over
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
