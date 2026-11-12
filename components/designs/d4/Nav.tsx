"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { BRAND, NAV_LINKS } from "@/lib/home-content";
import { Button } from "./primitives";

const links = NAV_LINKS.filter((l) => l.label !== "Talent Pool");

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/[0.06] bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between gap-6 px-4 md:px-8">
        <Link href="/design-4" className="flex items-center gap-2.5">
          <Image
            src={BRAND.logo}
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-full"
          />
          <span className="text-[17px] font-semibold tracking-[-0.01em]">
            {BRAND.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-[12px] px-4 py-2 text-[15px] font-medium text-[#0b0f1a]/75 transition-colors duration-200 hover:bg-[#eef4fc] hover:text-[#051a4b]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href="/join#talent-pool" variant="ghost" className="px-5 py-2.5 text-[15px]">
            Talent pool
          </Button>
          <Button href="/register" className="px-5 py-2.5 text-[15px]">
            Join a cohort
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="d4-mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-11 items-center justify-center rounded-[12px] border border-black/10 lg:hidden"
        >
          {open ? <X size={20} /> : <List size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="d4-mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-black/[0.06] bg-white px-4 pb-6 pt-2 lg:hidden"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-[12px] px-3 py-3 text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid gap-2">
              <Button href="/join#talent-pool" variant="ghost">
                Talent pool
              </Button>
              <Button href="/register">Join a cohort</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
