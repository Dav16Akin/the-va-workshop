"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { PHOTOS, TESTIMONIALS, initials } from "@/lib/home-content";
import { cn } from "@/lib/utils";
import { Container } from "./primitives";
import Reveal from "./Reveal";

const ROTATE_MS = 6500;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const t = TESTIMONIALS[index];

  useEffect(() => {
    if (reduce || paused) return;
    const id = setTimeout(
      () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
      ROTATE_MS,
    );
    return () => clearTimeout(id);
  }, [index, paused, reduce]);

  return (
    <section id="stories" className="scroll-mt-24 py-20 md:py-[120px]">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="relative order-2 aspect-[4/5] overflow-hidden rounded-[20px] lg:order-1">
          <Image
            src={PHOTOS.armchair.src}
            alt={PHOTOS.armchair.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 440px"
            className="object-cover"
          />
        </Reveal>

        <div
          className="order-1 lg:order-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <Reveal>
            <h2 className="d4-heading text-[38px] font-medium leading-[1.15] md:text-[48px]">
              Graduates, in their own words.
            </h2>
          </Reveal>

          <div className="relative mt-10 min-h-[220px] md:min-h-[200px]" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <blockquote className="text-2xl font-medium leading-[1.32] tracking-[-0.01em] md:text-[28px]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block text-base font-semibold">{t.name}</span>
                  <span className="block text-sm text-[#5b616b]">{t.role}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Choose a story">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-pressed={i === index}
                aria-label={`Read ${item.name}'s story`}
                className={cn(
                  "flex size-11 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f6fbb]",
                  i === index
                    ? "bg-[#2f6fbb] text-white"
                    : "bg-[#eef4fc] text-[#051a4b] hover:bg-[#dce9f9]",
                )}
              >
                {initials(item.name)}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
