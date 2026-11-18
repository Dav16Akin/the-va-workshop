import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export const container = "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8";

const base =
  "group/btn inline-flex items-center justify-center gap-2.5 rounded-d4-pill text-[15px] font-medium tracking-[-0.01em] transition-[background-color,box-shadow,border-color,color] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d4-signal";

export const btn = {
  primary: cn(
    base,
    "h-12 bg-d4-voltage px-6 text-white hover:bg-[#245cf0] hover:shadow-d4-glow",
  ),
  ghost: cn(
    base,
    "h-12 border border-white/15 px-6 text-white hover:border-d4-signal/60 hover:bg-white/[0.04]",
  ),
  light: cn(base, "h-12 bg-white px-6 text-d4-midnight hover:bg-d4-ash"),
};

export function Arrow({ className }: { className?: string }) {
  return (
    <ArrowRight
      aria-hidden
      weight="bold"
      className={cn("size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5", className)}
    />
  );
}

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
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const cls = cn(btn[variant], className);
  if (external) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
        {children}
        <Arrow />
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      <Arrow />
    </Link>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 font-d4-mono text-[12px] uppercase tracking-[0.15em] text-d4-signal",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-d4-voltage shadow-[0_0_10px_#2f6bff]" />
      {children}
    </p>
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
