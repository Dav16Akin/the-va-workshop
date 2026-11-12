import Image from "next/image";
import Reveal from "./Reveal";
import Button from "./Button";
import Programmes from "./Programmes";
import { COHORT, PHOTOS, PRIMARY_CTA } from "@/lib/home-content";

const pills = ["bg-[#2f6fbb] text-white", "bg-[#97b6e5] text-[#051a4b]", "bg-[#051a4b] text-white"];

export default function Cohort() {
  return (
    <section id="cohorts" className="scroll-mt-20 bg-white px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <h2 className="d2-display text-black">Join the next cohort.</h2>
            <p className="mt-6 text-[20px] font-medium leading-none text-black/60">
              Begins
            </p>
            <p className="mt-2 text-[40px] font-bold leading-[1.1] tracking-[-0.035em] text-[#2f6fbb] md:text-[48px]">
              {COHORT.month}
            </p>
            <p className="mt-6 max-w-[46ch] text-[16px] leading-[1.5] text-[#615d59]">
              {COHORT.summary} {COHORT.graded}
            </p>

            <dl className="mt-8 grid max-w-[460px] grid-cols-3 gap-4 border-t border-black/[0.08] pt-6">
              {COHORT.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[12px] tracking-[0.01em] text-black/60">{fact.label}</dt>
                  <dd className="mt-1 text-[16px] font-semibold tracking-[-0.01em] text-black">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-2">
              <Button href={PRIMARY_CTA.href} className="px-5 py-2.5 text-[15px]">
                {PRIMARY_CTA.label}
              </Button>
              <Button href={COHORT.waitlist.href} variant="ghost" className="px-5 py-2.5 text-[15px]">
                {COHORT.waitlist.label}
              </Button>
            </div>
          </Reveal>

          {/* Accent panel with the six-week plan as task cards */}
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[12px] bg-[#dce9f9] p-6 md:p-8">
              <div className="d2-mock-shadow relative aspect-[16/10] overflow-hidden rounded-[12px]">
                <Image
                  src={PHOTOS.manStudio.src}
                  alt={PHOTOS.manStudio.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <ol className="mt-5 grid gap-2 sm:grid-cols-3">
                {COHORT.timeline.map((step, i) => (
                  <li
                    key={step.title}
                    className="rounded-[8px] border border-black/[0.08] bg-white px-3 py-3"
                  >
                    <span className={`inline-block rounded-full px-2 py-0.5 text-[12px] font-medium ${pills[i]}`}>
                      {step.weeks}
                    </span>
                    <p className="mt-2 text-[14px] font-semibold text-black">{step.title}</p>
                    <p className="mt-1 text-[12px] leading-[1.33] text-black/60">{step.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        <Programmes />
      </div>
    </section>
  );
}
