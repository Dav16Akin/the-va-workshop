"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, List, X } from "@phosphor-icons/react";
import { ANNOUNCEMENT, BRAND, NAV_LINKS, PRIMARY_CTA, SECONDARY_CTA } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div className="mx-auto max-w-[1240px]">
        <AnimatePresence initial={false}>
          {!scrolled && (
            <motion.div
              key="announce"
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <Link
                href={ANNOUNCEMENT.href}
                className="mb-2.5 flex items-center justify-center gap-2 rounded-full border border-white/[0.07] bg-d4-carbon/90 px-4 py-2 text-center text-[12.5px] font-medium text-d4-ash backdrop-blur sm:text-[13px]"
              >
                <span aria-hidden className="d4-pulse size-1.5 shrink-0 rounded-full bg-d4-cyan" />
                <span className="truncate">{ANNOUNCEMENT.text}</span>
                <span className="hidden shrink-0 text-d4-signal sm:inline">{ANNOUNCEMENT.cta} →</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <nav
          aria-label="Primary"
          className={cn(
            "relative flex h-[60px] items-center justify-between rounded-d4-nav border border-white/[0.08] bg-d4-carbon/85 pl-3 pr-2 backdrop-blur-xl transition-shadow duration-300",
            scrolled && "shadow-[0_0_0_1px_rgba(47,107,255,0.12),0_10px_40px_rgba(0,0,0,0.5)]",
          )}
        >
          <Link href="/design-4" className="flex items-center gap-2.5 rounded-full pr-2" aria-label={`${BRAND.name} home`}>
            <Image src={BRAND.logo} alt="" width={36} height={36} className="size-9 rounded-full ring-1 ring-white/10" />
            <span className="font-d4-sans text-[15px] font-medium tracking-[-0.02em] text-white">{BRAND.name}</span>
          </Link>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 xl:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="rounded-full px-3.5 py-2 text-[14.5px] text-d4-ash transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <Link
              href={SECONDARY_CTA.href}
              className="hidden rounded-full px-3.5 py-2 text-[14.5px] text-white transition-colors hover:text-d4-signal md:inline-flex"
            >
              {SECONDARY_CTA.label}
            </Link>
            <Link
              href={PRIMARY_CTA.href}
              className="group/btn hidden h-11 items-center gap-2 rounded-d4-pill bg-d4-voltage px-5 text-[14.5px] font-medium text-white transition-shadow hover:shadow-d4-glow sm:inline-flex"
            >
              {PRIMARY_CTA.label}
              <ArrowRight weight="bold" className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="d4-mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-full border border-white/10 text-white xl:hidden"
            >
              {open ? <X className="size-5" /> : <List className="size-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="d4-mobile-menu"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-[28px] border border-white/[0.08] bg-d4-carbon/95 p-3 backdrop-blur-xl xl:hidden"
            >
              <ul className="grid">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-[17px] text-white hover:bg-white/[0.05]"
                    >
                      {l.label}
                      <ArrowRight className="size-4 text-d4-fog" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/[0.08] pt-3">
                <Link
                  href={SECONDARY_CTA.href}
                  className="flex h-12 items-center justify-center rounded-d4-pill border border-white/15 text-[15px] text-white"
                >
                  {SECONDARY_CTA.label}
                </Link>
                <Link
                  href={PRIMARY_CTA.href}
                  className="flex h-12 items-center justify-center rounded-d4-pill bg-d4-voltage text-[15px] font-medium text-white"
                >
                  {PRIMARY_CTA.label}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
