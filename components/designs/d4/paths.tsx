import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { PATHS, PATHS_INTRO, PHOTOS } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Reveal } from "./motion-bits";
import { CtaLink, Eyebrow, Heading, container } from "./primitives";

export function Paths() {
  const cards = [
    { ...PATHS.talent, photo: PHOTOS.talentPool, tone: "blue" as const },
    { ...PATHS.hire, photo: PHOTOS.hireVa, tone: "dark" as const },
  ];

  return (
    <section id="paths" className="py-20 sm:py-28">
      <div className={container}>
        <Reveal className="mx-auto max-w-[760px] text-center">
          <Eyebrow>Two paths</Eyebrow>
          <Heading className="mt-5">{PATHS_INTRO.title}</Heading>
          <p className="mx-auto mt-5 max-w-[560px] text-[17px] leading-relaxed text-d4-ash">{PATHS_INTRO.sub}</p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {cards.map((c, i) => {
            const blue = c.tone === "blue";
            return (
              <Reveal key={c.title} delay={i * 0.08} className="h-full">
                <article
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-[32px] border",
                    blue
                      ? "border-d4-voltage/40 bg-[linear-gradient(160deg,#2f6bff_0%,#1f4fd6_45%,#0f2a7a_100%)]"
                      : "border-white/[0.08] bg-d4-carbon",
                  )}
                >
                  {blue && (
                    <div aria-hidden className="absolute -left-20 -top-28 size-96 rounded-full bg-d4-cyan/25 blur-3xl" />
                  )}
                  <div className="relative p-7 sm:p-10">
                    <p
                      className={cn(
                        "font-d4-mono text-[12px] uppercase tracking-[0.15em]",
                        blue ? "text-white/85" : "text-d4-signal",
                      )}
                    >
                      {c.label}
                    </p>
                    <h3 className="mt-4 text-[clamp(1.9rem,3.6vw,2.75rem)] font-medium leading-[1.04] tracking-[-0.035em] text-white">
                      {c.title}
                    </h3>
                    <p className={cn("mt-4 max-w-[480px] text-[16px] leading-relaxed", blue ? "text-white/85" : "text-d4-ash")}>
                      {c.body}
                    </p>
                    <ul className="mt-7 space-y-3">
                      {c.steps.map((s) => (
                        <li key={s} className="flex items-start gap-3 text-[15px] text-white">
                          <CheckCircle
                            weight="fill"
                            className={cn("mt-0.5 size-5 shrink-0", blue ? "text-white" : "text-d4-voltage")}
                          />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <CtaLink href={c.cta.href} variant={blue ? "light" : "primary"} className="mt-9">
                      {c.cta.label}
                    </CtaLink>
                  </div>
                  <div className="relative mx-4 mb-4 mt-auto aspect-[16/9] overflow-hidden rounded-[22px] sm:mx-6 sm:mb-6">
                    <Image src={c.photo.src} alt={c.photo.alt} fill sizes="(min-width:1024px) 560px, 100vw" className="object-cover object-[50%_22%]" />
                    <div
                      className={cn(
                        "absolute inset-0",
                        blue
                          ? "bg-gradient-to-t from-[#0f2a7a]/40 to-transparent"
                          : "bg-gradient-to-t from-d4-carbon/50 to-transparent",
                      )}
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
