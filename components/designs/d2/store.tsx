"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { ArrowRight, ShoppingBagOpen } from "@phosphor-icons/react";
import { PRODUCTS, orderHref, type Product } from "@/lib/content";
import { cn } from "@/lib/utils";

const TABS: { id: Product["kind"]; label: string }[] = [
  { id: "digital", label: "Digital assets" },
  { id: "gear", label: "Remote work gear" },
];

export function StoreTabs() {
  const [tab, setTab] = useState<Product["kind"]>("digital");
  const reduce = useReducedMotion();
  const items = PRODUCTS.filter((p) => p.kind === tab);

  return (
    <div className="rounded-[32px] bg-d2-paper p-2 sm:rounded-d2-tray sm:p-3">
      <div className="flex flex-col gap-3 px-1 pt-1 sm:flex-row sm:items-center sm:justify-between sm:px-2 sm:pt-2">
        <LayoutGroup id="d2-store">
          <div role="tablist" aria-label="Store categories" className="flex w-fit rounded-[16px] bg-d2-cloud p-1">
            {TABS.map((t) => {
              const active = t.id === tab;
              return (
                <button
                  key={t.id}
                  role="tab"
                  id={`d2-tab-${t.id}`}
                  aria-selected={active}
                  aria-controls="d2-store-panel"
                  onClick={() => setTab(t.id)}
                  className={cn(
                    "relative h-10 rounded-[12px] px-4 text-[14.5px] transition-colors",
                    active ? "text-d2-obsidian" : "text-d2-steel hover:text-d2-obsidian",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="d2-tab-pill"
                      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
                      className="absolute inset-0 rounded-[12px] bg-d2-snow shadow-[0_1px_2px_rgba(9,9,11,0.08)]"
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>
        <p className="px-1 text-[14px] text-d2-steel">
          <span className="font-semibold text-d2-obsidian">{items.length}</span> items · priced in Naira
        </p>
      </div>

      <div id="d2-store-panel" role="tabpanel" aria-labelledby={`d2-tab-${tab}`} className="mt-3">
        <AnimatePresence mode="wait" initial={false}>
          <motion.ul
            key={tab}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: reduce ? 0 : 0.28, ease: "easeOut" }}
            className={cn(
              "-mx-2 flex snap-x snap-mandatory scroll-px-2 gap-2 overflow-x-auto px-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:gap-3 sm:overflow-visible sm:px-0",
              items.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3",
            )}
          >
            {items.map((p) => (
              <li key={p.id} className="w-[84%] shrink-0 snap-start sm:w-auto">
                <article className="group flex h-full flex-col rounded-[28px] border border-d2-cloud bg-d2-snow p-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-d2-cloud">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt=""
                      decoding="async"
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="rounded-d2-badge bg-d2-electric px-2.5 py-1 text-[12px] font-medium text-white">
                        {p.save}
                      </span>
                      {p.tag && (
                        <span className="d2-glass rounded-d2-badge px-2.5 py-1 text-[12px] font-medium text-d2-obsidian">
                          {p.tag}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col px-3 pt-4 pb-3">
                    <p className="text-[12.5px] text-d2-fog">{p.category}</p>
                    <h3 className="mt-1 text-[17px] leading-snug font-semibold tracking-[-0.02em] text-d2-obsidian">
                      {p.name}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-[1.45] text-d2-steel">{p.description}</p>
                    <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                      <p className="leading-none">
                        <span className="text-[20px] font-semibold tracking-[-0.02em] text-d2-obsidian">{p.price}</span>
                        <span className="ml-2 text-[13px] text-d2-fog line-through">{p.originalPrice}</span>
                      </p>
                      <a
                        href={orderHref(p.name)}
                        aria-label={`Order ${p.name}`}
                        className="d2-btn-obsidian inline-flex h-9 items-center gap-1.5 rounded-[12px] px-3.5 text-[13px] font-medium"
                      >
                        <ShoppingBagOpen className="size-4" />
                        Order
                      </a>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>

      <div className="flex justify-center pt-4 pb-2">
        <Link
          href="/store"
          className="group inline-flex items-center gap-1.5 text-[14.5px] font-medium text-d2-obsidian"
        >
          Browse the full store
          <ArrowRight weight="bold" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
