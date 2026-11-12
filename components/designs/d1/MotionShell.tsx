"use client";

import { MotionConfig } from "motion/react";

/** Honour prefers-reduced-motion for every motion component on the page. */
export function MotionShell({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
