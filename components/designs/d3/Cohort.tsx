"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { COHORT, PROGRAMMES } from "@/lib/home-content";
import { ActionLink, Reveal, Section, TextLink } from "./primitives";

/** The page's one vivid atmospheric surface, holding the cohort diagram. */
export default function Cohort() {
  return (
    <Section id="cohorts" className="pt-0 md:pt-0">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-[#2f6fbb] px-6 py-12 text-white shadow-[rgba(0,0,0,0.06)_0px_2px_2px_0px,rgba(0,0,0,0.04)_0px_0px_0px_5px] md:px-16 md:py-20 lg:px-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-[15px] font-medium text-[#eef4fc]">Next cohort</p>
              <h2 className="d3-serif d3-heading mt-4 text-white">
                Begins {COHORT.month}.
              </h2>
              <p className="mt-6 max-w-[44ch] text-lg leading-[1.5] text-white/85">
                {COHORT.summary}
              </p>
              <p className="mt-3 max-w-[44ch] text-base leading-[1.5] text-white/70">
                {COHORT.graded}
              </p>

              <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/20 pt-6">
                {COHORT.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-[13px] text-white/65">{fact.label}</dt>
                    <dd className="mt-1 text-[15px] font-medium text-white">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <ActionLink href={COHORT.register.href} tone="filled">
                  Join a cohort
                </ActionLink>
                <TextLink
                  href={COHORT.waitlist.href}
                  className="text-white decoration-white/40 hover:decoration-white"
                >
                  {COHORT.waitlist.label}
                </TextLink>
              </div>
            </div>

            {/* Line-art diagram card: the six weeks at a glance */}
            <figure className="d3-diagram self-center rounded-2xl bg-white/[0.94] p-3">
              <div className="rounded-xl border border-[#dee2de] bg-white p-6 md:p-8">
                <ol className="relative">
                  <span
                    aria-hidden
                    className="absolute bottom-6 left-[11px] top-6 w-px bg-[#97b6e5]"
                  />
                  {COHORT.timeline.map((step) => (
                    <li key={step.title} className="relative flex gap-5 py-4">
                      <span
                        aria-hidden
                        className="relative z-10 mt-1 size-[23px] shrink-0 rounded-full border border-[#4a90e2] bg-white"
                      />
                      <div>
                        <p className="text-[13px] text-[#646464]">{step.weeks}</p>
                        <p className="d3-serif mt-1 text-[27px] tracking-[-0.03em] text-[#2c2c2c]">
                          {step.title}
                        </p>
                        <p className="mt-1 text-[15px] leading-[1.5] text-[#646464]">
                          {step.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <figcaption className="px-3 pb-1 pt-3 text-[13px] text-[#646464]">
                How the six-week programme runs.
              </figcaption>
            </figure>
          </div>
        </div>
      </Reveal>

      <div className="mt-20">
        <Reveal>
          <h3 className="d3-serif text-[2.5rem] text-[#2c2c2c]">Choose your track.</h3>
        </Reveal>
        <ul className="mt-8 border-t border-[#dee2de]">
          {PROGRAMMES.map((p, i) => (
            <li key={p.slug} className="border-b border-[#dee2de]">
              <Reveal delay={i * 0.06}>
                <Link
                  href={`/programmes/${p.slug}`}
                  className="group grid gap-2 py-7 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_auto] md:items-center md:gap-10"
                >
                  <span className="d3-serif d3-heading-sm text-[#2c2c2c] transition-colors duration-300 group-hover:text-[#2f6fbb]">
                    {p.name}
                  </span>
                  <span className="text-[15px] leading-[1.5] text-[#646464]">{p.short}</span>
                  <span className="hidden size-10 items-center justify-center rounded-full border border-[#dee2de] text-[#282834] transition-colors duration-300 group-hover:border-[#4a90e2] group-hover:text-[#2f6fbb] md:flex">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
