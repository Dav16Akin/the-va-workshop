"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ListIcon, XIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import { ANNOUNCEMENT, BRAND, NAV_LINKS, PRIMARY_CTA, SECONDARY_CTA } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Pill } from "./primitives";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)} aria-label={BRAND.name}>
      <Image src={BRAND.logo} alt="" width={28} height={28} className="size-7" />
      <span className="font-d1-display text-[19px] font-medium tracking-[-0.03em] text-d1-ink">
        {BRAND.name}
      </span>
    </Link>
  );
}

export function D1Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-d1-taupe">
        <div className="mx-auto flex min-h-12 max-w-[1180px] items-center justify-center gap-3 px-5 py-2 text-center text-[13px] text-d1-ink sm:text-sm">
          <span className="hidden size-1.5 shrink-0 rounded-full bg-d1-ink sm:block" aria-hidden />
          <span>{ANNOUNCEMENT.text}</span>
          <span className="hidden h-4 w-px bg-d1-ash/60 sm:block" aria-hidden />
          <Pill href={ANNOUNCEMENT.href} variant="outline" size="sm" className="h-8 px-3.5 text-[13px]">
            {ANNOUNCEMENT.cta}
          </Pill>
        </div>
        <div className="h-4 rounded-t-[22px] bg-d1-canvas" aria-hidden />
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-[background-color,border-color] duration-300",
          scrolled || open
            ? "border-b border-d1-stone bg-d1-canvas/92 backdrop-blur-md"
            : "border-b border-transparent bg-d1-canvas",
        )}
      >
        <nav className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-6 px-5 sm:px-8 xl:px-0">
          <div className="flex items-center gap-10">
            <Wordmark />
            <ul className="hidden items-center gap-6 xl:flex">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-d1-ink transition-colors hover:text-d1-smoke">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Pill href={SECONDARY_CTA.href} variant="outline" size="sm" className="hidden sm:inline-flex">
              {SECONDARY_CTA.label}
            </Pill>
            <Pill href={PRIMARY_CTA.href} size="sm" className="hidden sm:inline-flex">
              {PRIMARY_CTA.label}
            </Pill>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="d1-mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-10 place-items-center rounded-full bg-white text-d1-ink shadow-d1-whisper xl:hidden"
            >
              {open ? <XIcon size={18} /> : <ListIcon size={18} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="d1-mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-d1-stone bg-d1-canvas xl:hidden"
            >
              <div className="flex max-h-[calc(100dvh-128px)] flex-col overflow-y-auto px-5 pt-2 pb-8 sm:px-8">
                <ul className="divide-y divide-d1-stone">
                  {NAV_LINKS.map((l, i) => (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between py-4 font-d1-display text-[26px] font-light tracking-[-0.02em]"
                      >
                        {l.label}
                        <ArrowUpRightIcon size={18} className="text-d1-ash" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8 grid gap-2">
                  <Pill href={PRIMARY_CTA.href} onClick={() => setOpen(false)}>
                    {PRIMARY_CTA.label}
                  </Pill>
                  <Pill href={SECONDARY_CTA.href} variant="outline" onClick={() => setOpen(false)}>
                    {SECONDARY_CTA.label}
                  </Pill>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
