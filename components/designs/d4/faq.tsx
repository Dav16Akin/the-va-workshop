import { Plus } from "@phosphor-icons/react/dist/ssr";
import { BRAND, FAQS, FAQ_INTRO } from "@/lib/content";
import { Reveal } from "./motion-bits";
import { Eyebrow, Heading, container } from "./primitives";

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className={`${container} grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:gap-16`}>
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>FAQ</Eyebrow>
          <Heading className="mt-5">{FAQ_INTRO.title}</Heading>
          <p className="mt-5 text-[16px] leading-relaxed text-d4-ash">
            Still unsure? Email{" "}
            <a href={`mailto:${BRAND.email}`} className="text-d4-signal underline-offset-4 hover:underline">
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
                className="group rounded-[22px] border border-white/[0.08] bg-d4-carbon transition-[border-color,box-shadow] open:border-d4-voltage/40 open:shadow-d4-glow"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer items-center gap-4 px-5 py-5 text-left sm:px-6">
                  <span className="font-d4-mono text-[12px] text-d4-fog">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 text-[16.5px] font-medium tracking-[-0.01em] text-white sm:text-[17.5px]">{f.q}</span>
                  <span className="d4-faq-icon grid size-8 shrink-0 place-items-center rounded-full border border-white/15 text-white transition-all duration-300">
                    <Plus weight="bold" className="size-3.5" />
                  </span>
                </summary>
                <p className="px-5 pb-6 pl-[3.6rem] pr-6 text-[15.5px] leading-relaxed text-d4-ash sm:pl-[4.1rem]">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
