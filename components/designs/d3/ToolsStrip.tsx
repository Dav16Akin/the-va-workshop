import { Marquee } from "@/components/ui/marquee";
import { TOOLS, toolLogo } from "@/lib/home-content";

/** The page's single marquee: the tools our VAs learn to run. */
export default function ToolsStrip() {
  return (
    <section aria-label="Tools covered in training" className="border-b border-[#dee2de] bg-[#ffffff] py-10">
      <p className="mx-auto max-w-[1200px] px-4 text-center text-[15px] text-[#646464] md:px-8">
        Trained on the tools remote clients already use
      </p>
      <div className="relative mt-6">
        <Marquee pauseOnHover repeat={3} className="[--duration:48s] [--gap:3.5rem]">
          {TOOLS.map((tool) => (
            <span key={tool.slug} className="flex items-center gap-3 px-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={toolLogo(tool.slug, "646464")}
                alt=""
                width={22}
                height={22}
                className="size-[22px]"
                loading="lazy"
              />
              <span className="whitespace-nowrap text-[15px] font-medium text-[#444141]">
                {tool.name}
              </span>
            </span>
          ))}
        </Marquee>
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
