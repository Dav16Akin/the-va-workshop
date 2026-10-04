import Reveal from "@/components/Reveal";
import { Blob, Marked } from "@/components/Decor";

export default function Testimonials() {
  return (
    <section
      id="stories"
      className="relative scroll-mt-28 overflow-hidden bg-mint-deep/35 px-4 py-24 md:py-32"
    >
      <Blob
        tone="lav"
        className="anim-float-slow pointer-events-none absolute -right-16 top-10 hidden h-44 w-44 opacity-40 lg:block"
      />
      <Blob
        tone="accent"
        variant="signature"
        className="anim-float pointer-events-none absolute -left-14 bottom-12 hidden h-36 w-36 opacity-40 lg:block"
      />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Hired, promoted,
            <br />
            <Marked className="text-accent">working remotely.</Marked>
          </h2>
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-ink-soft">
            What graduates say after landing their first remote roles.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <figure className="h-full rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5">
              <div className="flex h-full flex-col justify-between rounded-[calc(2rem-0.375rem)] bg-lav p-8 md:p-10">
                <blockquote className="text-2xl font-semibold leading-snug tracking-tight md:text-[1.7rem]">
                  My new CV and LinkedIn profile brought me three interviews in
                  two weeks. I signed my first remote contract a month later.
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs font-bold">
                    AO
                  </span>
                  <span>
                    <span className="block text-sm font-bold">Amara Okafor</span>
                    <span className="block text-xs text-ink-soft">Executive VA, Lagos</span>
                  </span>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          <Reveal delay={0.08}>
            <figure className="h-full rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5">
              <div className="flex h-full flex-col justify-between rounded-[calc(2rem-0.375rem)] bg-white p-8">
                <blockquote className="text-lg font-medium leading-relaxed">
                  The mock interviews removed every bit of fear. I knew exactly
                  what to say.
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-deep text-xs font-bold">
                    KM
                  </span>
                  <span>
                    <span className="block text-sm font-bold">Kwame Mensah</span>
                    <span className="block text-xs text-ink-soft">Legal VA, Accra</span>
                  </span>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          <Reveal delay={0.16} className="lg:col-span-3">
            <figure className="rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5">
              <div className="rounded-[calc(2rem-0.375rem)] bg-ink px-8 py-14 text-center md:px-16">
                <blockquote className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight text-paper md:text-4xl">
                  I came in with admin skills and left with automations clients
                  pay double for.
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper/10 text-xs font-bold text-mint-deep">
                    ZB
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-bold text-paper">Zainab Bello</span>
                    <span className="block text-xs text-paper/60">AI Automation VA, Nairobi</span>
                  </span>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
