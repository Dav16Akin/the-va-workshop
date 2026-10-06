import Reveal from "@/components/Reveal";
import { Cluster, Geo, Marked } from "@/components/Decor";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  card: string;
  avatar: string;
};

const columns: Testimonial[][] = [
  [
    {
      quote:
        "My new CV and LinkedIn profile brought me three interviews in two weeks. I signed my first remote contract a month later.",
      name: "Amara Okafor",
      role: "Executive VA, Lagos",
      initials: "AO",
      card: "bg-lav",
      avatar: "bg-white",
    },
    {
      quote:
        "The cold-email templates landed me two retainers in my first month out of the cohort.",
      name: "Chidera Eze",
      role: "Social Media VA, Enugu",
      initials: "CE",
      card: "bg-white",
      avatar: "bg-mint-deep",
    },
    {
      quote:
        "Six weeks in, I moved from part-time admin to a full remote salary.",
      name: "Naledi Dlamini",
      role: "Project VA, Johannesburg",
      initials: "ND",
      card: "bg-mint-deep/60",
      avatar: "bg-white",
    },
  ],
  [
    {
      quote: "The mock interviews removed every bit of fear. I knew exactly what to say.",
      name: "Kwame Mensah",
      role: "Legal VA, Accra",
      initials: "KM",
      card: "bg-white",
      avatar: "bg-mint-deep",
    },
    {
      quote:
        "Live classes felt like sitting next to a colleague. I never once felt lost.",
      name: "Tunde Adeyemi",
      role: "Bookkeeping VA, Ibadan",
      initials: "TA",
      card: "bg-cream",
      avatar: "bg-lav",
    },
    {
      quote:
        "The talent pool matched me with a client before I even finished the programme.",
      name: "Kwesi Appiah",
      role: "Research VA, Kumasi",
      initials: "KA",
      card: "bg-lav",
      avatar: "bg-white",
    },
  ],
  [
    {
      quote:
        "I came in with admin skills and left with automations clients pay double for.",
      name: "Zainab Bello",
      role: "AI Automation VA, Nairobi",
      initials: "ZB",
      card: "bg-mint-deep/60",
      avatar: "bg-white",
    },
    {
      quote:
        "The portfolio piece from week four is the exact thing my client asked to see.",
      name: "Aisha Musa",
      role: "Customer Support VA, Kano",
      initials: "AM",
      card: "bg-white",
      avatar: "bg-lav",
    },
    {
      quote:
        "I finally charge what my work is worth. The pricing session changed everything.",
      name: "Fatima Bala",
      role: "Content VA, Abuja",
      initials: "FB",
      card: "bg-cream",
      avatar: "bg-mint-deep",
    },
  ],
];

const DURATIONS = ["26s", "32s", "29s"];

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5">
      <div className={`flex h-full flex-col justify-between rounded-[calc(2rem-0.375rem)] p-7 ${t.card}`}>
        <blockquote className="text-[15px] font-medium leading-relaxed">
          {t.quote}
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${t.avatar}`}
          >
            {t.initials}
          </span>
          <span>
            <span className="block text-sm font-bold">{t.name}</span>
            <span className="block text-xs text-ink-soft">{t.role}</span>
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

function Column({
  items,
  duration,
  className = "",
}: {
  items: Testimonial[];
  duration: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <ul
        className="marquee-col flex list-none flex-col p-0"
        style={{ "--col-duration": duration } as React.CSSProperties}
      >
        {[0, 1].map((copy) => (
          <li
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="flex flex-col gap-5 pb-5"
          >
            {items.map((t) => (
              <Card key={`${copy}-${t.initials}`} t={t} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="stories"
      className="relative scroll-mt-28 overflow-hidden bg-mint-deep/35 px-4 py-24 md:py-32"
    >
      <Geo
        kind="quarter"
        tone="lav"
        className="anim-float-slow pointer-events-none absolute -right-16 top-8 hidden h-64 w-64 lg:block"
      />
      <Cluster
        variant="c"
        className="pointer-events-none absolute -left-14 bottom-8 hidden h-56 w-56 lg:block"
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

        <Reveal
          delay={0.08}
          className="mt-14 grid gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[680px] overflow-hidden md:grid-cols-2 lg:grid-cols-3"
        >
          {columns.map((items, i) => (
            <Column
              key={i}
              items={items}
              duration={DURATIONS[i]}
              className={i === 1 ? "hidden md:block" : i === 2 ? "hidden lg:block" : ""}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
