import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { COHORT, FINAL_CTA } from "@/lib/content";
import { Reveal } from "./motion-bits";
import { container } from "./primitives";

export function FinalCta() {
  return (
    <section id="register" className="py-16 sm:py-24">
      <div className={container}>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[32px] border border-white/[0.08] bg-d4-carbon px-6 pb-6 pt-14 sm:px-10 sm:pb-10 sm:pt-20">
            {/* blue signal wave */}
            <svg
              aria-hidden
              viewBox="0 0 1200 520"
              preserveAspectRatio="none"
              className="absolute inset-x-0 bottom-0 -z-10 h-[52%] w-full sm:h-[58%]"
            >
              <defs>
                <linearGradient id="d4-wave" x1="0" y1="0" x2="1" y2="0.4">
                  <stop offset="0" stopColor="#7fb2ff" stopOpacity="0.95" />
                  <stop offset="0.5" stopColor="#2f6bff" />
                  <stop offset="1" stopColor="#3dd6f5" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="d4-wave-fade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#161618" stopOpacity="0" />
                  <stop offset="1" stopColor="#161618" stopOpacity="0.35" />
                </linearGradient>
              </defs>
              <path
                d="M0 500 C 260 400, 520 200, 860 150 C 1040 125, 1120 180, 1060 270 C 1130 240, 1180 215, 1200 205 L 1200 520 L 0 520 Z"
                fill="url(#d4-wave)"
              />
              <path d="M0 520 L0 470 C 300 420, 700 300, 1200 330 L 1200 520 Z" fill="url(#d4-wave-fade)" />
            </svg>
            
            <div className="max-w-[720px]">
              <p className="font-d4-mono text-[12px] uppercase tracking-[0.15em] text-d4-signal">{COHORT.month}</p>
              <h2 className="mt-5 font-d4-sans text-[clamp(2.4rem,6vw,4.75rem)] font-medium leading-[1] tracking-[-0.045em] text-balance text-white">
                {FINAL_CTA.title}
              </h2>
              <p className="mt-6 max-w-[540px] text-[17px] leading-relaxed text-d4-ash">{FINAL_CTA.sub}</p>
            </div>

            <div className="mt-36 flex flex-col gap-2 rounded-[18px] border border-white/15 bg-d4-midnight/85 p-2 backdrop-blur-md sm:mt-44 sm:flex-row sm:items-center">
              <p className="min-w-0 flex-1 px-4 py-3 font-d4-mono text-[13px] leading-relaxed text-d4-ash sm:text-[14px]">
                <span className="text-d4-signal">$ register</span> --cohort &quot;{COHORT.month}&quot; --format &quot;
                {COHORT.facts[1].value}&quot;
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link
                  href={FINAL_CTA.secondary.href}
                  className="inline-flex h-12 items-center justify-center rounded-[12px] border border-white/15 px-5 text-[14.5px] font-medium text-white transition-colors hover:border-d4-signal/60"
                >
                  {FINAL_CTA.secondary.label}
                </Link>
                <Link
                  href={FINAL_CTA.primary.href}
                  className="group/btn inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-d4-voltage px-5 text-[14.5px] font-medium text-white transition-shadow hover:shadow-d4-glow"
                >
                  {FINAL_CTA.primary.label}
                  <ArrowRight weight="bold" className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
