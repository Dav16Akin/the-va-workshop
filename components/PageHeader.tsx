import Reveal from "@/components/Reveal";
import { Burst, Cluster, Squiggle } from "@/components/Decor";

export default function PageHeader({
  title,
  lede,
}: {
  title: string;
  lede: string;
}) {
  return (
    <section className="relative -mt-16 overflow-hidden bg-mint-deep/35 px-4 pb-16 pt-28 md:pb-20 md:pt-36">
      <Burst
        tone="lav"
        className="anim-float-slow pointer-events-none absolute -left-6 top-8 h-28 w-28 opacity-70"
      />
      <Cluster
        variant="a"
        className="pointer-events-none absolute -right-10 -bottom-6 h-44 w-44 opacity-90"
      />
      <Reveal className="relative mx-auto max-w-6xl text-center">
        <h1 className="mx-auto mt-0 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
          {title}
        </h1>
        <Squiggle
          variant="underline"
          tone="accent"
          className="mx-auto mt-5 h-3 w-40"
        />
        <p className="mx-auto mt-5 max-w-[58ch] text-lg leading-relaxed text-ink-soft">
          {lede}
        </p>
      </Reveal>
    </section>
  );
}
