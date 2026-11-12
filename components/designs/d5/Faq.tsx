"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "@phosphor-icons/react";
import { FAQS } from "@/lib/home-content";
import Reveal from "./Reveal";

function Item({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const reduce = useReducedMotion();
  const id = useId();

  return (
    <li className="d5-card overflow-hidden">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          onClick={() => setOpen((v) => !v)}
          className="d5-focus flex w-full items-center justify-between gap-6 rounded-[24px] px-6 py-5 text-left"
        >
          <span className="text-[17px] font-normal text-[var(--d5-text)]">{q}</span>
          <Plus
            size={18}
            aria-hidden
            className={`shrink-0 text-[var(--d5-lav)] transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-button`}
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="max-w-[62ch] px-6 pb-6 text-[15px] leading-[1.65] text-[var(--d5-fog)]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-[var(--d5-canvas)] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <Reveal>
          <p className="d5-eyebrow">FAQ</p>
          <h2 className="d5-h2 mt-5 max-w-[12ch]">Questions, answered.</h2>
          <p className="mt-6 max-w-[34ch] text-base leading-[1.6] text-[var(--d5-fog)]">
            Something else on your mind?{" "}
            <Link
              href="/contact"
              className="d5-focus rounded text-[var(--d5-text)] underline decoration-[var(--d5-blue)] underline-offset-4"
            >
              Contact the team
            </Link>
            .
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="flex flex-col gap-3">
            {FAQS.map((f, i) => (
              <Item key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
