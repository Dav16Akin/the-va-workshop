import Image from "next/image";
import { HERO, PHOTOS, PRIMARY_CTA, SECONDARY_CTA } from "@/lib/content";
import { Pill, TextLink } from "./primitives";

const INCLUDED = ["Recorded classes", "Graded assignments", "Certificate for eligible participants"];

export function D3Hero() {
  return (
    <section className="px-2 sm:px-[7px]">
      <div className="relative isolate flex min-h-[720px] flex-col overflow-hidden rounded-[14px] bg-d3-black text-d3-white lg:h-[calc(100svh-124px)] lg:max-h-[880px] lg:min-h-[680px]">
        <Image
          src={PHOTOS.heroWoman.src}
          alt={PHOTOS.heroWoman.alt}
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover object-[70%_30%]"
        />
        {/* Plain scrim for legibility: dark on the copy side, clear over the subject. */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.7)_40%,rgba(0,0,0,0.2)_75%)] max-lg:bg-[linear-gradient(180deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.6)_40%,rgba(0,0,0,0.9)_75%)]"
        />

        <div className="d3-hero-enter flex flex-1 flex-col">
          <div className="flex flex-1 flex-col justify-end px-5 pb-10 pt-40 sm:px-10 lg:justify-center lg:px-[45px] lg:pb-0 lg:pt-10">
            <p className="text-[15px] text-d3-white/90 sm:text-[17px]">{HERO.eyebrow}</p>
            <h1 className="d3-display mt-5 max-w-[720px] text-balance text-[46px] sm:text-[62px] lg:text-[72px]">
              {HERO.headline}
            </h1>
            <p className="mt-6 max-w-[520px] text-[16px] leading-[1.5] text-d3-white/80 sm:text-[19px] sm:leading-[1.45]">
              {HERO.sub}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Pill href={PRIMARY_CTA.href} variant="light" className="h-[52px] text-[16px]">
                {PRIMARY_CTA.label}
              </Pill>
              <TextLink href={SECONDARY_CTA.href} className="text-[16px] text-d3-white">
                {SECONDARY_CTA.label}
              </TextLink>
            </div>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-[12px] text-d3-white/65 sm:text-[13px]">
              {INCLUDED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <dl className="grid grid-cols-3 px-5 pb-6 sm:px-10 lg:flex lg:px-[45px] lg:pb-10">
            {HERO.proof.map((item, i) => (
              <div
                key={item.label}
                className={i === 0 ? "pr-3 lg:pr-6" : "border-l border-white/20 pl-3 pr-3 sm:pl-4 lg:pr-6"}
              >
                <dt className="sr-only">{item.label}</dt>
                <dd className="text-[14px] text-d3-white sm:text-[15px]">{item.value}</dd>
                <dd className="mt-0.5 text-[12px] leading-snug text-d3-ash sm:text-[14px]">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
