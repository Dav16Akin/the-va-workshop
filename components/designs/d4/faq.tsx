import { Plus } from "@phosphor-icons/react/dist/ssr";
import { BRAND, FAQS, FAQ_INTRO } from "@/lib/content";
import { Reveal } from "./motion-bits";
import { Heading, container } from "./primitives";

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className={`${container} grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:gap-16`}>
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <Heading>{FAQ_INTRO.title}</Heading>
          <p className="mt-5 text-[16px] leading-relaxed text-d4-ash">
            Still unsure? Email{" "}
            <a
              href={`mailto:${BRAND.email}`}
              className="text-d4-signal underline underline-offset-4 decoration-d4-signal/40 hover:decoration-d4-signal"
            >
              {BRAND.email}
            </a>
            <span className="mt-1 block font-d4-mono text-[12.5px] text-d4-fog">{BRAND.hours}</span>
          </p>
        </Reveal>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={Math.min(i, 4) * 0.04}>
              <details
                name="d4-faq"
                className="rounded-d4-card border border-white/[0.08] bg-d4-carbon transition-[border-color,box-shadow] duration-300 open:border-d4-voltage/40 open:shadow-d4-glow"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer items-center gap-4 rounded-d4-card px-5 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d4-signal sm:px-6">
                  <span className="flex-1 text-[16.5px] font-medium tracking-[-0.01em] text-white sm:text-[17.5px]">{f.q}</span>
                  <span className="d4-faq-icon grid size-8 shrink-0 place-items-center rounded-full border border-white/15 text-white transition-[transform,background-color,border-color] duration-200">
                    <Plus weight="bold" className="size-3.5" />
                  </span>
                </summary>
                <p className="px-5 pb-6 pr-14 text-[16px] leading-relaxed text-d4-ash sm:px-6 sm:pr-16">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
