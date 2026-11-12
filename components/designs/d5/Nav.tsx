"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { BRAND, NAV_LINKS, PRIMARY_CTA } from "@/lib/home-content";

const links = NAV_LINKS.filter((l) => l.label !== "Talent Pool");

export default function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="sticky top-0 z-40 bg-[var(--d5-canvas)]/75 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-10">
        <Link
          href="/design-5"
          className="d5-focus flex items-center gap-2.5 rounded-lg"
        >
          <span className="grid size-9 place-items-center rounded-[12px] bg-white">
            <Image
              src={BRAND.logo}
              alt=""
              width={28}
              height={28}
              className="size-7 rounded-full"
            />
          </span>
          <span className="font-[family-name:var(--font-d5-display)] whitespace-nowrap text-[15px] font-medium tracking-tight sm:text-base">
            {BRAND.name}
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="d5-focus rounded text-sm font-light text-[var(--d5-fog)] transition-colors duration-300 hover:text-[var(--d5-text)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/join#talent-pool"
            className="d5-focus hidden rounded text-sm font-light text-[var(--d5-fog)] transition-colors hover:text-[var(--d5-text)] sm:block"
          >
            Talent pool
          </Link>
          <Link
            href={PRIMARY_CTA.href}
            className="d5-btn d5-btn-white hidden !py-2.5 !text-sm sm:inline-flex"
          >
            {PRIMARY_CTA.label}
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="d5-mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="d5-focus grid size-11 place-items-center rounded-[14px] border border-[var(--d5-steel)] lg:hidden"
          >
            {open ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="d5-mobile-menu"
            initial={reduce ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="d5-card mx-4 mb-4 p-6 lg:hidden"
          >
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="d5-focus block rounded text-lg font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={PRIMARY_CTA.href}
              onClick={() => setOpen(false)}
              className="d5-btn d5-btn-primary mt-6 w-full"
            >
              {PRIMARY_CTA.label}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
