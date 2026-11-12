"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { BRAND, NAV_LINKS, PRIMARY_CTA } from "@/lib/home-content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--d1-line)] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-[54px] max-w-[1320px] items-center justify-between px-4 md:px-8">
        <Link href="/design-1" className="flex items-center gap-2 text-[15px] font-semibold tracking-[-0.02em]">
          <Image src={BRAND.logo} alt="" width={26} height={26} className="size-[26px] rounded-full" />
          <span className="whitespace-nowrap">{BRAND.name}</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[14px] font-medium tracking-[-0.023em] text-[var(--d1-ink)] transition-opacity duration-200 hover:opacity-60"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link href={PRIMARY_CTA.href} className="d1-pill d1-pill-navy hidden !py-2.5 !text-[14px] sm:inline-flex">
            {PRIMARY_CTA.label}
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="d1-mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full bg-[var(--d1-surface)] lg:hidden"
          >
            {open ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="d1-mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-[var(--d1-line)] bg-white px-4 pb-6 pt-2 lg:hidden"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-[17px] font-medium tracking-[-0.02em]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={PRIMARY_CTA.href} className="d1-pill d1-pill-navy mt-4 w-full">
              {PRIMARY_CTA.label}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
