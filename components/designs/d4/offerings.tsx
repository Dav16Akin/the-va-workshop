import Link from "next/link";
import {
  ArrowUpRight,
  ChalkboardTeacher,
  ChartLineUp,
  ChatsCircle,
  FileText,
  Microphone,
  VideoCamera,
} from "@phosphor-icons/react/dist/ssr";
import { MagicCard } from "@/components/ui/magic-card";
import { OFFERINGS, OFFERINGS_INTRO, type OfferingIcon } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Reveal } from "./motion-bits";
import { Heading, container } from "./primitives";

const ICONS: Record<OfferingIcon, typeof ChalkboardTeacher> = {
  training: ChalkboardTeacher,
  resume: FileText,
  call: VideoCamera,
  community: ChatsCircle,
  interview: Microphone,
  analytics: ChartLineUp,
};

export function Offerings() {
  return (
    <section id="offerings" className="py-20 sm:py-28">
      <div className={container}>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <Reveal>
            <Heading>{OFFERINGS_INTRO.title}</Heading>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-[460px] text-[17px] leading-relaxed text-d4-ash lg:ml-auto">{OFFERINGS_INTRO.sub}</p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map((o, i) => {
            const Icon = ICONS[o.icon];
            const external = o.href.startsWith("http");
            return (
              <li key={o.title}>
                <Reveal delay={(i % 3) * 0.06} className="h-full">
                  <MagicCard
                    className="h-full rounded-d4-pill [&>div:last-child]:h-full"
                    gradientSize={260}
                    gradientColor="rgba(47,107,255,0.14)"
                    gradientFrom="#2f6bff"
                    gradientTo="#3dd6f5"
                  >
                    <Link
                      href={o.href}
                      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="group flex h-full min-h-[260px] flex-col rounded-d4-pill p-7 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-d4-signal"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span
                          className={cn(
                            "grid size-12 place-items-center rounded-2xl border",
                            o.soon
                              ? "border-white/10 bg-white/[0.03] text-d4-fog"
                              : "border-d4-voltage/30 bg-d4-voltage/10 text-d4-signal shadow-[0_0_24px_rgba(47,107,255,0.2)]",
                          )}
                        >
                          <Icon weight="duotone" className="size-6" />
                        </span>
                        {o.soon ? (
                          <span className="rounded-full border border-d4-signal/30 px-2.5 py-1 font-d4-mono text-[11px] uppercase tracking-[0.12em] text-d4-signal">
                            Coming soon
                          </span>
                        ) : (
                          <ArrowUpRight
                            aria-hidden
                            weight="bold"
                            className="size-5 text-d4-fog transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-d4-signal"
                          />
                        )}
                      </div>
                      <h3 className="mt-auto pt-10 text-[20px] font-medium leading-tight tracking-[-0.02em] text-white">
                        {o.title}
                      </h3>
                      <p className="mt-2 text-[16px] leading-relaxed text-d4-ash">{o.description}</p>
                    </Link>
                  </MagicCard>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
