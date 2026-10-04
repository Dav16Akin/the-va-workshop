import { useId } from "react";

/**
 * Inline-SVG decorative asset system for The VA Workshop.
 * Server-safe: no motion/phosphor imports, usable from server or client components.
 * All motion is CSS (globals.css) and reduced-motion guarded.
 */

type Tone = "lav" | "accent" | "mintDeep" | "cream" | "ink";

const FILLS: Record<Tone, string> = {
  lav: "#97b6e5",
  accent: "#4a90e2",
  mintDeep: "#fff0a1",
  cream: "#eef4fc",
  ink: "#051a4b",
};

const BLOB_PATHS = {
  organic:
    "M100 10C130 10 160 30 175 60C190 90 185 130 160 155C135 180 95 190 65 175C35 160 12 130 12 98C12 66 35 35 62 20C74 13 87 10 100 10Z",
  signature:
    "M100 10C130 10 160 30 175 60C190 90 185 130 160 155C135 180 95 190 65 175C35 160 12 130 12 98C12 66 35 35 62 20C74 13 87 10 100 10Z M100 66C119 66 134 81 134 100C134 119 119 134 100 134C81 134 66 119 66 100C66 81 81 66 100 66Z",
  twist:
    "M108 12C138 16 163 38 170 68C176 95 166 115 148 130C132 144 124 160 102 164C77 169 50 158 34 137C18 116 12 88 26 63C41 36 74 8 108 12Z",
} as const;

type BlobVariant = keyof typeof BLOB_PATHS;

export function Blob({
  tone = "lav",
  variant = "organic",
  className,
}: {
  tone?: Tone;
  variant?: BlobVariant;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" focusable="false">
      <path d={BLOB_PATHS[variant]} fill={FILLS[tone]} fillRule="evenodd" />
    </svg>
  );
}

export function Ring({
  from = "#97b6e5",
  to = "#4a90e2",
  className,
  spin = false,
}: {
  from?: string;
  to?: string;
  className?: string;
  spin?: boolean;
}) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className ?? ""} ${spin ? "anim-spin-slow" : ""}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="36" fill="none" stroke={`url(#${id})`} strokeWidth="9" />
    </svg>
  );
}

const SQUIGGLES = {
  underline: { d: "M3 8Q27 2 51 7T99 7T147 7T197 7", vb: "0 0 200 12" },
  growth: {
    d: "M10 110C34 100 26 74 48 66C68 59 62 38 84 32C100 28 104 16 116 12",
    vb: "0 0 124 122",
  },
  loop: {
    d: "M6 24C24 6 40 42 60 24S96 6 116 24 152 42 172 24 208 6 234 22",
    vb: "0 0 240 44",
  },
} as const;

type SquiggleVariant = keyof typeof SQUIGGLES;

export function Squiggle({
  variant = "underline",
  tone = "accent",
  className,
  strokeWidth = 3,
  draw = true,
}: {
  variant?: SquiggleVariant;
  tone?: Tone;
  className?: string;
  strokeWidth?: number;
  draw?: boolean;
}) {
  const s = SQUIGGLES[variant];
  return (
    <svg
      viewBox={s.vb}
      fill="none"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={s.d}
        stroke={FILLS[tone]}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        className={draw ? "anim-draw" : undefined}
      />
    </svg>
  );
}

/** Heading accent phrase with a hand-drawn squiggle underline. */
export function Marked({
  children,
  className = "text-accent",
  tone = "lav",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: Tone;
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <Squiggle
        variant="underline"
        tone={tone}
        strokeWidth={2.5}
        className="absolute -bottom-1 left-0 h-2.5 w-full"
      />
    </span>
  );
}
