"use client";

import { ArrowUpRight, Clock, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const cards = [
  {
    icon: EnvelopeSimple,
    title: "Email us",
    line1: "team@thevaworkshop.com",
    line2: "We reply within 1 business day",
    href: "mailto:team@thevaworkshop.com",
  },
  {
    icon: MapPin,
    title: "Location",
    line1: "Lagos, Nigeria",
    line2: "Remote-first, worldwide cohorts",
  },
  {
    icon: Clock,
    title: "Office hours",
    line1: "Mon–Fri, 9:00–17:00 WAT",
    line2: "Live coaching calls weekly",
  },
];

export default function ContactSection() {
  return (
    <section className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <article className="h-full rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5">
                <div className="h-full rounded-[calc(2rem-0.375rem)] bg-white p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint-deep text-accent-deep">
                    <card.icon size={20} weight="duotone" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-ink">
                    {card.line1}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{card.line2}</p>
                  {card.href && (
                    <a
                      href={card.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
                    >
                      Send an email
                      <ArrowUpRight size={14} weight="bold" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-accent px-8 py-14 text-center md:px-16">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-96 w-96 bg-[radial-gradient(circle,rgb(255_255_255/0.18),transparent_65%)]"
            />
            <h2 className="relative text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Ready when you are.
            </h2>
            <p className="relative mx-auto mt-4 max-w-[46ch] text-base leading-relaxed text-white/80">
              Email the team directly, or jump straight to the page that
              matches what you need.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:team@thevaworkshop.com"
                className="flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-paper transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <EnvelopeSimple size={15} weight="duotone" />
                team@thevaworkshop.com
              </a>
              <Link
                href="/hire"
                className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-white/20"
              >
                Hire a VA
              </Link>
              <Link
                href="/join"
                className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-white/20"
              >
                Join a cohort
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
