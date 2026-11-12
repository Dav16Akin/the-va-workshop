import Image from "next/image";
import Link from "next/link";
import { BRAND, FOOTER_COLUMNS } from "@/lib/home-content";

/** Colophon-style footer with a large editorial statement. */
export default function Footer() {
  return (
    <footer className="border-t border-[#dee2de] bg-[#ffffff] px-4 pb-10 pt-20 md:px-8 md:pt-28">
      <div className="mx-auto max-w-[1200px]">
        <p className="d3-serif d3-display max-w-[18ch] text-[#2c2c2c]">
          Skills, assets and a community for Africa&rsquo;s virtual assistants.
        </p>

        <div className="mt-16 grid gap-12 border-t border-[#dee2de] pt-12 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
          <div>
            <Link href="/design-3" className="flex items-center gap-2.5 text-[15px] font-medium text-[#282834]">
              <Image src={BRAND.logo} alt="" width={32} height={32} className="size-8 rounded-full" />
              {BRAND.name}
            </Link>
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-5 inline-block text-[15px] text-[#444141] underline decoration-[#dee2de] underline-offset-4 hover:decoration-[#4a90e2]"
            >
              {BRAND.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h2 className="text-[13px] text-[#646464]">{col.heading}</h2>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="break-words text-[15px] text-[#444141] transition-colors duration-300 hover:text-[#2f6fbb]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <p className="mt-16 text-[13px] text-[#646464]">
          &copy; 2026 {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
