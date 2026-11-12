"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { COHORT, HERO, PHOTOS } from "@/lib/home-content";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="px-4 pb-10 pt-12 md:px-8 md:pt-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end lg:gap-12">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="d1-display text-balance text-[44px] sm:text-[60px] lg:text-[66px] lg:tracking-[-2px] xl:text-[82px] xl:tracking-[-2.4px]"
          >
            {HERO.headline}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="max-w-[38ch] lg:pb-1.5"
          >
            <p className="text-[16px] leading-[1.35] tracking-[-0.025em] text-[var(--d1-graphite)]">
              {HERO.sub}
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link href={COHORT.register.href} className="d1-pill d1-pill-navy">
                Join a cohort
              </Link>
              <Link href="/book" className="d1-pill d1-pill-pale">
                Book a call
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative mt-12 aspect-[4/5] overflow-hidden rounded-[16px] bg-[var(--d1-surface)] sm:aspect-[16/9] md:mt-16 lg:aspect-[21/9]"
        >
          <Image
            src={PHOTOS.heroWoman.src}
            alt={PHOTOS.heroWoman.alt}
            fill
            preload
            sizes="(max-width: 1320px) 100vw, 1320px"
            className="object-cover object-[70%_35%]"
          />
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#04112f]/55 to-transparent"
          />
          <figcaption className="d1-mono absolute left-4 top-4 rounded-full bg-[#04112f]/70 px-3 py-1.5 text-[11px] leading-none text-white backdrop-blur md:left-6 md:top-6">
            Live weekend class
          </figcaption>

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease }}
            role="status"
            className="absolute bottom-4 left-4 flex max-w-[calc(100%-2rem)] items-center gap-3 rounded-[16px] bg-[#04112f]/85 py-3 pl-3 pr-5 text-white backdrop-blur md:bottom-8 md:left-8"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/25">
              <CheckCircle size={20} className="text-[var(--d1-lav)]" />
            </span>
            <span className="leading-tight">
              <span className="block text-[14px] font-medium tracking-[-0.02em]">Seat reserved</span>
              <span className="block text-[13px] text-white/70">
                Cohort begins {COHORT.month}
              </span>
            </span>
          </motion.div>
        </motion.figure>
      </div>
    </section>
  );
}
