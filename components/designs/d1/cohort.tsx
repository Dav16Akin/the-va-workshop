import { COHORT } from "@/lib/content";
import { BlurFade } from "@/components/ui/blur-fade";
import { Ticker } from "./ticker";
import { Band, Orb, Pill, SectionHead } from "./primitives";

// Marker positions on the 6-week ruler (start of weeks 1, 5 and the finale).
const MARKS = [0, 4 / 6, 1];

export function D1Cohort() {
  return (
    <Band id="cohort" innerClassName="py-24 sm:py-32">
      <SectionHead eyebrow={`Next cohort · ${COHORT.month}`} title={COHORT.title} sub={COHORT.sub} />

      <BlurFade inView className="mt-14">
        <div className="overflow-hidden rounded-[24px] border border-d1-stone bg-d1-taupe">
          {/* Facts */}
          <dl className="grid grid-cols-1 divide-y divide-d1-stone border-b border-d1-stone sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {COHORT.facts.map((f) => {
              const m = f.value.match(/^(\d+)(.*)$/);
              return (
                <div key={f.label} className="flex items-baseline justify-between gap-4 px-6 py-5 sm:block sm:px-8 sm:py-7">
                  <dt className="font-d1-mono text-[12px] tracking-[0.08em] text-d1-smoke uppercase sm:mb-2">{f.label}</dt>
                  <dd className="font-d1-display text-[24px] font-light tracking-[-0.02em] sm:text-[32px]">
                    {m ? (
                      <>
                        <Ticker value={Number(m[1])} className="tracking-[-0.02em] text-d1-ink" />
                        {m[2]}
                      </>
                    ) : (
                      f.value
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>

          {/* Ruler */}
          <div className="hidden px-8 pt-14 pb-6 md:block lg:px-16" aria-hidden>
            <div className="relative h-28">
              <div className="d1-ticks absolute inset-x-0 bottom-0 h-4" />
              <div className="absolute bottom-0 left-0 h-4 w-2/3 bg-[repeating-linear-gradient(90deg,#000_0_1px,transparent_1px_10px)]" />
              {COHORT.timeline.map((t, i) => {
                const left = MARKS[i] * 100;
                const align = i === 0 ? "left-0" : i === MARKS.length - 1 ? "right-0" : "left-1/2 -translate-x-1/2";
                return (
                  <div
                    key={t.weeks}
                    className="absolute bottom-0 flex flex-col items-center"
                    style={i === MARKS.length - 1 ? { right: 0 } : { left: `${left}%` }}
                  >
                    <div className={`absolute bottom-[84px] whitespace-nowrap ${align} text-[14px] text-d1-ink`}>
                      {t.weeks}
                    </div>
                    {i === MARKS.length - 1 ? (
                      <Orb tone="cobalt" className="mb-[-6px] size-7" />
                    ) : (
                      <div className="h-16 w-[3px] rounded-full border border-d1-stone bg-white">
                        <div className="mx-auto h-full w-px bg-d1-ink" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Rows */}
          <ol className="grid divide-y divide-d1-stone border-t border-d1-stone md:grid-cols-3 md:divide-x md:divide-y-0">
            {COHORT.timeline.map((t, i) => (
              <li key={t.weeks} className="px-6 py-6 sm:px-8">
                <p className="font-d1-mono text-[12px] tracking-[0.08em] text-d1-smoke uppercase">
                  {String(i + 1).padStart(2, "0")} · {t.weeks}
                </p>
                <p className="mt-3 text-[17px] text-d1-ink">{t.title}</p>
                <p className="mt-1 text-[15px] leading-[1.55] text-d1-smoke">{t.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </BlurFade>

      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="space-y-4 text-[16px] leading-[1.6] text-d1-graphite">
          <p>{COHORT.summary}</p>
          <p>{COHORT.graded}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <Pill href={COHORT.register.href}>{COHORT.register.label}</Pill>
            <Pill href={COHORT.waitlist.href} variant="outline">
              {COHORT.waitlist.label}
            </Pill>
          </div>
          <p className="mt-5 max-w-[48ch] text-[14px] leading-[1.6] text-d1-smoke">{COHORT.waitlistNote}</p>
        </div>
      </div>
    </Band>
  );
}
