import Image from "next/image";
import Link from "next/link";
import { InstagramLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import Button from "./Button";
import { BRAND, FOOTER_COLUMNS, PRIMARY_CTA } from "@/lib/home-content";

const socials = [
  { label: "Instagram", icon: InstagramLogo },
  { label: "LinkedIn", icon: LinkedinLogo },
  { label: "X", icon: XLogo },
];

export default function Footer() {
  return (
    <footer className="px-4 pb-10 md:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[12px] bg-[#051a4b] p-8 text-white md:flex-row md:items-center md:p-12">
          <h2 className="max-w-[18ch] text-[32px] font-bold leading-[1.1] tracking-[-0.035em] md:text-[44px]">
            Your remote career starts here.
          </h2>
          <Button href={PRIMARY_CTA.href} variant="inverse" className="px-5 py-2.5 text-[15px]">
            {PRIMARY_CTA.label}
          </Button>
        </div>

        <div className="mt-16 grid gap-10 border-t border-black/[0.08] pt-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/design-2" className="flex items-center gap-2 text-[15px] font-semibold">
              <Image src={BRAND.logo} alt="" width={28} height={28} className="size-7 rounded-full" />
              {BRAND.name}
            </Link>
            <p className="mt-4 max-w-[34ch] text-[14px] leading-[1.43] text-black/60">
              VA training, career assets and a curated talent pool for
              Africa&apos;s virtual assistants.
            </p>
            <ul className="mt-6 flex gap-1">
              {socials.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href="#"
                    aria-label={label}
                    className="grid size-9 place-items-center rounded-[8px] text-black/60 transition-colors duration-200 hover:bg-black/[0.04] hover:text-black"
                  >
                    <Icon size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[14px] font-semibold text-black">{col.heading}</h3>
                <ul className="mt-4 grid gap-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="break-words text-[14px] text-black/60 transition-colors duration-200 hover:text-black"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-12 text-[12px] text-black/40">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
