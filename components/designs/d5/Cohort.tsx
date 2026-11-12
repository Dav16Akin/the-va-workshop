import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { BorderBeam } from "@/components/ui/border-beam";
import { COHORT, PRIMARY_CTA, PROGRAMMES } from "@/lib/home-content";
import Reveal from "./Reveal";

export default function Cohort() {
  return (
    <section id="cohorts" className="scroll-mt-24 bg-[var(--d5-canvas)] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] bg-[var(--d5-indigo)] [box-shadow:var(--d5-glow-inset),var(--d5-inset)]">
            <BorderBeam size={260} duration={9} colorFrom="#4a90e2" colorTo="#97b6e5" borderWidth={1.5} />
            <div className="grid lg:grid-cols-[1.05fr_1fr]">
              {/* Left: the date and how it runs */}
              <div className="p-8 md:p-14">
                <p className="text-sm font-light text-[var(--d5-lav)]">Next cohort</p>
                <h2 className="d5-display mt-4 text-[clamp(2.75rem,6vw,5rem)]">
                  Begins {COHORT.month}.
                </h2>
                <p className="mt-6 max-w-[44ch] text-[17px] leading-[1.6] text-[var(--d5-fog)]">
                  {COHORT.summary} {COHORT.graded}
                </p>

                <ol className="mt-10 grid gap-6 sm:grid-cols-3">
                  {COHORT.timeline.map((t) => (
                    <li key={t.weeks} className="border-t border-[rgb(151_182_229/0.3)] pt-4">
                      <p className="font-[family-name:var(--font-d5-display)] text-sm font-medium text-[var(--d5-lav)]">
                        {t.weeks}
                      </p>
                      <p className="mt-2 text-[15px] font-normal text-[var(--d5-text)]">{t.title}</p>
                      <p className="mt-1 text-sm leading-snug text-[var(--d5-mist)]">{t.detail}</p>
                    </li>
                  ))}
                </ol>

                <div className="mt-12 flex flex-wrap items-center gap-3">
                  <Link href={PRIMARY_CTA.href} className="d5-btn d5-btn-primary group">
                    {PRIMARY_CTA.label}
                    <ArrowRight size={15} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                  <Link href={COHORT.waitlist.href} className="d5-btn d5-btn-ghost">
                    {COHORT.waitlist.label}
                  </Link>
                </div>
              </div>

              {/* Right: the three programmes */}
              <div className="border-t border-[rgb(22_48_90/0.9)] bg-[rgb(2_10_31/0.35)] p-8 md:p-14 lg:border-l lg:border-t-0">
                <h3 className="font-[family-name:var(--font-d5-display)] text-xl font-medium tracking-tight">
                  Choose your track
                </h3>
                <ul className="mt-6 flex flex-col gap-3">
                  {PROGRAMMES.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/programmes/${p.slug}`}
                        className="d5-card d5-focus group block p-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <p className="font-[family-name:var(--font-d5-display)] text-lg font-medium leading-tight">
                            {p.name}
                          </p>
                          <ArrowUpRight
                            size={17}
                            className="mt-0.5 shrink-0 text-[var(--d5-mist)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--d5-text)]"
                            aria-hidden
                          />
                        </div>
                        <p className="mt-2 text-sm leading-[1.55] text-[var(--d5-fog)]">{p.short}</p>
                        <p className="mt-4 flex flex-wrap gap-1.5">
                          {p.tools.slice(0, 3).map((tool) => (
                            <span
                              key={tool}
                              className="rounded-full bg-[rgb(74_144_226/0.14)] px-2.5 py-1 text-xs font-normal text-[var(--d5-lav)]"
                            >
                              {tool}
                            </span>
                          ))}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
