"use client";

import Image from "next/image";
import { Play } from "@phosphor-icons/react";
import Reveal from "@/components/Reveal";

export default function VideoSection() {
  return (
    <section className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            See how we train <span className="text-accent">our VAs.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-lg leading-relaxed text-ink-soft">
            A look inside our live cohort sessions, the curriculum, and real
            student workspaces.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-5xl">
          <figure className="relative aspect-video overflow-hidden rounded-[2.5rem] shadow-lift ring-1 ring-ink/5">
            <Image
              src="/images/video-poster.png"
              alt="Students in a live VA Workshop cohort session"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/40"
            />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid size-20 place-items-center rounded-full bg-white/95">
                <Play size={26} weight="fill" className="ml-1 text-ink" />
              </span>
            </span>
            <span className="absolute bottom-5 left-5 rounded-full bg-ink/75 px-4 py-1.5 text-xs font-semibold text-white/90">
              Video coming soon
            </span>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
