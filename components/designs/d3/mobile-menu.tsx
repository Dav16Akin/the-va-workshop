"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRightIcon, DotsNineIcon, XIcon } from "@phosphor-icons/react";
import { BRAND, COHORT, NAV_LINKS, PRIMARY_CTA, SECONDARY_CTA } from "@/lib/content";

export function D3MenuButton() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="inline-flex size-10 items-center justify-center rounded-full text-d3-carbon transition-colors hover:bg-d3-fog focus-visible:outline-2 focus-visible:outline-d3-signal"
      >
        <DotsNineIcon weight="bold" className="size-6" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="d3-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-d3-carbon p-2 font-d3-sans text-d3-white"
          >
            <div className="flex h-16 items-center justify-between px-4 sm:px-6">
              <span className="text-[17px] font-medium tracking-[-0.02em]">{BRAND.name}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <XIcon weight="bold" className="size-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center px-4 sm:px-6">
              <ul className="space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduce ? 0 : 0.05 + i * 0.04, duration: 0.35, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between border-b border-white/10 py-3 text-[34px] leading-none tracking-[-0.025em] sm:text-[44px]"
                    >
                      {link.label}
                      <ArrowUpRightIcon className="size-5 text-d3-ash transition-colors group-hover:text-d3-signal-glow" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="space-y-4 px-4 pb-6 sm:px-6">
              <p className="d3-label text-d3-ash">{COHORT.month} cohort · Limited spots</p>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href={PRIMARY_CTA.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-d3-white text-[15px] font-medium text-d3-carbon"
                >
                  {PRIMARY_CTA.label}
                </Link>
                <Link
                  href={SECONDARY_CTA.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 text-[15px] font-medium"
                >
                  {SECONDARY_CTA.label}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
