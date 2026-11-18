import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10", className)}>{children}</div>;
}

/** Grey tag chip used as a section eyebrow (awesomic "Meet your on-demand team"). */
export function Chip({
  children,
  tone = "paper",
  className,
}: {
  children: React.ReactNode;
  tone?: "paper" | "outline" | "iron" | "electric" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-d2-badge px-2.5 py-1 text-[12.5px] leading-none font-medium whitespace-nowrap",
        tone === "paper" && "bg-d2-cloud text-d2-steel",
        tone === "outline" && "border border-d2-cloud bg-d2-snow text-d2-steel",
        tone === "iron" && "bg-d2-iron text-white",
        tone === "electric" && "bg-d2-electric text-white",
        tone === "dark" && "border border-white/10 bg-white/5 text-white/70",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Dot({ className }: { className?: string }) {
  return <span aria-hidden className={cn("inline-block size-1.5 rounded-full bg-d2-electric", className)} />;
}

type BtnProps = {
  href: string;
  children: React.ReactNode;
  variant?: "obsidian" | "ghost" | "snow" | "ghost-dark";
  arrow?: boolean;
  className?: string;
  size?: "md" | "lg";
};

export function Btn({ href, children, variant = "obsidian", arrow = false, className, size = "md" }: BtnProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const cls = cn(
    "group/btn inline-flex items-center justify-center gap-2 rounded-d2-btn font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d2-electric",
    size === "md" ? "h-11 px-[18px] text-[14.5px]" : "h-[52px] px-6 text-[15.5px]",
    variant === "obsidian" && "d2-btn-obsidian",
    variant === "snow" && "d2-btn-snow",
    variant === "ghost" && "border border-d2-mist bg-d2-snow text-d2-obsidian hover:border-d2-fog",
    variant === "ghost-dark" && "border border-white/15 text-white hover:border-white/40",
    className,
  );
  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowRight weight="bold" className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
      )}
    </>
  );
  if (external) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Split section head: chip + big headline left, paragraph + CTA right. */
export function SectionHead({
  chip,
  title,
  sub,
  cta,
  className,
  dark = false,
}: {
  chip?: string;
  title: string;
  sub?: string;
  cta?: { label: string; href: string };
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-12 md:items-end md:gap-10", className)}>
      <div className="md:col-span-7">
        {chip && (
          <Chip tone={dark ? "dark" : "paper"} className="mb-5">
            {chip}
          </Chip>
        )}
        <h2
          className={cn(
            "max-w-[16ch] text-[34px] leading-[1.06] font-semibold tracking-[-0.035em] text-balance sm:text-[44px] lg:text-[52px]",
            dark ? "text-white" : "text-d2-obsidian",
          )}
        >
          {title}
        </h2>
      </div>
      {(sub || cta) && (
        <div className="md:col-span-5 md:pb-2">
          {sub && (
            <p className={cn("max-w-[46ch] text-[16px] leading-[1.5] sm:text-[17px]", dark ? "text-white/60" : "text-d2-steel")}>
              {sub}
            </p>
          )}
          {cta && (
            <Btn href={cta.href} arrow className="mt-6" variant={dark ? "snow" : "obsidian"}>
              {cta.label}
            </Btn>
          )}
        </div>
      )}
    </div>
  );
}
