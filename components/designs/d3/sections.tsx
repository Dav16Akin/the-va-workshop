import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, PlusIcon } from "@phosphor-icons/react/dist/ssr";
import {
  BRAND,
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
} from "@/lib/content";
import { cn } from "@/lib/utils";
import { D3Offerings } from "./offerings";
import { D3StoreTabs } from "./store";
import { CheckMark, Container, Pill, SectionHead, TextLink } from "./primitives";

/* Tools strip ------------------------------------------------------- */

export function D3Tools() {
  return (
    <section aria-labelledby="d3-tools-title" className="py-14 sm:py-16">
      <Container>
        <h2 id="d3-tools-title" className="text-[15px] text-d3-zinc">
          Trained on the tools remote teams already use
        </h2>
        <ul className="mt-6 grid grid-cols-2 border-l border-t border-d3-mist sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {TOOLS.map((tool) => (
            <li
              key={tool.slug}
              className="flex items-center gap-3 border-b border-r border-d3-mist px-4 py-5 text-[15px] tracking-[-0.01em] text-d3-carbon"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- Simple Icons CDN logo, in the brand's own colour */}
              <img
                src={`https://cdn.simpleicons.org/${tool.slug}`}
                alt=""
                width={20}
                height={20}
                loading="lazy"
                className="size-5 shrink-0"
              />
              {tool.name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* Offerings --------------------------------------------------------- */

export function D3OfferingsSection() {
  return (
    <section id="services" className="pb-20 pt-10 sm:pb-24 sm:pt-12 lg:pb-24">
      <Container>
        <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-[1.7fr_1fr] lg:items-end">
          <SectionHead title={OFFERINGS_INTRO.title} />
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
          <SectionHead title={TRACKS_INTRO.title} sub={TRACKS_INTRO.sub} />
          <TextLink href="/services#training" className="shrink-0 text-d3-carbon">
            Compare all tracks
          </TextLink>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {PROGRAMMES.map((p) => {
            const meta = TRACK_META[p.slug];
            const photo = PHOTOS[meta.photo];
            return (
              <li key={p.slug}>
                  <Link
                    href={`/programmes/${p.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-d3-card bg-d3-white shadow-[0_2px_2px_rgba(0,0,0,0.05)] transition-transform duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-d3-signal"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-d3-carbon">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
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
                      <dl className="mt-auto flex items-baseline justify-between gap-4 border-t border-d3-mist pt-5 text-[14px]">
                        <dt className="text-d3-zinc">Next cohort</dt>
                        <dd className="text-d3-carbon">{p.nextCohort ?? "Waitlist"}</dd>
                      </dl>
                    </div>
                  </Link>
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
          <SectionHead title={STORE_INTRO.title} sub={STORE_INTRO.sub} />
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
        <SectionHead title={PATHS_INTRO.title} sub={PATHS_INTRO.sub} />
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
                    "d3-label absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px]",
                    dark ? "bg-d3-carbon text-d3-white" : "bg-d3-white text-d3-carbon",
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
                  <Pill href={data.cta.href} variant={dark ? "light" : "dark"}>
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

function Quote({ quote, name, role, lead }: (typeof TESTIMONIALS)[number] & { lead?: boolean }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-d3-card border border-white/10 bg-d3-carbon p-6 sm:p-7">
      <blockquote
        className={cn(
          "tracking-[-0.01em] text-d3-white",
          lead ? "text-[22px] leading-[1.3] sm:text-[28px]" : "text-[17px] leading-[1.45]",
        )}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-3">
        <span
          aria-hidden
          className="inline-flex size-9 items-center justify-center rounded-full bg-d3-signal text-[12px] font-medium text-d3-white"
        >
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
  const shown = TESTIMONIALS.slice(0, 5);
  return (
    <section id="stories" className="px-2 sm:px-[7px]">
      <div className="rounded-[14px] bg-d3-black py-20 text-d3-white sm:py-24">
        <Container>
          <SectionHead title={TESTIMONIALS_INTRO.title} sub={TESTIMONIALS_INTRO.sub} dark />
          <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((t, i) => (
              <li key={t.name} className={cn(i === 0 && "md:col-span-2 lg:col-span-1 lg:row-span-2")}>
                <Quote {...t} lead={i === 0} />
              </li>
            ))}
          </ul>
        </Container>
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
          <SectionHead title={VIDEO.title} />
          <p className="max-w-[420px] text-[16px] leading-[1.5] text-d3-zinc sm:text-[17px] lg:justify-self-end">{VIDEO.body}</p>
        </div>
        <figure className="relative mt-12 aspect-[4/5] overflow-hidden rounded-d3-card bg-d3-black sm:aspect-[16/9]">
          <Image src={VIDEO.poster} alt={PHOTOS.videoPoster.alt} fill sizes="(min-width: 1200px) 1200px, 100vw" className="object-cover" />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(0deg,rgba(0,0,0,0.6),transparent)]" />
          <figcaption className="absolute bottom-5 left-5 sm:bottom-6 sm:left-7">
            <span className="d3-label inline-flex rounded-full bg-d3-white px-3 py-1.5 text-d3-carbon">{VIDEO.status}</span>
          </figcaption>
        </figure>
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
            <h2 className="d3-heading text-balance text-[40px] sm:text-[52px] lg:text-[56px]">{FAQ_INTRO.title}</h2>
            <p className="mt-6 max-w-[320px] text-[15px] leading-[1.5] text-d3-zinc">
              Book a session to talk through anything not covered here.
            </p>
            <div className="mt-6">
              <Pill href={FINAL_CTA.secondary.href} variant="outline">
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
      <div className="relative isolate overflow-hidden rounded-[14px] bg-d3-black px-5 py-28 text-center text-d3-white sm:py-36 lg:py-44">
        <Image src={PHOTOS.office.src} alt="" fill sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-d3-black/70" />
        <h2 className="d3-display mx-auto max-w-[860px] text-balance text-[42px] sm:text-[60px] lg:text-[72px]">{FINAL_CTA.title}</h2>
        <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.5] text-d3-white/80 sm:text-[18px]">{FINAL_CTA.sub}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
          <Pill href={FINAL_CTA.primary.href} variant="light" className="h-[52px] text-[16px]">
            {FINAL_CTA.primary.label}
          </Pill>
          <TextLink href={FINAL_CTA.secondary.href} className="text-[16px] text-d3-white">
            {FINAL_CTA.secondary.label}
          </TextLink>
        </div>
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
                  {BRAND.location}
                  <span className="block text-d3-zinc">{BRAND.locationNote}</span>
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
            className="inline-flex h-11 items-center gap-2 self-start rounded-full bg-d3-carbon px-5 text-[14px] font-medium text-d3-white transition-[background-color,transform] duration-150 hover:bg-d3-black active:scale-[0.98] sm:self-auto"
          >
            Join the community
            <ArrowUpRightIcon weight="bold" aria-hidden className="size-3.5" />
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
