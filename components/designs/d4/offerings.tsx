import Link from "next/link";
import {
  ChalkboardTeacher,
  ChartLineUp,
  ChatsCircle,
  FileText,
  Microphone,
  VideoCamera,
} from "@phosphor-icons/react/dist/ssr";
import { OFFERINGS, OFFERINGS_INTRO, type OfferingIcon } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Heading, cardLink, container } from "./primitives";

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
          <Heading>{OFFERINGS_INTRO.title}</Heading>
          <p className="max-w-[460px] text-[17px] leading-relaxed text-d4-ash lg:ml-auto">{OFFERINGS_INTRO.sub}</p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map((o) => {
            const Icon = ICONS[o.icon];
            const external = o.href.startsWith("http");
            return (
              <li key={o.title}>
                <Link
                  href={o.href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className={cn(cardLink, "flex h-full min-h-[240px] flex-col p-7")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={cn(
                        "grid size-11 place-items-center rounded-xl border border-white/10",
                        o.soon ? "text-d4-fog" : "text-d4-signal",
                      )}
                    >
                      <Icon weight="regular" className="size-6" />
                    </span>
                    {o.soon && (
                      <span className="rounded-full border border-white/15 px-2.5 py-1 font-d4-mono text-[11px] uppercase tracking-[0.12em] text-d4-ash">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <h3 className="mt-auto pt-10 text-[20px] font-medium leading-tight tracking-[-0.02em] text-white">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-d4-ash">{o.description}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
