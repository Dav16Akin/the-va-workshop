import Image from "next/image";
import { COHORT, PHOTOS } from "@/lib/content";
import { CtaLink, card, container } from "./primitives";

export function Cohort() {
  return (
    <section id="cohort" className="py-20 sm:py-28">
      <div className={`${container} grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]`}>
        <div className={`${card} flex h-full flex-col overflow-hidden`}>
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={PHOTOS.cohortClass.src}
              alt={PHOTOS.cohortClass.alt}
              fill
              sizes="(min-width:1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col p-7 sm:p-10">
            <p className="font-d4-mono text-[12px] uppercase tracking-[0.15em] text-d4-signal">{COHORT.month} · Open</p>
            <h2 className="mt-4 font-d4-sans text-[clamp(2.25rem,4.6vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.04em] text-white">
              {COHORT.title}
            </h2>
            <p className="mt-5 max-w-[460px] text-[16.5px] leading-relaxed text-d4-ash">{COHORT.sub}</p>
            <p className="mt-6 max-w-[460px] text-[15px] leading-relaxed text-d4-ash">{COHORT.graded}</p>
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <CtaLink href={COHORT.register.href}>{COHORT.register.label}</CtaLink>
              <CtaLink href={COHORT.waitlist.href} variant="ghost">
                {COHORT.waitlist.label}
              </CtaLink>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <dl className={`${card} grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-3 sm:divide-x sm:divide-y-0`}>
            {COHORT.facts.map((f) => (
              <div key={f.label} className="flex flex-col-reverse px-6 py-5">
                <dt className="mt-1 font-d4-mono text-[11.5px] uppercase tracking-[0.14em] text-d4-fog">{f.label}</dt>
                <dd className="text-[18px] font-medium tracking-[-0.02em] text-white">{f.value}</dd>
              </div>
            ))}
          </dl>

          <ol className={`${card} flex-1 divide-y divide-white/[0.08]`}>
            {COHORT.timeline.map((t) => (
              <li key={t.title} className="grid gap-1 px-6 py-6 sm:grid-cols-[110px_1fr] sm:gap-6">
                <p className="font-d4-mono text-[12px] uppercase tracking-[0.12em] text-d4-signal sm:pt-1">{t.weeks}</p>
                <div>
                  <p className="text-[20px] font-medium tracking-[-0.02em] text-white">{t.title}</p>
                  <p className="mt-1 text-[16px] leading-relaxed text-d4-ash">{t.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="rounded-d4-card border border-dashed border-white/15 px-6 py-5 text-[15px] leading-relaxed text-d4-ash">
            {COHORT.waitlistNote}
          </p>
        </div>
      </div>
    </section>
  );
}
