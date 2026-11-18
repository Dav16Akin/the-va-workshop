"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { PRODUCTS, STORE_INTRO, orderHref, type Product } from "@/lib/content";
import { cn } from "@/lib/utils";

const TABS: { id: Product["kind"]; label: string }[] = [
  { id: "digital", label: "Digital" },
  { id: "gear", label: "Gear" },
];

export function D1Store() {
  const [kind, setKind] = useState<Product["kind"]>("digital");
  const items = PRODUCTS.filter((p) => p.kind === kind);

  return (
    <section id="store" className="border-t border-d1-stone bg-d1-canvas">
      <div className="mx-auto max-w-[1180px] border-d1-stone px-5 py-24 sm:px-8 sm:py-32 xl:border-x">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="mb-4 text-[15px] text-d1-smoke">The VA store</p>
          <h2 className="d1-display text-[34px] text-balance sm:text-[44px]">{STORE_INTRO.title}</h2>
          <p className="mx-auto mt-5 max-w-[44ch] text-[16px] leading-[1.6] text-d1-graphite sm:text-[17px]">
            {STORE_INTRO.sub}
          </p>

          <div
            role="tablist"
            aria-label="Product type"
            className="mt-8 inline-flex rounded-full border border-d1-stone bg-d1-taupe p-1"
          >
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={kind === t.id}
                onClick={() => setKind(t.id)}
                className={cn(
                  "relative rounded-full px-6 py-2.5 text-[15px] transition-colors",
                  kind === t.id ? "text-d1-ink" : "text-d1-smoke hover:text-d1-ink",
                )}
              >
                {kind === t.id ? (
                  <motion.span
                    layoutId="d1-store-tab"
                    className="absolute inset-0 rounded-full bg-white shadow-d1-whisper"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                ) : null}
                <span className="relative">
                  {t.label}
                  <span className="ml-1.5 font-d1-mono text-[12px] text-d1-ash">
                    {PRODUCTS.filter((p) => p.kind === t.id).length}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.ul
            key={kind}
            role="tabpanel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "d1-noscroll -mx-5 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0",
              items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
            )}
          >
            {items.map((p) => (
              <li key={p.id} className="w-[82%] shrink-0 snap-start sm:w-auto">
                <ProductCard product={p} />
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>

        <div className="mt-10 flex justify-center">
          <Link
            href="/store"
            className="inline-flex h-11 items-center gap-1.5 rounded-full bg-white px-5 text-[15px] text-d1-ink shadow-d1-whisper transition-colors hover:bg-d1-taupe"
          >
            Visit the full store
            <ArrowUpRightIcon size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product: p }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-d1-stone bg-white shadow-d1-whisper">
      <div className="relative aspect-[4/3] overflow-hidden bg-d1-taupe">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image}
          alt={p.name}
          className="size-full object-cover grayscale-[35%] transition-[transform,filter] duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white px-3 py-1 text-[12px] text-d1-ink">
          {p.category}
        </span>
        {p.tag ? (
          <span className="absolute top-3 right-3 rounded-full bg-d1-ink px-3 py-1 text-[12px] text-white">{p.tag}</span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[16px] leading-snug text-d1-ink">{p.name}</h3>
        <p className="mt-2 flex-1 text-[14px] leading-[1.55] text-d1-smoke">{p.description}</p>
        <div className="mt-5 flex items-end justify-between gap-3 border-t border-d1-stone pt-4">
          <div>
            <p className="font-d1-mono text-[15px] text-d1-ink">{p.price}</p>
            <p className="mt-0.5 flex gap-2 font-d1-mono text-[12px]">
              <s className="text-d1-ash">{p.originalPrice}</s>
              <span className="text-d1-graphite">{p.save}</span>
            </p>
          </div>
          <a
            href={orderHref(p.name)}
            className="inline-flex h-9 shrink-0 items-center rounded-full bg-d1-ink px-4 text-[13px] text-white transition-colors hover:bg-d1-graphite"
          >
            Order
          </a>
        </div>
      </div>
    </article>
  );
}
