"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { useReducedMotion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

/** Calm scroll reveal (Magic UI BlurFade), static under reduced motion. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <BlurFade
      inView
      direction="up"
      offset={14}
      duration={0.8}
      delay={delay}
      blur="8px"
      inViewMargin="-80px"
      className={className}
    >
      {children}
    </BlurFade>
  );
}

type Tone = "primary" | "secondary" | "onDark" | "filled";

const toneClass: Record<Tone, string> = {
  primary:
    "border-[#4a90e2] text-[#2f6fbb] hover:bg-[#eef4fc]",
  secondary:
    "border-[#282834] text-[#282834] hover:bg-[#f9faf7]",
  onDark:
    "border-[#97b6e5] text-white hover:bg-white/10",
  filled:
    "border-[#282834] bg-[#1f1f29] text-white hover:bg-[#282834]",
};

const arrowClass: Record<Tone, string> = {
  primary: "border-[#4a90e2]",
  secondary: "border-[#282834]",
  onDark: "border-[#97b6e5]",
  filled: "border-white/40",
};

/** Outlined action with the arrow-in-circle from the reference system. */
export function ActionLink({
  href,
  children,
  tone = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const external = href.startsWith("http");
  const Comp = external ? "a" : Link;
  return (
    <Comp
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center gap-3 whitespace-nowrap rounded-lg border py-[7px] pl-3.5 pr-[7px] text-[15px] font-medium leading-none transition-colors duration-300 active:translate-y-px",
        toneClass[tone],
        className,
      )}
    >
      {children}
      <span
        aria-hidden
        className={cn(
          "flex size-6 items-center justify-center rounded-full border transition-transform duration-300 ease-out group-hover:translate-x-0.5",
          arrowClass[tone],
        )}
      >
        <ArrowRight size={12} weight="bold" />
      </span>
    </Comp>
  );
}

/** Quiet inline link with an arrow. */
export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-base text-[#282834] underline decoration-[#dee2de] underline-offset-[6px] transition-colors duration-300 hover:decoration-[#4a90e2]",
        className,
      )}
    >
      {children}
      <ArrowRight
        size={14}
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </Link>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-28 px-4 py-20 md:px-8 md:py-28", className)}
    >
      <div className="mx-auto w-full max-w-[1200px]">{children}</div>
    </section>
  );
}
