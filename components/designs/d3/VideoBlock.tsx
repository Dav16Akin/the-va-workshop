"use client";

import Image from "next/image";
import { Play } from "@phosphor-icons/react";
import { VIDEO } from "@/lib/home-content";
import { Reveal, Section } from "./primitives";

/** Full-width media surface with a frosted caption card. Video not live yet. */
export default function VideoBlock() {
  return (
    <Section>
      <Reveal>
        <figure className="relative isolate aspect-[4/5] overflow-hidden rounded-3xl bg-[#051a4b] sm:aspect-video">
          <Image
            src={VIDEO.poster}
            alt="Students in a live VA Workshop cohort session"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-[#2f6fbb]/25 mix-blend-multiply" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#051a4b]/80 via-transparent to-[#051a4b]/10" />

          <figcaption className="d3-glass absolute inset-x-4 bottom-4 flex flex-col gap-5 rounded-2xl p-6 sm:inset-x-auto sm:left-6 sm:bottom-6 sm:max-w-[460px] md:p-8">
            <h2 className="d3-serif text-[2.25rem] text-white md:text-[2.5rem]">{VIDEO.title}</h2>
            <p className="text-base leading-[1.5] text-white/80">{VIDEO.body}</p>
            <p className="flex items-center gap-3 text-[15px] font-medium text-white/90">
              <span className="flex size-10 items-center justify-center rounded-full border border-white/40">
                <Play size={14} weight="fill" className="ml-0.5" />
              </span>
              {VIDEO.status}
            </p>
          </figcaption>
        </figure>
      </Reveal>
    </Section>
  );
}
