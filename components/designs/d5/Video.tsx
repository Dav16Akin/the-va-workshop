import Image from "next/image";
import { Play } from "@phosphor-icons/react/dist/ssr";
import { VIDEO } from "@/lib/home-content";
import Reveal from "./Reveal";

export default function Video() {
  return (
    <section className="bg-[var(--d5-deep)] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1200px] items-end gap-10 lg:grid-cols-[0.8fr_1.6fr]">
        <Reveal>
          <h2 className="d5-h2 max-w-[11ch]">{VIDEO.title}</h2>
          <p className="mt-6 max-w-[40ch] text-lg leading-[1.6] text-[var(--d5-fog)]">{VIDEO.body}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <figure>
            <div className="d5-duotone relative aspect-video !rounded-[40px]">
              <Image
                src={VIDEO.poster}
                alt="Students in a live VA Workshop cohort session"
                fill
                sizes="(max-width: 1024px) 100vw, 760px"
                className="object-cover"
              />
              <div className="absolute inset-0 z-[2] grid place-items-center">
                <button
                  type="button"
                  disabled
                  aria-label="Play video (coming soon)"
                  className="grid size-20 cursor-not-allowed place-items-center rounded-full bg-[rgb(244_247_252/0.92)] text-[var(--d5-ink)] [box-shadow:rgba(255,255,255,0.6)_0_1px_0_inset]"
                >
                  <Play size={26} weight="fill" className="ml-1" />
                </button>
              </div>
            </div>
            <figcaption className="mt-4 text-sm text-[var(--d5-mist)]">{VIDEO.status}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
