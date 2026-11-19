import { SKILLS, TOOLS, toolLogo } from "@/lib/content";
import { container } from "./primitives";

export function ToolStrip() {
  return (
    <section aria-labelledby="d4-tools-title" className="pb-8">
      <div className={container}>
        <h2 id="d4-tools-title" className="text-center text-[15px] text-d4-fog">
          Trained on the tools remote teams already use
        </h2>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-6">
          {TOOLS.map((t) => (
            <li key={t.slug} className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={toolLogo(t.slug, "ffffff")} alt="" width={22} height={22} loading="lazy" className="size-[22px] opacity-75" />
              <span className="text-[15px] font-medium tracking-[-0.01em] text-white/80">{t.name}</span>
            </li>
          ))}
        </ul>
        <ul className="mt-10 flex flex-wrap justify-center gap-2 border-t border-white/[0.08] pt-8">
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
