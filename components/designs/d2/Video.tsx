import Image from "next/image";
import { Play } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";
import { VIDEO } from "@/lib/home-content";

export default function Video() {
  return (
    <section className="bg-white px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <h2 className="d2-display text-black">{VIDEO.title}</h2>
          <p className="mt-4 text-[16px] leading-[1.5] text-[#615d59]">{VIDEO.body}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <figure className="mt-12">
            <div className="d2-mock-shadow relative aspect-video overflow-hidden rounded-[12px] bg-[#051a4b]">
              <Image
                src={VIDEO.poster}
                alt="Students in a live VA Workshop cohort session"
                fill
                sizes="(max-width: 1240px) 100vw, 1200px"
                className="object-cover opacity-80"
              />
              <span aria-hidden className="absolute inset-0 grid place-items-center">
                <span className="grid size-16 place-items-center rounded-full bg-white/90 text-[#051a4b] md:size-20">
                  <Play size={26} weight="fill" className="ml-1" />
                </span>
              </span>
            </div>
            <figcaption className="mt-4 text-center text-[14px] text-black/60">
              {VIDEO.status}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
