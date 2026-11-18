import Image from "next/image";
import { CheckCircle, Bell } from "@phosphor-icons/react/dist/ssr";
import { COHORT, PHOTOS } from "@/lib/content";
import { Btn, Chip, Container } from "./primitives";
import { Reveal } from "./reveal";

export function Cohort() {
  return (
    <section id="cohort" className="pt-24 sm:pt-32">
      <Container>
        <Reveal>
          <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-10">
            <div className="md:col-span-7">
              <Chip className="mb-5">
                <span aria-hidden className="size-1.5 rounded-full bg-d2-electric" />
                {COHORT.month} cohort
              </Chip>
              <h2 className="text-[34px] leading-[1.06] font-semibold tracking-[-0.035em] text-d2-obsidian sm:text-[44px] lg:text-[52px]">
                {COHORT.title}
              </h2>
              <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.5] text-d2-steel sm:text-[17px]">{COHORT.sub}</p>
            </div>
            <div className="md:col-span-5 md:pb-2">
              <div className="grid grid-cols-3 gap-3 border-t border-d2-mist pt-5">
                {COHORT.facts.map((f) => (
                  <div key={f.label}>
                    <p className="text-[12.5px] text-d2-fog">{f.label}</p>
                    <p className="mt-1 text-[15.5px] leading-snug font-semibold tracking-[-0.01em] text-d2-obsidian">
                      {f.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-2.5">
                <Btn href={COHORT.register.href} arrow>
                  {COHORT.register.label}
                </Btn>
                <Btn href={COHORT.waitlist.href} variant="ghost">
                  {COHORT.waitlist.label}
                </Btn>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Photographic breath with a frosted timeline card */}
      <div className="mt-14 px-2 sm:mt-16 sm:px-3">
        <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[32px] sm:rounded-[56px]">
          <div className="relative h-[780px] sm:h-[680px]">
            <Image
              src={PHOTOS.cohortClass.src}
              alt={PHOTOS.cohortClass.alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-d2-snow/0 via-d2-obsidian/10 to-d2-obsidian/40" />
          </div>

          <div className="absolute inset-x-3 bottom-3 sm:inset-x-0 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2 sm:px-6">
            <Reveal>
              <div className="d2-glass mx-auto max-w-[640px] rounded-[26px] p-5 sm:rounded-[30px] sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-[16px] font-semibold text-d2-obsidian">
                    Programme timeline <span className="font-normal text-d2-fog">· {COHORT.month}</span>
                  </p>
                  <p className="text-[13px] text-d2-steel">{COHORT.facts[0].value}</p>
                </div>
                <ol className="mt-4 divide-y divide-d2-obsidian/10">
                  {COHORT.timeline.map((t, i) => (
                    <li key={t.weeks} className="grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-1 py-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                      <span className="grid size-9 place-items-center rounded-full bg-d2-obsidian text-[13px] font-semibold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-[15.5px] font-semibold text-d2-obsidian">{t.title}</p>
                        <p className="text-[14px] leading-snug text-d2-steel">{t.detail}</p>
                      </div>
                      <span className="col-start-2 w-fit rounded-d2-badge bg-d2-obsidian/[0.06] px-2.5 py-1 text-[12.5px] font-medium text-d2-iron sm:col-start-auto">
                        {t.weeks}
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="mt-2 flex items-start gap-2.5 rounded-2xl bg-d2-snow/70 p-3.5 text-[13.5px] leading-snug text-d2-steel">
                  <CheckCircle weight="fill" className="mt-px size-4 shrink-0 text-d2-electric" />
                  {COHORT.graded}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <Container>
        <div className="mt-6 grid gap-4 rounded-[28px] border border-d2-cloud p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6">
          <div className="flex items-start gap-3.5">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-d2-paper text-d2-obsidian">
              <Bell className="size-[18px]" />
            </span>
            <div>
              <p className="text-[14.5px] leading-[1.5] text-d2-steel">{COHORT.summary}</p>
              <p className="mt-1.5 text-[14.5px] leading-[1.5] text-d2-steel">{COHORT.waitlistNote}</p>
            </div>
          </div>
          <Btn href={COHORT.waitlist.href} variant="ghost" arrow className="w-full sm:w-auto">
            {COHORT.waitlist.label}
          </Btn>
        </div>
      </Container>
    </section>
  );
}
