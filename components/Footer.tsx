"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react";
import { Blob } from "@/components/Decor";

const columns = [
  {
    heading: "Programme",
    links: [
      { label: "How we get you there", href: "/services" },
      { label: "Training tracks", href: "/services#training" },
      { label: "Upcoming cohorts", href: "/join#cohorts" },
      { label: "VA storefront", href: "/store" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Meet the team", href: "/about#team" },
      { label: "Graduate stories", href: "/#stories" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "Get started",
    links: [
      { label: "Join a cohort", href: "/join" },
      { label: "Talent pool", href: "/join#talent-pool" },
      { label: "Hire a VA", href: "/hire" },
      {
        label: "team@thevaworkshop.com",
        href: "mailto:team@thevaworkshop.com",
      },
    ],
  },
];

const socials = [
  { label: "Instagram", icon: InstagramLogo },
  { label: "LinkedIn", icon: LinkedinLogo },
  { label: "X", icon: XLogo },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <Blob
        tone="lav"
        variant="signature"
        className="anim-float-slow pointer-events-none absolute -right-16 -top-16 h-56 w-56 opacity-15"
      />
      <Blob
        tone="accent"
        variant="twist"
        className="anim-float pointer-events-none absolute -bottom-20 left-[15%] hidden h-48 w-48 opacity-10 lg:block"
      />
      <Blob
        tone="mintDeep"
        className="anim-drift pointer-events-none absolute -left-14 top-1/3 hidden h-32 w-32 opacity-10 lg:block"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-16 md:px-10 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <Image
                  src="/va-logo.png"
                  alt="The VA Workshop logo"
                  width={32}
                  height={32}
                  className="size-8 rounded-full"
                />
              </span>
              The VA Workshop
            </Link>
            <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-paper/60">
              Training and career assets for Africa&apos;s virtual assistants
              and remote workers.
            </p>
            <div className="mt-7 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="/"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-paper/70 transition-colors duration-300 hover:bg-white/10 hover:text-paper"
                >
                  <social.icon size={16} weight="duotone" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.heading}>
                <h4 className="text-sm font-bold text-paper">
                  {column.heading}
                </h4>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-paper/60 transition-colors duration-300 hover:text-paper"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div aria-hidden className="relative mt-14 select-none overflow-hidden">
        <span className="block translate-y-[28%] whitespace-nowrap text-center text-[13.5vw] font-extrabold leading-none tracking-tight text-white/50">
          VA WORKSHOP
        </span>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 px-6 py-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <span>© 2026 The VA Workshop. All rights reserved.</span>
        <span className="hidden md:block">
          Built for Africa&apos;s remote workforce.
        </span>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2 self-start text-xs font-bold text-paper/70 transition-colors duration-300 hover:text-paper sm:self-auto"
        >
          Back to top
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-0.5">
            <ArrowUp size={13} weight="bold" />
          </span>
        </button>
      </div>
    </footer>
  );
}
