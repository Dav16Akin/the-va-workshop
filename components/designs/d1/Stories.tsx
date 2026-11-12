"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { PHOTOS, TESTIMONIALS, initials, type Photo } from "@/lib/home-content";
import Reveal from "./Reveal";

// Scene photos only: the people pictured are not the named graduates.
const scenes: Photo[] = [
  PHOTOS.homeDesk,
  PHOTOS.videoCall,
  PHOTOS.floorLaptop,
  PHOTOS.manKitchen,
  PHOTOS.deskMinimal,
  PHOTOS.armchair,
  PHOTOS.deskHeadphones,
];

export default function Stories() {
  const track = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="stories" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto flex max-w-[1320px] items-end justify-between gap-6 px-4 md:px-8">
        <Reveal>
          <p className="d1-mono text-[13px] font-medium">Graduate stories</p>
          <h2 className="d1-display mt-4 max-w-[16ch] text-[34px] md:text-[56px] md:tracking-[-1.6px]">
            In their own words.
          </h2>
        </Reveal>
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button
            type="button"
            aria-label="Previous stories"
            onClick={() => scroll(-1)}
            className="grid size-12 place-items-center rounded-full bg-[var(--d1-surface)] transition-colors duration-200 hover:bg-[#e6edf8]"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next stories"
            onClick={() => scroll(1)}
            className="grid size-12 place-items-center rounded-full bg-[var(--d1-navy)] text-white transition-colors duration-200 hover:bg-[#0a2a6e]"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <ul
        ref={track}
        className="d1-noscroll mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 md:scroll-px-8 md:px-8 xl:scroll-px-[calc((100vw-1320px)/2+2rem)] xl:px-[calc((100vw-1320px)/2+2rem)]"
      >
        {TESTIMONIALS.map((t, i) => (
          <li key={t.name} className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc((1320px-4rem-2rem)/3)]">
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] bg-[var(--d1-surface)]">
                <Image
                  src={scenes[i % scenes.length].src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 85vw, 420px"
                  className="object-cover"
                />
              </div>
              <blockquote className="d1-serif mx-auto mt-6 max-w-[34ch] text-center text-[16px] leading-[1.3] text-[var(--d1-near)]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-[var(--d1-navy)] text-[12px] font-medium text-white">
                  {initials(t.name)}
                </span>
                <span className="text-left leading-tight">
                  <span className="block text-[14px] font-medium tracking-[-0.02em]">{t.name}</span>
                  <span className="block text-[13px] text-[var(--d1-graphite)]">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-center gap-2 sm:hidden">
        <button type="button" aria-label="Previous stories" onClick={() => scroll(-1)} className="grid size-11 place-items-center rounded-full bg-[var(--d1-surface)]">
          <ArrowLeft size={18} />
        </button>
        <button type="button" aria-label="Next stories" onClick={() => scroll(1)} className="grid size-11 place-items-center rounded-full bg-[var(--d1-navy)] text-white">
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
