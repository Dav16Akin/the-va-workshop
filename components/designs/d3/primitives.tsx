import Link from "next/link";
import { ArrowUpRightIcon, CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)}>{children}</div>;
}

export function Eyebrow({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={cn("d3-label flex items-center gap-2 text-d3-zinc", className)}>
      <span aria-hidden className="size-1.5 rounded-full bg-d3-signal" />
      {children}
    </p>
  );
}

type PillProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "outline" | "outline-light";
  className?: string;
};

export function Pill({ href, children, variant = "dark", className }: PillProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const newTab = href.startsWith("http");
  const classes = cn(
    "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium tracking-[-0.01em] transition-[background-color,border-color,color,transform] duration-150 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d3-signal",
    variant === "dark" && "bg-d3-carbon text-d3-white hover:bg-d3-black",
    variant === "light" && "bg-d3-white text-d3-carbon hover:bg-d3-fog",
    variant === "outline" && "border border-d3-mist bg-d3-white text-d3-carbon hover:border-d3-carbon",
    variant === "outline-light" && "border border-white/25 text-d3-white hover:border-white/70",
    className,
  );
  const inner = (
    <>
      {children}
      {/* The only arrow: marks a link that opens a new tab. */}
      {newTab && (
        <ArrowUpRightIcon weight="bold" aria-hidden className="size-3.5" />
      )}
    </>
  );
  if (external) {
    return (
      <a href={href} className={classes} {...(newTab ? { target: "_blank", rel: "noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

export function TextLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "text-[15px] underline decoration-1 underline-offset-[6px] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-d3-signal",
        className,
      )}
    >
      {children}
    </Link>
  );
}

/** Filled blue squircle with a white check: the signature list marker. */
export function CheckMark({ className, tone = "signal" }: { className?: string; tone?: "signal" | "white" }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex size-5 shrink-0 items-center justify-center rounded-[6px]",
        tone === "signal" ? "bg-d3-signal text-d3-white" : "bg-d3-white text-d3-signal",
        className,
      )}
    >
      <CheckIcon weight="bold" className="size-3" />
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  className,
  align = "left",
  dark,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  className?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={cn("max-w-[820px]", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Eyebrow className={cn(align === "center" && "justify-center", dark && "text-d3-ash")}>{eyebrow}</Eyebrow>
      )}
      <h2
        className={cn(
          "d3-heading text-balance text-[36px] sm:text-[46px] lg:text-[54px]",
          eyebrow && "mt-5",
          dark ? "text-d3-white" : "text-d3-carbon",
        )}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={cn(
            "mt-5 text-[16px] leading-[1.5] sm:text-[17px]",
            dark ? "text-d3-ash" : "text-d3-zinc",
            align === "center" && "mx-auto max-w-[560px]",
          )}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
