"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CheckCircle, CalendarBlank, Kanban, UsersThree, Check, Circle, ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import { AnimatedList } from "@/components/ui/animated-list";
import { COHORT, HIRE_BENEFITS, JOURNEY, OFFERINGS, PATHS, PROGRAMMES } from "@/lib/content";
import { cn } from "@/lib/utils";

type TabId = "learn" | "build" | "hired";

const TABS: {
  id: TabId;
  label: string;
  title: string;
  body: string;
  checks: string[];
  cta: { label: string; href: string };
}[] = [
  {
    id: "learn",
    label: "Learn",
    title: OFFERINGS[0].title,
    body: COHORT.summary,
    checks: COHORT.timeline.map((t) => `${t.weeks}: ${t.title}`),
    cta: COHORT.register,
  },
  {
    id: "build",
    label: "Build",
    title: OFFERINGS[1].title,
    body: `${OFFERINGS[1].description} ${COHORT.graded}`,
    checks: JOURNEY.slice(2, 5).map((j) => j.title),
    cta: { label: "Explore the store", href: OFFERINGS[1].href },
  },
  {
    id: "hired",
    label: "Get hired",
    title: PATHS.talent.title,
    body: PATHS.talent.body,
    checks: PATHS.talent.steps,
    cta: PATHS.talent.cta,
  },
];

