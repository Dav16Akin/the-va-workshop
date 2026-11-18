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
import { Eyebrow, Heading, container } from "./primitives";

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
            <Eyebrow>What you get</Eyebrow>
            <Heading className="mt-5">{OFFERINGS_INTRO.title}</Heading>
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
                    className="h-full rounded-d4-pill"
                    gradientSize={260}
                    gradientColor="rgba(47,107,255,0.14)"
                    gradientFrom="#2f6bff"
                    gradientTo="#3dd6f5"
                  >
                    <Link
                      href={o.href}
                      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="group flex h-full min-h-[260px] flex-col p-7"
                    >
                      <div className="flex items-start justify-between">
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
                          <span className="rounded-full border border-d4-signal/30 px-2.5 py-1 font-d4-mono text-[10.5px] uppercase tracking-[0.14em] text-d4-signal">
                            Coming soon
                          </span>
                        ) : (
                          <span className="font-d4-mono text-[12px] text-d4-fog">0{i + 1}</span>
                        )}
                      </div>
                      <h3 className="mt-auto pt-10 text-[21px] font-medium leading-tight tracking-[-0.02em] text-white">
                        {o.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-d4-fog">{o.description}</p>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-d4-signal">
                        {o.soon ? "Get notified" : "Learn more"}
                        <ArrowUpRight
                          weight="bold"
                          className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
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
