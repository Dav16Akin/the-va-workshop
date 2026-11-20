"use client";

import { useSyncExternalStore } from "react";
import { motion } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

const QUERY = "(prefers-reduced-motion: no-preference)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
/** False on the server and during hydration, so markup always matches; animated layers mount right after. */
function useMotionAllowed() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}

/** Fade/blur/rise on scroll, once. Reduced-motion visitors get it neutralised by .d4-reveal in d4.css. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={cn("d4-reveal", className)}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** BorderBeam that only runs when motion is allowed. */
export function GlowBeam({ className, duration = 7, size = 120 }: { className?: string; duration?: number; size?: number }) {
  const allowed = useMotionAllowed();
  if (!allowed) return null;
  return (
    <BorderBeam
      size={size}
      duration={duration}
      colorFrom="#3dd6f5"
      colorTo="#2f6bff"
      borderWidth={1.5}
      className={cn(className)}
    />
  );
}
