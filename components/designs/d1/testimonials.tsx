import { TESTIMONIALS, TESTIMONIALS_INTRO, initials } from "@/lib/content";
import { Marquee } from "@/components/ui/marquee";
import { Orb, SectionHead, type OrbTone } from "./primitives";

const TONES: OrbTone[] = ["cobalt", "ice", "navy", "azure", "mist"];

type T = (typeof TESTIMONIALS)[number];

function Card({ t, tone }: { t: T; tone: OrbTone }) {
  return (
    <figure className="flex w-[300px] shrink-0 flex-col justify-between rounded-[20px] border border-d1-stone bg-white p-6 sm:w-[360px]">
      <blockquote className="text-[16px] leading-[1.55] text-d1-ink">&ldquo;{t.quote}&rdquo;</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <Orb tone={tone} className="size-9">
          <span
            className={
              tone === "ice" || tone === "mist"
                ? "text-[12px] font-medium text-d1-navy"
                : "text-[12px] font-medium text-white"
            }
          >
            {initials(t.name)}
          </span>
        </Orb>
        <span>
          <span className="block text-[14px] text-d1-ink">{t.name}</span>
          <span className="block text-[13px] text-d1-smoke">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function D1Testimonials() {
  const first = TESTIMONIALS.slice(0, 5);
  const second = TESTIMONIALS.slice(5);
  return (
    <section id="stories" className="border-t border-d1-stone bg-d1-taupe">
      <div className="mx-auto max-w-[1180px] px-5 pt-24 pb-14 sm:px-8 sm:pt-32 xl:px-8">
        <SectionHead eyebrow="Graduate stories" title={TESTIMONIALS_INTRO.title} sub={TESTIMONIALS_INTRO.sub} />
      </div>
      <div className="space-y-1 pb-24 sm:pb-32 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
        <Marquee pauseOnHover repeat={3} className="[--duration:70s] [--gap:0.75rem]">
          {first.map((t, i) => (
            <Card key={t.name} t={t} tone={TONES[i % TONES.length]} />
          ))}
        </Marquee>
        <Marquee pauseOnHover reverse repeat={3} className="[--duration:70s] [--gap:0.75rem]">
          {second.map((t, i) => (
            <Card key={t.name} t={t} tone={TONES[(i + 2) % TONES.length]} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
