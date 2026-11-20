import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { TESTIMONIALS, TESTIMONIALS_INTRO, initials } from "@/lib/content";
import { Reveal } from "./motion-bits";
import { Heading, container } from "./primitives";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className={container}>
        <Reveal className="max-w-[820px]">
          <Heading>{TESTIMONIALS_INTRO.title}</Heading>
          <p className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-d4-ash">{TESTIMONIALS_INTRO.sub}</p>
        </Reveal>
        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.slice(0, 6).map((t, i) => (
            <li key={t.name}>
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <figure className="flex h-full flex-col rounded-[26px] border border-white/[0.08] bg-d4-carbon p-7">
                  <Quotes weight="fill" aria-hidden className="mb-4 size-6 text-d4-voltage" />
                  <blockquote className="flex-1 text-[16px] leading-relaxed text-white">{t.quote}</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.08] pt-5">
                    <span
                      aria-hidden
                      className="grid size-10 shrink-0 place-items-center rounded-full bg-d4-voltage/15 font-d4-mono text-[13px] text-d4-signal ring-1 ring-d4-voltage/30"
                    >
                      {initials(t.name)}
                    </span>
                    <span>
                      <span className="block text-[15px] font-medium text-white">{t.name}</span>
                      <span className="block text-[14px] text-d4-ash">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
