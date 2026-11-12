import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import Button from "./Button";
import { PRODUCTS } from "@/lib/home-content";

export default function Store() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[620px]">
            <h2 className="d2-display text-black">Show up professionally.</h2>
            <p className="mt-4 text-[16px] leading-[1.5] text-[#615d59]">
              Career assets and remote-work gear, priced in Naira.
            </p>
          </div>
          <Button href="/store" variant="outline" className="w-fit">
            View the store
          </Button>
        </Reveal>
      </div>

      <Reveal delay={0.06}>
        <ul className="d2-scroll-row mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:px-8 xl:px-[max(2rem,calc((100vw-1200px)/2+2rem))]">
          {PRODUCTS.map((product) => (
            <li key={product.id} className="w-[78vw] shrink-0 snap-start sm:w-[320px]">
              <Link
                href="/store"
                className="group flex h-full flex-col overflow-hidden rounded-[12px] border border-black/[0.08] bg-white transition-colors duration-200 hover:border-black/20"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#eef4fc]">
                  <Image
                    src={product.image}
                    alt=""
                    fill
                    sizes="320px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[12px] tracking-[0.01em] text-black/60">{product.category}</p>
                  <h3 className="mt-1 text-[17px] font-semibold leading-[1.3] tracking-[-0.01em] text-black">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.43] text-[#615d59]">
                    {product.description}
                  </p>
                  <p className="mt-auto flex items-baseline gap-2 pt-4">
                    <span className="text-[18px] font-semibold text-black">{product.price}</span>
                    <span className="text-[14px] text-black/40 line-through">{product.originalPrice}</span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
