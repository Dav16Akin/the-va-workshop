import Image from "next/image";
import Link from "next/link";
import { PlayIcon, PlusIcon } from "@phosphor-icons/react/ssr";
import {
  BRAND,
  COHORT,
  FAQS,
  FAQ_INTRO,
  FINAL_CTA,
  FOOTER_COLUMNS,
  PHOTOS,
  SOCIALS,
  VIDEO,
} from "@/lib/content";
import { BlurFade } from "@/components/ui/blur-fade";
import { Band, Orb, Pill, SectionHead } from "./primitives";

export function D1Video() {
  return (
    <Band id="video" innerClassName="py-24 sm:py-32">
      <SectionHead eyebrow="Inside the classroom" title={VIDEO.title} sub={VIDEO.body} />
      <BlurFade inView className="mt-14">
        <div
          className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-d1-ink sm:aspect-[16/9]"
          role="img"
          aria-label={`${PHOTOS.videoPoster.alt}. ${VIDEO.status}.`}
        >
          <Image
            src={VIDEO.poster}
            alt=""
            fill
            sizes="(min-width: 1180px) 1116px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="flex flex-col items-center gap-4">
              <span className="relative grid size-16 place-items-center rounded-full bg-white/20 backdrop-blur-md">
                <span className="grid size-12 place-items-center rounded-full bg-white text-d1-ink shadow-d1-whisper">
                  <PlayIcon size={18} weight="fill" />
                </span>
              </span>
              <span className="rounded-full border border-white/30 bg-black/30 px-3.5 py-1.5 text-[13px] text-white backdrop-blur-md">
                {VIDEO.status}
              </span>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-8">
            <p className="max-w-[40ch] text-[14px] text-white/80 sm:text-[15px]">{PHOTOS.videoPoster.alt}</p>
            <p className="hidden font-d1-mono text-[12px] tracking-[0.08em] text-white/70 uppercase sm:block">
              {COHORT.month}
            </p>
          </div>
        </div>
      </BlurFade>
    </Band>
  );
}

export function D1Faq() {
  return (
    <Band id="faq" tone="taupe" innerClassName="py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-4 text-[15px] text-d1-smoke">FAQ</p>
          <h2 className="d1-display text-[34px] sm:text-[44px]">{FAQ_INTRO.title}</h2>
          <p className="mt-5 max-w-[34ch] text-[16px] leading-[1.6] text-d1-graphite">
            Still unsure? Write to{" "}
            <a href={`mailto:${BRAND.email}`} className="text-d1-ink underline decoration-d1-ash underline-offset-4">
              {BRAND.email}
            </a>
            .
          </p>
          <div className="mt-8">
            <Pill href="/book" variant="outline">
              Book a discovery session
            </Pill>
          </div>
        </div>
        <div className="border-t border-d1-stone">
          {FAQS.map((f) => (
            <details key={f.q} className="group border-b border-d1-stone">
              <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 text-[17px] text-d1-ink transition-colors hover:text-d1-graphite">
                {f.q}
                <span className="d1-faq-icon mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-white text-d1-ink shadow-d1-whisper transition-transform duration-300">
                  <PlusIcon size={13} />
                </span>
              </summary>
              <p className="max-w-[60ch] pr-12 pb-6 text-[15px] leading-[1.65] text-d1-smoke">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Band>
  );
}

const FAN = [
  PHOTOS.manStudio,
  PHOTOS.floorLaptop,
  PHOTOS.manKitchen,
  PHOTOS.videoCall,
  PHOTOS.armchair,
  PHOTOS.heroWoman,
];

export function D1FinalCta() {
  return (
    <section className="border-t border-d1-stone bg-d1-canvas">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.7fr_0.9fr] xl:px-0">
        <p className="order-3 mx-auto max-w-[34ch] text-center text-[15px] leading-[1.6] text-d1-smoke lg:order-1 lg:mx-0 lg:text-left">{FINAL_CTA.sub}</p>

        <div className="order-1 text-center lg:order-2">
          <p className="mb-4 text-[15px] text-d1-smoke">{COHORT.month} cohort</p>
          <h2 className="d1-display text-[38px] text-balance sm:text-[52px]">
            <span className="text-d1-ink">Your remote career </span>
            <span className="text-d1-ash">starts in November.</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <Pill href={FINAL_CTA.primary.href}>{FINAL_CTA.primary.label}</Pill>
            <Pill href={FINAL_CTA.secondary.href} variant="outline">
              {FINAL_CTA.secondary.label}
            </Pill>
          </div>
        </div>

        {/* stacked photo fan */}
        <div className="order-2 flex justify-center lg:order-3 lg:justify-end" aria-hidden>
          <div className="relative h-[184px] w-[280px]">
            {FAN.map((p, i) => {
              const last = i === FAN.length - 1;
              return (
                <div
                  key={p.src}
                  className="absolute top-1/2 overflow-hidden rounded-[14px] shadow-d1-whisper"
                  style={{
                    left: last ? 140 : i * 22,
                    width: last ? 140 : 72,
                    height: last ? 184 : 150 - (FAN.length - i) * 4,
                    transform: `translateY(-50%) perspective(600px) rotateY(${last ? 0 : -38}deg)`,
                    zIndex: i,
                  }}
                >
                  <Image src={p.src} alt="" fill sizes="140px" className="object-cover" />
                </div>
              );
            })}
            <Orb tone="cobalt" className="absolute -bottom-3 left-[118px] z-10 size-10 ring-4 ring-d1-canvas" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function D1Footer() {
  return (
    <footer className="border-t border-d1-stone bg-d1-taupe">
      <div className="mx-auto max-w-[1180px] px-5 pt-16 pb-10 sm:px-8 sm:pt-20 xl:px-0">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image src={BRAND.logo} alt="" width={28} height={28} className="size-7" />
              <span className="font-d1-display text-[19px] font-medium tracking-[-0.03em]">{BRAND.name}</span>
            </Link>
            <p className="mt-5 max-w-[36ch] text-[15px] leading-[1.6] text-d1-graphite">{BRAND.tagline}</p>
            <dl className="mt-8 space-y-1.5 text-[14px] text-d1-smoke">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a href={`mailto:${BRAND.email}`} className="text-d1-ink hover:underline">
                    {BRAND.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Location</dt>
                <dd>
                  {BRAND.location} · {BRAND.locationNote}
                </dd>
              </div>
              <div>
                <dt className="sr-only">Hours</dt>
                <dd>{BRAND.hours}</dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="font-d1-mono text-[12px] tracking-[0.08em] text-d1-ash uppercase">{col.heading}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-[14px] text-d1-graphite transition-colors hover:text-d1-ink">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-d1-stone pt-6 text-[13px] text-d1-smoke sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {BRAND.name}. {BRAND.footnote}
          </p>
          <ul className="flex gap-2">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="inline-flex h-8 items-center rounded-full bg-white px-3.5 text-[13px] text-d1-ink shadow-d1-whisper transition-colors hover:bg-d1-stone"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
