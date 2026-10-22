import Reveal from "@/components/Reveal";
import { Geo, Marked, Squiggle } from "@/components/Decor";

const steps = [
  {
    title: "Choose Your Programme",
    description: "Select the training track that matches your career goals.",
  },
  {
    title: "Register & Get Started",
    description: "Join the upcoming cohort and get access to the programme.",
  },
  {
    title: "Learn Live",
    description: "Attend live weekend classes and develop practical VA skills.",
  },
  {
    title: "Practise & Complete Your Capstone",
    description:
      "Complete assignments throughout the programme and submit your capstone project.",
  },
  {
    title: "Get Certified & Keep Growing",
    description:
      "Students who meet the attendance, assignment/capstone requirements receive their certificate and can continue developing their careers through opportunities, resources and the VA Workshop community.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative scroll-mt-28 overflow-hidden px-4 py-24 md:py-32">
      <Geo
        kind="quarter"
        tone="lav"
        className="anim-float-slow pointer-events-none absolute -left-16 top-16 hidden h-56 w-56 lg:block"
      />
      <div className="relative mx-auto max-w-5xl">
        <Reveal className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Your journey in <Marked className="text-accent">five clear steps.</Marked>
          </h2>
          <p className="mx-auto mt-5 max-w-[55ch] text-lg leading-relaxed text-ink-soft">
            From choosing your programme to certification, every stage has one
            goal: making you employable.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <Squiggle
            variant="growth"
            tone="lav"
            draw={false}
            className="pointer-events-none absolute -right-6 top-0 hidden h-full w-24 opacity-60 lg:block"
          />
          <ol className="relative list-none p-0">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <li
                  className={`grid gap-4 border-t border-ink/10 py-8 md:grid-cols-[7rem_1fr] md:gap-8 md:py-10 ${
                    i % 2 === 1 ? "md:pl-16" : ""
                  }`}
                >
                  <span className="text-5xl font-extrabold leading-none tracking-tight text-accent/30 md:text-6xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-ink-soft">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
            <li aria-hidden className="border-t border-ink/10" />
          </ol>
        </div>
      </div>
    </section>
  );
}
