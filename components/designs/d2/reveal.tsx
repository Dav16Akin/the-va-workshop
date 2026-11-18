"use client";

import { useReducedMotionSafe } from "./use-reduced-motion";
import { BlurFade } from "@/components/ui/blur-fade";

/** BlurFade on scroll; collapses to an instant, motionless fade for reduced-motion users. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotionSafe();
  return (
    <BlurFade
      inView={!reduce}
      delay={reduce ? 0 : delay}
      offset={reduce ? 0 : 14}
      blur={reduce ? "0px" : "6px"}
      duration={reduce ? 0 : 0.55}
      direction="up"
      className={className}
    >
      {children}
    </BlurFade>
  );
}
