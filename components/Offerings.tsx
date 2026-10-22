"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ChartLineUp,
  FileText,
  GraduationCap,
  Robot,
  Users,
  VideoCamera,
} from "@phosphor-icons/react";
import Reveal from "@/components/Reveal";
import { Cluster, Geo, Marked } from "@/components/Decor";

// Swap for the live WhatsApp community invite link when available.
const WHATSAPP_COMMUNITY_URL = "https://chat.whatsapp.com/thevaworkshop";

const offerings = [
  {
    title: "Trainings",
    description:
      "Live training sessions covering the practical skills and tools you need to work confidently as a professional VA. Every session is recorded so enrolled students can revisit the lessons later.",
    icon: GraduationCap,
    tint: "bg-mint-deep",
    href: "/services#training",
  },
  {
    title: "Resume & portfolio building",
    description:
      "An ATS-optimised resume and a portfolio that wins clients, even with zero prior experience.",
    icon: FileText,
    tint: "bg-lav",
    href: "/store",
  },
  {
    title: "1-on-1 Career Discovery Session",
    description:
      "A paid 1-on-1 session with the founder to discuss your career goals, career challenges, CV, portfolio and next steps in your remote-work journey.",
    icon: VideoCamera,
    tint: "bg-cream",
    href: "/book",
  },
  {
    title: "Community & job leads",
    description:
      "An active alumni network sharing job leads, referrals, and peer feedback.",
    icon: Users,
    tint: "bg-white",
    href: WHATSAPP_COMMUNITY_URL,
  },
  {
    title: "AI Mock Interview Preparation",
    description:
      "Coming soon. We're developing a smarter way to help VAs practise and prepare for remote job interviews.",
    icon: Robot,
    tint: "bg-mint-deep/60",
    href: "/coming-soon",
  },
  {
    title: "Progress Tracking & Analytics",
    description:
      "Coming soon. We're developing tools to help VAs track their learning and career progress.",
    icon: ChartLineUp,
    tint: "bg-ink",
    dark: true,
    href: "/coming-soon",
  },
];

export default function Offerings() {
  return (
    <section
      id="journey"
      className="relative scroll-mt-28 overflow-hidden px-4 py-24 md:py-32"
    >
      <Cluster
        variant="b"
        className="pointer-events-none absolute -right-16 top-10 hidden h-72 w-72 lg:block"
      />
      <Geo
        kind="cross"
        tone="mintDeep"
        className="anim-float pointer-events-none absolute -left-12 bottom-10 hidden h-44 w-44 lg:block"
      />
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            How we get you <Marked className="text-accent">there.</Marked>
          </h2>
          <p className="mx-auto mt-5 max-w-[55ch] text-lg leading-relaxed text-ink-soft">
            Every step is designed to give you practical skills, support, and
            hirable assets, from total beginner to placed VA.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offering, i) => {
            const external = offering.href.startsWith("http");
            const linkProps = external
              ? { target: "_blank", rel: "noreferrer" }
              : {};
            const Comp = external ? "a" : Link;
            return (
              <Reveal key={offering.title} delay={i * 0.06}>
                <Comp
                  href={offering.href}
                  {...linkProps}
                  className="group block h-full"
                >
                  <article className="h-full rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-1.5">
                    <div
                      className={`relative h-full rounded-[calc(2rem-0.375rem)] p-8 ${offering.tint}`}
                    >
                      <span
                        aria-hidden
                        className={`absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full opacity-0 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100 ${
                          offering.dark ? "bg-paper/10 text-mint-deep" : "bg-white text-accent-deep"
                        }`}
                      >
                        <ArrowUpRight size={15} weight="bold" />
                      </span>
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${
                          offering.dark ? "bg-paper/10 text-mint-deep" : "bg-white text-accent-deep"
                        }`}
                      >
                        <offering.icon size={20} weight="duotone" />
                      </span>
                      <h3
                        className={`mt-6 text-xl font-bold tracking-tight ${
                          offering.dark ? "text-paper" : ""
                        }`}
                      >
                        {offering.title}
                      </h3>
                      <p
                        className={`mt-3 text-sm leading-relaxed ${
                          offering.dark ? "text-paper/70" : "text-ink-soft"
                        }`}
                      >
                        {offering.description}
                      </p>
                    </div>
                  </article>
                </Comp>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
