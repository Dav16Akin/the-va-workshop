import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { HIRE_BENEFITS, PATHS, PATHS_INTRO, PHOTOS } from "@/lib/content";
import { Btn, Chip, Container, SectionHead } from "./primitives";
import { Reveal } from "./reveal";

export function Paths() {
  const { talent, hire } = PATHS;
  return (
    <section id="paths" className="pt-24 sm:pt-32">
      <Container>
        <Reveal>
          <SectionHead chip="Talent pool & hiring" title={PATHS_INTRO.title} sub={PATHS_INTRO.sub} />
        </Reveal>

        <div className="mt-12 grid gap-3 sm:mt-14 lg:grid-cols-2">
          {/* For VAs */}
          <Reveal className="h-full">
            <article className="flex h-full flex-col rounded-[32px] border border-d2-cloud bg-d2-snow p-2 sm:rounded-d2-card">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[26px] sm:rounded-[30px]">
                <Image
                  src={PHOTOS.talentPool.src}
                  alt={PHOTOS.talentPool.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[50%_25%]"
                />
                <Chip tone="outline" className="d2-glass absolute top-4 left-4 border-0 text-d2-obsidian">
                  {talent.label}
                </Chip>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-7">
                <h3 className="text-[28px] leading-tight font-semibold tracking-[-0.03em] text-d2-obsidian sm:text-[32px]">
                  {talent.title}
                </h3>
                <p className="mt-3 max-w-[52ch] text-[15.5px] leading-[1.5] text-d2-steel">{talent.body}</p>
                <ol className="mt-6 space-y-0 border-t border-d2-cloud">
                  {talent.steps.map((s, i) => (
                    <li key={s} className="flex items-center gap-4 border-b border-d2-cloud py-3.5">
                      <span className="w-6 text-[13px] text-d2-fog tabular-nums">0{i + 1}</span>
                      <span className="text-[15px] text-d2-graphite">{s}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-auto pt-7">
                  <Btn href={talent.cta.href} arrow>
                    {talent.cta.label}
                  </Btn>
                </div>
              </div>
            </article>
          </Reveal>

          {/* For businesses: the dark feature card */}
          <Reveal delay={0.08} className="h-full">
            <article className="relative flex h-full flex-col overflow-hidden rounded-[32px] bg-d2-graphite p-2 text-white sm:rounded-d2-card">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-32 -right-24 size-[360px] rounded-full bg-d2-electric/25 blur-[90px]"
              />
              <div className="relative flex flex-1 flex-col p-5 sm:p-7">
                <div className="flex items-center justify-between">
                  <Chip tone="dark">{hire.label}</Chip>
                  <span className="flex items-center gap-1.5 text-[12.5px] text-white/50">
                    <span aria-hidden className="size-1.5 rounded-full bg-d2-sky" />
                    Pre-vetted pool
                  </span>
                </div>
                <h3 className="mt-6 text-[28px] leading-tight font-semibold tracking-[-0.03em] sm:text-[32px]">
                  {hire.title}
                </h3>
                <p className="mt-3 max-w-[50ch] text-[15.5px] leading-[1.5] text-white/60">{hire.body}</p>

                <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                  {HIRE_BENEFITS.map((b) => (
                    <li key={b.title} className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4">
                      <p className="flex items-center gap-2 text-[15px] font-semibold">
                        <ArrowRight weight="bold" className="size-3.5 text-d2-sky" />
                        {b.title}
                      </p>
                      <p className="mt-1.5 text-[13.5px] leading-snug text-white/55">{b.detail}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center gap-4 pt-8">
                  <Btn href={hire.cta.href} variant="snow" arrow>
                    {hire.cta.label}
                  </Btn>
                </div>
              </div>
              <div className="relative mt-1 hidden h-[180px] overflow-hidden rounded-[30px] sm:block">
                <Image
                  src={PHOTOS.hireVa.src}
                  alt={PHOTOS.hireVa.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[50%_35%] opacity-90"
                />
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
