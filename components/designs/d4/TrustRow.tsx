"use client";

import { Medal } from "@phosphor-icons/react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { PROGRAMMES } from "@/lib/home-content";
import { Container } from "./primitives";
import Reveal from "./Reveal";

const badges = [
  { value: 300, suffix: "+", title: "VAs", detail: "learning and working together in our community" },
  { value: 6, suffix: "", title: "weeks", detail: "of live weekend classes and a capstone project" },
  { value: PROGRAMMES.length, suffix: "", title: "career tracks", detail: "from executive support to AI automation" },
];

export default function TrustRow() {
  return (
    <section aria-label="At a glance" className="py-20 md:py-24">
      <Container>
        <ul className="grid gap-12 text-center md:grid-cols-3 md:gap-12">
          {badges.map((b, i) => (
            <li key={b.title}>
              <Reveal delay={i * 0.08} className="flex flex-col items-center">
                <Medal size={40} weight="light" className="text-[#4a90e2]" aria-hidden />
                <p className="d4-heading mt-4 text-[38px] font-bold leading-none text-[#0b0f1a]">
                  <NumberTicker
                    value={b.value}
                    delay={0.15 + i * 0.1}
                    className="tracking-[-0.01em] text-[#0b0f1a] dark:text-[#0b0f1a]"
                  />
                  {b.suffix} <span className="font-medium">{b.title}</span>
                </p>
                <p className="mt-3 max-w-[26ch] text-sm leading-[1.4] text-[#5b616b]">
                  {b.detail}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
