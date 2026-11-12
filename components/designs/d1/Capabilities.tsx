import Link from "next/link";
import {
  ArrowUpRight,
  ChartLineUp,
  ChatsCircle,
  FileText,
  GraduationCap,
  UsersThree,
  VideoCamera,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { OFFERINGS, type OfferingIcon } from "@/lib/home-content";
import Reveal from "./Reveal";

const icons: Record<OfferingIcon, Icon> = {
  training: GraduationCap,
  resume: FileText,
  call: VideoCamera,
  community: UsersThree,
  interview: ChatsCircle,
  analytics: ChartLineUp,
};

export default function Capabilities() {
  return (
    <section id="journey" className="scroll-mt-16 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <h2 className="d1-display max-w-[18ch] text-[34px] md:text-[56px] md:tracking-[-1.6px]">
            How we get you there.
          </h2>
          <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.35] tracking-[-0.025em] text-[var(--d1-graphite)]">
            Practical skills, real support and hirable assets, from total beginner to placed VA.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[16px] border border-[var(--d1-line)] bg-[var(--d1-line)] sm:grid-cols-2 lg:grid-cols-3">
            {OFFERINGS.map((o) => {
              const Icon = icons[o.icon];
              const external = o.href.startsWith("http");
              return (
                <li key={o.title} className="bg-white">
                  <Link
                    href={o.href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="group flex h-full flex-col gap-4 bg-white p-[22px] transition-colors duration-200 hover:bg-[var(--d1-surface)] md:p-7"
                  >
                    <span className="flex items-start justify-between">
                      <Icon size={24} weight="light" className="text-[var(--d1-ink)]" />
                      <ArrowUpRight
                        size={16}
                        className="text-[var(--d1-soft)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--d1-link)]"
                      />
                    </span>
                    <span>
                      <span className="flex flex-wrap items-center gap-2 text-[17px] font-medium tracking-[-0.025em]">
                        {o.title}
                        {o.soon && (
                          <span className="d1-mono rounded-full bg-[#dce9f9] px-2 py-0.5 text-[10px] text-[var(--d1-navy)]">
                            Coming soon
                          </span>
                        )}
                      </span>
                      <span className="mt-1.5 block text-[14px] leading-[1.4] tracking-[-0.02em] text-[var(--d1-graphite)]">
                        {o.description}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
