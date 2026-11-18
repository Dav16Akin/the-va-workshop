"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { List, X, ArrowRight } from "@phosphor-icons/react";
import { ANNOUNCEMENT, BRAND, NAV_LINKS, PRIMARY_CTA, SECONDARY_CTA } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Announcement() {
  return (
    <div className="bg-d2-obsidian text-white">
      <Link
        href={ANNOUNCEMENT.href}
        className="group mx-auto flex h-10 max-w-[1240px] items-center justify-center gap-2.5 px-5 text-[13px] sm:text-[13.5px]"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-d2-sky opacity-60 motion-reduce:hidden" />
          <span className="relative inline-flex size-2 rounded-full bg-d2-electric ring-2 ring-d2-electric/30" />
        </span>
        <span className="truncate text-white/80">{ANNOUNCEMENT.text}</span>
        <span className="hidden items-center gap-1 font-medium text-white sm:inline-flex">
          {ANNOUNCEMENT.cta}
          <ArrowRight weight="bold" className="size-3 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
    <header
      className={cn(
        "sticky top-0 z-50 bg-d2-snow/90 backdrop-blur-xl transition-[border-color] duration-300",
        "border-b",
        scrolled ? "border-d2-cloud" : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${BRAND.name} home`}>
          <Image src={BRAND.logo} alt="" width={34} height={34} className="size-[34px] rounded-full" priority />
          <span className="text-[17px] font-semibold tracking-[-0.03em] text-d2-obsidian">
            {BRAND.short}
            <span className="text-d2-electric">:</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[14.5px] text-d2-graphite transition-colors hover:text-d2-electric">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-5">
          <Link
            href={SECONDARY_CTA.href}
            className="hidden text-[14.5px] text-d2-steel transition-colors hover:text-d2-obsidian sm:inline"
          >
            {SECONDARY_CTA.label}
          </Link>
          <Link
            href={PRIMARY_CTA.href}
            className="d2-btn-obsidian hidden h-10 items-center rounded-full px-5 text-[14px] font-medium sm:inline-flex"
          >
            {PRIMARY_CTA.label}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="d2-mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-d2-cloud text-d2-obsidian lg:hidden"
          >
            {open ? <X className="size-[18px]" weight="bold" /> : <List className="size-[18px]" weight="bold" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="d2-mobile-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute inset-x-0 top-full h-[calc(100dvh-68px)] overflow-y-auto border-t border-d2-cloud bg-d2-snow lg:hidden"
          >
            <nav aria-label="Mobile" className="px-5 pt-4 pb-10 sm:px-8">
              <ul className="divide-y divide-d2-cloud">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 text-[22px] font-medium tracking-[-0.02em] text-d2-obsidian"
                    >
                      {l.label}
                      <ArrowRight className="size-4 text-d2-fog" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid gap-3">
                <Link
                  href={PRIMARY_CTA.href}
                  className="d2-btn-obsidian inline-flex h-[52px] items-center justify-center rounded-d2-btn text-[15px] font-medium"
                >
                  {PRIMARY_CTA.label}
                </Link>
                <Link
                  href={SECONDARY_CTA.href}
                  className="inline-flex h-[52px] items-center justify-center rounded-d2-btn border border-d2-mist text-[15px] font-medium text-d2-obsidian"
                >
                  {SECONDARY_CTA.label}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
