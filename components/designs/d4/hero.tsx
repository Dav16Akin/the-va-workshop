import Image from "next/image";
import Link from "next/link";
import { HERO, PHOTOS, PRIMARY_CTA, SECONDARY_CTA } from "@/lib/content";
import { container } from "./primitives";

// "Build a remote career that clients trust." -> two lines, the second in signal blue
const [lineOne, lineTwo] = (() => {
  const h = HERO.headline;
  const i = h.indexOf(" that ");
  return i > -1 ? [h.slice(0, i), h.slice(i + 1)] : [h, ""];
})();

export function Hero() {
  return (
    <section className="pt-[168px] pb-20 sm:pt-[196px] sm:pb-28">
      <div className={`${container} d4-hero-in flex flex-col items-center text-center`}>
        <p className="font-d4-mono text-[12px] uppercase tracking-[0.15em] text-d4-fog">{HERO.eyebrow}</p>

        <h1 className="mt-6 max-w-[1100px] font-d4-sans text-[clamp(2.6rem,8.6vw,6.25rem)] font-medium leading-[0.98] tracking-[-0.05em] text-balance text-white">
          {lineOne}
          <span className="block pb-[0.06em] text-d4-signal">{lineTwo}</span>
        </h1>

        <p className="mx-auto mt-7 max-w-[620px] text-[17px] leading-relaxed text-d4-ash sm:text-[19px]">{HERO.sub}</p>

        <div className="mt-10 w-full max-w-[540px]">
          <form
            action={PRIMARY_CTA.href}
            method="get"
            className="flex flex-col gap-2 rounded-[18px] border border-white/10 bg-d4-carbon p-2 focus-within:border-d4-signal/50 sm:flex-row sm:items-center sm:rounded-[16px]"
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
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-d4-input bg-d4-voltage px-5 text-[15px] font-medium tracking-[-0.01em] text-white transition-[background-color,transform] duration-150 hover:bg-[#245cf0] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d4-signal"
            >
              {PRIMARY_CTA.label}
            </button>
          </form>
          <p className="mt-4 text-[14px] text-d4-fog">
            Hiring instead?{" "}
            <Link
              href={SECONDARY_CTA.href}
              className="text-d4-signal underline underline-offset-4 decoration-d4-signal/40 hover:decoration-d4-signal"
            >
              {SECONDARY_CTA.label}
            </Link>
          </p>
        </div>

        <dl className="mt-16 grid w-full max-w-[760px] grid-cols-3 divide-x divide-white/[0.08] rounded-d4-card border border-white/[0.08] bg-d4-carbon">
          {HERO.proof.map((p) => (
            <div key={p.label} className="flex flex-col-reverse px-3 py-5 sm:px-6">
              <dt className="mt-1 text-[12px] leading-snug text-d4-fog sm:text-[13.5px]">{p.label}</dt>
              <dd className="font-d4-mono text-[22px] font-medium tracking-[-0.02em] text-white sm:text-[30px]">{p.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={`${container} mt-16 sm:mt-20`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-d4-card border border-white/[0.08] sm:aspect-[21/9]">
          <Image
            src={PHOTOS.classroom.src}
            alt={PHOTOS.classroom.alt}
            fill
            sizes="(min-width:1200px) 1136px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
