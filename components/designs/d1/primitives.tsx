import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** A full-bleed band with the hairline frame: top rule + vertical gutter lines. */
export function Band({
  children,
  className,
  innerClassName,
  tone = "canvas",
  id,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  tone?: "canvas" | "taupe";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-t border-d1-stone",
        tone === "taupe" ? "bg-d1-taupe" : "bg-d1-canvas",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-[1180px] border-d1-stone px-5 sm:px-8 xl:border-x",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

type PillProps = ComponentProps<typeof Link> & {
  variant?: "ink" | "outline" | "ghost";
  size?: "sm" | "md";
};

export function Pill({ variant = "ink", size = "md", className, ...props }: PillProps) {
  return (
    <Link
      {...props}
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full whitespace-nowrap transition-[background-color,color,box-shadow,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d1-ink active:scale-[0.98]",
        size === "md" ? "h-11 px-5 text-[15px]" : "h-9 px-4 text-sm",
        variant === "ink" && "bg-d1-ink text-white hover:bg-d1-graphite",
        variant === "outline" &&
          "bg-white text-d1-ink shadow-d1-whisper hover:bg-d1-taupe",
        variant === "ghost" && "text-d1-ink hover:bg-d1-stone/60",
        className,
      )}
    />
  );
}

/** Asymmetric section intro: eyebrow + light headline left, paragraph right. */
export function SectionHead({
  eyebrow,
  title,
  sub,
  aside,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-6 md:grid-cols-2 md:items-end md:gap-16",
        className,
      )}
    >
      <div>
        {eyebrow ? <p className="mb-4 text-[15px] text-d1-smoke">{eyebrow}</p> : null}
        <h2 className="d1-display max-w-[14ch] text-[34px] text-balance sm:text-[44px]">{title}</h2>
      </div>
      <div className="md:pb-1">
        {sub ? (
          <p className="max-w-[46ch] text-[16px] leading-[1.6] text-d1-graphite sm:text-[17px]">{sub}</p>
        ) : null}
        {aside}
      </div>
    </div>
  );
}

export type OrbTone = "cobalt" | "ice" | "navy" | "azure" | "mist";

export function Orb({
  tone,
  className,
  children,
}: {
  tone: OrbTone;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("d1-orb grid place-items-center", `d1-orb--${tone}`, className)}>{children}</div>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("font-d1-mono text-[12px] tracking-[0.08em] text-d1-smoke uppercase", className)}>
      {children}
    </p>
  );
}
