"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { BRAND, NAV_LINKS, PRIMARY_CTA } from "@/lib/home-content";
import { cn } from "@/lib/utils";
import { ActionLink } from "./primitives";

/** Floating frosted pill. Light text over the hero photo, dark once past it. */
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  // Boolean threshold only: re-renders once when crossing, not every frame.
  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > window.innerHeight * 0.82;
    if (next !== solid) setSolid(next);
  });

  const light = !solid && !open;

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex h-14 max-w-[1040px] items-center justify-between rounded-[50px] pl-2 pr-2 transition-[background-color,border-color,box-shadow] duration-500",
          light
            ? "d3-glass shadow-[rgba(0,0,0,0.15)_0px_2px_6px_0px]"
            : "d3-glass-light shadow-[rgba(0,0,0,0.08)_0px_2px_6px_0px]",
        )}
      >
        <Link
          href="/design-3"
          className={cn(
            "flex items-center gap-2.5 rounded-full py-1 pl-1 pr-3 text-[15px] font-medium",
            light ? "text-white" : "text-[#282834]",
          )}
        >
          <Image
            src={BRAND.logo}
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-full bg-white"
          />
          {BRAND.name}
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-2 text-[15px] font-medium leading-none transition-colors duration-300",
                  light
                    ? "text-white/85 hover:text-white"
                    : "text-[#444141] hover:text-[#282834]",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ActionLink
            href={PRIMARY_CTA.href}
            tone={light ? "onDark" : "primary"}
            className="hidden rounded-[50px] sm:inline-flex"
          >
            {PRIMARY_CTA.label}
          </ActionLink>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="d3-mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "flex size-10 items-center justify-center rounded-full lg:hidden",
              light ? "text-white" : "text-[#282834]",
            )}
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="d3-mobile-menu"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="d3-glass-light mx-auto mt-2 max-w-[1040px] rounded-3xl p-6 lg:hidden"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="d3-serif block py-2.5 text-[27px] text-[#2c2c2c]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ActionLink href={PRIMARY_CTA.href} className="mt-5">
              {PRIMARY_CTA.label}
            </ActionLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
