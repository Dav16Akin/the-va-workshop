"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { HERO, PHOTOS } from "@/lib/home-content";
import { ActionLink, TextLink } from "./primitives";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // Slow drift on the photo so the scene reads as atmosphere, not a banner.
  const y = useTransform(scrollY, [0, 900], [0, reduce ? 0 : 120]);
  const words = HERO.headline.split(" ");

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100dvh] items-end overflow-hidden bg-[#051a4b] px-4 pb-6 pt-28 md:px-8 md:pb-10"
    >
      <motion.div style={{ y }} className="absolute inset-0 -top-[6%] h-[112%]">
        <Image
          src={PHOTOS.armchair.src}
          alt={PHOTOS.armchair.alt}
          fill
          preload
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
      </motion.div>
      {/* Cool cinematic grade in the brand blues */}
      <div aria-hidden className="absolute inset-0 bg-[#2f6fbb]/30 mix-blend-multiply" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#051a4b]/85 via-[#051a4b]/25 to-[#051a4b]/45"
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease, delay: 0.15 }}
        className="d3-glass relative w-full max-w-[640px] rounded-3xl p-7 md:p-10"
      >
        <h1 className="d3-serif d3-display text-white">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="inline-block"
              initial={reduce ? false : { opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease, delay: 0.35 + i * 0.08 }}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          ))}
        </h1>
        <p className="mt-5 max-w-[46ch] text-lg leading-[1.5] text-white/85">
          {HERO.sub}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <ActionLink href="/register" tone="onDark">
            Join a cohort
          </ActionLink>
          <TextLink
            href="/join#cohorts"
            className="text-white decoration-white/40 hover:decoration-white"
          >
            See upcoming dates
          </TextLink>
        </div>
      </motion.div>
    </section>
  );
}
