"use client";

import { useReducedMotionSafe } from "./use-reduced-motion";
import { WordRotate } from "@/components/ui/word-rotate";

/** Rotating electric keyword. Decorative: the real headline lives in the h1. */
export function HeroKeyword({ words, className }: { words: string[]; className?: string }) {
  const reduce = useReducedMotionSafe();
  if (reduce) return <span className={className}>{words[0]}</span>;
  return (
    <WordRotate
      words={words}
      duration={3000}
      className={className}
      motionProps={{
        initial: { opacity: 0, y: "60%", filter: "blur(6px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        exit: { opacity: 0, y: "-60%", filter: "blur(6px)" },
        transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
      }}
    />
  );
}
