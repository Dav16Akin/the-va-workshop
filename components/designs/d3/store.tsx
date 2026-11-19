"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { PRODUCTS, orderHref, type Product } from "@/lib/content";
import { cn } from "@/lib/utils";

const TABS: { id: Product["kind"]; label: string }[] = [
  { id: "digital", label: "Digital" },
  { id: "gear", label: "Gear" },
];

export function D3StoreTabs() {
  const [tab, setTab] = useState<Product["kind"]>("digital");
  const reduce = useReducedMotion();
  const items = PRODUCTS.filter((p) => p.kind === tab);

  return (
    <div>
      <div role="tablist" aria-label="Store category" className="inline-flex rounded-full bg-d3-fog p-1">
        {TABS.map((t) => {
          const count = PRODUCTS.filter((p) => p.kind === t.id).length;
          const selected = tab === t.id;
          return (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls="d3-store-panel"
              onClick={() => setTab(t.id)}
              className={cn(
                "relative inline-flex h-10 items-center gap-2 rounded-full px-5 text-[14px] font-medium transition-colors",
                selected ? "text-d3-white" : "text-d3-zinc hover:text-d3-carbon",
              )}
            >
              {selected && (
                <motion.span
                  layoutId="d3-store-pill"
                  transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  className="absolute inset-0 rounded-full bg-d3-carbon"
                />
              )}
              <span className="relative">{t.label}</span>
              <span className={"relative font-d3-mono text-[11px] text-d3-ash"}>
                {String(count).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <div id="d3-store-panel" role="tabpanel" className="mt-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.ul
            key={tab}
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -8 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: "easeOut" }}
            className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {items.length < 4 && (
              <li className="hidden lg:block">
                <Link
                  href="/store"
                  className="flex h-full min-h-[320px] flex-col justify-end rounded-d3-card bg-d3-carbon p-6 text-d3-white transition-transform duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-d3-signal"
                >
                  <span className="block text-[28px] leading-[1.05] tracking-[-0.022em]">Browse the full store</span>
                </Link>
              </li>
            )}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <li className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-d3-card bg-d3-fog">
        {/* eslint-disable-next-line @next/next/no-img-element -- Unsplash is not in remotePatterns */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
          {product.tag ? (
            <span className="rounded-full bg-d3-white px-2.5 py-1 text-[12px] font-medium text-d3-carbon">
              {product.tag}
            </span>
          ) : (
            <span />
          )}
          <span className="rounded-full bg-d3-signal px-2.5 py-1 text-[12px] font-medium text-d3-white">
            {product.save}
          </span>
        </div>
      </div>
      <p className="d3-label mt-5 text-d3-zinc">{product.category}</p>
      <h3 className="mt-2 text-[19px] leading-[1.2] tracking-[-0.015em] text-d3-carbon">{product.name}</h3>
      <p className="mt-2 line-clamp-2 text-[14px] leading-[1.5] text-d3-zinc">{product.description}</p>
      <div className="mt-auto flex items-center justify-between gap-3 pt-5">
        <p className="flex items-baseline gap-2">
          <span className="text-[18px] tracking-[-0.01em] text-d3-carbon">{product.price}</span>
          <span className="text-[13px] text-d3-ash line-through">{product.originalPrice}</span>
        </p>
        <a
          href={orderHref(product.name)}
          aria-label={`Order ${product.name} by email`}
          className="inline-flex h-11 items-center rounded-full border border-d3-mist px-5 text-[14px] font-medium text-d3-carbon transition-[background-color,border-color,color,transform] duration-150 hover:border-d3-carbon hover:bg-d3-carbon hover:text-d3-white active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d3-signal"
        >
          Order by email
        </a>
      </div>
    </li>
  );
}
