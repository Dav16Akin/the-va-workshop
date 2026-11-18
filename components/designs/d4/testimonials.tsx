import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { Marquee } from "@/components/ui/marquee";
import { TESTIMONIALS, TESTIMONIALS_INTRO, initials } from "@/lib/content";
import { Reveal } from "./motion-bits";
import { Eyebrow, Heading, container } from "./primitives";

type T = (typeof TESTIMONIALS)[number];

function Card({ t }: { t: T }) {
  return (
    <figure className="flex w-[300px] shrink-0 flex-col rounded-[26px] border border-white/[0.08] bg-d4-carbon p-6 sm:w-[360px]">
      <Quotes weight="fill" aria-hidden className="size-6 text-d4-voltage" />
      <blockquote className="mt-4 text-[16px] leading-relaxed text-white">{t.quote}</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.07] pt-5">
        <span className="grid size-10 place-items-center rounded-full bg-d4-voltage/15 font-d4-mono text-[13px] text-d4-signal ring-1 ring-d4-voltage/30">
          {initials(t.name)}
        </span>
        <span>
          <span className="block text-[14.5px] font-medium text-white">{t.name}</span>
          <span className="block font-d4-mono text-[12px] text-d4-fog">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const first = TESTIMONIALS.slice(0, 5);
  const second = TESTIMONIALS.slice(5);
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <Reveal className={`${container} text-center`}>
        <Eyebrow>Graduates</Eyebrow>
        <Heading className="mx-auto mt-5 max-w-[820px]">{TESTIMONIALS_INTRO.title}</Heading>
        <p className="mx-auto mt-5 max-w-[520px] text-[17px] leading-relaxed text-d4-ash">{TESTIMONIALS_INTRO.sub}</p>
      </Reveal>
      <div className="relative mt-14 space-y-4 [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <Marquee pauseOnHover className="p-0 [--duration:70s]">
          {first.map((t) => (
            <Card key={t.name} t={t} />
          ))}
        </Marquee>
        <Marquee pauseOnHover reverse className="p-0 [--duration:62s]">
          {second.map((t) => (
            <Card key={t.name} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
