import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { HERO, PRIMARY_CTA, SECONDARY_CTA } from "@/lib/content";
import { GlowBeam, HeroAtmosphere, Reveal } from "./motion-bits";
import { container } from "./primitives";
import Link from "next/link";

// "Build a remote career that clients trust." -> two-tone lines
const [lineOne, lineTwo] = (() => {
  const h = HERO.headline;
  const i = h.indexOf(" that ");
  return i > -1 ? [h.slice(0, i), h.slice(i + 1)] : [h, ""];
})();

export function Hero() {
  return (
    <section className="relative isolate pt-[168px] pb-20 sm:pt-[196px] sm:pb-28">
      <HeroAtmosphere />
      <div className={`${container} relative flex flex-col items-center text-center`}>
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-d4-mono text-[11.5px] uppercase tracking-[0.15em] text-d4-ash backdrop-blur">
            <span aria-hidden className="size-1.5 rounded-full bg-d4-voltage shadow-[0_0_10px_#2f6bff]" />
            {HERO.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-7 max-w-[1100px] font-d4-sans text-[clamp(2.6rem,8.6vw,6.25rem)] font-medium leading-[0.98] tracking-[-0.05em] text-balance text-white">
            {lineOne}
            <span className="block bg-[linear-gradient(180deg,#9cc3ff_0%,#7fb2ff_45%,#2f6bff_130%)] bg-clip-text pb-[0.06em] text-transparent">
              {lineTwo}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-7 max-w-[620px] text-[17px] leading-relaxed text-d4-ash sm:text-[19px]">{HERO.sub}</p>
        </Reveal>

        <Reveal delay={0.18} className="mt-10 w-full max-w-[540px]">
          <form
            action={PRIMARY_CTA.href}
            method="get"
            className="relative flex flex-col gap-2 rounded-[18px] border border-white/10 bg-d4-carbon/90 p-2 shadow-d4-glow-lg backdrop-blur sm:flex-row sm:items-center sm:rounded-[16px]"
          >
            <label htmlFor="d4-hero-email" className="sr-only">
              Email address
            </label>
            <input
              id="d4-hero-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email address"
              className="h-12 min-w-0 flex-1 rounded-d4-input bg-transparent px-4 text-[16px] text-white placeholder:text-d4-fog focus:outline-none"
            />
            <button
              type="submit"
              className="group/btn inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-d4-input bg-d4-voltage px-5 text-[15px] font-medium text-white transition-shadow hover:shadow-d4-glow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d4-signal"
            >
              {PRIMARY_CTA.label}
              <ArrowRight weight="bold" className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
            </button>
            <GlowBeam size={140} duration={8} />
          </form>
          <p className="mt-4 text-[14px] text-d4-fog">
            Hiring instead?{" "}
            <Link href={SECONDARY_CTA.href} className="text-d4-signal underline-offset-4 hover:underline">
              {SECONDARY_CTA.label} →
            </Link>
          </p>
        </Reveal>

        <Reveal delay={0.24} className="mt-16 w-full max-w-[760px]">
          <dl className="grid grid-cols-3 divide-x divide-white/[0.08] rounded-[22px] border border-white/[0.08] bg-d4-carbon/60 backdrop-blur">
            {HERO.proof.map((p) => (
              <div key={p.label} className="flex flex-col-reverse px-3 py-5 sm:px-6">
                <dt className="mt-1 text-[12px] leading-snug text-d4-fog sm:text-[13.5px]">{p.label}</dt>
                <dd className="font-d4-mono text-[22px] font-medium tracking-[-0.02em] text-white sm:text-[30px]">{p.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
