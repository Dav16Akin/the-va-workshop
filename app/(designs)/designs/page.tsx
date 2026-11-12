import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Design directions | The VA Workshop",
};

const designs = [
  {
    href: "/design-1",
    name: "Design 1, Ledger",
    note: "White editorial space, light oversized type, navy product panels.",
    ready: true,
    swatch: "#ffffff",
  },
  {
    href: "/design-2",
    name: "Design 2, Notebook",
    note: "Warm paper canvas, hairline cards, blue accent panels.",
    ready: true,
    swatch: "#f6f5f4",
  },
  {
    href: "/design-3",
    name: "Design 3, Editorial",
    note: "Literary serif, full-bleed photography, frosted glass.",
    ready: true,
    swatch: "#fefffc",
  },
  {
    href: "/design-4",
    name: "Design 4, Warm Guide",
    note: "Photography-first, big tight type, soft blue bands.",
    ready: true,
    swatch: "#ffffff",
  },
  {
    href: "/design-5",
    name: "Design 5, Midnight",
    note: "Dark navy canvas, floating skill tags, thin type.",
    ready: true,
    swatch: "#020a1f",
  },
];

export default function DesignsIndex() {
  return (
    <main className="min-h-dvh bg-[#f7f9fc] px-4 py-16 text-[#051a4b] md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Homepage directions
        </h1>
        <p className="mt-4 max-w-[55ch] text-lg leading-relaxed text-[#3c4c78]">
          Each direction uses the same content and the brand blue. Pick one and
          it gets rolled out across every page.
        </p>

        <ul className="mt-12 grid gap-3">
          {designs.map((d) => (
            <li key={d.href}>
              {d.ready ? (
                <Link
                  href={d.href}
                  className="group flex items-center gap-5 rounded-2xl border border-[#e3e9f4] bg-white p-5 transition-colors duration-200 hover:border-[#4a90e2]"
                >
                  <span
                    aria-hidden
                    className="size-12 shrink-0 rounded-xl border border-[#e3e9f4]"
                    style={{ background: d.swatch }}
                  />
                  <span className="flex-1">
                    <span className="block font-bold">{d.name}</span>
                    <span className="block text-sm text-[#3c4c78]">{d.note}</span>
                  </span>
                  <ArrowUpRight
                    size={20}
                    weight="bold"
                    className="text-[#2f6fbb] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              ) : (
                <div className="flex items-center gap-5 rounded-2xl border border-dashed border-[#c9d6ea] p-5 text-[#3c4c78]">
                  <span
                    aria-hidden
                    className="size-12 shrink-0 rounded-xl"
                    style={{ background: d.swatch }}
                  />
                  <span>
                    <span className="block font-bold text-[#051a4b]">{d.name}</span>
                    <span className="block text-sm">{d.note}</span>
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>

        <Link
          href="/"
          className="mt-10 inline-block text-sm font-semibold text-[#2f6fbb] underline-offset-4 hover:underline"
        >
          Back to the current site
        </Link>
      </div>
    </main>
  );
}
