import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { HERO, PHOTOS, TESTIMONIALS, TESTIMONIALS_INTRO, initials } from "@/lib/content";
import { Chip, Container, SectionHead } from "./primitives";
import { Reveal } from "./reveal";

type T = (typeof TESTIMONIALS)[number];

function Avatar({ name, dark = false }: { name: string; dark?: boolean }) {
  return (
    <span
      className={
        dark
          ? "grid size-10 shrink-0 place-items-center rounded-full bg-d2-obsidian text-[13px] font-semibold text-white"
          : "grid size-10 shrink-0 place-items-center rounded-full bg-d2-cloud text-[13px] font-semibold text-d2-iron"
      }
    >
      {initials(name)}
    </span>
  );
}

function QuoteCard({ t }: { t: T }) {
  const [role] = t.role.split(",");
  return (
    <figure className="flex w-[300px] shrink-0 flex-col rounded-[28px] border border-d2-cloud bg-d2-snow p-6 sm:w-[380px] sm:p-7">
      <Chip className="w-fit">{role}</Chip>
      <blockquote className="mt-5 flex-1 text-[16px] leading-[1.5] text-d2-graphite sm:text-[17px]">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-7 flex items-center gap-3">
        <Avatar name={t.name} />
        <span>
          <span className="block text-[14.5px] font-medium text-d2-obsidian">{t.name}</span>
          <span className="block text-[13px] text-d2-fog">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS;
  const rowA = rest.slice(0, 4);
  const rowB = rest.slice(4);
  return (
    <section id="testimonials" className="pt-24 sm:pt-32">
      <Container>
        <Reveal>
          <SectionHead chip="Graduates" title={TESTIMONIALS_INTRO.title} sub={TESTIMONIALS_INTRO.sub} />
        </Reveal>
      </Container>

      <div className="mt-12 px-2 sm:mt-14 sm:px-3">
        <div className="mx-auto max-w-[1320px] rounded-[32px] bg-d2-paper p-2 sm:rounded-d2-tray sm:p-3">
          <Reveal>
            <div className="grid gap-2 rounded-[28px] border border-d2-cloud bg-d2-snow p-2 sm:rounded-d2-card lg:grid-cols-12">
              <figure className="flex flex-col justify-between p-5 sm:p-8 lg:col-span-7 lg:p-10">
                <Avatar name={featured.name} dark />
                <blockquote className="mt-8 text-[26px] leading-[1.2] font-medium tracking-[-0.03em] text-d2-obsidian sm:text-[34px] lg:text-[38px]">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 grid grid-cols-2 gap-6 border-t border-d2-cloud pt-6">
                  <div>
                    <p className="text-[15px] font-semibold text-d2-obsidian">{featured.name}</p>
                    <p className="text-[13.5px] text-d2-fog">{featured.role}</p>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-d2-obsidian">{HERO.proof[1].value}</p>
                    <p className="text-[13.5px] text-d2-fog">{HERO.proof[1].label}</p>
                  </div>
                </figcaption>
              </figure>
              <div className="relative min-h-[300px] overflow-hidden rounded-[22px] sm:rounded-[28px] lg:col-span-5 lg:min-h-[460px]">
                <Image
                  src={PHOTOS.videoCall.src}
                  alt={PHOTOS.videoCall.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <p className="px-4 pt-8 pb-3 text-[15px] text-d2-steel sm:px-5">More from the VAs we have trained</p>
          <div className="d2-fade-x -mx-2 sm:-mx-3">
            <Marquee pauseOnHover repeat={2} className="d2-marquee [--duration:60s] [--gap:0.75rem]">
              {rowA.map((t) => (
                <QuoteCard key={t.name} t={t} />
              ))}
            </Marquee>
            <Marquee pauseOnHover reverse repeat={2} className="d2-marquee [--duration:60s] [--gap:0.75rem]">
              {rowB.map((t) => (
                <QuoteCard key={t.name} t={t} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
