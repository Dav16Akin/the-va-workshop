"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { PROGRAMMES } from "@/lib/home-content";

export default function Programmes() {
  const [active, setActive] = useState(0);
  const base = useId();
  const programme = PROGRAMMES[active];

  return (
    <div className="mt-20 grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
      <div>
        <h3 className="text-[28px] font-bold leading-[1.15] tracking-[-0.03em] text-black">
          Three programmes, one format.
        </h3>
        <div
          role="tablist"
          aria-label="Programmes"
          className="mt-6 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible"
        >
          {PROGRAMMES.map((p, i) => (
            <button
              key={p.slug}
              id={`${base}-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={active === i}
              aria-controls={`${base}-panel`}
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-[8px] px-4 py-3 text-left text-[15px] font-medium transition-colors duration-200 ${
                active === i
                  ? "bg-[#eef4fc] text-[#2f6fbb]"
                  : "text-black/60 hover:bg-black/[0.04] hover:text-black"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      <div
        id={`${base}-panel`}
        role="tabpanel"
        aria-labelledby={`${base}-tab-${active}`}
        className="rounded-[12px] border border-black/[0.08] bg-[#f6f5f4] p-6 md:p-8"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={programme.slug}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <p className="d2-serif max-w-[52ch] text-[18px] leading-[1.56] text-[#615d59]">
              {programme.short}
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="text-[14px] font-semibold text-black">Skills you build</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {programme.skills.map((s) => (
                    <li key={s} className="rounded-full bg-white px-3 py-1 text-[14px] text-black/80 ring-1 ring-black/[0.08]">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-black">Tools you use</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {programme.tools.map((t) => (
                    <li key={t} className="rounded-full bg-[#dce9f9] px-3 py-1 text-[14px] text-[#051a4b]">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-black/[0.08] pt-6">
              <Link
                href={`/programmes/${programme.slug}`}
                className="group inline-flex items-center gap-1 text-[15px] font-medium text-[#2f6fbb]"
              >
                View the {programme.name} programme
                <ArrowRight size={14} weight="bold" className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              {programme.nextCohort && (
                <span className="text-[14px] text-black/60">
                  Next cohort: {programme.nextCohort}
                </span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
