"use client";

import Image from "next/image";
import { Check } from "@phosphor-icons/react";
import { PATHS, PHOTOS, type Photo } from "@/lib/home-content";
import { ActionLink, Reveal, Section } from "./primitives";

const panels: {
  key: keyof typeof PATHS;
  photo: Photo;
  tone: "primary" | "secondary";
}[] = [
  { key: "talent", photo: PHOTOS.floorLaptop, tone: "primary" },
  { key: "hire", photo: PHOTOS.office, tone: "secondary" },
];

/** Two paths, side by side, each with its own photograph. */
export default function Paths() {
  return (
    <Section id="work-with-us">
      <Reveal className="mx-auto max-w-[720px] text-center">
        <h2 className="d3-serif d3-heading text-[#2c2c2c]">Two ways to work with us.</h2>
        <p className="mx-auto mt-5 max-w-[48ch] text-lg leading-[1.5] text-[#646464]">
          Ready to earn as a VA, or ready to delegate? Pick your path and our team
          takes it from there.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {panels.map(({ key, photo, tone }, i) => {
          const path = PATHS[key];
          return (
            <Reveal key={key} delay={i * 0.1}>
              <article className="d3-card flex h-full flex-col overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <h3 className="d3-serif text-[2.5rem] text-[#2c2c2c]">{path.title}</h3>
                  <p className="mt-3 text-base leading-[1.5] text-[#646464]">{path.body}</p>
                  <ul className="mt-6 space-y-3">
                    {path.steps.map((step) => (
                      <li key={step} className="flex items-start gap-3 text-[15px] text-[#444141]">
                        <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-[#2f6fbb]" />
                        {step}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <ActionLink href={path.cta.href} tone={tone}>
                      {path.cta.label}
                    </ActionLink>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
