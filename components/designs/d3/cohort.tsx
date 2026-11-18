import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { BRAND, COHORT } from "@/lib/content";
import { CheckMark, Container, Eyebrow, Pill } from "./primitives";

/** The blue marbled "membership card", recast as a cohort pass. */
function CohortPass() {
  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      {/* soft glow under the card */}
      <div aria-hidden className="absolute inset-x-10 -bottom-8 h-24 rounded-full bg-d3-signal/40 blur-3xl" />
      <div className="d3-marble d3-grain relative isolate aspect-[1.586] overflow-hidden rounded-[20px] text-d3-white shadow-[0_30px_60px_-30px_rgba(31,94,255,0.6)] transition-transform duration-500 ease-out hover:-translate-y-1">
        {/* lava / marble blobs */}
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="animate-d3-drift absolute -left-[15%] -top-[30%] size-[75%] rounded-full bg-[#0b2fa8] opacity-80 blur-[50px]" />
          <div className="animate-d3-drift-rev absolute -bottom-[35%] left-[25%] size-[70%] rounded-full bg-[#6aa8ff] opacity-90 blur-[60px]" />
          <div className="animate-d3-drift absolute -right-[10%] top-[10%] size-[45%] rounded-full bg-white opacity-70 blur-[50px]" />
          <div className="animate-d3-drift-rev absolute left-[40%] top-[-10%] size-[35%] rounded-full bg-[#1f5eff] blur-[40px]" />
        </div>

        <div className="flex h-full flex-col justify-between p-5 sm:p-7">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <Image src={BRAND.logo} alt="" width={26} height={26} className="size-[22px] sm:size-[26px]" />
              <span className="text-[14px] font-medium tracking-[-0.02em] sm:text-[16px]">{BRAND.name}</span>
            </div>
            <span className="d3-label rounded-full border border-white/40 px-2.5 py-1 text-[10px] text-d3-white">
              Cohort pass
            </span>
          </div>

          <div>
            <p className="d3-label text-[10px] text-white/75 sm:text-[11px]">Next intake</p>
            <p className="mt-1.5 text-[34px] leading-none tracking-[-0.03em] sm:mt-2 sm:text-[52px]">{COHORT.month}</p>
          </div>

          <dl className="grid grid-cols-3 gap-3 border-t border-white/30 pt-3 sm:pt-4">
            {COHORT.facts.map((f) => (
              <div key={f.label}>
                <dt className="d3-label text-[9px] text-white/70 sm:text-[10px]">{f.label}</dt>
                <dd className="mt-1 text-[13px] leading-tight sm:text-[15px]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <BorderBeam size={180} duration={9} colorFrom="#ffffff" colorTo="#6aa8ff" borderWidth={1.5} />
      </div>
    </div>
  );
}

export function D3Cohort() {
  return (
    <section id="cohort" className="scroll-mt-8 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <BlurFade inView duration={0.7} offset={0} className="order-2 lg:order-1">
            <CohortPass />
            <p className="mx-auto mt-12 max-w-[480px] text-center text-[13px] leading-[1.5] text-d3-zinc">
              {COHORT.summary}
            </p>
          </BlurFade>

          <div className="order-1 lg:order-2">
            <Eyebrow>{COHORT.month} cohort</Eyebrow>
            <h2 className="d3-heading mt-5 text-balance text-[40px] sm:text-[52px] lg:text-[60px]">{COHORT.title}</h2>
            <p className="mt-5 max-w-[500px] text-[16px] leading-[1.5] text-d3-zinc sm:text-[17px]">{COHORT.sub}</p>

            <ul className="mt-10 border-t border-d3-mist">
              {COHORT.timeline.map((step) => (
                <li key={step.title} className="flex gap-4 border-b border-d3-mist py-5">
                  <CheckMark className="mt-0.5" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="text-[18px] tracking-[-0.015em] text-d3-carbon">{step.title}</p>
                      <p className="d3-label text-d3-zinc">{step.weeks}</p>
                    </div>
                    <p className="mt-1 text-[15px] text-d3-zinc">{step.detail}</p>
                  </div>
                </li>
              ))}
              <li className="flex gap-4 border-b border-d3-mist py-5">
                <CheckMark className="mt-0.5" />
                <p className="flex-1 text-[15px] leading-[1.5] text-d3-zinc">{COHORT.graded}</p>
              </li>
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Pill href={COHORT.register.href}>{COHORT.register.label}</Pill>
              <Pill href={COHORT.waitlist.href} variant="outline">
                {COHORT.waitlist.label}
              </Pill>
            </div>
            <p className="mt-5 max-w-[460px] text-[13px] leading-[1.5] text-d3-zinc">{COHORT.waitlistNote}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
