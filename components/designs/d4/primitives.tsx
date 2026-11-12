import Link from "next/link";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-4 md:px-8", className)}>
      {children}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
};

/** 12px radius, 12px 24px padding, weight 500 at 16px (system spec). */
export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[12px] px-6 py-3 text-base font-medium transition-[background-color,color,border-color,transform] duration-200 ease-out active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f6fbb]";
  const styles =
    variant === "primary"
      ? "bg-[#2f6fbb] text-white hover:bg-[#051a4b]"
      : "border border-[#0b0f1a] text-[#0b0f1a] hover:bg-[#0b0f1a] hover:text-white";
  const cls = cn(base, styles, className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
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

export function Pill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[80px] bg-[#dce9f9] px-3 py-1.5 text-xs font-medium text-[#051a4b]",
        className,
      )}
    >
      {children}
    </span>
  );
}
