import { Marquee } from "@/components/ui/marquee";
import { SKILLS, TOOLS, toolLogo } from "@/lib/content";
import { container } from "./primitives";

export function ToolStrip() {
  return (
    <section aria-label="Skills and tools we teach" className="relative pb-8">
      <div className={container}>
        <p className="text-center font-d4-mono text-[12px] uppercase tracking-[0.15em] text-d4-fog">
          Trained on the tools remote teams already use
        </p>
      </div>
      <div className="relative mt-8 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <Marquee pauseOnHover className="[--duration:46s] [--gap:0.75rem] p-0">
          {TOOLS.map((t) => (
            <div
              key={t.slug}
              className="flex h-[76px] w-[184px] items-center justify-center gap-3 rounded-d4-pill border border-white/[0.07] bg-d4-carbon px-5 sm:h-[88px] sm:w-[216px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={toolLogo(t.slug, "ffffff")} alt="" width={22} height={22} loading="lazy" className="size-[22px] opacity-75" />
              <span className="text-[15px] font-medium tracking-[-0.01em] text-white/75">{t.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
      <div className={`${container} mt-8`}>
        <ul className="flex flex-wrap justify-center gap-2">
          {SKILLS.map((s) => (
            <li
              key={s}
              className="rounded-full border border-white/[0.08] px-3.5 py-1.5 font-d4-mono text-[12px] tracking-[0.02em] text-d4-ash"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
