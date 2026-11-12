import Image from "next/image";
import Link from "next/link";
import { BRAND, FOOTER_COLUMNS } from "@/lib/home-content";
import { Container } from "./primitives";

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-white">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/design-4" className="flex items-center gap-2.5">
              <Image src={BRAND.logo} alt="" width={36} height={36} className="size-9 rounded-full" />
              <span className="text-lg font-semibold tracking-[-0.01em]">{BRAND.name}</span>
            </Link>
            <p className="mt-5 max-w-[36ch] text-sm leading-[1.5] text-[#5b616b]">
              Coach-led VA training, career assets and a curated talent pool for
              Africa&apos;s virtual assistants and remote workers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <h2 className="text-sm font-semibold">{col.heading}</h2>
                <ul className="mt-4 grid gap-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="break-words text-sm text-[#5b616b] transition-colors duration-200 hover:text-[#2f6fbb]"
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

        <div className="mt-16 flex flex-col gap-2 border-t border-black/[0.06] pt-6 text-[13px] text-[#5b616b] sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <a href={`mailto:${BRAND.email}`} className="hover:text-[#2f6fbb]">
            {BRAND.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}
