import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";
import Button from "./Button";
import { OfferingGlyph } from "./icons";
import { OFFERINGS, PHOTOS } from "@/lib/home-content";

const [training, resume, call, community, ...soon] = OFFERINGS;

export default function Offerings() {
  return (
    <section id="journey" className="scroll-mt-20 px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-[640px]">
          <h2 className="d2-display text-black">How we get you there.</h2>
          <p className="d2-serif mt-4 text-[18px] leading-[1.56] text-[#615d59]">
            Practical skills, real support and hirable assets, from total
            beginner to placed VA.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {/* Full-width accent panel: the flagship offer */}
          <Reveal className="md:col-span-2">
            <article className="grid items-center gap-8 overflow-hidden rounded-[12px] bg-[#4a90e2] p-6 md:grid-cols-[1fr_1.15fr] md:p-10">
              <div>
                <span className="grid size-11 place-items-center rounded-full bg-white text-[#2f6fbb]">
                  <OfferingGlyph name={training.icon} />
                </span>
                <h3 className="mt-6 text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-[#051a4b] md:text-[40px]">
                  {training.title}
                </h3>
                <p className="mt-3 max-w-[42ch] text-[16px] leading-[1.5] text-[#051a4b]/85">
                  {training.description}
                </p>
                <Button href={training.href} variant="inverse" className="mt-6">
                  See training tracks <ArrowRight size={14} weight="bold" />
                </Button>
              </div>
              <div className="d2-mock-shadow relative aspect-[4/3] overflow-hidden rounded-[12px]">
                <Image
                  src={PHOTOS.classroom.src}
                  alt={PHOTOS.classroom.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
            </article>
          </Reveal>

          {/* White card with photo */}
          <Reveal delay={0.05}>
            <Link
              href={resume.href}
              className="group flex h-full flex-col overflow-hidden rounded-[12px] border border-black/[0.08] bg-white transition-colors duration-200 hover:border-black/20"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={PHOTOS.deskMinimal.src}
                  alt={PHOTOS.deskMinimal.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover object-[50%_40%]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="d2-heading-sm text-black">{resume.title}</h3>
                <p className="mt-2 text-[16px] leading-[1.5] text-[#615d59]">
                  {resume.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 pt-5 text-[14px] font-medium text-[#2f6fbb]">
                  Browse career assets
                  <ArrowRight size={14} weight="bold" className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Lavender accent panel */}
          <Reveal delay={0.1}>
            <Link
              href={call.href}
              className="group flex h-full flex-col overflow-hidden rounded-[12px] bg-[#97b6e5] p-6"
            >
              <span className="grid size-11 place-items-center rounded-full bg-white text-[#2f6fbb]">
                <OfferingGlyph name={call.icon} />
              </span>
              <h3 className="d2-heading-sm mt-5 text-[#051a4b]">{call.title}</h3>
              <p className="mt-2 max-w-[44ch] text-[16px] leading-[1.5] text-[#051a4b]/80">
                {call.description}
              </p>
              <div className="d2-mock-shadow relative mt-6 aspect-[16/8] overflow-hidden rounded-[12px]">
                <Image
                  src={PHOTOS.videoCall.src}
                  alt={PHOTOS.videoCall.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </Link>
          </Reveal>

          {/* Pale tint card */}
          <Reveal delay={0.05}>
            <a
              href={community.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col justify-between rounded-[12px] bg-[#eef4fc] p-6 md:p-8"
            >
              <div>
                <span className="grid size-11 place-items-center rounded-full bg-white text-[#2f6fbb]">
                  <OfferingGlyph name={community.icon} />
                </span>
                <h3 className="d2-heading-sm mt-5 text-black">{community.title}</h3>
                <p className="mt-2 max-w-[40ch] text-[16px] leading-[1.5] text-[#615d59]">
                  {community.description}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-1 text-[14px] font-medium text-[#2f6fbb]">
                Join on WhatsApp
                <ArrowUpRight size={14} weight="bold" className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </Reveal>

          {/* Midnight island: what is coming next */}
          <Reveal delay={0.1}>
            <article className="flex h-full flex-col rounded-[12px] bg-[#051a4b] p-6 text-white md:p-8">
              <h3 className="d2-heading-sm">On the way</h3>
              <ul className="mt-5 grid gap-5">
                {soon.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-[#97b6e5]">
                      <OfferingGlyph name={item.icon} size={20} />
                    </span>
                    <div>
                      <p className="text-[16px] font-semibold">{item.title}</p>
                      <p className="mt-1 text-[14px] leading-[1.43] text-white/65">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href="/coming-soon"
                className="mt-auto inline-flex w-fit items-center gap-1 pt-6 text-[14px] font-medium text-[#97b6e5] transition-colors duration-200 hover:text-white"
              >
                Get notified <ArrowRight size={14} weight="bold" />
              </Link>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
