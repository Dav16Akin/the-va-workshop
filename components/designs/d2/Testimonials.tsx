import Reveal from "./Reveal";
import { TESTIMONIALS, initials } from "@/lib/home-content";

const rings = ["#4a90e2", "#051a4b", "#97b6e5", "#2f6fbb"];

export default function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section id="stories" className="scroll-mt-20 px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-[640px]">
          <h2 className="d2-display text-black">Graduates, in their words.</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <figure className="mt-12 rounded-[12px] bg-[#4a90e2] p-6 md:p-10">
            <blockquote className="max-w-[30ch] text-[26px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#051a4b] md:text-[34px]">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full border-2 border-white bg-[#051a4b] text-[14px] font-semibold text-white">
                {initials(featured.name)}
              </span>
              <span>
                <span className="block text-[15px] font-semibold text-[#051a4b]">{featured.name}</span>
                <span className="block text-[14px] text-[#051a4b]/75">{featured.role}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-4 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {rest.map((t, i) => (
            <Reveal key={t.name} delay={0.04 * i} className="mb-4 break-inside-avoid">
              <figure className="rounded-[12px] border border-black/[0.08] bg-white p-6">
                <blockquote className="text-[16px] leading-[1.5] text-black/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    className="grid size-10 place-items-center rounded-full border-2 bg-white text-[13px] font-semibold text-[#051a4b]"
                    style={{ borderColor: rings[i % rings.length] }}
                  >
                    {initials(t.name)}
                  </span>
                  <span>
                    <span className="block text-[14px] font-semibold text-black">{t.name}</span>
                    <span className="block text-[13px] text-black/60">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
