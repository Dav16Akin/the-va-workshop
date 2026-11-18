import Link from "next/link";
import {
  ArrowUpRight,
  ChalkboardTeacher,
  ChartLineUp,
  FileText,
  Microphone,
  PhoneCall,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { OFFERINGS, OFFERINGS_INTRO, type OfferingIcon } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Chip, Container } from "./primitives";
import { Reveal } from "./reveal";

const ICONS: Record<OfferingIcon, Icon> = {
  training: ChalkboardTeacher,
  resume: FileText,
  call: PhoneCall,
  community: UsersThree,
  interview: Microphone,
  analytics: ChartLineUp,
};

export function Offerings() {
  return (
    <section id="offerings" className="px-2 pt-24 sm:px-3 sm:pt-32">
      <div className="mx-auto max-w-[1320px] rounded-[32px] bg-d2-paper px-3 pt-12 pb-3 sm:rounded-d2-tray sm:px-6 sm:pt-16 sm:pb-6 lg:px-10 lg:pt-20 lg:pb-10">
        <Container className="px-2 sm:px-2 lg:px-2">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <Chip tone="outline" className="mb-5">
                  What you get
                </Chip>
                <h2 className="text-[34px] leading-[1.06] font-semibold tracking-[-0.035em] text-balance text-d2-obsidian sm:text-[44px] lg:text-[52px]">
                  {OFFERINGS_INTRO.title}
                </h2>
              </div>
              <p className="max-w-[46ch] text-[16px] leading-[1.5] text-d2-steel sm:text-[17px] md:col-span-5 md:pb-2">
                {OFFERINGS_INTRO.sub}
              </p>
            </div>
          </Reveal>
        </Container>

        <ul className="mt-10 grid gap-2 sm:mt-14 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
          {OFFERINGS.map((o, i) => {
            const IconCmp = ICONS[o.icon];
            const external = o.href.startsWith("http");
            const body = (
              <>
                <div className="flex items-start justify-between">
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-2xl",
                      o.soon ? "border border-d2-cloud text-d2-fog" : "d2-btn-obsidian text-white",
                    )}
                  >
                    <IconCmp className="size-[22px]" weight="regular" />
                  </span>
                  {o.soon ? (
                    <Chip tone="outline">
                      <span aria-hidden className="size-1.5 rounded-full bg-d2-sky" />
                      Coming soon
                    </Chip>
                  ) : (
                    <ArrowUpRight
                      weight="bold"
                      className="size-4 text-d2-fog transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-d2-obsidian"
                    />
                  )}
                </div>
                <p className="mt-7 text-[13px] text-d2-fog tabular-nums sm:mt-10">0{i + 1}</p>
                <h3
                  className={cn(
                    "mt-1 text-[21px] leading-tight font-semibold tracking-[-0.025em]",
                    o.soon ? "text-d2-steel" : "text-d2-obsidian",
                  )}
                >
                  {o.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-[1.5] text-d2-steel">{o.description}</p>
              </>
            );
            const cls = cn(
              "group flex h-full flex-col rounded-[28px] border bg-d2-snow p-6 transition-colors sm:p-7",
              o.soon ? "border-dashed border-d2-mist bg-d2-snow/60" : "border-d2-cloud hover:border-d2-mist",
            );
            return (
              <li key={o.title}>
                <Reveal delay={(i % 3) * 0.06} className="h-full">
                  {external ? (
                    <a href={o.href} target="_blank" rel="noreferrer" className={cls}>
                      {body}
                    </a>
                  ) : (
                    <Link href={o.href} className={cls}>
                      {body}
                    </Link>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
