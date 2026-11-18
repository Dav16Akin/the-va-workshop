"use client";

import { useReducedMotionSafe } from "./use-reduced-motion";
import { NumberTicker } from "@/components/ui/number-ticker";

/** "300+" style value: ticks the number up, or shows it plainly for reduced motion. */
export function StatValue({ value }: { value: string }) {
  const reduce = useReducedMotionSafe();
  const m = value.match(/^(\d+)(.*)$/);
  if (!m || reduce) return <>{value}</>;
  return (
    <>
      <NumberTicker value={Number(m[1])} className="tracking-[-0.04em] text-d2-obsidian" />
      <span>{m[2]}</span>
    </>
  );
}
