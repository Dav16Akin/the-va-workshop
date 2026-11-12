"use client";

import Link from "next/link";
import { CalendarBlank, Certificate, Notebook } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { COHORT } from "@/lib/home-content";
import { Button, Container } from "./primitives";
import Reveal from "./Reveal";

const stepIcons = [CalendarBlank, Notebook, Certificate];

export default function Cohort() {
  return (
    <section id="cohorts" className="scroll-mt-24 bg-[#eef4fc] py-20 md:py-[120px]">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <Reveal>
          <h2 className="d4-display text-[44px] font-medium leading-[1.02] md:text-[60px]">
            Next cohort begins{" "}
            <span className="relative inline-block whitespace-nowrap text-[#2f6fbb]">
              {COHORT.month}.
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[6px] w-full rounded-[100px] bg-[#97b6e5]/60"
              />
            </span>
          </h2>
          <p className="mt-7 max-w-[46ch] text-lg leading-[1.5] text-[#5b616b]">
            {COHORT.summary} {COHORT.graded}
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-[#97b6e5]/60 pt-6">
            {COHORT.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-sm text-[#5b616b]">{f.label}</dt>
                <dd className="mt-1 text-lg font-semibold leading-[1.25] md:text-xl">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button href={COHORT.register.href}>Join a cohort</Button>
            <Link
              href={COHORT.waitlist.href}
              className="text-base font-medium text-[#051a4b] underline decoration-[#97b6e5] decoration-2 underline-offset-[6px] transition-colors hover:decoration-[#2f6fbb]"
            >
              {COHORT.waitlist.label}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="d4-elevated rounded-[12px] bg-white p-6 md:p-8">
            <p className="text-sm font-medium text-[#5b616b]">How the six weeks run</p>
            <ol className="mt-6 grid gap-2">
              {COHORT.timeline.map((step, i) => {
                const StepIcon = stepIcons[i] ?? CalendarBlank;
                return (
                  <motion.li
                    key={step.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ type: "spring", stiffness: 110, damping: 20, delay: 0.15 + i * 0.12 }}
                    className="flex gap-4 rounded-[12px] p-4 transition-colors duration-200 hover:bg-[#eef4fc]"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-[12px] bg-[#dce9f9] text-[#2f6fbb]">
                      <StepIcon size={22} weight="duotone" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-[#2f6fbb]">{step.weeks}</p>
                      <p className="mt-0.5 text-lg font-semibold leading-[1.3]">{step.title}</p>
                      <p className="mt-1 text-[15px] leading-[1.45] text-[#5b616b]">{step.detail}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
