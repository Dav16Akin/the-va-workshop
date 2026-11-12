"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { FlipWords } from "@/components/ui/flip-words";
import Button from "./Button";
import { HERO, PHOTOS, PRIMARY_CTA } from "@/lib/home-content";

// Notion's illustrated "character marks", re-imagined as real VA portraits in blue rings.
const marks = [
  { photo: PHOTOS.heroWoman, ring: "#4a90e2" },
  { photo: PHOTOS.manKitchen, ring: "#051a4b" },
  { photo: PHOTOS.armchair, ring: "#97b6e5" },
  { photo: PHOTOS.manSuit, ring: "#2f6fbb" },
  { photo: PHOTOS.videoCall, ring: "#4a90e2" },
  { photo: PHOTOS.manStudio, ring: "#97b6e5" },
  { photo: PHOTOS.floorLaptop, ring: "#051a4b" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="px-4 pb-16 pt-12 md:px-8 md:pb-20 md:pt-16">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center">
        <ul aria-label="Some of our graduates" className="flex -space-x-2 md:space-x-2">
          {marks.map((m, i) => (
            <motion.li
              key={m.photo.src}
              initial={{ opacity: 0, y: 18, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.05 * i }}
              whileHover={{ y: -4, rotate: i % 2 ? 6 : -6 }}
              className="relative size-10 overflow-hidden rounded-full border-2 bg-white md:size-12"
              style={{ borderColor: m.ring }}
            >
              <Image
                src={m.photo.src}
                alt=""
                fill
                sizes="48px"
                className="object-cover"
              />
            </motion.li>
          ))}
        </ul>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="d2-display-lg mt-8 max-w-[15ch] text-black md:max-w-[17ch]"
        >
          Build the{" "}
          <motion.span
            layout
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="relative inline-flex items-center rounded-full bg-[#dce9f9] px-3 py-0.5 align-baseline md:px-6 md:py-1"
          >
            {reduce ? (
              <span className="px-2 text-[#051a4b]">{HERO.rotating[0]}</span>
            ) : (
              <FlipWords
                words={HERO.rotating}
                duration={2800}
                className="px-0 text-[#051a4b]"
              />
            )}
          </motion.span>{" "}
          for a remote career.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="d2-serif mt-6 max-w-[46ch] text-[18px] leading-[1.56] text-[#615d59]"
        >
          {HERO.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          <Button href={PRIMARY_CTA.href} className="px-5 py-2.5 text-[15px]">
            {PRIMARY_CTA.label}
          </Button>
          <Button href="/services" variant="ghost" className="px-5 py-2.5 text-[15px]">
            Explore programmes
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="d2-mock-shadow relative mt-14 aspect-[4/3] w-full overflow-hidden rounded-[12px] bg-white sm:aspect-[16/9] lg:aspect-[16/7]"
        >
          <Image
            src={PHOTOS.heroWoman.src}
            alt={PHOTOS.heroWoman.alt}
            fill
            preload
            sizes="(max-width: 1240px) 100vw, 1200px"
            className="object-cover object-[72%_30%]"
          />
        </motion.div>
      </div>
    </section>
  );
}
