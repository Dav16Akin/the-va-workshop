import { Marquee } from "@/components/ui/marquee";
import { TOOLS, toolLogo } from "@/lib/home-content";

/** The page's single marquee: the tools every cohort trains on. */
export default function ToolStrip() {
  return (
    <section
      aria-label="Tools you will learn"
      className="border-y border-black/[0.06] bg-white py-6"
    >
      <p className="sr-only">
        Tools covered in training: {TOOLS.map((t) => t.name).join(", ")}.
      </p>
      <Marquee
        pauseOnHover
        repeat={3}
        aria-hidden
        className="[--duration:45s] [--gap:3.5rem] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        {TOOLS.map((tool) => (
          <span key={tool.slug} className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- remote single-colour SVG logo */}
            <img
              src={toolLogo(tool.slug, "5b616b")}
              alt=""
              width={22}
              height={22}
              loading="lazy"
              className="size-[22px]"
            />
            <span className="whitespace-nowrap text-[15px] font-medium text-[#5b616b]">
              {tool.name}
            </span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
