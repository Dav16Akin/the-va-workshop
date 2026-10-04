"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Squiggle } from "@/components/Decor";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/join", label: "Join" },
  { href: "/hire", label: "Hire" },
  { href: "/store", label: "Store" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const pathname = usePathname();

  return (
    <header className="sticky top-5 z-40 px-4">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-line/80 bg-white/85 pl-4 pr-2 shadow-soft backdrop-blur-md">
        <Link
          href="/"
          className="flex items-center gap-2.5 pl-2 text-lg font-extrabold tracking-tight"
        >
          <Image
            src="/va-logo.png"
            alt="The VA Workshop logo"
            width={36}
            height={36}
            className="size-9 rounded-full"
          />
          The VA Workshop
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-300 hover:text-ink ${
                pathname === link.href ? "text-ink" : "text-ink-soft"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <Squiggle
                  variant="underline"
                  tone="accent"
                  strokeWidth={2}
                  className="absolute -bottom-2 left-0 h-2 w-full"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/join"
            className="group hidden items-center gap-2 rounded-full bg-ink py-2.5 pl-6 pr-2.5 text-sm font-semibold text-paper transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] sm:flex"
          >
            Join a cohort
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper/10 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105">
              <ArrowUpRight size={15} weight="bold" />
            </span>
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white md:hidden"
          >
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-ink transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-ink transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-3 max-w-6xl rounded-[2rem] border border-line bg-white/95 p-8 shadow-lift backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-5">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`relative inline-block text-lg font-semibold ${
                      pathname === link.href ? "text-ink" : "text-ink"
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <Squiggle
                        variant="underline"
                        tone="accent"
                        strokeWidth={2}
                        className="absolute -bottom-1.5 left-0 h-2 w-full"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href="/join"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-ink py-3 pl-6 pr-3 text-sm font-semibold text-paper"
                >
                  Join a cohort
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper/10">
                    <ArrowUpRight size={15} weight="bold" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
