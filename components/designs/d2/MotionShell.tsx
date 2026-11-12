"use client";

import { MotionConfig as Base } from "motion/react";

/** Honour prefers-reduced-motion for every motion component on the page. */
export function MotionConfig({ children }: { children: React.ReactNode }) {
  return <Base reducedMotion="user">{children}</Base>;
}
