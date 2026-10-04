"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ShoppingCartSimple,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Marked } from "@/components/Decor";

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  save?: string;
  bg: string;
  image: string;
  tag?: string;
  description: string;
}

export const DIGITAL_PRODUCTS: ProductItem[] = [
  {
    id: "client-acquisition-kit",
    name: "Client Acquisition & Pitch Deck Kit",
    category: "Scripts & Proposals",
    price: "₦49,000",
    originalPrice: "₦75,000",
    save: "Save 35%",
    bg: "#eef4fc",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tag: "Best seller",
    description:
      "Proposal templates, pitch deck layouts, and discovery call closing frameworks.",
  },
  {
    id: "ats-resume-portfolio-bundle",
    name: "ATS Resume & Portfolio Bundle",
    category: "Career Assets",
    price: "₦35,000",
    originalPrice: "₦58,000",
    save: "Save 40%",
    bg: "#fff8d6",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    description:
      "ATS-optimised Canva portfolio templates and executive VA resume layouts.",
  },
  {
    id: "va-sop-contract-vault",
    name: "VA Contracts & SOP Vault",
    category: "Legal & Docs",
    price: "₦42,000",
    originalPrice: "₦68,000",
    save: "Save 38%",
    bg: "#fff8d6",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
    description:
      "VA service contracts, NDA templates, and client onboarding checklists.",
  },
  {
    id: "cold-email-os",
    name: "Cold Email & Outreach OS",
    category: "Scripts & Proposals",
    price: "₦25,000",
    originalPrice: "₦40,000",
    save: "Save 38%",
    bg: "#dce9f9",
    image:
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&h=600&fit=crop",
    tag: "Popular",
    description:
      "Battle-tested email sequences that get high-paying remote clients to reply.",
  },
];

export const PHYSICAL_PRODUCTS: ProductItem[] = [
  {
    id: "ergonomic-desk-kit",
    name: "Ergonomic Remote Work Desk Kit",
    category: "Remote Work Gadgets",
    price: "₦85,000",
    originalPrice: "₦120,000",
    save: "Save 29%",
    bg: "#dce9f9",
    image:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=600&fit=crop",
    description:
      "Laptop stand, wireless keyboard, ergonomic mouse, and cable organiser.",
  },
  {
    id: "noise-cancelling-headset",
    name: "Pro Noise-Cancelling Headset",
    category: "Remote Work Gadgets",
    price: "₦55,000",
    originalPrice: "₦80,000",
    save: "Save 31%",
    bg: "#eef4fc",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
    tag: "Best seller",
    description:
      "Clear audio for client calls and focus sessions, built for remote work.",
  },
  {
    id: "ring-light-webcam-bundle",
    name: "Ring Light & HD Webcam Bundle",
    category: "Remote Work Gadgets",
    price: "₦65,000",
    originalPrice: "₦95,000",
    save: "Save 32%",
    bg: "#dce9f9",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&h=600&fit=crop",
    description:
      "Look and sound your best on every video call, ring light and 1080p webcam.",
  },
];

export type StoreTab = "digital" | "gear";

export function StoreTabs({
  value,
  onChange,
}: {
  value: StoreTab;
  onChange: (tab: StoreTab) => void;
}) {
  const tabs: { id: StoreTab; label: string }[] = [
    { id: "digital", label: "Digital VA tools" },
    { id: "gear", label: "Remote work gadgets" },
  ];
  return (
    <div className="inline-flex flex-wrap rounded-full bg-ink/5 p-1.5 ring-1 ring-ink/5">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          aria-pressed={value === tab.id}
          className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 md:px-7 ${
            value === tab.id
              ? "bg-ink text-paper shadow-soft"
              : "text-ink-soft hover:text-ink"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export function ProductCard({ prod }: { prod: ProductItem }) {
  return (
    <Reveal className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white p-2 shadow-soft ring-1 ring-ink/5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-lift">
        <div
          className="relative aspect-[4/3] overflow-hidden rounded-[calc(2rem-0.5rem)]"
          style={{ backgroundColor: prod.bg }}
        >
          {prod.tag && (
            <span className="absolute left-4 top-4 z-10 rounded-full bg-ink px-3 py-1 text-[10px] font-bold text-paper">
              {prod.tag}
            </span>
          )}
          {prod.save && (
            <span className="absolute right-4 top-4 z-10 rounded-full bg-mint-deep px-3 py-1 text-[10px] font-bold text-ink">
              {prod.save}
            </span>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={prod.image}
            alt={prod.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.05]"
          />
        </div>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className="text-xs font-semibold text-accent-deep">
            {prod.category}
          </p>
          <h4 className="mt-1.5 text-base font-bold tracking-tight md:text-lg">
            {prod.name}
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {prod.description}
          </p>
          <div className="mt-auto pt-5">
            <div className="flex items-baseline gap-2 border-t border-ink/10 pt-4">
              <span className="text-lg font-extrabold tracking-tight">
                {prod.price}
              </span>
              {prod.originalPrice && (
                <span className="text-xs text-ink-soft/60 line-through">
                  {prod.originalPrice}
                </span>
              )}
            </div>
            <a
              href={`mailto:team@thevaworkshop.com?subject=${encodeURIComponent(
                `Order: ${prod.name}`,
              )}`}
              className="group/btn mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3 pl-6 pr-2.5 text-sm font-semibold text-paper transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
            >
              <ShoppingCartSimple size={15} weight="duotone" />
              Order now
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper/10 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/btn:-translate-y-px group-hover/btn:translate-x-0.5 group-hover/btn:scale-105">
                <ArrowUpRight size={14} weight="bold" />
              </span>
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function StorefrontPreview() {
  const [tab, setTab] = useState<StoreTab>("digital");
  const items =
    tab === "digital" ? DIGITAL_PRODUCTS.slice(0, 3) : PHYSICAL_PRODUCTS;

  return (
    <section id="storefront" className="scroll-mt-28 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
              Everything you need to{" "}
              <Marked className="text-accent">succeed.</Marked>
            </h2>
            <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-ink-soft">
              VA templates and remote work equipment, in one place. All prices
              in Naira.
            </p>
          </div>
          <Link
            href="/store"
            className="group flex items-center gap-2 rounded-full bg-ink py-3 pl-7 pr-3 text-sm font-semibold text-paper transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
          >
            View full store
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/10 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105">
              <ArrowUpRight size={16} weight="bold" />
            </span>
          </Link>
        </Reveal>

        <Reveal delay={0.05} className="mt-10">
          <StoreTabs value={tab} onChange={setTab} />
        </Reveal>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((prod) => (
            <ProductCard key={prod.id} prod={prod} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
