import { HERO, PRIMARY_CTA, SECONDARY_CTA } from "@/lib/content";
import { BlurFade } from "@/components/ui/blur-fade";
import { Ticker } from "./ticker";
import { Pill } from "./primitives";
import { TrackPanel } from "./track-panel";
import { HeroHeadline } from "./hero-headline";

/** "300+" -> { n: 300, suffix: "+" }, "6 weeks" -> { n: 6, suffix: " weeks" } */
function splitStat(value: string) {
  const m = value.match(/^(\d+)(.*)$/);
  return m ? { n: Number(m[1]), suffix: m[2] } : null;
}

export function D1Hero() {
  return (
    <section className="bg-d1-canvas">
      <div className="mx-auto max-w-[1180px] px-5 pt-14 pb-16 sm:px-8 sm:pt-24 xl:px-0">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <BlurFade delay={0.05}>
              <p className="mb-6 inline-flex items-center gap-2 text-[14px] text-d1-smoke">
                <span className="size-1.5 rounded-full bg-d1-ink" aria-hidden />
                {HERO.eyebrow}
              </p>
            </BlurFade>
            <HeroHeadline
              text={HERO.headline}
              className="d1-display max-w-[13ch] text-[44px] text-balance sm:text-[58px] lg:text-[64px]"
            />
            <BlurFade delay={0.35} className="mt-8 flex flex-wrap gap-2">
              <Pill href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Pill>
              <Pill href={SECONDARY_CTA.href} variant="outline">
                {SECONDARY_CTA.label}
              </Pill>
            </BlurFade>
          </div>

          <BlurFade delay={0.25} className="lg:pb-2">
            <p className="max-w-[44ch] text-[17px] leading-[1.6] text-d1-ink sm:text-[18px]">{HERO.sub}</p>
            <dl className="mt-8 grid grid-cols-3 divide-x divide-d1-stone border-y border-d1-stone">
              {HERO.proof.map((p) => {
                const s = splitStat(p.value);
                return (
                  <div key={p.label} className="px-3 py-4 first:pl-0 sm:px-5">
                    <dt className="sr-only">{p.label}</dt>
                    <dd>
                      <span className="block font-d1-display text-[22px] font-light tracking-[-0.02em] whitespace-nowrap sm:text-[32px]">
                        {s ? (
                          <>
                            <Ticker value={s.n} className="tracking-[-0.02em] text-d1-ink" />
                            {s.suffix}
                          </>
                        ) : (
                          p.value
                        )}
                      </span>
                      <span className="mt-1 block text-[12px] leading-snug text-d1-smoke sm:text-[13px]">{p.label}</span>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </BlurFade>
        </div>

        <BlurFade delay={0.45} className="mt-14 sm:mt-16">
          <TrackPanel />
        </BlurFade>
      </div>
    </section>
  );
}
