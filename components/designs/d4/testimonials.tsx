import { TESTIMONIALS, TESTIMONIALS_INTRO, initials } from "@/lib/content";
import { Heading, card, container } from "./primitives";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className={container}>
        <div className="max-w-[820px]">
          <Heading>{TESTIMONIALS_INTRO.title}</Heading>
          <p className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-d4-ash">{TESTIMONIALS_INTRO.sub}</p>
        </div>
        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.slice(0, 6).map((t) => (
            <li key={t.name}>
              <figure className={`${card} flex h-full flex-col p-7`}>
                <blockquote className="flex-1 text-[16px] leading-relaxed text-white">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.08] pt-5">
                  <span
                    aria-hidden
                    className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 font-d4-mono text-[13px] text-d4-signal"
                  >
                    {initials(t.name)}
                  </span>
                  <span>
                    <span className="block text-[15px] font-medium text-white">{t.name}</span>
                    <span className="block text-[14px] text-d4-ash">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
