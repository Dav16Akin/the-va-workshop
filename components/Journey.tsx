import Image from "next/image";
import Reveal from "@/components/Reveal";

const steps = [
  {
    title: "Sign Up",
    description: "Create your free account in minutes.",
    image: "/images/step-signup.png",
    alt: "Laptop showing a simple sign-up form on a dark desk",
  },
  {
    title: "Choose A Track",
    description: "Pick the track that fits your career goals.",
    image: "/images/step-choose.png",
    alt: "Person browsing a course catalog on a tablet",
  },
  {
    title: "Learn & Practice",
    description: "Live classes, quizzes and real client-style projects.",
    image: "/images/step-learn.png",
    alt: "Student with headphones taking notes beside a laptop lesson",
  },
  {
    title: "Get Certified",
    description: "Graduate with a certificate and a polished portfolio.",
    image: "/images/step-certified.png",
    alt: "Hands holding a tablet displaying a certificate",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="scroll-mt-28 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Your journey in <span className="text-accent">four clear steps.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[55ch] text-lg leading-relaxed text-ink-soft">
            From sign-up to certificate, every stage has one goal: making you
            employable.
          </p>
        </Reveal>

        <div className="relative mt-20">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-1/2 hidden h-0.5 -translate-y-1/2 bg-accent/50 lg:block"
          />
          <div
            aria-hidden
            className="absolute bottom-0 left-[7px] top-0 w-0.5 bg-accent/40 lg:hidden"
          />
          <div className="grid gap-14 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => {
              const imageFirst = i % 2 === 0;
              const image = (
                <div className="relative mx-auto aspect-[4/3] w-full max-w-[240px] overflow-hidden rounded-[1.5rem] shadow-soft">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 1024px) 240px, 240px"
                    className="object-cover"
                  />
                </div>
              );
              const text = (
                <div className={imageFirst ? "lg:mt-8" : "lg:mb-8"}>
                  <h3 className="text-xl font-bold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {step.description}
                  </p>
                </div>
              );
              return (
                <Reveal key={step.title} delay={i * 0.08} className="relative pl-8 lg:pl-0">
                  <span
                    aria-hidden
                    className="absolute left-0 top-1 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-paper lg:left-0 lg:top-1/2 lg:-translate-y-1/2"
                  />
                  <div className="flex h-full flex-col justify-between gap-8">
                    {imageFirst ? (
                      <>
                        {image}
                        {text}
                      </>
                    ) : (
                      <>
                        {text}
                        {image}
                      </>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
