import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChartLineUp,
  FileText,
  GraduationCap,
  Robot,
  Users,
  VideoCamera,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { OFFERINGS, PHOTOS, type OfferingIcon } from "@/lib/home-content";
import Reveal from "./Reveal";

const ICONS: Record<OfferingIcon, Icon> = {
  training: GraduationCap,
  resume: FileText,
  call: VideoCamera,
  community: Users,
  interview: Robot,
  analytics: ChartLineUp,
};

// Exactly six cells for six offerings: 4+2 / 2+4 / 3+3 on a 6-column grid.
const LAYOUT = [
  { span: "lg:col-span-4", surface: "d5-card", photo: PHOTOS.classroom },
  { span: "lg:col-span-2", surface: "d5-card-glow" },
  { span: "lg:col-span-2", surface: "d5-card", tint: true },
  { span: "lg:col-span-4", surface: "d5-card", photo: PHOTOS.videoCall },
  { span: "lg:col-span-3", surface: "d5-card" },
  { span: "lg:col-span-3", surface: "d5-card" },
];

export default function Offerings() {
  return (
    <section id="journey" className="scroll-mt-24 bg-[var(--d5-deep)] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="d5-eyebrow">The programme</p>
          <h2 className="d5-h2 mt-5 max-w-[16ch]">How we get you there.</h2>
          <p className="mt-6 max-w-[52ch] text-lg leading-[1.6] text-[var(--d5-fog)]">
            Practical skills, real support and hirable assets, from total beginner to placed VA.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          {OFFERINGS.map((o, i) => {
            const cell = LAYOUT[i];
            const Glyph = ICONS[o.icon];
            const external = o.href.startsWith("http");
            const linkProps = external ? { target: "_blank", rel: "noreferrer" } : {};
            const Comp = external ? "a" : Link;
            return (
              <Reveal key={o.title} delay={i * 0.05} className={`${cell.span} ${cell.photo ? "md:col-span-2" : ""}`}>
                <Comp
                  href={o.href}
                  {...linkProps}
                  className={`${cell.surface} d5-focus group relative flex h-full flex-col overflow-hidden p-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 md:p-8 ${
                    cell.tint ? "!bg-[var(--d5-cobalt)]" : ""
                  } ${cell.photo ? "md:flex-row md:gap-8" : ""}`}
                >
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid size-11 place-items-center rounded-[14px] bg-[rgb(74_144_226/0.14)] text-[var(--d5-lav)]">
                        <Glyph size={20} weight="light" aria-hidden />
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="text-[var(--d5-mist)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--d5-text)]"
                        aria-hidden
                      />
                    </div>
                    <h3 className="mt-8 font-[family-name:var(--font-d5-display)] text-2xl font-medium leading-tight tracking-tight">
                      {o.title}
                    </h3>
                    <p className="mt-3 max-w-[42ch] text-[15px] leading-[1.6] text-[var(--d5-fog)]">
                      {o.description}
                    </p>
                    {o.soon && (
                      <AnimatedShinyText
                        shimmerWidth={80}
                        className="mx-0 mt-auto max-w-none pt-6 text-sm font-normal text-[var(--d5-mist)] via-[var(--d5-lav)] dark:via-[var(--d5-lav)]"
                      >
                        In development
                      </AnimatedShinyText>
                    )}
                  </div>
                  {cell.photo && (
                    <div className="d5-duotone relative mt-6 aspect-[4/3] w-full shrink-0 md:mt-0 md:aspect-auto md:w-[46%]">
                      <Image
                        src={cell.photo.src}
                        alt={cell.photo.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover"
                      />
                    </div>
                  )}
                </Comp>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
