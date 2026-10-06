"use client";

import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import Reveal from "@/components/Reveal";
import { Cluster, Geo, Marked, Squiggle } from "@/components/Decor";

const NEXT_COHORT_MONTH = "September 2026";

const facts = [
  { value: "6 Weeks", label: "Duration" },
  { value: "Live + Self-Paced", label: "Format" },
  { value: "Limited Spots", label: "Group Size" },
];

export default function Cohorts() {
  return (
    <section
      id="cohorts"
      className="relative scroll-mt-28 overflow-hidden bg-mint-deep/35 px-4 py-24 md:py-32"
    >
      <div aria-hidden className="bg-dotgrid absolute inset-0 opacity-50" />
      <Cluster
        variant="c"
        className="pointer-events-none absolute -left-14 top-16 hidden h-52 w-52 lg:block"
      />
      <Geo
        kind="cross"
        tone="accent"
        className="anim-float pointer-events-none absolute -right-10 bottom-14 hidden h-40 w-40 opacity-70 lg:block"
      />
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Join the next <Marked className="text-accent">cohort.</Marked>
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-lg leading-relaxed text-ink-soft">
            We run cohorts in small groups so every student gets real attention
            and support. Spots fill quickly, secure yours early.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-5xl">
          <div className="rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5">
            <div className="grid overflow-hidden rounded-[calc(2rem-0.375rem)] md:grid-cols-[0.85fr_1.15fr]">
              <div className="relative min-h-[280px]">
                <Image
                  src="/images/cohort-class.png"
                  alt="Two VA Workshop students taking notes together during a live training session"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"
                />
              </div>

              <div className="relative flex flex-col justify-between bg-ink p-8 text-paper md:p-12">
                <Geo
                  kind="quarterBr"
                  tone="mintDeep"
                  blend="normal"
                  className="anim-float pointer-events-none absolute -right-8 -top-8 h-28 w-28 opacity-25"
                />
                <div className="relative">
                  <p className="text-sm font-medium text-lav">Next cohort</p>
                  <p className="mt-3 text-4xl font-extrabold leading-none tracking-tight md:text-5xl">
                    Begins{" "}
                    <span className="relative inline-block text-mint-deep">
                      {NEXT_COHORT_MONTH}
                      <Squiggle
                        variant="underline"
                        tone="mintDeep"
                        className="absolute -bottom-2 left-0 h-2.5 w-full"
                      />
                    </span>
                  </p>
                  <p className="mt-8 max-w-[40ch] text-base leading-relaxed text-paper/65">
                    Four weeks of training, two weeks on your capstone, and a
                    closing ceremony. Recorded lessons plus weekly live calls,
                    in a small group built for real support.
                  </p>
                </div>

                <dl className="relative mt-10 grid grid-cols-3 gap-4">
                  {facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-xs font-medium text-paper/45">
                        {fact.label}
                      </dt>
                      <dd className="mt-1.5 text-base font-extrabold tracking-tight text-paper">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="relative mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href="mailto:team@thevaworkshop.com?subject=Waitlist%20%E2%80%94%20September%202026%20Cohort"
                    className="group flex items-center gap-2 rounded-full bg-paper py-3 pl-6 pr-2.5 text-sm font-bold text-ink transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    Join the waitlist
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/5 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105">
                      <ArrowUpRight size={15} weight="bold" />
                    </span>
                  </a>
                  <a
                    href="mailto:team@thevaworkshop.com?subject=Registration%20%E2%80%94%20September%202026%20Cohort"
                    className="relative text-sm font-semibold text-paper/75 transition-colors duration-300 hover:text-paper"
                  >
                    Register now
                    <Squiggle
                      variant="underline"
                      tone="lav"
                      strokeWidth={2}
                      className="absolute -bottom-1.5 left-0 h-2 w-full"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
