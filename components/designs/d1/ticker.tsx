"use client";

import { useReducedMotion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";

/** NumberTicker that renders the plain number when the user prefers reduced motion. */
export function Ticker({ value, className }: { value: number; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className}>{value}</span>;
  return <NumberTicker value={value} className={className} />;
}
