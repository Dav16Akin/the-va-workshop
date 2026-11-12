import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PRODUCTS } from "@/lib/home-content";
import Reveal from "./Reveal";

export default function Store() {
  return (
    <section className="overflow-hidden bg-[var(--d5-canvas)] py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <Reveal>
          <p className="d5-eyebrow">The storefront</p>
          <h2 className="d5-h2 mt-5 max-w-[18ch]">Show up professionally from day one.</h2>
          <p className="mt-6 max-w-[50ch] text-lg leading-[1.6] text-[var(--d5-fog)]">
            Career assets, client scripts and remote-work gear, priced in Naira.
          </p>
          <Link
            href="/store"
            className="d5-focus group mt-8 inline-flex items-center gap-2 rounded text-[15px] font-normal text-[var(--d5-text)] underline decoration-[var(--d5-blue)] decoration-1 underline-offset-[6px] hover:decoration-2"
          >
            Visit the store
            <ArrowRight size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>

      {/* Horizontal scroll-snap rail, bleeding past the container on the right */}
      <ul className="d5-rail mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:px-10 xl:px-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))]">
        {PRODUCTS.map((p, i) => (
          <li key={p.id} className="w-[78vw] max-w-[320px] shrink-0 snap-start">
            <Reveal delay={i * 0.06} className="h-full">
              <Link href="/store" className="d5-card d5-focus group flex h-full flex-col p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] bg-[var(--d5-indigo)]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="320px"
                    className="object-cover opacity-90 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                  <p className="text-xs font-normal text-[var(--d5-lav)]">{p.category}</p>
                  <h3 className="mt-2 font-[family-name:var(--font-d5-display)] text-lg font-medium leading-snug tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.55] text-[var(--d5-fog)]">{p.description}</p>
                  <p className="mt-auto flex items-baseline gap-2 pt-5">
                    <span className="font-[family-name:var(--font-d5-display)] text-xl font-medium tabular-nums">
                      {p.price}
                    </span>
                    <span className="text-sm text-[var(--d5-mist)] line-through tabular-nums">
                      {p.originalPrice}
                    </span>
                  </p>
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
