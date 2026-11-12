"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "@phosphor-icons/react";
import Button from "./Button";
import { FAQS } from "@/lib/home-content";

function Item({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const id = useId();

  return (
    <li className="rounded-[12px] border border-black/[0.08] bg-white">
      <h3>
        <button
          type="button"
          id={`${id}-q`}
          aria-expanded={open}
          aria-controls={`${id}-a`}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[16px] font-semibold tracking-[-0.01em] text-black md:px-6"
        >
          {q}
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid size-7 shrink-0 place-items-center rounded-full bg-[#eef4fc] text-[#2f6fbb]"
          >
            <Plus size={14} weight="bold" />
          </motion.span>
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
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="max-w-[62ch] px-5 pb-5 text-[15px] leading-[1.6] text-[#615d59] md:px-6">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="d2-display text-black">Questions, answered.</h2>
          <p className="d2-serif mt-4 text-[18px] leading-[1.56] text-[#615d59]">
            Still unsure which path fits? Talk it through with the founder.
          </p>
          <Button href="/book" variant="ghost" className="mt-6">
            Book a call
          </Button>
        </div>
        <ul className="grid gap-2">
          {FAQS.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </ul>
      </div>
    </section>
  );
}
