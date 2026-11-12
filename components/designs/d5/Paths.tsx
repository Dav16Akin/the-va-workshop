import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { PATHS, PHOTOS } from "@/lib/home-content";
import Reveal from "./Reveal";

const CARDS = [
  { ...PATHS.talent, photo: PHOTOS.homeDesk, surface: "bg-[var(--d5-indigo)]", primary: true },
  { ...PATHS.hire, photo: PHOTOS.office, surface: "bg-[var(--d5-cobalt)]", primary: false },
];

export default function Paths() {
  return (
    <section id="work-with-us" className="scroll-mt-24 bg-[var(--d5-deep)] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="text-center">
          <h2 className="d5-h2 mx-auto max-w-[14ch]">Two ways to work with us.</h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-lg leading-[1.6] text-[var(--d5-fog)]">
            Ready to earn as a VA, or ready to delegate? Pick your path and our team takes it from there.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article
                className={`${c.surface} flex h-full flex-col overflow-hidden rounded-[40px] p-3 [box-shadow:var(--d5-inset)]`}
              >
                <div className="d5-duotone relative aspect-[16/9] !rounded-[32px]">
                  <Image src={c.photo.src} alt={c.photo.alt} fill sizes="(max-width: 1024px) 100vw, 580px" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-9">
                  <h3 className="font-[family-name:var(--font-d5-display)] text-3xl font-semibold tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-4 max-w-[48ch] text-base leading-[1.6] text-[var(--d5-fog)]">{c.body}</p>
                  <ul className="mt-7 flex flex-col gap-3">
                    {c.steps.map((s) => (
                      <li key={s} className="flex items-start gap-3 text-[15px] font-light text-[var(--d5-text)]">
                        <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-[var(--d5-blue)]" aria-hidden />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-9">
                    <Link
                      href={c.cta.href}
                      className={`d5-btn group ${c.primary ? "d5-btn-primary" : "d5-btn-ghost"}`}
                    >
                      {c.cta.label}
                      <ArrowRight size={15} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
