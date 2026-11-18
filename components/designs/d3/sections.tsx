import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon, PlayIcon, PlusIcon } from "@phosphor-icons/react/dist/ssr";
import { Marquee } from "@/components/ui/marquee";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  BRAND,
  COHORT,
  FAQS,
  FAQ_INTRO,
  FINAL_CTA,
  FOOTER_COLUMNS,
  OFFERINGS_INTRO,
  PATHS,
  PATHS_INTRO,
  PHOTOS,
  PROGRAMMES,
  SOCIALS,
  STORE_INTRO,
  TESTIMONIALS,
  TESTIMONIALS_INTRO,
  TOOLS,
  TRACKS_INTRO,
  TRACK_META,
  VIDEO,
  initials,
  toolLogo,
} from "@/lib/content";
import { cn } from "@/lib/utils";
import { D3Offerings } from "./offerings";
import { D3StoreTabs } from "./store";
import { CheckMark, Container, Eyebrow, Pill, SectionHead, TextLink } from "./primitives";

/* Tools strip ------------------------------------------------------- */

export function D3Tools() {
  return (
    <section aria-label="Tools we train on" className="py-14 sm:py-16">
      <Container>
        <p className="text-center text-[14px] text-d3-zinc">
          Trained on the tools remote teams already use
        </p>
      </Container>
      <div className="relative mx-auto mt-8 max-w-[1440px] [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <Marquee pauseOnHover repeat={3} className="[--duration:50s] [--gap:3.5rem]">
          {TOOLS.map((tool) => (
            <span key={tool.slug} className="flex items-center gap-2.5 whitespace-nowrap text-[17px] tracking-[-0.015em] text-d3-zinc">
              {/* eslint-disable-next-line @next/next/no-img-element -- Simple Icons CDN logo */}
              <img src={toolLogo(tool.slug, "71717a")} alt="" width={22} height={22} loading="lazy" className="size-[22px]" />
              {tool.name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

/* Offerings --------------------------------------------------------- */

export function D3OfferingsSection() {
  return (
    <section id="services" className="pb-20 pt-10 sm:pb-24 sm:pt-12 lg:pb-24">
      <Container>
        <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-[1.7fr_1fr] lg:items-end">
          <SectionHead eyebrow="What you get" title={OFFERINGS_INTRO.title} />
          <p className="max-w-[440px] text-[16px] leading-[1.5] text-d3-zinc sm:text-[17px] lg:justify-self-end">
            {OFFERINGS_INTRO.sub}
          </p>
        </div>
        <D3Offerings />
      </Container>
    </section>
  );
}

/* Training tracks --------------------------------------------------- */

export function D3Tracks() {
  return (
    <section id="tracks" className="bg-d3-fog py-20 sm:py-24 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead eyebrow="Training tracks" title={TRACKS_INTRO.title} sub={TRACKS_INTRO.sub} />
          <TextLink href="/services#training" className="shrink-0 text-d3-carbon">
            Compare all tracks
          </TextLink>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {PROGRAMMES.map((p, i) => {
            const meta = TRACK_META[p.slug];
            const photo = PHOTOS[meta.photo];
            return (
              <li key={p.slug}>
                <BlurFade inView delay={i * 0.08} duration={0.6} offset={10} direction="up" className="h-full">
                  <Link
                    href={`/programmes/${p.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-d3-card bg-d3-white shadow-[0_2px_2px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.35)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-d3-carbon">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <span className="d3-label absolute left-3 top-3 rounded-full bg-d3-white/90 px-2.5 py-1 text-[10px] text-d3-carbon backdrop-blur">
                        Track {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="d3-label text-d3-signal">{meta.level}</p>
                      <h3 className="mt-3 text-[26px] leading-[1.08] tracking-[-0.022em] text-d3-carbon">{p.name}</h3>
                      <p className="mt-3 text-[15px] leading-[1.5] text-d3-zinc">{p.short}</p>
                      <ul className="mb-6 mt-5 flex flex-wrap gap-1.5">
                        {p.tools.slice(0, 4).map((tool) => (
                          <li key={tool} className="rounded-d3-small bg-d3-fog px-2 py-1 text-[12px] text-d3-carbon">
                            {tool}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto flex items-center justify-between border-t border-d3-mist pt-5 text-[14px]">
                        <span className="text-d3-zinc">
                          Next cohort · <span className="text-d3-carbon">{p.nextCohort ?? "Waitlist"}</span>
                        </span>
                        <span className="inline-flex size-9 items-center justify-center rounded-full bg-d3-carbon text-d3-white transition-colors group-hover:bg-d3-signal">
                          <ArrowUpRightIcon weight="bold" className="size-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </BlurFade>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

/* Store ------------------------------------------------------------- */

export function D3Store() {
  return (
    <section id="store" className="py-20 sm:py-24 lg:py-24">
      <Container>
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead eyebrow="VA storefront · Priced in Naira" title={STORE_INTRO.title} sub={STORE_INTRO.sub} />
          <TextLink href="/store" className="shrink-0 text-d3-carbon">
            Visit the store
          </TextLink>
        </div>
        <D3StoreTabs />
      </Container>
    </section>
  );
}

/* Two paths --------------------------------------------------------- */

export function D3Paths() {
  const cards = [
    { key: "talent", data: PATHS.talent, photo: PHOTOS.talentPool, dark: false },
    { key: "hire", data: PATHS.hire, photo: PHOTOS.hireVa, dark: true },
  ] as const;

  return (
    <section id="paths" className="py-20 sm:py-24 lg:py-24">
      <Container>
        <SectionHead eyebrow="Talent pool & hiring" title={PATHS_INTRO.title} sub={PATHS_INTRO.sub} align="center" />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {cards.map(({ key, data, photo, dark }) => (
            <article
              key={key}
              className={cn(
                "flex flex-col overflow-hidden rounded-d3-card",
                dark ? "bg-d3-carbon text-d3-white" : "bg-d3-fog text-d3-carbon",
              )}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
                <span
                  className={cn(
                    "d3-label absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] backdrop-blur",
                    dark ? "bg-d3-black/60 text-d3-white" : "bg-d3-white/90 text-d3-carbon",
                  )}
                >
                  {data.label}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-9">
                <h3 className="text-[32px] leading-[1.05] tracking-[-0.022em] sm:text-[40px]">{data.title}</h3>
                <p className={cn("mt-4 max-w-[480px] text-[16px] leading-[1.5]", dark ? "text-d3-ash" : "text-d3-zinc")}>
                  {data.body}
                </p>
                <ol className="mt-8 space-y-3">
                  {data.steps.map((step) => (
                    <li key={step} className="flex items-start gap-3 text-[15px] leading-[1.4]">
                      <CheckMark className="mt-px" tone={dark ? "white" : "signal"} />
                      {step}
                    </li>
                  ))}
                </ol>
                <div className="mt-auto pt-9">
                  <Pill href={data.cta.href} variant={dark ? "light" : "dark"} arrow>
                    {data.cta.label}
                  </Pill>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* Testimonials ------------------------------------------------------ */

function Quote({ quote, name, role }: (typeof TESTIMONIALS)[number]) {
  return (
    <figure className="flex w-[300px] shrink-0 flex-col justify-between rounded-d3-card border border-white/10 bg-white/[0.04] p-6 sm:w-[360px]">
      <blockquote className="text-[17px] leading-[1.45] tracking-[-0.01em] text-d3-white">“{quote}”</blockquote>
      <figcaption className="mt-8 flex items-center gap-3">
        <span className="inline-flex size-9 items-center justify-center rounded-full bg-d3-signal text-[12px] font-medium text-d3-white">
          {initials(name)}
        </span>
        <span>
          <span className="block text-[14px] text-d3-white">{name}</span>
          <span className="block text-[13px] text-d3-ash">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function D3Testimonials() {
  const half = Math.ceil(TESTIMONIALS.length / 2);
  return (
    <section id="stories" className="px-2 sm:px-[7px]">
      <div className="overflow-hidden rounded-[14px] bg-d3-black py-20 text-d3-white sm:py-24 lg:py-24">
        <Container>
          <SectionHead eyebrow="Graduate stories" title={TESTIMONIALS_INTRO.title} sub={TESTIMONIALS_INTRO.sub} dark />
        </Container>
        <div className="mt-14 space-y-4 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <Marquee pauseOnHover repeat={2} className="p-0 [--duration:70s] [--gap:1rem]">
            {TESTIMONIALS.slice(0, half).map((t) => (
              <Quote key={t.name} {...t} />
            ))}
          </Marquee>
          <Marquee pauseOnHover reverse repeat={2} className="p-0 [--duration:70s] [--gap:1rem]">
            {TESTIMONIALS.slice(half).map((t) => (
              <Quote key={t.name} {...t} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

/* Video ------------------------------------------------------------- */

export function D3Video() {
  return (
    <section id="video" className="py-20 sm:py-24 lg:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr] lg:items-end">
          <SectionHead eyebrow="Inside the classroom" title={VIDEO.title} />
          <p className="max-w-[420px] text-[16px] leading-[1.5] text-d3-zinc sm:text-[17px] lg:justify-self-end">{VIDEO.body}</p>
        </div>
        <div className="d3-grain relative mt-12 aspect-[4/5] overflow-hidden rounded-d3-card bg-d3-black sm:aspect-[16/9]">
          <Image src={VIDEO.poster} alt={PHOTOS.videoPoster.alt} fill sizes="(min-width: 1200px) 1200px, 100vw" className="object-cover opacity-80" />
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1),rgba(0,0,0,0.65))]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-d3-white">
            <span className="relative inline-flex size-20 items-center justify-center rounded-full bg-d3-white/15 backdrop-blur-md sm:size-24">
              <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-d3-white/10 [animation-duration:2.4s] motion-reduce:animate-none" />
              <span className="inline-flex size-14 items-center justify-center rounded-full bg-d3-white text-d3-carbon sm:size-16">
                <PlayIcon weight="fill" className="ml-0.5 size-5" />
              </span>
            </span>
            <span className="d3-label rounded-full border border-white/25 px-3 py-1.5 text-d3-white/85">{VIDEO.status}</span>
          </div>
          <div className="absolute inset-x-5 bottom-5 flex items-center justify-between text-[13px] text-d3-white/70 sm:inset-x-7 sm:bottom-6">
            <span className="hidden sm:inline">{BRAND.name}</span>
            <span className="font-d3-mono">Inside a live session</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* FAQ --------------------------------------------------------------- */

export function D3Faq() {
  return (
    <section id="faq" className="border-t border-d3-mist py-20 sm:py-24 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="lg:sticky lg:top-10 lg:self-start">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="d3-heading mt-5 text-balance text-[40px] sm:text-[52px] lg:text-[56px]">{FAQ_INTRO.title}</h2>
            <p className="mt-6 max-w-[320px] text-[15px] leading-[1.5] text-d3-zinc">
              Still deciding? Talk it through with the founder.
            </p>
            <div className="mt-6">
              <Pill href={FINAL_CTA.secondary.href} variant="outline" arrow>
                {FINAL_CTA.secondary.label}
              </Pill>
            </div>
          </div>

          <div className="border-t border-d3-mist">
            {FAQS.map((item, i) => (
              <details key={item.q} className="group border-b border-d3-mist" {...(i === 0 ? { open: true } : {})}>
                <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-d3-signal sm:py-7">
                  <span className="text-[20px] leading-[1.2] tracking-[-0.018em] text-d3-carbon sm:text-[26px] lg:text-[28px]">
                    {item.q}
                  </span>
                  <span className="d3-faq-icon-wrap mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-d3-fog text-d3-carbon transition-colors duration-300 sm:size-10">
                    <PlusIcon weight="bold" className="d3-faq-icon size-4 transition-transform duration-300" />
                  </span>
                </summary>
                <p className="max-w-[620px] pb-7 pr-12 text-[16px] leading-[1.55] text-d3-zinc">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* Final CTA --------------------------------------------------------- */

export function D3FinalCta() {
  return (
    <section className="px-2 sm:px-[7px]">
      <div className="d3-grain relative isolate overflow-hidden rounded-[14px] bg-d3-black px-5 py-28 text-center text-d3-white sm:py-36 lg:py-44">
        <Image src={PHOTOS.office.src} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-60 saturate-[0.8]" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55),rgba(0,0,0,0.9))]" />
        <div aria-hidden className="absolute left-1/2 top-full -z-10 h-[420px] w-[900px] max-w-[160%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-d3-signal/40 blur-[120px]" />
        <BlurFade inView duration={0.7} offset={10} direction="up">
          <p className="d3-label text-d3-white/70">{COHORT.month} · Limited spots</p>
          <h2 className="d3-display mx-auto mt-6 max-w-[860px] text-[42px] sm:text-[60px] lg:text-[72px]">{FINAL_CTA.title}</h2>
          <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.5] text-d3-white/75 sm:text-[18px]">{FINAL_CTA.sub}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
            <Pill href={FINAL_CTA.primary.href} variant="light" className="h-[52px] text-[16px]">
              {FINAL_CTA.primary.label}
            </Pill>
            <TextLink href={FINAL_CTA.secondary.href} className="text-[16px] text-d3-white">
              {FINAL_CTA.secondary.label}
            </TextLink>
          </div>
          <p className="mt-6 text-[12px] text-d3-white/50 sm:text-[13px]">
            Live weekend classes · Recorded for replay · Certificate for eligible participants
          </p>
        </BlurFade>
      </div>
    </section>
  );
}

/* Footer ------------------------------------------------------------ */

export function D3Footer() {
  return (
    <footer className="pt-20 sm:pt-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link href="/design-3" className="inline-flex items-center gap-2.5">
              <Image src={BRAND.logo} alt="" width={30} height={30} className="size-[30px]" />
              <span className="text-[20px] font-medium tracking-[-0.04em] text-d3-black">{BRAND.name}</span>
            </Link>
            <p className="mt-5 max-w-[340px] text-[15px] leading-[1.5] text-d3-zinc">{BRAND.tagline}</p>
            <dl className="mt-8 space-y-2 text-[14px]">
              <div className="flex gap-3">
                <dt className="d3-label w-16 pt-[3px] text-d3-ash">Email</dt>
                <dd>
                  <a href={`mailto:${BRAND.email}`} className="text-d3-carbon hover:underline">
                    {BRAND.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="d3-label w-16 pt-[3px] text-d3-ash">Base</dt>
                <dd className="text-d3-carbon">
                  {BRAND.location} <span className="text-d3-zinc">· {BRAND.locationNote}</span>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="d3-label w-16 pt-[3px] text-d3-ash">Hours</dt>
                <dd className="text-d3-carbon">{BRAND.hours}</dd>
              </div>
            </dl>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="d3-label text-d3-ash">{col.heading}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[15px] text-d3-carbon transition-opacity hover:opacity-60">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 rounded-d3-card bg-d3-fog p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="text-[15px] text-d3-carbon">Join the community on WhatsApp for job leads and tips.</p>
          <a
            href={BRAND.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center gap-2 self-start rounded-full bg-d3-carbon px-5 text-[14px] font-medium text-d3-white transition-colors hover:bg-d3-black sm:self-auto"
          >
            Join the community
            <ArrowRightIcon weight="bold" className="size-3.5" />
          </a>
        </div>
      </Container>

      <div aria-hidden className="mx-auto mt-16 max-w-[1440px] select-none overflow-x-clip px-2 pb-[2vw] sm:px-[7px] min-[1440px]:pb-7">
        <p className="whitespace-nowrap text-center text-[12.6vw] leading-[0.95] tracking-[-0.05em] text-d3-carbon min-[1440px]:text-[181px]">
          {BRAND.name}
        </p>
      </div>

      <div className="border-t border-d3-mist">
        <Container className="flex flex-col gap-4 py-6 text-[13px] text-d3-zinc sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {BRAND.name}. {BRAND.footnote}
          </p>
          <ul className="flex gap-5">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="text-d3-carbon transition-opacity hover:opacity-60">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
