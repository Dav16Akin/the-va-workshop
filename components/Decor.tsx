/**
 * Decorative asset system for The VA Workshop.
 * Risograph-collage language: flat geometric shapes with stippled ink grain,
 * overprint multiply blending, and hand-drawn line marks (bursts, scrawls).
 * Server-safe: no motion/phosphor imports; all motion is CSS (globals.css).
 */

type Tone =
  | "lav"
  | "accent"
  | "accentDeep"
  | "mintDeep"
  | "cream"
  | "ink"
  | "paper";

const FILLS: Record<Tone, string> = {
  lav: "#97b6e5",
  accent: "#4a90e2",
  accentDeep: "#2f6fbb",
  mintDeep: "#fff0a1",
  cream: "#eef4fc",
  ink: "#051a4b",
  paper: "#ffffff",
};

type GeoKind = "block" | "quarter" | "quarterBr" | "half" | "capsule" | "cross";

const CROSS_CLIP =
  "polygon(34% 0, 66% 0, 66% 34%, 100% 34%, 100% 66%, 66% 66%, 66% 100%, 34% 100%, 34% 66%, 0 66%, 0 34%, 34% 34%)";

function shapeStyle(kind: GeoKind): React.CSSProperties {
  switch (kind) {
    case "quarter":
      return { borderRadius: "100% 0 0 0" };
    case "quarterBr":
      return { borderRadius: "0 0 100% 0" };
    case "half":
      return { borderRadius: "999px 999px 0 0" };
    case "capsule":
      return { borderRadius: "999px" };
    case "cross":
      return { clipPath: CROSS_CLIP };
    default:
      return {};
  }
}

/** Flat geometric shape with stippled riso grain; multiply blends where shapes overlap. */
export function Geo({
  kind = "block",
  tone = "lav",
  blend = "multiply",
  className = "",
}: {
  kind?: GeoKind;
  tone?: Tone;
  blend?: "multiply" | "normal";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`riso pointer-events-none absolute ${
        blend === "multiply" ? "mix-blend-multiply" : ""
      } ${className}`}
      style={{ backgroundColor: FILLS[tone], ...shapeStyle(kind) }}
    />
  );
}

/** Composed collage clusters of overlapping grainy shapes. */
export function Cluster({
  variant = "a",
  className = "",
}: {
  variant?: "a" | "b" | "c";
  className?: string;
}) {
  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`}>
      {variant === "a" && (
        <>
          <Geo kind="quarter" tone="mintDeep" className="left-0 top-0 h-[80%] w-[72%]" />
          <Geo kind="block" tone="lav" className="right-0 top-[6%] h-[30%] w-[32%] rotate-3" />
          <Geo kind="half" tone="accent" className="bottom-0 left-[20%] h-[22%] w-[44%]" />
        </>
      )}
      {variant === "b" && (
        <>
          <Geo kind="cross" tone="mintDeep" className="left-0 top-0 h-[84%] w-[68%] rotate-6" />
          <Geo kind="capsule" tone="lav" className="bottom-[4%] right-0 h-[18%] w-[64%]" />
          <Geo kind="quarterBr" tone="accent" className="right-[2%] top-[2%] h-[30%] w-[26%]" />
        </>
      )}
      {variant === "c" && (
        <>
          <Geo kind="half" tone="lav" className="left-0 top-0 h-[46%] w-[82%]" />
          <Geo kind="block" tone="mintDeep" className="bottom-[4%] left-[6%] h-[38%] w-[38%] -rotate-3" />
          <Geo kind="capsule" tone="accent" className="bottom-0 right-0 h-[14%] w-[52%] rotate-6" />
        </>
      )}
    </div>
  );
}

/** Hand-drawn starburst of ink rays. */
export function Burst({
  tone = "ink",
  rays = 14,
  className = "",
}: {
  tone?: Tone;
  rays?: number;
  className?: string;
}) {
  const lines = [];
  for (let i = 0; i < rays; i++) {
    const a = (i / rays) * Math.PI * 2;
    lines.push(
      <line
        key={i}
        x1={50 + Math.cos(a) * 15}
        y1={50 + Math.sin(a) * 15}
        x2={50 + Math.cos(a) * 47}
        y2={50 + Math.sin(a) * 47}
      />,
    );
  }
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke={FILLS[tone]}
      strokeWidth={2.6}
      strokeLinecap="round"
      className={`pointer-events-none absolute ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      {lines}
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
  scrawl: {
    d: "M5 27L23 11L18 29L41 12L35 31L59 14L53 31L78 16L73 30L94 18",
    vb: "0 0 100 40",
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
        strokeLinejoin="round"
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
