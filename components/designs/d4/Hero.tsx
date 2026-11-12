"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { FlipWords } from "@/components/ui/flip-words";
import { COHORT, PHOTOS } from "@/lib/home-content";
import { Button, Container } from "./primitives";

const WORDS = ["skills", "portfolio", "confidence", "network"];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      {/* Warm band bleeding behind the lower half of the media container */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[42%] bg-[#eef4fc]"
      />

      <Container className="relative pt-14 md:pt-20">
        <div className="mx-auto max-w-[920px] text-center">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="d4-display text-[44px] font-medium leading-[0.98] sm:text-[60px] lg:text-[80px]"
          >
            <span className="sr-only">
              Build the skills remote clients look for.
            </span>
            <span aria-hidden className="block">
              Build the
              <FlipWords
                words={reduce ? WORDS.slice(0, 1) : WORDS}
                duration={2800}
                className="px-0 pl-[0.25em] text-[#2f6fbb] dark:text-[#2f6fbb]"
              />
            </span>
            <span aria-hidden className="block">
              remote clients look for.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mx-auto mt-6 max-w-[46ch] text-lg leading-[1.5] text-[#5b616b] md:text-xl"
          >
            Live VA training, hirable career assets and a community of 300+
            virtual assistants growing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button href="/register">Join a cohort</Button>
            <Button href="/book" variant="ghost">
              Book a discovery call
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.25 }}
          className="relative mt-14 pb-16 md:mt-16 md:pb-20"
        >
          <figure className="relative aspect-[4/5] overflow-hidden rounded-[12px] sm:aspect-[16/10] lg:aspect-[16/8]">
            <Image
              src={PHOTOS.heroWoman.src}
              alt={PHOTOS.heroWoman.alt}
              fill
              preload
              sizes="(max-width: 1200px) 100vw, 1136px"
              className="object-cover object-[72%_30%]"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#051a4b]/45 to-transparent"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-[6px] border border-[#2f6fbb]/30 bg-[#dce9f9] px-3 py-1.5 text-sm font-medium text-[#051a4b] md:bottom-6 md:left-6">
              Next cohort begins {COHORT.month}
            </figcaption>
          </figure>
        </motion.div>
      </Container>
    </section>
  );
}
