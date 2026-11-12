"use client";

import { BlurFade } from "@/components/ui/blur-fade";

/** Quick, restrained entrance used across sections. */
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
    <BlurFade inView delay={delay} duration={0.45} offset={12} blur="4px" className={className}>
      {children}
    </BlurFade>
  );
}
