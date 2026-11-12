import { Marquee } from "@/components/ui/marquee";
import { TOOLS, toolLogo } from "@/lib/home-content";

export default function Tools() {
  return (
    <section aria-labelledby="d1-tools" className="py-16 md:py-20">
      <h2
        id="d1-tools"
        className="mx-auto max-w-[40ch] px-4 text-center text-[15px] tracking-[-0.02em] text-[var(--d1-graphite)]"
      >
        Trained on the tools your future clients already use
      </h2>
      <div className="relative mx-auto mt-8 max-w-[1320px] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Marquee pauseOnHover className="[--duration:40s] [--gap:3.5rem]">
          {TOOLS.map((t) => (
            <span key={t.slug} className="flex items-center gap-2.5 opacity-70">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={toolLogo(t.slug, "111111")} alt="" width={22} height={22} className="size-[22px]" />
              <span className="whitespace-nowrap text-[16px] font-medium tracking-[-0.02em]">
                {t.name}
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
