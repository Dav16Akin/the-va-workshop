"use client";

import { useSyncExternalStore } from "react";
import { motion } from "motion/react";
import { LightRays } from "@/components/ui/light-rays";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Particles } from "@/components/ui/particles";
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

/** Fade/rise on scroll. Reduced-motion visitors get it neutralised by .d4-reveal in d4.css. */
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
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Ambient control-room atmosphere behind the hero. */
export function HeroAtmosphere() {
  const reduce = !useMotionAllowed();
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="d4-grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_30%,transparent_80%)]" />
      {!reduce && (
        <FlickeringGrid
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_55%_45%_at_50%_40%,#000,transparent_75%)]"
          squareSize={3}
          gridGap={7}
          color="#7fb2ff"
          maxOpacity={0.18}
          flickerChance={0.08}
        />
      )}
      <div className="absolute left-1/2 top-[38%] h-[520px] w-[min(1100px,140vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(47,107,255,0.30),rgba(47,107,255,0.08)_55%,transparent)] blur-2xl" />
      <div className="absolute left-[62%] top-[56%] h-[260px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(61,214,245,0.16),transparent)] blur-2xl" />
      {!reduce && (
        <>
          <LightRays color="rgba(127,178,255,0.22)" count={8} blur={40} speed={16} length="85vh" />
          <Particles className="absolute inset-0" quantity={70} color="#7fb2ff" size={0.5} staticity={60} />
        </>
      )}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-d4-midnight" />
    </div>
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
