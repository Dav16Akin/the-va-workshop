import Image from "next/image";
import Link from "next/link";
import { BRAND, FOOTER_COLUMNS } from "@/lib/home-content";

export default function Footer() {
  return (
    <footer className="bg-[var(--d5-deep)] px-5 pb-10 pt-20 md:px-10 md:pt-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/design-5" className="d5-focus inline-flex items-center gap-2.5 rounded-lg">
              <span className="grid size-9 place-items-center rounded-[12px] bg-white">
                <Image src={BRAND.logo} alt="" width={28} height={28} className="size-7 rounded-full" />
              </span>
              <span className="font-[family-name:var(--font-d5-display)] text-base font-medium tracking-tight">
                {BRAND.name}
              </span>
            </Link>
            <p className="d5-thin-xl mt-8 max-w-[18ch] text-[var(--d5-text)]">
              Practical training for Africa&rsquo;s remote workforce.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <p className="text-sm font-normal text-[var(--d5-text)]">{col.heading}</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="d5-focus break-words rounded text-sm text-[var(--d5-mist)] transition-colors hover:text-[var(--d5-text)]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-3 border-t border-[rgb(22_48_90/0.8)] pt-8 text-xs text-[var(--d5-mist)] sm:flex-row sm:justify-between">
          <p>&copy; 2026 {BRAND.name}. All rights reserved.</p>
          <a href={`mailto:${BRAND.email}`} className="d5-focus rounded hover:text-[var(--d5-text)]">
            {BRAND.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
