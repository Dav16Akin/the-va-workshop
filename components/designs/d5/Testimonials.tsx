import { Marquee } from "@/components/ui/marquee";
import { TESTIMONIALS, initials } from "@/lib/home-content";
import Reveal from "./Reveal";

type T = (typeof TESTIMONIALS)[number];

function Card({ t }: { t: T }) {
  return (
    <figure className="d5-card flex w-[300px] flex-col p-6 md:w-[360px]">
      <blockquote className="text-[16px] font-light leading-[1.6] text-[var(--d5-text)]">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span
          aria-hidden
          className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--d5-cobalt)] font-[family-name:var(--font-d5-display)] text-sm font-medium text-[var(--d5-lav)]"
        >
          {initials(t.name)}
        </span>
        <span>
          <span className="block text-sm font-normal text-[var(--d5-text)]">{t.name}</span>
          <span className="block text-xs text-[var(--d5-mist)]">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const half = Math.ceil(TESTIMONIALS.length / 2);
  return (
    <section id="stories" className="scroll-mt-24 overflow-hidden bg-[var(--d5-canvas)] py-24 md:py-32">
      <Reveal className="px-5 text-center md:px-10">
        <h2 className="d5-h2 mx-auto max-w-[16ch]">Graduates, in their own words.</h2>
      </Reveal>

      {/* The page's one marquee: two rows drifting in opposite directions */}
      <div className="relative mt-14 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <Marquee pauseOnHover repeat={3} className="[--duration:55s] [--gap:1rem]">
          {TESTIMONIALS.slice(0, half).map((t) => (
            <Card key={t.name} t={t} />
          ))}
        </Marquee>
        <Marquee pauseOnHover reverse repeat={3} className="mt-2 [--duration:60s] [--gap:1rem]">
          {TESTIMONIALS.slice(half).map((t) => (
            <Card key={t.name} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
