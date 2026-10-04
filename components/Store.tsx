"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowsClockwise,
  Lightning,
  ShieldCheck,
  X,
} from "@phosphor-icons/react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  DIGITAL_PRODUCTS,
  PHYSICAL_PRODUCTS,
  ProductCard,
  StoreTabs,
  type StoreTab,
} from "@/components/StorefrontPreview";

const DEAL_HIGHLIGHTS = [
  {
    label: "Best seller",
    name: "Client Acquisition & Pitch Deck Kit",
    price: "₦49,000",
    was: "₦75,000",
  },
  {
    label: "Discounted",
    name: "Pro Noise-Cancelling Headset",
    price: "₦55,000",
    was: "₦80,000",
  },
  {
    label: "Discounted",
    name: "Cold Email & Outreach OS",
    price: "₦25,000",
    was: "₦40,000",
  },
];

const ASSURANCES = [
  {
    icon: Lightning,
    title: "Instant delivery",
    note: "Digital kits land in your inbox the same day you order.",
  },
  {
    icon: ShieldCheck,
    title: "Secure checkout",
    note: "Pay by transfer or card, receipt issued for every order.",
  },
  {
    icon: ArrowsClockwise,
    title: "Lifetime updates",
    note: "Every template you buy is refreshed as tools and formats change.",
  },
];

function DealsPopup({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 grid place-items-center bg-ink/40 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="w-full max-w-md rounded-[2rem] bg-ink/5 p-1.5 shadow-lift ring-1 ring-ink/5"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="This week's deals"
          >
            <div className="relative rounded-[calc(2rem-0.375rem)] bg-white p-8">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close deals"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink-soft transition-colors duration-200 hover:bg-ink/5"
              >
                <X size={14} weight="bold" />
              </button>
              <p className="text-sm font-semibold text-accent-deep">
                This week at the store
              </p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight">
                Deals are <span className="text-accent">live now.</span>
              </h3>
              <ul className="mt-6 space-y-3">
                {DEAL_HIGHLIGHTS.map((deal) => (
                  <li
                    key={deal.name}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-ink/5 px-4 py-3"
                  >
                    <div>
                      <p className="text-xs font-semibold text-accent-deep">
                        {deal.label}
                      </p>
                      <p className="mt-0.5 text-sm font-bold">{deal.name}</p>
                    </div>
                    <p className="shrink-0 text-right">
                      <span className="block text-sm font-extrabold">
                        {deal.price}
                      </span>
                      <span className="block text-xs text-ink-soft/60 line-through">
                        {deal.was}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={onClose}
                className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3 pl-7 pr-3 text-sm font-semibold text-paper transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
              >
                Browse the deals
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/10 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105">
                  <ArrowUpRight size={16} weight="bold" />
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Store() {
  const [dealsOpen, setDealsOpen] = useState(false);
  const [tab, setTab] = useState<StoreTab>("digital");
  const items = tab === "digital" ? DIGITAL_PRODUCTS : PHYSICAL_PRODUCTS;

  useEffect(() => {
    if (sessionStorage.getItem("vaw-deals-seen")) return;
    const timer = setTimeout(() => {
      setDealsOpen(true);
      sessionStorage.setItem("vaw-deals-seen", "1");
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal delay={0.05}>
          <div className="grid gap-4 sm:grid-cols-3">
            {ASSURANCES.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] bg-ink/5 p-1.5 ring-1 ring-ink/5"
              >
                <div className="flex h-full items-start gap-4 rounded-[calc(1.75rem-0.375rem)] bg-white p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-deep">
                    <item.icon size={17} weight="duotone" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-ink-soft">
                      {item.note}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <StoreTabs value={tab} onChange={setTab} />
        </Reveal>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          className={`mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3`}
        >
          {items.map((prod) => (
            <ProductCard key={prod.id} prod={prod} />
          ))}
        </motion.div>

        <Reveal delay={0.15} className="mt-20">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-accent px-8 py-14 text-center md:px-16">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-96 w-96 bg-[radial-gradient(circle,rgb(255_255_255/0.18),transparent_65%)]"
            />
            <h3 className="relative text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Need a trained VA instead?
            </h3>
            <p className="relative mx-auto mt-4 max-w-[46ch] text-base leading-relaxed text-white/80">
              Browse our talent pool of pre-vetted, trained virtual assistants
              and hire the right match for your business.
            </p>
            <Link
              href="/join#talent-pool"
              className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-ink py-3 pl-7 pr-3 text-sm font-semibold text-paper transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
            >
              Browse the talent pool
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/10 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105">
                <ArrowUpRight size={16} weight="bold" />
              </span>
            </Link>
          </div>
        </Reveal>
      </div>

      <DealsPopup open={dealsOpen} onClose={() => setDealsOpen(false)} />
    </section>
  );
}
