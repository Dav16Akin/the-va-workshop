import Image from "next/image";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { COHORT, HERO, PHOTOS, PROGRAMMES, TESTIMONIALS, initials } from "@/lib/content";
import { Chip, Container, Dot } from "./primitives";
import { HeroKeyword } from "./hero-keyword";
import { Reveal } from "./reveal";

export function Hero() {
  const faces = TESTIMONIALS.slice(0, 4);
  return (
    <section className="pt-10 sm:pt-16 lg:pt-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <Reveal>
              <Chip tone="outline" className="mb-6">
                <Dot />
                {HERO.eyebrow}
              </Chip>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="max-w-[14ch] text-[42px] leading-[1.02] font-semibold tracking-[-0.045em] text-balance text-d2-obsidian sm:text-[60px] lg:max-w-none lg:text-[62px] xl:text-[68px]">
                {HERO.headline}
              </h1>
              <div
                aria-hidden
                className="mt-1 flex flex-wrap items-baseline gap-x-3 text-[30px] leading-[1.1] font-semibold tracking-[-0.04em] sm:text-[44px] lg:text-[50px]"
              >
                <span className="text-[#a1a1aa]">Start with your</span>
                <HeroKeyword words={HERO.rotating} className="text-d2-electric" />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:pt-14">
            <Reveal delay={0.12}>
              <p className="max-w-[44ch] text-[16.5px] leading-[1.5] text-d2-steel sm:text-[17.5px]">{HERO.sub}</p>

              <form action="/register" method="get" className="mt-7">
                <label htmlFor="d2-email" className="sr-only">
                  Email address
                </label>
                <div className="flex flex-col gap-2 rounded-[20px] border border-d2-cloud bg-d2-paper p-1.5 sm:flex-row lg:flex-col">
                  <input
                    id="d2-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@email.com"
                    className="h-12 w-full min-w-0 rounded-d2-btn border sm:flex-1 lg:flex-none border-d2-cloud bg-d2-snow px-4 text-[15px] text-d2-obsidian placeholder:text-d2-fog focus:border-d2-electric focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="d2-btn-obsidian group inline-flex h-12 items-center justify-center gap-2 rounded-d2-btn px-5 text-[14.5px] font-medium"
                  >
                    Get the cohort brief
                    <ArrowRight weight="bold" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </form>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {faces.map((t, i) => (
                    <span
                      key={t.name}
                      className="grid size-8 place-items-center rounded-full border-2 border-d2-snow text-[11px] font-semibold text-white"
                      style={{ background: ["#18181b", "#3f3f46", "#0b5cff", "#52525b"][i] }}
                    >
                      {initials(t.name)}
                    </span>
                  ))}
                </div>
                <p className="text-[13.5px] leading-tight text-d2-steel">
                  <span className="font-semibold text-d2-obsidian">{HERO.proof[0].value}</span> {HERO.proof[0].label}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      {/* Full-width rounded photograph with glass overlays */}
      <div className="mt-12 px-2 sm:mt-16 sm:px-3">
        <Reveal delay={0.18}>
          <div className="relative h-[520px] overflow-hidden rounded-[28px] sm:h-[600px] sm:rounded-[44px] lg:h-[640px]">
            <Image
              src={PHOTOS.heroWoman.src}
              alt={PHOTOS.heroWoman.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[60%_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-d2-obsidian/45 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-d2-graphite/35 via-d2-graphite/5 to-transparent" />

            <div className="absolute top-4 right-4 hidden flex-col items-end gap-2 sm:top-6 sm:right-6 sm:flex">
              {PROGRAMMES.map((p) => (
                <span
                  key={p.slug}
                  className="d2-glass inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-medium text-d2-obsidian"
                >
                  <CheckCircle weight="fill" className="size-4 text-d2-electric" />
                  {p.name}
                </span>
              ))}
            </div>

            <div className="absolute inset-x-3 bottom-3 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:w-[420px]">
              <div className="d2-glass rounded-[24px] p-5 sm:rounded-[28px] sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <Chip tone="electric">Next cohort</Chip>
                  <span className="text-[13px] text-d2-steel">{COHORT.facts[2].value}</span>
                </div>
                <p className="mt-4 text-[26px] leading-none font-semibold tracking-[-0.03em] text-d2-obsidian sm:text-[30px]">
                  {COHORT.month}
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-d2-obsidian/10 pt-4">
                  {COHORT.timeline.map((t) => (
                    <div key={t.weeks}>
                      <p className="text-[11.5px] tracking-wide text-d2-fog uppercase">{t.weeks}</p>
                      <p className="mt-1 text-[13px] leading-snug font-medium text-d2-obsidian">{t.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
