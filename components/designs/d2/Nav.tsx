"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import Button from "./Button";
import { BRAND, NAV_LINKS, PRIMARY_CTA } from "@/lib/home-content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="d2-nav-shadow sticky top-0 z-40 bg-[#f6f5f4]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-4 md:px-8">
        <Link
          href="/design-2"
          className="flex items-center gap-2 text-[15px] font-semibold tracking-[-0.01em]"
        >
          <Image
            src={BRAND.logo}
            alt=""
            width={28}
            height={28}
            className="size-7 rounded-full"
          />
          {BRAND.name}
        </Link>

        <ul className="hidden items-center lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-[8px] px-4 py-3 text-[14px] font-medium text-black/[0.54] transition-colors duration-200 hover:text-black"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <Button href="/book" variant="text" className="hidden md:inline-flex">
            Book a call
          </Button>
          <Button href={PRIMARY_CTA.href} className="hidden sm:inline-flex">
            {PRIMARY_CTA.label}
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="d2-mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-[8px] text-black/80 transition-colors duration-200 hover:bg-black/[0.04] lg:hidden"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="d2-mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-black/[0.08] bg-[#f6f5f4] px-4 pb-6 pt-2 lg:hidden"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-[8px] px-2 py-3 text-[16px] font-medium text-black/80 hover:bg-black/[0.04]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button href="/book" variant="ghost">
                Book a call
              </Button>
              <Button href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
