import Reveal from "@/components/Reveal";
import { Blob, Squiggle } from "@/components/Decor";

export default function PageHeader({
  title,
  lede,
}: {
  title: string;
  lede: string;
}) {
  return (
    <section className="relative -mt-16 overflow-hidden bg-mint-deep/35 px-4 pb-16 pt-28 md:pb-20 md:pt-36">
      <Blob
        tone="lav"
        variant="signature"
        className="anim-float-slow pointer-events-none absolute -left-12 top-4 h-28 w-28 opacity-40"
      />
      <Blob
        tone="lav"
        className="anim-float pointer-events-none absolute -right-10 bottom-0 h-24 w-24 opacity-50"
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
