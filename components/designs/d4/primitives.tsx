import Link from "next/link";
import { cn } from "@/lib/utils";

export const container = "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8";

/** The one card style: flat carbon, hairline border, one radius. */
export const card = "rounded-d4-card border border-white/[0.08] bg-d4-carbon";

/** Linked card: adds the 2px lift and a brighter hairline on hover. */
export const cardLink = cn(
  card,
  "transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d4-signal",
);

const base =
  "inline-flex items-center justify-center gap-2 rounded-d4-pill font-medium tracking-[-0.01em] transition-[background-color,border-color,color,transform] duration-150 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d4-signal";

/** The one button pair (plus a light variant for use on the voltage card). */
export const btn = {
  primary: cn(base, "h-12 bg-d4-voltage px-6 text-[15px] text-white hover:bg-[#245cf0]"),
  ghost: cn(base, "h-12 border border-white/15 px-6 text-[15px] text-white hover:border-white/35 hover:bg-white/[0.04]"),
  light: cn(base, "h-12 bg-white px-6 text-[15px] text-d4-midnight hover:bg-d4-ash"),
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof btn;
  className?: string;
}) {
  const cls = cn(btn[variant], className);
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Display heading. `accent` renders on its own line in signal blue. */
export function Heading({
  children,
  accent,
  as: Tag = "h2",
  className,
  size = "lg",
}: {
  children: React.ReactNode;
  accent?: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  size?: "xl" | "lg" | "md";
}) {
  const sizes = {
    xl: "text-[clamp(2.75rem,8.4vw,6.25rem)] leading-[0.98] tracking-[-0.045em]",
    lg: "text-[clamp(2.25rem,5.6vw,4rem)] leading-[1.02] tracking-[-0.04em]",
    md: "text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1.08] tracking-[-0.03em]",
  };
  return (
    <Tag className={cn("font-d4-sans font-medium text-balance text-white", sizes[size], className)}>
      {children}
      {accent ? (
        <>
          {" "}
          <span className="block text-d4-signal">{accent}</span>
        </>
      ) : null}
    </Tag>
  );
}
