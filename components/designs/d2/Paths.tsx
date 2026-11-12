import Image from "next/image";
import { Check } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";
import Button from "./Button";
import { PATHS, PHOTOS } from "@/lib/home-content";

export default function Paths() {
  return (
    <section id="work-with-us" className="scroll-mt-20 bg-white px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <h2 className="d2-display text-black">Two ways to work with us.</h2>
          <p className="d2-serif mt-4 text-[18px] leading-[1.56] text-[#615d59]">
            Ready to earn as a VA, or ready to delegate? Pick your path and our
            team takes it from there.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <article className="grid h-full overflow-hidden rounded-[12px] bg-[#eef4fc] sm:grid-cols-[1fr_0.85fr]">
              <div className="flex flex-col p-6 md:p-8">
                <h3 className="text-[28px] font-bold leading-[1.15] tracking-[-0.03em] text-black">
                  {PATHS.talent.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.5] text-[#615d59]">{PATHS.talent.body}</p>
                <ol className="mt-6 grid gap-3">
                  {PATHS.talent.steps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-[15px] text-black/90">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#2f6fbb] text-[12px] font-semibold text-white">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <Button href={PATHS.talent.cta.href} className="mt-8 w-fit">
                  {PATHS.talent.cta.label}
                </Button>
              </div>
              <div className="relative min-h-[260px]">
                <Image
                  src={PHOTOS.floorLaptop.src}
                  alt={PHOTOS.floorLaptop.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 360px"
                  className="object-cover"
                />
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="flex h-full flex-col rounded-[12px] bg-[#051a4b] p-6 text-white md:p-8">
              <h3 className="text-[28px] font-bold leading-[1.15] tracking-[-0.03em]">
                {PATHS.hire.title}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.5] text-white/70">{PATHS.hire.body}</p>
              <ul className="mt-6 grid gap-3">
                {PATHS.hire.steps.map((step) => (
                  <li key={step} className="flex items-start gap-3 text-[15px] text-white/90">
                    <Check size={18} weight="bold" className="mt-0.5 shrink-0 text-[#97b6e5]" />
                    {step}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Button href={PATHS.hire.cta.href} variant="inverse">
                  {PATHS.hire.cta.label}
                </Button>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
