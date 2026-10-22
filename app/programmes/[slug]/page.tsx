import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { Geo, Squiggle } from "@/components/Decor";
import { PROGRAMMES, getProgramme } from "@/lib/programmes";

export function generateStaticParams() {
  return PROGRAMMES.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then((p): Metadata => {
    const programme = getProgramme(p.slug);
    if (!programme) return { title: "Programme | The VA Workshop" };
    return {
      title: `${programme.name} | The VA Workshop`,
      description: programme.short,
    };
  });
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M4 12L12 4M6 4h6v6" />
    </svg>
  );
}

function MarkerList({
  items,
  marker,
}: {
  items: string[];
  marker: string;
}) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft">
          <span aria-hidden className={`mt-2 h-2 w-2 shrink-0 rotate-45 ${marker}`} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ProgrammePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const programme = getProgramme(slug);
  if (!programme) notFound();

  return (
    <main>
      <PageHeader title={`${programme.name}.`} lede={programme.short} />

      <section className="px-4 pb-24 md:pb-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              What the programme{" "}
              <span className="relative inline-block text-accent">
                entails.
                <Squiggle variant="underline" tone="lav" strokeWidth={2.5} className="absolute -bottom-1 left-0 h-2.5 w-full" />
              </span>
            </h2>
            <MarkerList items={programme.entails} marker="bg-mint-deep" />

            <h2 className="mt-12 text-2xl font-extrabold tracking-tight md:text-3xl">
              Skills you will learn.
            </h2>
            <MarkerList items={programme.skills} marker="bg-accent" />

            <h2 className="mt-12 text-2xl font-extrabold tracking-tight md:text-3xl">
              Tools you will use.
            </h2>
            <MarkerList items={programme.tools} marker="bg-lav" />

            <h2 className="mt-12 text-2xl font-extrabold tracking-tight md:text-3xl">
              Certification requirements.
            </h2>
            <MarkerList items={programme.certification} marker="bg-ink" />
          </div>

          <div className="lg:pt-4">
            <div className="rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5 lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-[calc(2rem-0.375rem)] bg-ink p-8 text-paper md:p-10">
                <Geo
                  kind="quarterBr"
                  tone="mintDeep"
                  blend="normal"
                  className="anim-float pointer-events-none absolute -right-8 -top-8 h-28 w-28 opacity-25"
                />
                <p className="relative text-sm font-medium text-lav">Next cohort</p>
                {programme.nextCohort ? (
                  <>
                    <p className="relative mt-3 text-4xl font-extrabold leading-none tracking-tight text-mint-deep">
                      {programme.nextCohort}
                    </p>
                    <p className="relative mt-6 text-base leading-relaxed text-paper/70">
                      Join the {programme.name} Cohort and spend six weeks
                      building skills, tools and a capstone you can show
                      clients.
                    </p>
                    <Link
                      href={`/register?programme=${programme.slug}`}
                      className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-paper py-3.5 pl-7 pr-3 text-sm font-bold text-ink transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                      Join the Cohort
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105">
                        <ArrowIcon />
                      </span>
                    </Link>
                  </>
                ) : (
                  <>
                    <p className="relative mt-3 text-3xl font-extrabold leading-tight tracking-tight">
                      Want to be notified when the next cohort opens?
                    </p>
                    <Link
                      href="/waitlist"
                      className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-paper py-3.5 pl-7 pr-3 text-sm font-bold text-ink transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                      Join the Waitlist
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105">
                        <ArrowIcon />
                      </span>
                    </Link>
                  </>
                )}
                <p className="relative mt-7 border-l-2 border-mint-deep/70 pl-4 text-xs leading-relaxed text-paper/60">
                  Don't see a date for your preferred programme yet? Join the
                  waitlist and we'll notify you when the next cohort is
                  announced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
