"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Reveal from "@/components/Reveal";
import { Blob, Marked } from "@/components/Decor";
import { TalentPoolPanel } from "@/components/TalentPool";
import { ClientsPanel } from "@/components/Clients";

type ApplyTab = "talent" | "hire";

const tabs: { id: ApplyTab; label: string }[] = [
  { id: "talent", label: "Join our talent pool" },
  { id: "hire", label: "Hire a virtual assistant" },
];

export default function ApplyTabs() {
  const [tab, setTab] = useState<ApplyTab>("talent");

  return (
    <section
      id="work-with-us"
      className="relative scroll-mt-28 overflow-hidden px-4 py-24 md:py-32"
    >
      <Blob
        tone="cream"
        variant="twist"
        className="anim-float-slow pointer-events-none absolute -left-16 top-20 hidden h-44 w-44 opacity-70 lg:block"
      />
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Two ways to <Marked className="text-accent">work with us.</Marked>
          </h2>
          <p className="mx-auto mt-5 max-w-[55ch] text-lg leading-relaxed text-ink-soft">
            Ready to earn as a VA, or ready to delegate? Pick your path and our
            team takes it from there.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center rounded-full bg-ink/5 p-1.5 ring-1 ring-ink/5">
            {tabs.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                aria-pressed={tab === item.id}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 md:px-7 ${
                  tab === item.id
                    ? "bg-ink text-paper shadow-soft"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          >
            {tab === "talent" ? <TalentPoolPanel /> : <ClientsPanel />}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
