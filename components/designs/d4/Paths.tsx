"use client";

import Image from "next/image";
import { Check } from "@phosphor-icons/react";
import { PATHS, PHOTOS } from "@/lib/home-content";
import { Button, Container } from "./primitives";
import Reveal from "./Reveal";

const cards = [
  { ...PATHS.talent, photo: PHOTOS.floorLaptop, cta: { label: "Join the talent pool", href: PATHS.talent.cta.href }, primary: true },
  { ...PATHS.hire, photo: PHOTOS.homeDesk, cta: PATHS.hire.cta, primary: false },
];

export default function Paths() {
  return (
    <section id="work-with-us" className="scroll-mt-24 bg-[#eef4fc] py-20 md:py-[120px]">
      <Container>
        <Reveal className="mx-auto max-w-[680px] text-center">
          <h2 className="d4-heading text-[38px] font-medium leading-[1.15] md:text-[48px]">
            Two ways to work with us.
          </h2>
          <p className="mt-5 text-base leading-[1.5] text-[#5b616b] md:text-lg">
            Ready to earn as a VA, or ready to delegate? Pick your path and our
            team takes it from there.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-[12px] bg-white p-3 ring-1 ring-black/[0.06]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[20px]">
                  <Image
                    src={c.photo.src}
                    alt={c.photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="text-2xl font-semibold leading-[1.25]">{c.title}</h3>
                  <p className="mt-3 max-w-[50ch] text-[15px] leading-[1.5] text-[#5b616b]">{c.body}</p>
                  <ul className="mt-6 grid gap-3">
                    {c.steps.map((s) => (
                      <li key={s} className="flex items-start gap-3 text-[15px] font-medium leading-[1.4]">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#dce9f9] text-[#2f6fbb]">
                          <Check size={12} weight="bold" aria-hidden />
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <Button href={c.cta.href} variant={c.primary ? "primary" : "ghost"}>
                      {c.cta.label}
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
