"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChartLineUp,
  FileText,
  GraduationCap,
  Robot,
  UsersThree,
  VideoCamera,
  type Icon,
} from "@phosphor-icons/react";
import { OFFERINGS, PHOTOS, type OfferingIcon } from "@/lib/home-content";
import { cn } from "@/lib/utils";
import { Container, Pill } from "./primitives";
import Reveal from "./Reveal";

const icons: Record<OfferingIcon, Icon> = {
  training: GraduationCap,
  resume: FileText,
  call: VideoCamera,
  community: UsersThree,
  interview: Robot,
  analytics: ChartLineUp,
};

// Bento placement: exactly six cells for six offerings.
const layout: Record<OfferingIcon, string> = {
  training: "md:col-span-2 lg:col-span-4",
  resume: "lg:col-span-2",
  call: "lg:col-span-2",
  community: "md:col-span-2 lg:col-span-4",
  interview: "lg:col-span-3",
  analytics: "lg:col-span-3",
};

function CardLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const cls = cn(
    "group relative flex h-full flex-col overflow-hidden rounded-[12px] transition-transform duration-300 ease-out hover:-translate-y-1",
    className,
  );
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

function Arrow({ light }: { light?: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute right-5 top-5 flex size-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
        light ? "bg-white/10 text-white" : "bg-[#eef4fc] text-[#051a4b]",
      )}
    >
      <ArrowUpRight size={15} weight="bold" />
    </span>
  );
}

export default function Offerings() {
  return (
    <section id="services" className="scroll-mt-24 py-20 md:py-[120px]">
      <Container>
        <Reveal className="max-w-[640px]">
          <h2 className="d4-heading text-[38px] font-medium leading-[1.15] md:text-[48px]">
            Support at every step, from beginner to placed VA.
          </h2>
          <p className="mt-5 max-w-[52ch] text-base leading-[1.5] text-[#5b616b] md:text-lg">
            Practical skills, real support and hirable assets that help you show
            up ready for clients.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {OFFERINGS.map((o, i) => {
            const IconCmp = icons[o.icon];
            return (
              <Reveal key={o.title} delay={i * 0.05} className={layout[o.icon]}>
                {o.icon === "training" ? (
                  <CardLink
                    href={o.href}
                    className="grid min-h-[320px] bg-[#eef4fc] md:grid-cols-2"
                  >
                    <div className="relative flex flex-col justify-end p-7">
                      <IconCmp size={28} weight="duotone" className="text-[#4a90e2]" aria-hidden />
                      <h3 className="mt-5 text-2xl font-semibold leading-[1.25]">{o.title}</h3>
                      <p className="mt-3 max-w-[38ch] text-[15px] leading-[1.5] text-[#5b616b]">
                        {o.description}
                      </p>
                    </div>
                    <div className="relative min-h-[220px] md:m-3 md:ml-0 md:overflow-hidden md:rounded-[20px]">
                      <Image
                        src={PHOTOS.classroom.src}
                        alt={PHOTOS.classroom.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 380px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </CardLink>
                ) : o.icon === "call" ? (
                  <CardLink href={o.href} className="border border-black/[0.08] bg-white">
                    <div className="relative m-3 mb-0 aspect-[16/10] overflow-hidden rounded-[20px]">
                      <Image
                        src={PHOTOS.videoCall.src}
                        alt={PHOTOS.videoCall.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-6 pt-5">
                      <h3 className="text-xl font-semibold leading-[1.3]">{o.title}</h3>
                      <p className="mt-2 text-[15px] leading-[1.5] text-[#5b616b]">
                        {o.description}
                      </p>
                    </div>
                  </CardLink>
                ) : o.icon === "community" ? (
                  <CardLink href={o.href} className="justify-between bg-[#dce9f9] p-7 md:min-h-[240px]">
                    <Arrow />
                    <IconCmp size={44} weight="duotone" className="text-[#2f6fbb]" aria-hidden />
                    <div className="mt-10">
                      <h3 className="text-2xl font-semibold leading-[1.25]">{o.title}</h3>
                      <p className="mt-2 max-w-[44ch] text-[15px] leading-[1.5] text-[#051a4b]/75">
                        {o.description}
                      </p>
                    </div>
                  </CardLink>
                ) : o.icon === "analytics" ? (
                  <CardLink href={o.href} className="bg-[#051a4b] p-7 text-white">
                    <Arrow light />
                    <IconCmp size={28} weight="duotone" className="text-[#97b6e5]" aria-hidden />
                    <Pill className="mt-6 self-start bg-white/10 text-white">Coming soon</Pill>
                    <h3 className="mt-3 text-xl font-semibold leading-[1.3]">{o.title}</h3>
                    <p className="mt-2 text-[15px] leading-[1.5] text-white/70">{o.description}</p>
                  </CardLink>
                ) : (
                  <CardLink href={o.href} className="border border-black/[0.08] bg-white p-7">
                    <Arrow />
                    <IconCmp size={28} weight="duotone" className="text-[#4a90e2]" aria-hidden />
                    {o.soon && <Pill className="mt-6 self-start">Coming soon</Pill>}
                    <h3 className={cn("text-xl font-semibold leading-[1.3]", o.soon ? "mt-3" : "mt-6")}>
                      {o.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.5] text-[#5b616b]">{o.description}</p>
                  </CardLink>
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
