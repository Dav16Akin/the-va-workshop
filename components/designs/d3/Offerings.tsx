"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChartLineUp,
  FileText,
  GraduationCap,
  Microphone,
  UsersThree,
  VideoCamera,
  type Icon,
} from "@phosphor-icons/react";
import { OFFERINGS, PHOTOS, type OfferingIcon } from "@/lib/home-content";
import { cn } from "@/lib/utils";
import { Reveal, Section } from "./primitives";

const icons: Record<OfferingIcon, Icon> = {
  training: GraduationCap,
  resume: FileText,
  call: VideoCamera,
  community: UsersThree,
  interview: Microphone,
  analytics: ChartLineUp,
};

function OfferingLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  const Comp = external ? "a" : Link;
  return (
    <Comp
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn("group block h-full", className)}
    >
      {children}
    </Comp>
  );
}

/** Bento: one lead offering with photography, five supporting cards. */
export default function Offerings() {
  const [lead, ...rest] = OFFERINGS;
  const LeadIcon = icons[lead.icon];

  return (
    <Section id="journey">
      <Reveal className="max-w-[760px]">
        <h2 className="d3-serif d3-heading text-[#2c2c2c]">
          Everything between your first lesson and your first client.
        </h2>
        <p className="mt-5 max-w-[56ch] text-lg leading-[1.5] text-[#646464]">
          Practical skills, real support and hirable assets, whether you are a
          total beginner or ready to be placed.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto]">
        <Reveal className="md:col-span-2 lg:row-span-2">
          <OfferingLink href={lead.href}>
            <article className="d3-card relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-2xl">
              <Image
                src={PHOTOS.classroom.src}
                alt={PHOTOS.classroom.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 780px"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#051a4b]/85 via-[#051a4b]/20 to-transparent" />
              <div className="relative p-7 md:p-9">
                <LeadIcon size={26} weight="light" className="text-[#97b6e5]" />
                <h3 className="d3-serif mt-4 text-[2.5rem] text-white">{lead.title}</h3>
                <p className="mt-3 max-w-[48ch] text-base leading-[1.5] text-white/80">
                  {lead.description}
                </p>
              </div>
            </article>
          </OfferingLink>
        </Reveal>

        {rest.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <Reveal
              key={item.title}
              delay={0.06 * (i + 1)}
              className={i === rest.length - 1 ? "md:col-span-2 lg:col-span-1" : undefined}
            >
              <OfferingLink href={item.href}>
                <article
                  className={cn(
                    "relative flex h-full flex-col rounded-xl p-6 transition-colors duration-300",
                    item.soon
                      ? "border border-dashed border-[#b4b8b4] bg-[#f9faf7]"
                      : "d3-card group-hover:border-[#97b6e5]",
                  )}
                >
                  <div className="flex items-start justify-between">
                    <Icon size={24} weight="light" className="text-[#2f6fbb]" />
                    {item.soon ? (
                      <span className="rounded-md border border-[#dee2de] bg-white px-2 py-1 text-[13px] text-[#646464]">
                        Coming soon
                      </span>
                    ) : (
                      <ArrowUpRight
                        size={18}
                        className="text-[#b4b8b4] transition-colors duration-300 group-hover:text-[#2f6fbb]"
                      />
                    )}
                  </div>
                  <h3 className="mt-8 text-lg font-medium leading-[1.3] text-[#2c2c2c]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.5] text-[#646464]">
                    {item.description}
                  </p>
                </article>
              </OfferingLink>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
