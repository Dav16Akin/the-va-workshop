"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "@phosphor-icons/react";
import { FAQS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  return (
    <ul className="rounded-[28px] border border-d2-cloud bg-d2-snow px-5 sm:rounded-d2-card sm:px-8">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q} className={cn(i > 0 && "border-t border-d2-cloud")}>
            <h3>
              <button
                type="button"
                id={`d2-faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`d2-faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6"
              >
                <span className="flex items-baseline gap-4">
                  <span className={cn("text-[13px] tabular-nums", isOpen ? "text-d2-electric" : "text-d2-fog")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16.5px] leading-snug font-medium tracking-[-0.01em] text-d2-obsidian sm:text-[18px]">
                    {f.q}
                  </span>
                </span>
                <span
                  className={cn(
                    "grid size-8 shrink-0 place-items-center rounded-full border transition-colors",
                    isOpen ? "border-d2-obsidian bg-d2-obsidian text-white" : "border-d2-cloud text-d2-obsidian",
                  )}
                >
                  <Plus
                    weight="bold"
                    className={cn("size-3.5 transition-transform duration-300", isOpen && "rotate-45")}
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`d2-faq-a-${i}`}
                  role="region"
                  aria-labelledby={`d2-faq-q-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[62ch] pb-6 pl-[37px] text-[15px] leading-[1.6] text-d2-steel">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
