"use client";

import { MotionConfig } from "motion/react";

/** Makes every motion/Magic UI animation inside Design 3 honour prefers-reduced-motion. */
export function D3MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
