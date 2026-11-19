import Image from "next/image";
import Link from "next/link";
import { BRAND, FOOTER_COLUMNS, SOCIALS } from "@/lib/content";
import { card, container } from "./primitives";

export function Footer() {
  return (
    <footer className="px-3 pb-3 pt-10 sm:px-4 sm:pb-4">
      <div className={card}>
        <div className={`${container} py-14 sm:py-16`}>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
            <div>
              <Link href="/design-4" className="inline-flex items-center gap-3">
                <Image src={BRAND.logo} alt="" width={44} height={44} className="size-11 rounded-full ring-1 ring-white/10" />
                <span className="text-[18px] font-medium tracking-[-0.02em] text-white">{BRAND.name}</span>
              </Link>
              <p className="mt-5 max-w-[340px] text-[15px] leading-relaxed text-d4-ash">{BRAND.tagline}</p>
              <dl className="mt-7 space-y-2 font-d4-mono text-[12.5px]">
                <div className="flex gap-3">
                  <dt className="w-16 shrink-0 text-d4-fog">Email</dt>
                  <dd>
                    <a href={`mailto:${BRAND.email}`} className="text-white hover:text-d4-signal">
                      {BRAND.email}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-16 shrink-0 text-d4-fog">Base</dt>
                  <dd className="text-white">
                    {BRAND.location} <span className="text-d4-fog">· {BRAND.locationNote}</span>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-16 shrink-0 text-d4-fog">Hours</dt>
                  <dd className="text-white">{BRAND.hours}</dd>
                </div>
              </dl>
            </div>
            <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {FOOTER_COLUMNS.map((col) => (
                <div key={col.heading}>
                  <h3 className="font-d4-mono text-[11.5px] uppercase tracking-[0.15em] text-d4-fog">{col.heading}</h3>
                  <ul className="mt-5 space-y-3">
                    {col.links.map((l) => (
                      <li key={l.href + l.label}>
                        <Link href={l.href} className="text-[15px] text-d4-ash transition-colors hover:text-white">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="mt-14 flex flex-col gap-6 border-t border-white/[0.07] pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-d4-mono text-[12px] text-d4-fog">
              © 2026 {BRAND.name}. {BRAND.footnote}
            </p>
            <ul className="flex flex-wrap gap-2">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="inline-flex items-center rounded-full border border-white/10 px-3.5 py-1.5 text-[13px] text-d4-ash transition-colors hover:border-white/35 hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/10 px-3.5 py-1.5 text-[13px] text-d4-ash transition-colors hover:border-white/35 hover:text-white"
                >
                  WhatsApp community
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
