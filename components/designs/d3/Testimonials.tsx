"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { TESTIMONIALS, initials } from "@/lib/home-content";
import { cn } from "@/lib/utils";
import { Reveal, Section } from "./primitives";

const ROTATE_MS = 7000;

/** One quote at a time, set like a pull-quote. */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const t = TESTIMONIALS[index];

  useEffect(() => {
    if (reduce || paused) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), ROTATE_MS);
    return () => clearTimeout(id);
  }, [index, reduce, paused]);

  return (
    <Section id="stories" className="bg-[#f9faf7]">
      <div
        className="mx-auto max-w-[900px] text-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <Reveal>
          <h2 className="text-[15px] font-medium text-[#646464]">
            From{" "}
            {reduce ? (
              "300"
            ) : (
              <NumberTicker value={300} className="text-[#646464] tracking-normal" />
            )}
            + VAs in our community
          </h2>
        </Reveal>

        <div className="relative mt-10 min-h-[260px] md:min-h-[220px]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.figure
              key={t.name}
              initial={reduce ? false : { opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduce ? undefined : { opacity: 0, y: -8, filter: "blur(6px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote className="d3-serif text-[1.875rem] leading-[1.25] text-[#2c2c2c] md:text-[2.5rem]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 text-[15px]">
                <span className="font-medium text-[#282834]">{t.name}</span>
                <span className="text-[#646464]">, {t.role}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Choose a testimonial">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show quote from ${item.name}`}
              aria-pressed={i === index}
              className={cn(
                "flex size-11 items-center justify-center rounded-full border text-[13px] font-medium transition-colors duration-300",
                i === index
                  ? "border-[#4a90e2] bg-[#eef4fc] text-[#2f6fbb]"
                  : "border-[#dee2de] bg-white text-[#646464] hover:border-[#b4b8b4]",
              )}
            >
              {initials(item.name)}
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
