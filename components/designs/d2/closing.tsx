import Image from "next/image";
import Link from "next/link";
import { BRAND, FAQ_INTRO, FINAL_CTA, FOOTER_COLUMNS, SOCIALS } from "@/lib/content";
import { Btn, Chip, Container } from "./primitives";
import { FaqList } from "./faq";
import { Reveal } from "./reveal";

export function Faq() {
  return (
    <section id="faq" className="pt-24 sm:pt-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Chip className="mb-5">FAQ</Chip>
              <h2 className="text-[34px] leading-[1.06] font-semibold tracking-[-0.035em] text-d2-obsidian sm:text-[44px] lg:text-[52px]">
                {FAQ_INTRO.title}
              </h2>
              <p className="mt-5 max-w-[34ch] text-[15.5px] leading-[1.5] text-d2-steel">
                Still unsure? Write to{" "}
                <a href={`mailto:${BRAND.email}`} className="font-medium text-d2-obsidian underline decoration-d2-mist underline-offset-4 hover:decoration-d2-electric">
                  {BRAND.email}
                </a>
                .
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-8">
            <FaqList />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="px-2 pt-24 sm:px-3 sm:pt-32">
      <Reveal>
        <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[32px] bg-d2-obsidian px-6 py-16 text-center sm:rounded-[56px] sm:px-10 sm:py-24 lg:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 left-1/2 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-d2-electric/30 blur-[110px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]"
          />
          <div className="relative">
            <Image src={BRAND.logo} alt="" width={56} height={56} className="mx-auto size-14 rounded-full ring-1 ring-white/15" />
            <h2 className="mx-auto mt-8 max-w-[18ch] text-[36px] leading-[1.04] font-semibold tracking-[-0.04em] text-balance text-white sm:text-[56px] lg:text-[68px]">
              {FINAL_CTA.title}
            </h2>
            <p className="mx-auto mt-6 max-w-[54ch] text-[16px] leading-[1.5] text-white/60 sm:text-[17.5px]">{FINAL_CTA.sub}</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Btn href={FINAL_CTA.primary.href} variant="snow" size="lg" arrow>
                {FINAL_CTA.primary.label}
              </Btn>
              <Btn href={FINAL_CTA.secondary.href} variant="ghost-dark" size="lg">
                {FINAL_CTA.secondary.label}
              </Btn>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="pt-20 sm:pt-28">
      <Container>
        <div className="grid gap-12 border-b border-d2-cloud pb-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${BRAND.name} home`}>
              <Image src={BRAND.logo} alt="" width={36} height={36} className="size-9 rounded-full" />
              <span className="text-[18px] font-semibold tracking-[-0.03em] text-d2-obsidian">
                {BRAND.short}
                <span className="text-d2-electric">:</span>
              </span>
            </Link>
            <p className="mt-5 max-w-[38ch] text-[15px] leading-[1.5] text-d2-steel">{BRAND.tagline}</p>
            <div className="mt-6 space-y-1.5 text-[14px] text-d2-steel">
              <p>
                <a href={`mailto:${BRAND.email}`} className="text-d2-obsidian hover:text-d2-electric">
                  {BRAND.email}
                </a>
              </p>
              <p>
                {BRAND.location} · {BRAND.locationNote}
              </p>
              <p>{BRAND.hours}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="text-[13px] font-medium text-d2-fog">{col.heading}</p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-[14.5px] text-d2-graphite transition-colors hover:text-d2-electric">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p
          aria-hidden
          className="pointer-events-none mt-10 text-center text-[13vw] leading-[0.9] font-semibold tracking-[-0.06em] whitespace-nowrap text-d2-paper select-none lg:text-[164px]"
        >
          {BRAND.short}
          <span className="text-d2-electric/15">:</span>
        </p>

        <div className="flex flex-col gap-4 py-8 text-[13.5px] text-d2-fog sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {BRAND.name}. {BRAND.footnote}
          </p>
          <ul className="flex gap-5">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="text-d2-steel transition-colors hover:text-d2-obsidian">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
