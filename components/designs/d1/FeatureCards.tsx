import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { COHORT, PHOTOS, PRODUCTS } from "@/lib/home-content";
import Reveal from "./Reveal";

export default function FeatureCards() {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <section id="cohorts" className="scroll-mt-16 px-4 pb-8 md:px-8">
      <div className="mx-auto grid max-w-[1320px] gap-4 md:grid-cols-2">
        <Reveal className="h-full">
          <article className="relative flex h-full flex-col overflow-hidden rounded-[16px] bg-[var(--d1-surface)]">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[var(--d1-accent)] opacity-90"
            />
            <div className="relative px-7 pt-10 md:px-10">
              <p className="d1-mono text-[13px] font-medium">Next cohort</p>
              <h2 className="d1-display mt-4 text-[34px] md:text-[44px] md:tracking-[-1.2px]">
                Begins {COHORT.month}.
              </h2>
              <p className="mt-4 max-w-[42ch] text-[15px] leading-[1.4] tracking-[-0.02em] text-[var(--d1-graphite)]">
                {COHORT.summary}
              </p>
              <dl className="mt-7 grid max-w-md grid-cols-3 gap-4">
                {COHORT.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-[12px] text-[var(--d1-soft)]">{f.label}</dt>
                    <dd className="mt-1 text-[15px] font-medium tracking-[-0.02em]">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href={COHORT.register.href} className="d1-pill d1-pill-navy">
                  {COHORT.register.label}
                </Link>
                <Link href={COHORT.waitlist.href} className="d1-link inline-flex items-center gap-1.5 text-[15px]">
                  {COHORT.waitlist.label}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="relative mx-7 mt-10 aspect-[16/9] flex-1 overflow-hidden rounded-t-[16px] md:mx-10">
              <Image
                src={PHOTOS.classroom.src}
                alt={PHOTOS.classroom.alt}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08} className="h-full">
          <article id="store" className="flex h-full flex-col overflow-hidden rounded-[16px] bg-[var(--d1-surface)]">
            <div className="px-7 pt-10 md:px-10">
              <p className="d1-mono text-[13px] font-medium">Store</p>
              <h2 className="d1-display mt-4 text-[34px] md:text-[44px] md:tracking-[-1.2px]">
                Show up professionally.
              </h2>
              <p className="mt-4 max-w-[42ch] text-[15px] leading-[1.4] tracking-[-0.02em] text-[var(--d1-graphite)]">
                Career templates and remote-work gear, priced in Naira.
              </p>
              <Link href="/store" className="d1-link mt-5 inline-flex items-center gap-1.5 text-[15px]">
                Browse the store
                <ArrowRight size={14} />
              </Link>
            </div>
            <ul className="mt-8 grid flex-1 grid-cols-1 gap-2 px-7 pb-7 sm:grid-cols-3 md:px-10 md:pb-10">
              {featured.map((p) => (
                <li key={p.id}>
                  <Link href="/store" className="group block h-full overflow-hidden rounded-[16px] bg-white">
                    <span className="relative block aspect-[4/3] overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 200px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </span>
                    <span className="block p-3.5">
                      <span className="block text-[13px] font-medium leading-snug tracking-[-0.02em]">
                        {p.name}
                      </span>
                      <span className="mt-1.5 flex items-baseline gap-2 text-[13px]">
                        <span className="font-medium">{p.price}</span>
                        <span className="text-[var(--d1-soft)] line-through">{p.originalPrice}</span>
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
