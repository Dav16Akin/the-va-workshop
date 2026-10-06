"use client";

import {
  ChartLineUp,
  FileText,
  GraduationCap,
  Robot,
  Users,
  VideoCamera,
} from "@phosphor-icons/react";
import Reveal from "@/components/Reveal";
import { Cluster, Geo, Marked } from "@/components/Decor";

const offerings = [
  {
    title: "Trainings",
    description:
      "Pre-recorded and live lessons covering every skill you need to work as a professional VA.",
    icon: GraduationCap,
    tint: "bg-mint-deep",
  },
  {
    title: "Resume & portfolio building",
    description:
      "An ATS-optimised resume and a portfolio that wins clients, even with zero prior experience.",
    icon: FileText,
    tint: "bg-lav",
  },
  {
    title: "1-on-1 coaching sessions",
    description:
      "Weekly live coaching calls with experienced VAs who walked the same path you are on, plus direct feedback on your resume, portfolio, and pitches.",
    icon: VideoCamera,
    tint: "bg-cream",
  },
  {
    title: "Community & job leads",
    description:
      "An active alumni network sharing job leads, referrals, and peer feedback.",
    icon: Users,
    tint: "bg-white",
  },
  {
    title: "AI mock interview preparation",
    description:
      "Practice interviews so you walk into every client call prepared.",
    icon: Robot,
    tint: "bg-mint-deep/60",
  },
  {
    title: "Progress tracking & analytics",
    description:
      "Clear milestones and accountability check-ins for job hunters, so you always know where you stand.",
    icon: ChartLineUp,
    tint: "bg-ink",
    dark: true,
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
          {offerings.map((offering, i) => (
            <Reveal key={offering.title} delay={i * 0.06}>
              <article className="h-full rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5">
                <div className={`h-full rounded-[calc(2rem-0.375rem)] p-8 ${offering.tint}`}>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
