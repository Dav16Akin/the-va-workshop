"use client";

import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/home-content";
import { ActionLink, Reveal, Section } from "./primitives";

/** Horizontal scroll-snap shelf of career assets and remote-work gear. */
export default function Store() {
  return (
    <Section id="store" className="overflow-hidden bg-[#ffffff]">
      <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-[640px]">
          <h2 className="d3-serif d3-heading text-[#2c2c2c]">
            Tools to show up professionally.
          </h2>
          <p className="mt-5 max-w-[52ch] text-lg leading-[1.5] text-[#646464]">
            CVs, cold-email templates and remote-work gear, priced in Naira.
          </p>
        </div>
        <ActionLink href="/store" tone="secondary" className="self-start md:self-auto">
          Visit the store
        </ActionLink>
      </Reveal>

      <ul className="d3-scroll-x -mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:-mx-8 md:px-8">
        {PRODUCTS.map((product, i) => (
          <li key={product.id} className="w-[280px] shrink-0 snap-start md:w-[320px]">
            <Reveal delay={i * 0.06} className="h-full">
              <Link
                href="/store"
                className="group d3-card flex h-full flex-col overflow-hidden rounded-xl transition-colors duration-300 hover:border-[#97b6e5]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f9faf7]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="320px"
                    className="object-cover grayscale-[35%] transition-transform duration-[1000ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-[13px] text-[#646464]">{product.category}</p>
                  <h3 className="mt-1.5 text-base font-medium leading-[1.3] text-[#2c2c2c]">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.5] text-[#646464]">
                    {product.description}
                  </p>
                  <p className="mt-auto flex items-baseline gap-2 pt-5">
                    <span className="text-lg font-medium text-[#2c2c2c]">{product.price}</span>
                    <span className="text-[13px] text-[#646464] line-through">
                      {product.originalPrice}
                    </span>
                  </p>
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
