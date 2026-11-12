"use client";

import { BlurFade } from "@/components/ui/blur-fade";

/** Section entrance: Magic UI BlurFade, triggered once on scroll. */
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
      direction="up"
      offset={14}
      blur="4px"
      duration={0.45}
      delay={delay}
      inViewMargin="-80px"
      className={className}
    >
      {children}
    </BlurFade>
  );
}
