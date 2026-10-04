"use client";

"use client";

import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import Reveal from "@/components/Reveal";

const tracks = [
  {
    title: "Executive Assistance",
    description:
      "Calendar control, inbox management, travel and reporting for founders and executives.",
    meta: "Beginner friendly, live online",
    image: "/images/course-executive.png",
    alt: "Organized desk with a laptop showing a weekly calendar schedule",
  },
  {
    title: "AI Automation For VAs",
    description:
      "Build AI-powered automations that save your clients hours every single week.",
    meta: "Intermediate, project based",
    image: "/images/course-ai-automation.png",
    alt: "Hands on a laptop showing an automation workflow diagram",
  },
  {
    title: "Legal Virtual Assistant",
    description:
      "Document preparation, filing and case support for law firms and legal teams.",
    meta: "Specialist, mentor led",
    image: "/images/course-legal.png",
    alt: "Tidy legal desk with contracts and scales of justice",
  },
];

export default function Training() {
  return (
    <section
      id="training"
      className="scroll-mt-28 bg-mint-deep/35 px-4 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Learn the skills
            <br />
            <span className="text-accent">employers ask for.</span>
          </h2>
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-ink-soft">
            Three coach-led tracks built around the tools remote teams use
            today.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tracks.map((track, i) => (
            <Reveal key={track.title} delay={i * 0.08} className={i === 1 ? "lg:mt-10" : undefined}>
              <article className="group rounded-[2rem] bg-white p-2 shadow-soft ring-1 ring-ink/5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5">
                <div className="rounded-[calc(2rem-0.5rem)] overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={track.image}
                      alt={track.alt}
                      fill
                      sizes="(max-width: 1024px) 90vw, 30vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <h3 className="text-xl font-bold tracking-tight">{track.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                      {track.description}
                    </p>
                    <p className="mt-4 text-xs font-medium text-ink-soft">{track.meta}</p>
                    <a
                      href="#start"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
                    >
                      Explore Training
                      <ArrowRight
                        size={15}
                        weight="bold"
                        className="transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
