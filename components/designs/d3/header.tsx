import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { ANNOUNCEMENT, BRAND, NAV_LINKS, PRIMARY_CTA, SECONDARY_CTA } from "@/lib/content";
import { D3MenuButton } from "./mobile-menu";

const LEFT_LINKS = NAV_LINKS.filter((l) => l.href !== SECONDARY_CTA.href).slice(0, 5);

export function D3Announcement() {
  return (
    <Link
      href={ANNOUNCEMENT.href}
      className="group flex h-10 items-center justify-center gap-2 bg-d3-carbon px-4 text-[13px] text-d3-white sm:text-[14px]"
    >
      <span className="truncate">{ANNOUNCEMENT.text}</span>
      <span className="hidden font-medium sm:inline">{ANNOUNCEMENT.cta}</span>
      <ArrowRightIcon
        weight="bold"
        className="size-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </Link>
  );
}

export function D3Nav() {
  return (
    <header className="relative z-30 bg-d3-white">
      <div className="mx-auto grid h-[72px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-8 lg:h-[84px] lg:px-[60px]">
        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {LEFT_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] text-d3-carbon transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="xl:hidden" />

        <Link href="/design-3" aria-label={`${BRAND.name} home`} className="flex items-center gap-2.5 justify-self-center">
          <Image src={BRAND.logo} alt="" width={30} height={30} className="size-[26px] lg:size-[30px]" />
          <span className="text-[19px] font-medium tracking-[-0.04em] text-d3-black lg:text-[23px]">
            {BRAND.name}
          </span>
        </Link>

        <div className="flex items-center justify-end gap-2 sm:gap-4">
          <Link
            href={SECONDARY_CTA.href}
            className="hidden text-[14px] text-d3-carbon transition-opacity hover:opacity-60 xl:inline"
          >
            {SECONDARY_CTA.label}
          </Link>
          <Link
            href={PRIMARY_CTA.href}
            className="hidden h-11 items-center rounded-full bg-d3-carbon px-5 text-[14px] font-medium text-d3-white transition-colors hover:bg-d3-black sm:inline-flex"
          >
            {PRIMARY_CTA.label}
          </Link>
          <D3MenuButton />
        </div>
      </div>
    </header>
  );
}
