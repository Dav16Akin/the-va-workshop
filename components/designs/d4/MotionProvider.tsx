"use client";

import { MotionConfig } from "motion/react";

/** Honors prefers-reduced-motion for every motion component in design 4. */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
