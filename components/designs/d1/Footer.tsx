import Image from "next/image";
import Link from "next/link";
import { InstagramLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import { BRAND, COHORT, FOOTER_COLUMNS } from "@/lib/home-content";

const socials = [
  { label: "Instagram", icon: InstagramLogo },
  { label: "LinkedIn", icon: LinkedinLogo },
  { label: "X", icon: XLogo },
];

export default function Footer() {
  return (
    <footer className="px-4 pb-8 md:px-8">
      <div className="mx-auto max-w-[1320px] rounded-[24px] bg-[var(--d1-surface)] px-6 pb-8 pt-12 md:px-12 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/design-1" className="flex items-center gap-2 text-[16px] font-semibold tracking-[-0.02em]">
              <Image src={BRAND.logo} alt="" width={28} height={28} className="size-7 rounded-full" />
              {BRAND.name}
            </Link>
            <p className="mt-5 max-w-[30ch] text-[22px] leading-[1.2] tracking-[-0.03em]">
              The next cohort begins {COHORT.month}.
            </p>
            <Link href={COHORT.register.href} className="d1-pill d1-pill-navy mt-6">
              Join a cohort
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="d1-mono text-[11px] text-[var(--d1-graphite)]">{col.heading}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="break-words text-[14px] tracking-[-0.02em] text-[var(--d1-ink)] transition-opacity duration-200 hover:opacity-60"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-[var(--d1-line)] pt-6 sm:flex-row sm:items-center">
          <p className="text-[13px] text-[var(--d1-graphite)]">
            &copy; {new Date().getFullYear()} {BRAND.name}
          </p>
          <ul className="flex gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <span
                  aria-label={s.label}
                  role="img"
                  className="grid size-9 place-items-center rounded-full bg-white text-[var(--d1-ink)]"
                >
                  <s.icon size={16} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
