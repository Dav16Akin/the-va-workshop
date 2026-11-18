"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRightIcon,
  ChalkboardTeacherIcon,
  ChartLineUpIcon,
  MicrophoneIcon,
  ReadCvLogoIcon,
  UsersThreeIcon,
  VideoCameraIcon,
  type Icon,
} from "@phosphor-icons/react";
import { OFFERINGS, PHOTOS, type OfferingIcon, type Photo } from "@/lib/content";
import { cn } from "@/lib/utils";

const ICONS: Record<OfferingIcon, Icon> = {
  training: ChalkboardTeacherIcon,
  resume: ReadCvLogoIcon,
  call: VideoCameraIcon,
  community: UsersThreeIcon,
  interview: MicrophoneIcon,
  analytics: ChartLineUpIcon,
};

const OFFERING_PHOTOS: Record<OfferingIcon, Photo> = {
  training: PHOTOS.classroom,
  resume: PHOTOS.homeDesk,
  call: PHOTOS.videoCall,
  community: PHOTOS.talent,
  interview: PHOTOS.manSuit,
  analytics: PHOTOS.office,
};

export function D3Offerings() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = OFFERINGS[active];
  const photo = OFFERING_PHOTOS[current.icon];

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
      {/* List */}
      <div className="order-2 lg:order-1">
        <ul className="border-t border-d3-mist">
          {OFFERINGS.map((item, i) => {
            const IconCmp = ICONS[item.icon];
            const isActive = i === active;
            return (
              <li key={item.title} className="border-b border-d3-mist">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-expanded={isActive}
                  className="flex w-full items-center gap-4 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-d3-signal"
                >
                  <span
                    className={cn(
                      "inline-flex size-10 shrink-0 items-center justify-center rounded-d3-icon transition-colors duration-300",
                      isActive ? "bg-d3-signal text-d3-white" : "bg-d3-fog text-d3-carbon",
                    )}
                  >
                    <IconCmp weight={isActive ? "fill" : "regular"} className="size-5" />
                  </span>
                  <span
                    className={cn(
                      "flex-1 text-[19px] leading-tight tracking-[-0.015em] transition-colors sm:text-[22px]",
                      isActive ? "text-d3-carbon" : "text-d3-zinc",
                    )}
                  >
                    {item.title}
                  </span>
                  {item.soon && (
                    <span className="d3-label shrink-0 rounded-full border border-d3-mist px-2.5 py-1 text-[10px] text-d3-zinc">
                      Soon
                    </span>
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-14">
                        <p className="max-w-[460px] text-[15px] leading-[1.55] text-d3-zinc">{item.description}</p>
                        <Link
                          href={item.href}
                          {...(item.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                          className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-d3-carbon underline decoration-d3-mist decoration-1 underline-offset-[5px] hover:decoration-d3-carbon"
                        >
                          {item.soon ? "Get notified" : "Learn more"}
                          <ArrowUpRightIcon weight="bold" className="size-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Photo stage + thumbnail strip */}
      <div className="order-1 lg:order-2">
        <div className="d3-grain relative aspect-[4/3] overflow-hidden rounded-d3-card bg-d3-carbon lg:aspect-[5/4]">
          <AnimatePresence initial={false}>
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: reduce ? 1 : 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
            </motion.div>
          </AnimatePresence>
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(0deg,rgba(0,0,0,0.7),transparent)]" />
          <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-d3-white">
            <p className="text-[20px] leading-tight tracking-[-0.015em] sm:text-[24px]">{current.title}</p>
            <span className="d3-label shrink-0 text-d3-white/70">
              {String(active + 1).padStart(2, "0")} / {String(OFFERINGS.length).padStart(2, "0")}
            </span>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-6 gap-2">
          {OFFERINGS.map((item, i) => {
            const p = OFFERING_PHOTOS[item.icon];
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${item.title}`}
                className={cn(
                  "relative aspect-square overflow-hidden rounded-d3-small border-2 transition-all duration-300",
                  i === active ? "border-d3-signal" : "border-transparent opacity-60 hover:opacity-100",
                )}
              >
                <Image src={p.src} alt="" fill sizes="100px" className="object-cover" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

