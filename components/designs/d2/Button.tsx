import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "text" | "outline" | "inverse";

const styles: Record<Variant, string> = {
  // The single filled chromatic action. #2f6fbb keeps white text above AA.
  primary:
    "bg-[#2f6fbb] text-white hover:bg-[#051a4b] px-[15px] py-[6px] rounded-[8px]",
  ghost:
    "bg-[#eef4fc] text-[#2f6fbb] hover:bg-[#dce9f9] px-[15px] py-[6px] rounded-[8px]",
  text: "text-black/95 hover:bg-black/[0.04] px-[15px] py-[6px] rounded-[8px]",
  outline:
    "border border-black/90 text-black/90 hover:bg-black/[0.04] px-[10px] py-[5px] rounded-[4px]",
  inverse:
    "bg-white text-[#051a4b] hover:bg-[#eef4fc] px-[15px] py-[6px] rounded-[8px]",
};

export default function Button({
  href,
  variant = "primary",
  className,
  children,
  external,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const cls = cn(
    "inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-[14px] font-medium leading-[1.43] transition-colors duration-200 ease-out active:scale-[0.98]",
    styles[variant],
    className,
  );
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
