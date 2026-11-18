"use client";

import { Fragment } from "react";
import { motion } from "motion/react";

/** Word-by-word blur-in. Spaces stay real text nodes so wrapped lines never start indented. */
export function HeroHeadline({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <h1 className={className} aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          <motion.span
            aria-hidden
            className="inline-block"
            initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </h1>
  );
}
