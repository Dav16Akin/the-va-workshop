import Image from "next/image";
import { COHORT, PHOTOS } from "@/lib/content";
import { cn } from "@/lib/utils";
import { GlowBeam, Reveal } from "./motion-bits";
import { CtaLink, container } from "./primitives";

export function Cohort() {
  const tiles = [
    ...COHORT.facts.map((f) => ({ k: f.label, v: f.value, d: null as string | null })),
    ...COHORT.timeline.map((t) => ({ k: t.weeks, v: t.title, d: t.detail })),
  ];

  return (
    <section id="cohort" className="py-20 sm:py-28">
      <div className={`${container} grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]`}>
        <Reveal className="h-full">
          <div className="relative flex h-full min-h-[560px] flex-col overflow-hidden rounded-[32px] border border-white/[0.08] bg-d4-carbon p-7 sm:p-10">
            <Image
              src={PHOTOS.cohortClass.src}
              alt=""
              fill
              sizes="(min-width:1024px) 600px, 100vw"
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#161618_8%,rgba(22,22,24,0.75)_45%,#161618_92%)]" />
            <div aria-hidden className="absolute -right-24 -top-24 size-80 rounded-full bg-d4-voltage/25 blur-3xl" />
            <GlowBeam size={200} duration={12} />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-d4-cyan/30 bg-d4-cyan/[0.06] px-3 py-1.5 font-d4-mono text-[11.5px] uppercase tracking-[0.14em] text-d4-cyan">
                <span aria-hidden className="d4-pulse size-1.5 rounded-full bg-d4-cyan" />
                {COHORT.month} · Open
              </span>
              <h2 className="mt-6 font-d4-sans text-[clamp(2.4rem,5.4vw,4.25rem)] font-medium leading-[1] tracking-[-0.045em] text-white">
                Join the <span className="text-d4-signal">next cohort</span>.
              </h2>
              <p className="mt-5 max-w-[440px] text-[16.5px] leading-relaxed text-d4-ash">{COHORT.sub}</p>
            </div>

            <div className="relative mt-auto pt-10">
              <p className="max-w-[440px] text-[14.5px] leading-relaxed text-d4-fog">{COHORT.graded}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CtaLink href={COHORT.register.href}>{COHORT.register.label}</CtaLink>
                <CtaLink href={COHORT.waitlist.href} variant="ghost">
                  {COHORT.waitlist.label}
                </CtaLink>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {tiles.map((t, i) => (
              <li key={t.k}>
                <Reveal delay={i * 0.05} className="h-full">
                  <div
                    className={cn(
                      "flex h-full min-h-[132px] flex-col justify-between border px-6 py-5",
                      i % 2 === 0 ? "d4-tile-a" : "d4-tile-b",
                      i >= 3 ? "border-d4-voltage/30 bg-d4-voltage/[0.06]" : "border-white/10 bg-transparent",
                    )}
                  >
                    <p className="font-d4-mono text-[11.5px] uppercase tracking-[0.14em] text-d4-fog">{t.k}</p>
                    <div>
                      <p className="text-[20px] font-medium tracking-[-0.02em] text-white">{t.v}</p>
                      {t.d && <p className="mt-1 text-[13.5px] leading-snug text-d4-ash">{t.d}</p>}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={0.2}>
            <p className="rounded-[22px] border border-dashed border-white/15 px-6 py-5 text-[14.5px] leading-relaxed text-d4-ash">
              {COHORT.waitlistNote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
