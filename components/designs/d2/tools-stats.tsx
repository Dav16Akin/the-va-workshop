import { Marquee } from "@/components/ui/marquee";
import { HERO, SKILLS, TOOLS, toolLogo } from "@/lib/content";
import { Chip, Container } from "./primitives";
import { Reveal } from "./reveal";
import { StatValue } from "./stat-value";

export function ToolStrip() {
  return (
    <section aria-label="Tools and skills we teach" className="pt-14 sm:pt-20">
      <Container>
        <p className="text-center text-[13.5px] text-d2-fog">Trained on the tools remote teams already use</p>
      </Container>
      <div className="d2-fade-x mx-auto mt-6 max-w-[1240px]">
        <Marquee pauseOnHover className="d2-marquee [--duration:45s] [--gap:3.5rem]" repeat={3}>
          {TOOLS.map((t) => (
            <span key={t.slug} className="d2-logo flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={toolLogo(t.slug, "18181b")} alt="" width={22} height={22} className="size-[22px]" loading="lazy" />
              <span className="text-[17px] font-semibold tracking-[-0.02em] whitespace-nowrap text-d2-graphite">{t.name}</span>
            </span>
          ))}
        </Marquee>
      </div>
      <Container>
        <ul className="mx-auto mt-8 flex max-w-[860px] flex-wrap justify-center gap-2">
          {SKILLS.map((s) => (
            <li key={s}>
              <Chip tone="outline" className="px-3 py-1.5 text-[13px]">
                {s}
              </Chip>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function Stats() {
  return (
    <section aria-label="At a glance" className="pt-16 sm:pt-24">
      <Container>
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-3">
          {HERO.proof.map((p, i) => {
            return (
              <Reveal key={p.label} delay={i * 0.06}>
                <div className="border-t border-d2-mist pt-5 pb-6 sm:pb-0">
                  <p>
                    <span className="block text-[44px] leading-none font-medium tracking-[-0.04em] text-d2-obsidian sm:text-[52px]">
                      <StatValue value={p.value} />
                    </span>
                    <span className="mt-3 flex items-center gap-2 text-[15px] text-d2-steel">
                      {i === 0 && <span aria-hidden className="size-1.5 rounded-full bg-d2-electric" />}
                      {p.label}
                    </span>
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
