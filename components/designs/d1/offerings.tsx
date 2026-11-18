import Link from "next/link";
import {
  ArrowUpRightIcon,
  ChalkboardTeacherIcon,
  ChartLineUpIcon,
  CheckIcon,
  FileTextIcon,
  MicrophoneIcon,
  PhoneCallIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";
import { OFFERINGS, OFFERINGS_INTRO, type OfferingIcon } from "@/lib/content";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import { Band, Orb, SectionHead } from "./primitives";

const ICONS: Record<OfferingIcon, Icon> = {
  training: ChalkboardTeacherIcon,
  resume: FileTextIcon,
  call: PhoneCallIcon,
  community: UsersThreeIcon,
  interview: MicrophoneIcon,
  analytics: ChartLineUpIcon,
};

const isExternal = (href: string) => href.startsWith("http");

function CardLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={className}
      {...(isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}

export function D1Offerings() {
  const [live, resume, ...rest] = OFFERINGS;

  return (
    <Band id="offerings" innerClassName="py-24 sm:py-32">
      <SectionHead eyebrow="What you get" title={OFFERINGS_INTRO.title} sub={OFFERINGS_INTRO.sub} />

      <div className="mt-14 grid gap-3 lg:grid-cols-2">
        {/* Live trainings: gradient field */}
        <BlurFade inView>
          <CardLink
            href={live.href}
            className="d1-field d1-grain group flex min-h-[420px] flex-col justify-between rounded-[24px] p-6 text-white sm:min-h-[460px] sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-[13px] backdrop-blur-sm">
                <span className="relative flex size-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-d1-ice/80 motion-reduce:animate-none" />
                  <span className="relative size-2 rounded-full bg-white" />
                </span>
                Live session
              </span>
              <span className="rounded-full bg-white px-3.5 py-1.5 text-[13px] text-d1-ink">Recorded for replay</span>
            </div>
            <div>
              <p className="text-[15px] text-white/70">{live.title}</p>
              <p className="mt-2 max-w-[44ch] text-[16px] leading-[1.55]">{live.description}</p>
            </div>
          </CardLink>
        </BlurFade>

        {/* Resume & portfolio: document mock */}
        <BlurFade inView delay={0.08}>
          <CardLink
            href={resume.href}
            className="group flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[24px] border border-d1-stone bg-d1-taupe p-6 sm:min-h-[460px] sm:p-8"
          >
            <div className="relative mx-auto w-full max-w-[380px] translate-y-1 rounded-[16px] bg-white p-5 shadow-d1-whisper transition-transform duration-500 group-hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <Orb tone="ice" className="size-10" />
                <div className="space-y-1.5">
                  <div className="h-2.5 w-28 rounded-full bg-d1-ink/80" />
                  <div className="h-2 w-20 rounded-full bg-d1-stone" />
                </div>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-d1-taupe px-2.5 py-1 font-d1-mono text-[11px] text-d1-graphite">
                  <CheckIcon size={11} weight="bold" /> ATS
                </span>
              </div>
              <div className="mt-5 space-y-2">
                {[92, 78, 85, 60].map((w, i) => (
                  <div key={i} className="h-2 rounded-full bg-d1-stone" style={{ width: `${w}%` }} />
                ))}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {(["cobalt", "mist", "navy"] as const).map((t) => (
                  <div key={t} className={cn("d1-orb aspect-[4/3] !rounded-[10px]", `d1-orb--${t}`)} />
                ))}
              </div>
            </div>
            <div className="mt-8">
              <p className="text-[15px] text-d1-smoke">{resume.title}</p>
              <p className="mt-2 max-w-[44ch] text-[16px] leading-[1.55] text-d1-ink">{resume.description}</p>
            </div>
          </CardLink>
        </BlurFade>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {rest.map((o, i) => {
          const IconCmp = ICONS[o.icon];
          return (
            <BlurFade inView delay={0.05 * i} key={o.title} className="h-full">
              <CardLink
                href={o.href}
                className={cn(
                  "group flex h-full min-h-[260px] flex-col justify-between rounded-[20px] border border-d1-stone bg-d1-taupe p-5 transition-colors hover:bg-d1-stone/60",
                )}
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-10 place-items-center rounded-[10px] border border-d1-stone bg-d1-canvas text-d1-ink">
                    <IconCmp size={20} weight="light" />
                  </span>
                  {o.soon ? (
                    <span className="rounded-full border border-d1-stone bg-d1-canvas px-2.5 py-1 font-d1-mono text-[11px] tracking-[0.08em] text-d1-smoke uppercase">
                      Soon
                    </span>
                  ) : (
                    <ArrowUpRightIcon
                      size={16}
                      className="text-d1-ash transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-d1-ink"
                    />
                  )}
                </div>
                <div className="mt-10">
                  <p className="text-[15px] text-d1-smoke">{o.title}</p>
                  <p className={cn("mt-2 text-[15px] leading-[1.55]", o.soon ? "text-d1-graphite" : "text-d1-ink")}>
                    {o.description}
                  </p>
                </div>
              </CardLink>
            </BlurFade>
          );
        })}
      </div>
    </Band>
  );
}
