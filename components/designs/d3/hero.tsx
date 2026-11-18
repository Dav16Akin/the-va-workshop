import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Marquee } from "@/components/ui/marquee";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { COHORT, HERO, PHOTOS, PRIMARY_CTA, SECONDARY_CTA, SKILLS } from "@/lib/content";

export function D3Hero() {
  return (
    <section className="px-2 sm:px-[7px]">
      <div className="d3-grain relative isolate flex min-h-[760px] flex-col overflow-hidden rounded-[14px] bg-d3-black text-d3-white sm:min-h-[720px] lg:h-[calc(100svh-124px)] lg:max-h-[880px] lg:min-h-[700px]">
        {/* Photograph + cinematic scrim */}
        <Image
          src={PHOTOS.heroWoman.src}
          alt={PHOTOS.heroWoman.alt}
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover object-[70%_30%] saturate-[0.85]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.72)_38%,rgba(0,0,0,0.18)_70%,rgba(0,0,0,0.35)_100%)] max-lg:bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.55)_35%,rgba(0,0,0,0.92)_75%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-[linear-gradient(0deg,rgba(0,0,0,0.85),transparent)]"
        />
        <div
          aria-hidden
          className="absolute -left-40 top-1/3 -z-10 size-[520px] rounded-full bg-d3-signal/25 blur-[140px]"
        />

        {/* Copy */}
        <div className="relative flex flex-1 flex-col justify-end px-5 pb-10 pt-40 sm:px-10 lg:justify-center lg:px-[45px] lg:pb-0 lg:pt-10">
          <BlurFade delay={0.05} duration={0.6} offset={0}>
            <p className="text-[15px] text-d3-white/90 sm:text-[17px]">{HERO.eyebrow}</p>
          </BlurFade>
          <TextAnimate
            as="h1"
            by="word"
            animation="blurInUp"
            duration={0.9}
            delay={0.1}
            once
            startOnView={false}
            className="d3-display mt-5 max-w-[720px] text-[46px] sm:text-[62px] lg:text-[72px]"
          >
            {HERO.headline}
          </TextAnimate>
          <BlurFade delay={0.55} duration={0.6} offset={8} direction="up">
            <p className="mt-6 max-w-[520px] text-[16px] leading-[1.5] text-d3-white/80 sm:text-[19px] sm:leading-[1.45]">
              {HERO.sub}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href={PRIMARY_CTA.href}
                className="inline-flex h-[52px] items-center rounded-full bg-d3-white px-6 text-[16px] text-d3-carbon transition-colors hover:bg-d3-fog"
              >
                {PRIMARY_CTA.label}
              </Link>
              <Link
                href={SECONDARY_CTA.href}
                className="text-[16px] text-d3-white underline decoration-1 underline-offset-[6px] transition-opacity hover:opacity-70"
              >
                {SECONDARY_CTA.label}
              </Link>
            </div>
            <p className="mt-5 text-[12px] text-d3-white/55 sm:text-[13px]">
              Recorded classes · Graded assignments · Certificate for eligible participants
            </p>
          </BlurFade>
        </div>

        {/* Stats row */}
        <BlurFade delay={0.8} duration={0.6} offset={0}>
          <dl className="relative grid grid-cols-3 px-5 pb-6 sm:px-10 lg:flex lg:px-[45px] lg:pb-10">
            {HERO.proof.map((item, i) => (
              <div
                key={item.label}
                className={
                  i === 0
                    ? "pr-3 lg:pr-4"
                    : "border-l border-white/20 pl-3 pr-3 sm:pl-4 lg:pr-4"
                }
              >
                <dt className="sr-only">{item.label}</dt>
                <dd className="text-[14px] text-d3-white sm:text-[15px]">{item.value}</dd>
                <dd className="mt-0.5 text-[12px] leading-snug text-d3-ash sm:text-[14px]">{item.label}</dd>
              </div>
            ))}
          </dl>
        </BlurFade>

        {/* Floating cohort ticket, desktop only */}
        <Link
          href={COHORT.register.href}
          className="group absolute bottom-[92px] right-[45px] hidden w-[300px] rounded-[14px] border border-white/15 bg-white/10 p-5 backdrop-blur-xl transition-colors hover:bg-white/15 xl:block"
        >
          <div className="flex items-center justify-between">
            <span className="d3-label text-d3-white/70">Next cohort</span>
            <span className="flex items-center gap-1.5 text-[12px] text-d3-white/80">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-d3-signal-glow opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-d3-signal-glow" />
              </span>
              Enrolling
            </span>
          </div>
          <p className="mt-4 text-[28px] leading-none tracking-[-0.025em]">{COHORT.month}</p>
          <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-4 text-[13px] text-d3-white/75">
            <span>{COHORT.facts.map((f) => f.value).join(" · ")}</span>
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </Link>

        {/* Bottom marquee strip */}
        <div className="relative border-t border-white/10 bg-d3-black/60 backdrop-blur-md">
          <Marquee className="py-3 [--duration:45s] [--gap:2.5rem]" repeat={3}>
            {SKILLS.map((skill) => (
              <span key={skill} className="flex items-center gap-10 whitespace-nowrap text-[14px] text-d3-white/85">
                {skill}
                <span aria-hidden className="size-1 rounded-full bg-d3-white/50" />
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
