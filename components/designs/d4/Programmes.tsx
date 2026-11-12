"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { PHOTOS, PROGRAMMES, type Photo } from "@/lib/home-content";
import { Button, Container, Pill } from "./primitives";
import Reveal from "./Reveal";

const programmePhotos: Record<string, Photo> = {
  "executive-assistance": PHOTOS.office,
  "ai-automation-for-vas": PHOTOS.manStudio,
  "legal-virtual-assistant": PHOTOS.manSuit,
};

export default function Programmes() {
  return (
    <section id="programmes" className="scroll-mt-24 bg-[#eef4fc] py-20 md:py-[120px]">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="d4-tnum text-[48px] font-light leading-none text-[#5b616b]">01</p>
          <h2 className="d4-heading mt-4 text-[38px] font-medium leading-[1.15] md:text-[48px]">
            Pick the track that fits your goals.
          </h2>
          <p className="mt-5 max-w-[36ch] text-base leading-[1.5] text-[#5b616b]">
            Three 6-week programmes, each built around the tools and workflows
            clients hire for.
          </p>
          <div className="mt-8">
            <Button href="/services#training" variant="ghost">
              Compare tracks
            </Button>
          </div>
        </Reveal>

        <div className="d4-scroll-row -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {PROGRAMMES.map((p, i) => {
            const photo = programmePhotos[p.slug] ?? PHOTOS.office;
            return (
              <Reveal
                key={p.slug}
                delay={i * 0.08}
                className="w-[78%] shrink-0 snap-start sm:w-[55%] md:w-auto"
              >
                <Link
                  href={`/programmes/${p.slug}`}
                  className="group block h-full rounded-[12px] bg-white p-3 ring-1 ring-black/[0.06] transition-shadow duration-300 hover:ring-[#97b6e5]"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[20px]">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 78vw, 280px"
                        className="object-cover"
                      />
                    </motion.div>
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#051a4b]/80 via-[#051a4b]/25 to-transparent"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                      <h3 className="text-xl font-semibold leading-[1.2] text-white">
                        {p.name}
                      </h3>
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-[#051a4b] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <ArrowUpRight size={16} weight="bold" aria-hidden />
                      </span>
                    </div>
                  </div>
                  <div className="px-1 pb-1 pt-4">
                    <p className="text-[15px] leading-[1.45] text-[#5b616b]">
                      {p.short}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.skills.slice(0, 3).map((s) => (
                        <Pill key={s}>{s}</Pill>
                      ))}
                    </div>
                    {p.nextCohort && (
                      <p className="mt-4 text-sm font-medium text-[#2f6fbb]">
                        Next cohort: {p.nextCohort}
                      </p>
                    )}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
