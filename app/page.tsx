import Link from "next/link";

const DESIGNS = [
  { n: 3, name: "Cinematic", ref: "superpower.com", note: "Dark photographic hero into crisp white, signal-blue accents.", swatch: ["#ffffff", "#18181b", "#1f5eff"] },
  { n: 4, name: "Control Room", ref: "launchdarkly.com", note: "Dark canvas, glowing blue signals, console-grade detail.", swatch: ["#0a0a0b", "#161618", "#2f6bff"] },
];

export default function DesignIndex() {
  return (
    <main className="min-h-screen bg-white px-5 py-16 text-black md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">The VA Workshop · Redesign</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Two design directions.</h1>
        <p className="mt-4 max-w-xl text-neutral-600">
          Same content, two visual systems. Open each homepage, pick a winner, and it gets rolled out across every page.
        </p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {DESIGNS.map((d) => (
            <li key={d.n}>
              <Link
                href={`/design-${d.n}`}
                className="group block rounded-3xl border border-neutral-200 p-7 transition-colors hover:border-black"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-neutral-500">Design {d.n} · {d.ref}</span>
                  <span className="flex gap-1">
                    {d.swatch.map((c) => (
                      <span key={c} className="size-4 rounded-full ring-1 ring-black/10" style={{ background: c }} />
                    ))}
                  </span>
                </div>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight">{d.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{d.note}</p>
                <span className="mt-6 inline-block text-sm font-medium underline-offset-4 group-hover:underline">View design →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
