"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { useReducedMotion } from "motion/react";
import { Squiggle } from "@/components/Decor";

interface Slide {
  id: string;
  image: string;
  alt: string;
  headlinePre: string;
  headlineMark: string;
  copy: string;
  cta: string;
  href: string;
  person?: { name: string; role: string };
}

const slides: Slide[] = [
  {
    id: "community",
    image: "/images/hero-community.jpg",
    alt: "Smiling virtual assistant working from her home desk with a laptop",
    headlinePre: "Join 300+ VAs building their ",
    headlineMark: "remote careers.",
    copy: "Get access to job leads, practical tips, resources, opportunities and a community of VAs growing together.",
    cta: "Join the Community",
    href: "/join",
  },
  {
    id: "cohorts",
    image: "/images/hero-cohorts.jpg",
    alt: "Virtual assistant smiling at his desk in a bright office",
    headlinePre: "Your next remote opportunity starts with the ",
    headlineMark: "right skills.",
    copy: "Join an upcoming VA Workshop cohort and learn how to work smarter, deliver professionally and stand out to clients.",
    cta: "Explore Upcoming Cohorts",
    href: "/join#cohorts",
  },
  {
    id: "essentials",
    image: "/images/hero-essentials.jpg",
    alt: "Minimal remote workspace with a laptop, desk lamp and plant",
    headlinePre: "Everything you need to show up ",
    headlineMark: "professionally.",
    copy: "From quality remote-work gadgets to CVs, cold-email templates and practical resources, get the tools you need to pursue remote opportunities with confidence.",
    cta: "Explore Remote Essentials",
    href: "/store",
  },
  {
    id: "talent",
    image: "/images/hero-talent.jpg",
    alt: "VA Workshop cohort collaborating around a laptop",
    headlinePre: "Your next opportunity could ",
    headlineMark: "start here.",
    copy: "Learn. Build your skills. Join our talent pool. Get ready for remote opportunities.",
    cta: "Join the Talent Pool",
    href: "/join#talent-pool",
  },
];

const ROTATE_MS = 6500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const slide = slides[index];

  useEffect(() => {
    if (reduce) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      ROTATE_MS,
    );
    return () => clearInterval(timer);
  }, [index, reduce]);

  return (
    <section
      id="top"
      className="relative isolate -mt-16 flex min-h-svh items-center justify-center overflow-hidden bg-ink"
    >
      {slides.map((s, i) => (
        <div
          key={s.id}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      <div aria-hidden className="absolute inset-0 bg-accent-deep/55" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/25"
      />

      <div className="relative mx-auto w-full max-w-4xl px-4 py-32 text-center">
        <div key={slide.id} className="anim-rise">
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-6xl">
            {slide.headlinePre}
            <span className="relative inline-block">
              {slide.headlineMark}
              <Squiggle
                variant="underline"
                tone="mintDeep"
                strokeWidth={3}
                className="absolute -bottom-2 left-0 h-3 w-full"
              />
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-[58ch] text-lg leading-relaxed text-white/85">
            {slide.copy}
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href={slide.href}
              className="group flex items-center gap-2 rounded-full bg-white py-3.5 pl-8 pr-3 text-sm font-bold text-ink shadow-lift transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98]"
            >
              {slide.cta}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105">
                <ArrowUpRight size={16} weight="bold" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2.5">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              i === index ? "w-9 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
