"use client";

import { useId, useState } from "react";
import { Plus } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { FAQS } from "@/lib/home-content";
import Reveal from "./Reveal";

function Item({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const id = useId();
  return (
    <li className="border-b border-[var(--d1-line)]">
      <h3>
        <button
          type="button"
          id={`${id}-q`}
          aria-expanded={open}
          aria-controls={`${id}-a`}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-6 py-5 text-left text-[17px] font-medium tracking-[-0.025em]"
        >
          {q}
          <span
            aria-hidden
            className={`grid size-8 shrink-0 place-items-center rounded-full bg-[var(--d1-surface)] transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          >
            <Plus size={14} />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-a`}
            role="region"
            aria-labelledby={`${id}-q`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="max-w-[62ch] pb-6 text-[15px] leading-[1.5] tracking-[-0.015em] text-[var(--d1-graphite)]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <h2 className="d1-display max-w-[12ch] text-[34px] md:text-[56px] md:tracking-[-1.6px]">
            Questions, answered.
          </h2>
          <p className="mt-5 max-w-[36ch] text-[15px] leading-[1.4] text-[var(--d1-graphite)]">
            Still unsure? Email{" "}
            <a href="mailto:team@thevaworkshop.com" className="d1-link">
              team@thevaworkshop.com
            </a>
            .
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <ul className="border-t border-[var(--d1-line)]">
            {FAQS.map((f, i) => (
              <Item key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
