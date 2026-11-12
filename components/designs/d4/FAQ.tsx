"use client";

import { useId, useState } from "react";
import { Plus } from "@phosphor-icons/react";
import { FAQS } from "@/lib/home-content";
import { cn } from "@/lib/utils";
import { Button, Container } from "./primitives";
import Reveal from "./Reveal";

function Item({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const id = useId();
  return (
    <div className="rounded-[12px] bg-white ring-1 ring-black/[0.06]">
      <h3>
        <button
          type="button"
          id={`${id}-btn`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-6 rounded-[12px] px-5 py-5 text-left text-[17px] font-semibold leading-[1.35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f6fbb] md:px-6"
        >
          {q}
          <span
            aria-hidden
            className={cn(
              "flex size-8 shrink-0 items-center justify-center rounded-full bg-[#eef4fc] text-[#2f6fbb] transition-transform duration-300 ease-out",
              open && "rotate-45",
            )}
          >
            <Plus size={14} weight="bold" />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="max-w-[62ch] px-5 pb-6 text-base leading-[1.5] text-[#5b616b] md:px-6">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-[#eef4fc] py-20 md:py-[120px]">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="d4-heading text-[38px] font-medium leading-[1.15] md:text-[48px]">
            Questions, answered.
          </h2>
          <p className="mt-5 max-w-[34ch] text-base leading-[1.5] text-[#5b616b]">
            Can&apos;t find what you need? Our team replies to every message.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="ghost">
              Contact us
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <Item q={f.q} a={f.a} defaultOpen={i === 0} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
