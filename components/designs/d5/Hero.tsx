"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  CalendarDots,
  ChatsCircle,
  EnvelopeSimple,
  FileText,
  GoogleLogo,
  Laptop,
  Lightning,
  Robot,
  type Icon,
} from "@phosphor-icons/react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TextAnimate } from "@/components/ui/text-animate";
import { HERO, PRIMARY_CTA, SKILLS } from "@/lib/home-content";

type Tone = { bg: string; fg: string; border?: string };

// Blue-only spread replacing the MD's candy palette. Dark ink on light tints, white on deep shades.
const TONES: Tone[] = [
  { bg: "#4a90e2", fg: "#051a4b" },
  { bg: "#2f6fbb", fg: "#ffffff" },
  { bg: "#97b6e5", fg: "#051a4b" },
  { bg: "#dce9f9", fg: "#051a4b" },
  { bg: "#1f5aa6", fg: "#ffffff" },
  { bg: "#eef4fc", fg: "#051a4b" },
  { bg: "transparent", fg: "#f4f7fc", border: "1px solid rgb(244 247 252 / 0.75)" },
  { bg: "#0b2a66", fg: "#ffffff", border: "1px solid #2f6fbb" },
];

const ICONS: Record<string, Icon> = {
  "AI & Automation": Robot,
  "Calendar Management": CalendarDots,
  "Google Workspace": GoogleLogo,
  "Documentation & SOPs": FileText,
  "Zapier & Workflow Automation": Lightning,
  "Email & Inbox Management": EnvelopeSimple,
  "Client Communication": ChatsCircle,
  "Remote Work Tools": Laptop,
};

// Hand-placed in the negative space around the headline, never on a grid.
// `xl` tags sit closer to the centre column and only appear on wide screens.
const PLACEMENTS: { pos: React.CSSProperties; rotate: number; xl?: boolean }[] = [
  { pos: { left: "3%", top: "16%" }, rotate: -8 },
  { pos: { right: "4%", top: "11%" }, rotate: 9 },
  { pos: { left: "6%", top: "68%" }, rotate: 6 },
  { pos: { right: "3%", top: "60%" }, rotate: -11 },
  { pos: { left: "22%", top: "3%" }, rotate: 4, xl: true },
  { pos: { right: "20%", top: "87%" }, rotate: -5, xl: true },
  { pos: { left: "18%", top: "89%" }, rotate: 11, xl: true },
  { pos: { right: "25%", top: "2%" }, rotate: -12, xl: true },
];

function Tag({ label, tone }: { label: string; tone: Tone }) {
  const Glyph = ICONS[label] ?? Lightning;
  return (
    <span
      className="d5-tag"
      style={{ background: tone.bg, color: tone.fg, border: tone.border }}
    >
      <Glyph size={15} weight="bold" aria-hidden />
      {label}
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden">
      {!reduce && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <Spotlight
            gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(213, 72%, 70%, .10) 0, hsla(213, 72%, 52%, .03) 50%, hsla(213, 72%, 45%, 0) 80%)"
            gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(213, 72%, 70%, .07) 0, hsla(213, 72%, 52%, .02) 80%, transparent 100%)"
            gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(213, 72%, 70%, .05) 0, hsla(213, 72%, 45%, .02) 80%, transparent 100%)"
            duration={9}
          />
        </div>
      )}

      {/* Floating tag constellation (desktop) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        {SKILLS.map((skill, i) => {
          const p = PLACEMENTS[i];
          return (
            <motion.div
              key={skill}
              className={`absolute ${p.xl ? "hidden xl:block" : ""}`}
              style={p.pos}
              initial={reduce ? false : { opacity: 0, scale: 0.6, rotate: p.rotate * 2 }}
              animate={{ opacity: 1, scale: 1, rotate: p.rotate }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14,
                delay: 0.35 + i * 0.07,
              }}
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, i % 2 ? -10 : 10, 0] }}
                transition={{
                  duration: 6 + (i % 4),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              >
                <Tag label={skill} tone={TONES[i % TONES.length]} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="relative mx-auto flex min-h-[calc(100dvh-104px)] max-w-[1200px] flex-col items-center justify-center px-5 pb-20 pt-12 text-center md:px-10">
        {/* Mobile: a short, static run of tags above the headline */}
        <div aria-hidden className="mb-8 flex flex-wrap justify-center gap-2 lg:hidden">
          {SKILLS.slice(0, 4).map((skill, i) => (
            <span key={skill} style={{ transform: `rotate(${[-6, 5, -3, 8][i]}deg)` }}>
              <Tag label={skill} tone={TONES[i]} />
            </span>
          ))}
        </div>

        {reduce ? (
          <h1 className="d5-display max-w-[21ch] text-[clamp(2.75rem,6.4vw,6rem)]">
            {HERO.headline}
          </h1>
        ) : (
          <TextAnimate
            as="h1"
            by="word"
            animation="blurInUp"
            duration={0.9}
            once
            startOnView={false}
            className="d5-display max-w-[21ch] text-[clamp(2.75rem,6.4vw,6rem)]"
          >
            {HERO.headline}
          </TextAnimate>
        )}

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-[46ch] text-lg leading-[1.6] text-[var(--d5-fog)] md:text-xl"
        >
          {HERO.sub}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <Link href={PRIMARY_CTA.href} className="d5-btn d5-btn-primary group !px-6 !py-4 !text-base">
            {PRIMARY_CTA.label}
            <ArrowRight
              size={16}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
