"use client";

import { useReducedMotion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";

/** Scroll-entry reveal (Magic UI BlurFade). Renders static under reduced motion. */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <BlurFade
      inView
      direction="up"
      offset={18}
      duration={0.6}
      delay={delay}
      inViewMargin="-80px"
      className={className}
    >
      {children}
    </BlurFade>
  );
}
