"use client";

import { BlurFade } from "@/components/ui/blur-fade";

/** Magic UI BlurFade, tuned to the system's gentle 200-400ms motion. */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <BlurFade
      inView
      inViewMargin="-80px"
      direction="up"
      offset={14}
      duration={0.5}
      delay={delay}
      blur="4px"
      className={className}
    >
      {children}
    </BlurFade>
  );
}
