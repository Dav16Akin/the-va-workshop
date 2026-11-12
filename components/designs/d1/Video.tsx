import Image from "next/image";
import { Play } from "@phosphor-icons/react/dist/ssr";
import { VIDEO } from "@/lib/home-content";
import Reveal from "./Reveal";

export default function Video() {
  return (
    <section className="px-4 pb-8 md:px-8">
      <Reveal className="mx-auto max-w-[1320px]">
        <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(45deg,#020a1f_0%,#2f6fbb_100%)] text-white">
          <div className="grid items-center gap-8 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-12">
            <div>
              <h2 className="d1-display max-w-[14ch] text-[34px] md:text-[48px] md:tracking-[-1.4px]">
                {VIDEO.title}
              </h2>
              <p className="mt-4 max-w-[40ch] text-[15px] leading-[1.45] text-white/75">{VIDEO.body}</p>
            </div>
            <figure className="relative aspect-video overflow-hidden rounded-[16px]">
              <Image
                src={VIDEO.poster}
                alt="Students in a live VA Workshop cohort session"
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                className="object-cover"
              />
              <span aria-hidden className="absolute inset-0 bg-[#04112f]/45" />
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid size-16 place-items-center rounded-full bg-white/90 text-[var(--d1-navy)]">
                  <Play size={22} weight="fill" className="ml-0.5" />
                </span>
              </span>
              <figcaption className="d1-mono absolute bottom-4 left-4 rounded-full bg-[#04112f]/75 px-3 py-1.5 text-[11px] leading-none backdrop-blur">
                {VIDEO.status}
              </figcaption>
            </figure>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
