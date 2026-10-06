"use client";

import { useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import Reveal from "@/components/Reveal";
import { Burst, Geo, Squiggle } from "@/components/Decor";

export default function CtaBanner() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="start"
      className="scroll-mt-28 px-4 pb-20 pt-20 md:pb-32 md:pt-24"
    >
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-accent px-6 py-16 text-center md:px-16 md:py-24">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-96 w-96 bg-[radial-gradient(circle,rgb(255_255_255/0.18),transparent_65%)]"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-16 h-80 w-80 bg-[radial-gradient(circle,rgb(5_26_75/0.18),transparent_65%)]"
          />
          <Geo
            kind="quarter"
            tone="mintDeep"
            className="anim-float-slow pointer-events-none absolute -right-8 -top-8 hidden h-44 w-44 lg:block"
          />
          <Burst
            tone="paper"
            className="anim-float pointer-events-none absolute -bottom-10 right-1/3 hidden h-28 w-28 opacity-40 lg:block"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                Your VA career starts today.
              </h2>
              <Squiggle
                variant="underline"
                tone="mintDeep"
                className="mt-4 h-3 w-44"
              />
              <p className="mt-5 max-w-[45ch] text-lg leading-relaxed text-white/80">
                Join the next cohort and get the assets that make clients say
                yes.
              </p>
            </div>
            <div className="mt-10 w-full">
              {submitted ? (
                <div
                  role="status"
                  className="rounded-[2rem] bg-white px-8 py-6 text-sm font-semibold text-accent-deep sm:rounded-full"
                >
                  You are on the list. Check your inbox for next steps.
                </div>
              ) : (
                <form
                  className="flex flex-col gap-3 rounded-[2rem] bg-white p-3 shadow-lift sm:flex-row sm:items-center sm:rounded-full"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Your email address"
                    className="w-full flex-1 rounded-full bg-transparent px-5 py-3.5 text-sm text-ink placeholder:text-ink-soft/70 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] sm:pr-2.5"
                  >
                    Join a cohort
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper/10 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105">
                      <ArrowUpRight size={15} weight="bold" />
                    </span>
                  </button>
                </form>
              )}
              <p className="mt-4 px-2 text-xs font-medium text-white/70">
                Free to join. No card required.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
