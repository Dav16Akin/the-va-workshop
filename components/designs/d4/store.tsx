"use client";

import { useState } from "react";
import Link from "next/link";
import { Headphones, FileArrowDown } from "@phosphor-icons/react";
import { PRODUCTS, STORE_INTRO, orderHref, type Product } from "@/lib/content";
import { cn } from "@/lib/utils";
import { card, cardLink } from "./primitives";

const TABS = [
  { id: "digital", label: "Digital", Icon: FileArrowDown },
  { id: "gear", label: "Gear", Icon: Headphones },
] as const;

export function StoreTabs() {
  const [kind, setKind] = useState<Product["kind"]>("digital");
  const items = PRODUCTS.filter((p) => p.kind === kind).slice(0, 4);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="tablist" aria-label="Store category" className="flex gap-1 rounded-full border border-white/[0.08] bg-d4-carbon p-1.5">
          {TABS.map((t) => {
            const on = t.id === kind;
            const count = PRODUCTS.filter((p) => p.kind === t.id).length;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setKind(t.id)}
                className={cn(
                  "flex h-10 items-center gap-2 rounded-full px-4 text-[14.5px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d4-signal sm:px-5",
                  on ? "bg-d4-voltage text-white" : "text-d4-ash hover:text-white",
                )}
              >
                <t.Icon weight="bold" className="size-4" />
                <span>{t.label}</span>
                <span className={cn("font-d4-mono text-[11px]", on ? "text-white" : "text-d4-fog")}>{count}</span>
              </button>
            );
          })}
        </div>
        <Link
          href="/store"
          className="text-[15px] font-medium text-d4-signal underline underline-offset-4 decoration-d4-signal/40 hover:decoration-d4-signal"
        >
          Browse the full store
        </Link>
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p) => (
          <li key={p.id}>
            <ProductCard p={p} />
          </li>
        ))}
        {items.length < 4 && (
          <li>
            <Link href="/store" className={cn(cardLink, "flex h-full min-h-[300px] flex-col justify-end p-7")}>
              <p className="text-[20px] font-medium leading-tight tracking-[-0.02em] text-white">{STORE_INTRO.sub}</p>
              <span className="mt-5 text-[15px] font-medium text-d4-signal">Open the store</span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <article className={cn(card, "group flex h-full flex-col p-2.5 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-white/20")}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] bg-d4-graphite">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
          {p.tag ? (
            <span className="rounded-full bg-d4-midnight/85 px-2.5 py-1 font-d4-mono text-[10.5px] uppercase tracking-[0.12em] text-white">
              {p.tag}
            </span>
          ) : (
            <span />
          )}
          <span className="rounded-full bg-d4-voltage px-2.5 py-1 font-d4-mono text-[10.5px] text-white">{p.save}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col px-3 pb-3 pt-4">
        <p className="font-d4-mono text-[11px] uppercase tracking-[0.13em] text-d4-fog">{p.category}</p>
        <h3 className="mt-2 text-[17px] font-medium leading-snug tracking-[-0.015em] text-white">{p.name}</h3>
        <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-d4-fog">{p.description}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <p className="font-d4-mono">
            <span className="block text-[12px] text-d4-fog line-through">{p.originalPrice}</span>
            <span className="text-[19px] font-medium text-white">{p.price}</span>
          </p>
          <a
            href={orderHref(p.name)}
            className="inline-flex h-10 items-center rounded-d4-pill border border-white/15 px-4 text-[14px] font-medium text-white transition-[background-color,border-color,transform] duration-150 hover:border-d4-voltage hover:bg-d4-voltage active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d4-signal"
            aria-label={`Order ${p.name}`}
          >
            Order
          </a>
        </div>
      </div>
    </article>
  );
}