export function JourneyTabs() {
  const [active, setActive] = useState<TabId>("learn");
  const reduce = useReducedMotion();
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Your path through the programme"
        className="mx-auto flex w-fit max-w-full gap-1 rounded-full border border-white/[0.08] bg-d4-carbon p-1.5"
      >
        {TABS.map((t) => {
          const on = t.id === active;
          return (
            <button
              key={t.id}
              role="tab"
              id={`d4-tab-${t.id}`}
              aria-selected={on}
              aria-controls={`d4-panel-${t.id}`}
              onClick={() => setActive(t.id)}
              className={cn(
                "relative flex h-11 items-center gap-2 rounded-full px-4 text-[14.5px] font-medium transition-colors sm:px-6 sm:text-[15px]",
                on ? "text-white" : "text-d4-ash hover:text-white",
              )}
            >
              {on && (
                <motion.span
                  layoutId="d4-journey-pill"
                  transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full border border-d4-voltage/40 bg-white/[0.07] shadow-[0_0_24px_rgba(47,107,255,0.25)]"
                />
              )}
              <span
                aria-hidden
                className={cn(
                  "relative size-1.5 rounded-full transition-colors",
                  on ? "bg-d4-voltage shadow-[0_0_10px_#2f6bff]" : "bg-d4-steel",
                )}
              />
              <span className="relative">{t.label}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={tab.id}
          id={`d4-panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`d4-tab-${tab.id}`}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-[1fr_1.15fr] lg:gap-16"
        >
          <div>
            <h3 className="font-d4-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white">
              {tab.title}
            </h3>
            <p className="mt-5 max-w-[500px] text-[16.5px] leading-relaxed text-d4-ash">{tab.body}</p>
            <ul className="mt-7 space-y-3.5">
              {tab.checks.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[15.5px] text-white">
                  <CheckCircle weight="fill" className="mt-0.5 size-5 shrink-0 text-d4-voltage" />
                  {c}
                </li>
              ))}
            </ul>
            <Link
              href={tab.cta.href}
              className="group/btn mt-9 inline-flex h-12 items-center gap-2.5 rounded-d4-pill border border-white/15 px-6 text-[15px] font-medium text-white transition-colors hover:border-d4-signal/60 hover:bg-white/[0.04]"
            >
              {tab.cta.label}
              <ArrowRight weight="bold" className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
            </Link>
          </div>

          <ProductFrame>
            {tab.id === "learn" && <SchedulePanel />}
            {tab.id === "build" && <TrackerPanel animate={!reduce} />}
            {tab.id === "hired" && <PoolPanel />}
          </ProductFrame>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* Blue-glow stage that holds a white "product UI" panel */
function ProductFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[radial-gradient(120%_90%_at_100%_0%,rgba(47,107,255,0.55),rgba(47,107,255,0.12)_45%,#101114_75%)] p-4 sm:p-8">
      <div aria-hidden className="d4-grid-bg absolute inset-0 opacity-70" />
      <div className="relative rounded-[18px] bg-d4-paper p-1 text-d4-ink shadow-[0_0_60px_rgba(47,107,255,0.35)]">
        <div className="flex items-center gap-1.5 px-3 py-2.5">
          <span className="size-2.5 rounded-full bg-[#d6dbe6]" />
          <span className="size-2.5 rounded-full bg-[#d6dbe6]" />
          <span className="size-2.5 rounded-full bg-[#d6dbe6]" />
        </div>
        <div className="rounded-[14px] bg-white p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
}

function PanelHead({ icon, title, meta }: { icon: React.ReactNode; title: string; meta: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-[#e6e9f0] pb-4">
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#eaf0ff] text-d4-voltage">{icon}</span>
        <p className="truncate text-[15px] font-medium tracking-[-0.01em]">{title}</p>
      </div>
      <span className="shrink-0 rounded-md bg-[#f1f3f8] px-2 py-1 font-d4-mono text-[11px] text-[#4b5263]">{meta}</span>
    </div>
  );
}

function SchedulePanel() {
  const widths = ["w-[66%]", "w-[34%]", "w-[10%]"];
  const offsets = ["ml-0", "ml-[66%]", "ml-[90%]"];
  return (
    <div>
      <PanelHead icon={<CalendarBlank weight="bold" className="size-4" />} title="Cohort schedule" meta={COHORT.month} />
      <div className="mt-5 grid grid-cols-6 font-d4-mono text-[10.5px] text-[#6b7280]">
        {Array.from({ length: 6 }, (_, i) => (
          <span key={i} className="border-l border-[#eef0f5] pl-1.5">
            W{i + 1}
          </span>
        ))}
      </div>
      <ul className="mt-3 space-y-3">
        {COHORT.timeline.map((t, i) => (
          <li key={t.title}>
            <div
              className={cn(
                "rounded-lg px-3 py-2.5",
                widths[i],
                offsets[i],
                i === 0 && "bg-d4-voltage text-white",
                i === 1 && "bg-[#dfe8ff] text-d4-ink",
                i === 2 && "min-w-[44px] bg-d4-ink text-white",
              )}
            >
              <p className={cn("text-[12.5px] font-medium leading-tight sm:text-[13px]", i === 2 && "sr-only")}>{t.title}</p>
              {i === 2 && <span aria-hidden className="block text-center text-[13px]">★</span>}
            </div>
            <p className="mt-1.5 text-[12.5px] text-[#4b5263]">
              <span className="font-d4-mono text-[11px] text-[#6b7280]">{t.weeks}</span> · {t.detail}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[#e6e9f0] pt-4">
        {COHORT.facts.map((f) => (
          <div key={f.label} className="rounded-lg bg-[#f6f7fb] px-3 py-2.5">
            <p className="font-d4-mono text-[10.5px] uppercase tracking-[0.08em] text-[#6b7280]">{f.label}</p>
            <p className="mt-0.5 text-[13.5px] font-medium">{f.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrackerPanel({ animate }: { animate: boolean }) {
  const rows = JOURNEY.map((j, i) => (
    <div key={j.title} className="flex w-full items-start gap-3 rounded-xl border border-[#e6e9f0] bg-white p-3.5">
      <span
        className={cn(
          "grid size-7 shrink-0 place-items-center rounded-full font-d4-mono text-[11px]",
          i < 4 ? "bg-d4-voltage text-white" : "bg-[#eef1f7] text-[#4b5263]",
        )}
      >
        {i < 4 ? <Check weight="bold" className="size-3.5" /> : <Circle className="size-3" />}
      </span>
      <div className="min-w-0">
        <p className="text-[13.5px] font-medium">{j.title}</p>
        <p className="mt-0.5 line-clamp-1 text-[12.5px] text-[#4b5263]">{j.description}</p>
      </div>
      <span className="ml-auto shrink-0 font-d4-mono text-[10.5px] text-[#6b7280]">0{i + 1}</span>
    </div>
  ));
  return (
    <div>
      <PanelHead icon={<Kanban weight="bold" className="size-4" />} title="Programme tracker" meta={PROGRAMMES[0].name} />
      <div className="mt-4 h-[330px] overflow-hidden [mask-image:linear-gradient(to_bottom,#000_80%,transparent)]">
        {animate ? (
          <AnimatedList delay={900} className="gap-2.5">
            {rows}
          </AnimatedList>
        ) : (
          <div className="flex flex-col gap-2.5">{rows.slice().reverse()}</div>
        )}
      </div>
    </div>
  );
}

function PoolPanel() {
  return (
    <div>
      <PanelHead icon={<UsersThree weight="bold" className="size-4" />} title="Talent pool" meta={PATHS.talent.label} />
      <ol className="mt-5 space-y-0">
        {PATHS.talent.steps.map((s, i) => (
          <li key={s} className="relative flex gap-3.5 pb-5 last:pb-0">
            {i < PATHS.talent.steps.length - 1 && (
              <span aria-hidden className="absolute left-[13px] top-7 h-[calc(100%-24px)] w-px bg-[#dfe4ee]" />
            )}
            <span
              className={cn(
                "relative grid size-[27px] shrink-0 place-items-center rounded-full font-d4-mono text-[11px]",
                i === 0 ? "bg-d4-voltage text-white" : "border border-[#d6dbe6] bg-white text-[#4b5263]",
              )}
            >
              {i + 1}
            </span>
            <p className="pt-1 text-[14px] font-medium">{s}</p>
          </li>
        ))}
      </ol>
      <div className="mt-6 grid grid-cols-2 gap-2 border-t border-[#e6e9f0] pt-4">
        {HIRE_BENEFITS.map((b) => (
          <div key={b.title} className="rounded-lg bg-[#f6f7fb] px-3 py-2.5">
            <p className="text-[13px] font-medium">{b.title}</p>
            <p className="mt-0.5 text-[12px] leading-snug text-[#4b5263]">{b.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
