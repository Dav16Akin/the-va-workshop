"use client";

import { useId, useState } from "react";
import { Plus } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FAQS } from "@/lib/home-content";
import { Reveal, Section, TextLink } from "./primitives";

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const id = useId();
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;

  return (
    <div className="border-b border-[#dee2de]">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-start justify-between gap-6 py-6 text-left"
        >
          <span className="text-lg font-medium leading-[1.3] text-[#2c2c2c]">{q}</span>
          <Plus
            size={18}
            aria-hidden
            className={`mt-1 shrink-0 text-[#2f6fbb] transition-transform duration-500 ease-out ${open ? "rotate-45" : ""}`}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-[60ch] pb-6 text-base leading-[1.5] text-[#646464]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="d3-serif d3-heading text-[#2c2c2c]">Questions, answered.</h2>
          <p className="mt-5 max-w-[40ch] text-lg leading-[1.5] text-[#646464]">
            Still unsure which path fits you? Talk it through with us.
          </p>
          <TextLink href="/contact" className="mt-6">
            Contact the team
          </TextLink>
        </Reveal>
        <Reveal delay={0.1} className="border-t border-[#dee2de]">
          {FAQS.map((item) => (
            <Item key={item.q} q={item.q} a={item.a} />
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
