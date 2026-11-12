"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { PRODUCTS } from "@/lib/home-content";
import { Button, Container, Pill } from "./primitives";
import Reveal from "./Reveal";

function Price({ price, original }: { price: string; original?: string }) {
  return (
    <p className="d4-tnum flex items-baseline gap-2">
      <span className="text-lg font-semibold">{price}</span>
      {original && (
        <span className="text-sm text-[#5b616b] line-through">{original}</span>
      )}
    </p>
  );
}

export default function Store() {
  const [featured, ...rest] = PRODUCTS;

  return (
    <section id="store" className="scroll-mt-24 py-20 md:py-[120px]">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[600px]">
            <h2 className="d4-heading text-[38px] font-medium leading-[1.15] md:text-[48px]">
              Tools to show up professionally.
            </h2>
            <p className="mt-5 max-w-[48ch] text-base leading-[1.5] text-[#5b616b] md:text-lg">
              Career templates and remote-work gear, priced in Naira.
            </p>
          </div>
          <Button href="/store" variant="ghost" className="self-start md:self-auto">
            Visit the store
          </Button>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <Reveal>
            <Link
              href="/store"
              className="group block h-full rounded-[12px] bg-[#f4f4f4] p-3 transition-colors duration-200 hover:bg-[#eef4fc]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 580px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col gap-3 p-4 pt-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <Pill>{featured.category}</Pill>
                  <h3 className="mt-3 text-2xl font-semibold leading-[1.25]">{featured.name}</h3>
                  <p className="mt-2 max-w-[44ch] text-[15px] leading-[1.5] text-[#5b616b]">
                    {featured.description}
                  </p>
                </div>
                <Price price={featured.price} original={featured.originalPrice} />
              </div>
            </Link>
          </Reveal>

          <ul className="flex flex-col divide-y divide-black/[0.06]">
            {rest.map((p, i) => (
              <li key={p.id}>
                <Reveal delay={0.06 * i}>
                  <Link
                    href="/store"
                    className="group flex items-center gap-5 rounded-[12px] py-5 transition-colors duration-200 md:px-3 md:hover:bg-[#eef4fc]"
                  >
                    <div className="relative size-20 shrink-0 overflow-hidden rounded-[12px] bg-[#f4f4f4] md:size-24">
                      <Image src={p.image} alt="" fill sizes="96px" className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-[#5b616b]">{p.category}</p>
                      <h3 className="mt-0.5 text-lg font-semibold leading-[1.3]">{p.name}</h3>
                      <div className="mt-1">
                        <Price price={p.price} original={p.originalPrice} />
                      </div>
                    </div>
                    <ArrowUpRight
                      size={18}
                      weight="bold"
                      aria-hidden
                      className="hidden shrink-0 text-[#2f6fbb] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block"
                    />
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
