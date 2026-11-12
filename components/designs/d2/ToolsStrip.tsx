import { Marquee } from "@/components/ui/marquee";
import { TOOLS, toolLogo } from "@/lib/home-content";

// Logo wall treated as typography: near-black at 60%, no borders, one marquee for the page.
export default function ToolsStrip() {
  return (
    <section aria-labelledby="d2-tools" className="bg-white py-12">
      <h2
        id="d2-tools"
        className="px-4 text-center text-[16px] font-medium text-black/60"
      >
        Learn the tools clients already run their businesses on.
      </h2>
      <div className="relative mx-auto mt-8 max-w-[1200px] [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <Marquee pauseOnHover className="[--duration:45s] [--gap:3.5rem]">
          {TOOLS.map((tool) => (
            <span key={tool.slug} className="flex items-center gap-2.5 opacity-60">
              {/* eslint-disable-next-line @next/next/no-img-element -- remote SVG logo from Simple Icons */}
              <img
                src={toolLogo(tool.slug, "000000")}
                alt=""
                width={24}
                height={24}
                className="size-6"
                loading="lazy"
              />
              <span className="text-[16px] font-semibold tracking-[-0.01em] text-black">
                {tool.name}
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
