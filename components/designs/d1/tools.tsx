import { SKILLS, TOOLS, toolLogo } from "@/lib/content";
import { Marquee } from "@/components/ui/marquee";
import { BlurFade } from "@/components/ui/blur-fade";
import { Pill } from "./primitives";

export function D1Tools() {
  return (
    <section className="border-t border-d1-stone bg-d1-canvas">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-12 xl:px-0">
        <p className="max-w-[40ch] text-[16px] text-d1-ink">
          Trained on the tools remote teams already run on
        </p>
        <Pill href="/services#training" variant="outline" className="self-start sm:self-auto">
          See the training tracks
        </Pill>
      </div>

      <div className="border-t border-d1-stone">
        <div className="mx-auto grid max-w-[1180px] grid-cols-3 border-d1-stone sm:grid-cols-4 lg:grid-cols-6 xl:border-x">
          {TOOLS.map((t, i) => (
            <BlurFade
              key={t.slug}
              inView
              delay={0.03 * i}
              className="group flex flex-col items-center justify-center gap-3 px-3 py-7 sm:py-9"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={toolLogo(t.slug, "a59f97")}
                alt={t.name}
                width={28}
                height={28}
                loading="lazy"
                className="size-7 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="text-center text-[12px] text-d1-ash transition-colors group-hover:text-d1-graphite">
                {t.name}
              </span>
            </BlurFade>
          ))}
        </div>
      </div>

      <div className="border-t border-d1-stone bg-d1-canvas py-5">
        <Marquee pauseOnHover className="[--duration:48s] [--gap:0.5rem] [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          {SKILLS.map((s) => (
            <span
              key={s}
              className="flex items-center gap-2 rounded-full border border-d1-stone bg-d1-taupe px-4 py-2 text-[14px] whitespace-nowrap text-d1-graphite"
            >
              <span className="size-1 rounded-full bg-d1-ash" aria-hidden />
              {s}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
