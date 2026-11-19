import { FINAL_CTA } from "@/lib/content";
import { CtaLink, card, container } from "./primitives";

export function FinalCta() {
  return (
    <section id="register" className="py-16 sm:py-24">
      <div className={container}>
        <div className={`${card} grid gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-end`}>
          <div className="max-w-[720px]">
            <h2 className="font-d4-sans text-[clamp(2.4rem,6vw,4.75rem)] font-medium leading-[1] tracking-[-0.045em] text-balance text-white">
              {FINAL_CTA.title}
            </h2>
            <p className="mt-6 max-w-[540px] text-[17px] leading-relaxed text-d4-ash">{FINAL_CTA.sub}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
            <CtaLink href={FINAL_CTA.primary.href}>{FINAL_CTA.primary.label}</CtaLink>
            <CtaLink href={FINAL_CTA.secondary.href} variant="ghost">
              {FINAL_CTA.secondary.label}
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
