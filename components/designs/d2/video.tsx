import Image from "next/image";
import { Play } from "@phosphor-icons/react/dist/ssr";
import { PHOTOS, VIDEO } from "@/lib/content";
import { Chip, Container } from "./primitives";
import { Reveal } from "./reveal";

export function Video() {
  return (
    <section id="video" className="pt-24 sm:pt-32">
      <Container>
        <Reveal>
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <h2 className="text-[34px] leading-[1.06] font-semibold tracking-[-0.035em] text-d2-obsidian sm:text-[44px] lg:text-[52px] md:col-span-7">
              {VIDEO.title}
            </h2>
            <p className="max-w-[44ch] text-[16px] leading-[1.5] text-d2-steel sm:text-[17px] md:col-span-5 md:pb-2">
              {VIDEO.body}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative mt-12 aspect-[4/5] overflow-hidden rounded-[32px] bg-d2-graphite sm:mt-14 sm:aspect-[16/8] sm:rounded-d2-tray">
            <Image src={VIDEO.poster} alt={PHOTOS.videoPoster.alt} fill sizes="100vw" className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-d2-obsidian/70 via-d2-obsidian/10 to-transparent" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="flex flex-col items-center gap-4">
                <span
                  aria-hidden
                  className="d2-glass grid size-20 place-items-center rounded-full text-d2-obsidian sm:size-24"
                >
                  <Play weight="fill" className="ml-1 size-7 sm:size-8" />
                </span>
                <Chip tone="iron" className="px-3 py-1.5 text-[13px]">
                  <span aria-hidden className="size-1.5 rounded-full bg-d2-sky" />
                  {VIDEO.status}
                </Chip>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
