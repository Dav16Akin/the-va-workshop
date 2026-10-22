"use client";

import { useId, useState } from "react";
import { Plus } from "@phosphor-icons/react";
import Reveal from "@/components/Reveal";

const FAQS = [
  {
    q: "How does the VA Workshop programme work?",
    a: "A 6-week practical training programme designed to help you develop the skills, tools and professional capabilities needed to work as a Virtual Assistant. Weeks 1 to 4 are live classes held on Saturdays and Sundays, weeks 5 to 6 are your capstone project period, and the programme ends with a closing ceremony and certification for eligible participants.",
  },
  {
    q: "Is the programme suitable for beginners?",
    a: "Yes. Most of our students start with zero VA experience. We walk you through everything step by step, from setting up your business to landing your first paying client.",
  },
  {
    q: "Do I need any prior experience or qualifications?",
    a: "No degree or formal experience is required. If you have a laptop, a stable internet connection, and the drive to build something real, you have what you need to start.",
  },
  {
    q: "Are the training sessions live?",
    a: "Yes. Our classes are delivered live on Saturdays and Sundays during the first four weeks of the programme. Sessions are also recorded so enrolled students can revisit the lessons later.",
  },
  {
    q: "Do you provide coaching and mentorship?",
    a: "We do not provide weekly 1-on-1 coaching sessions as part of the cohort. However, you can book a paid 1-on-1 Career Discovery Session with the founder to discuss your career goals, challenges, CV, portfolio and next steps.",
  },
  {
    q: "How soon can I land my first client?",
    a: "This varies by student, and depends on the niche you choose and the hours you put in. The programme is structured so that your portfolio, resume, and outreach system are all client-ready by the time the six weeks are up.",
  },
  {
    q: "Are the templates and resources customisable?",
    a: "Yes. Every template, resume, portfolio, pitch deck, proposal, contract, onboarding checklist, is fully editable and designed to be adapted to your niche and personality.",
  },
  {
    q: "What happens after I complete the programme?",
    a: "You join our alumni network with lifetime community access, job leads, monthly alumni calls, and access to all future course updates at no extra cost.",
  },
];

function FaqItem({ item }: { item: (typeof FAQS)[number] }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="rounded-[1.5rem] bg-white p-5 shadow-soft ring-1 ring-ink/5">
      <h3>
        <button
          type="button"
          id={buttonId}
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-start justify-between gap-4 text-left"
        >
          <span className="font-semibold text-ink">{item.q}</span>
          <span
            aria-hidden
            className={`grid size-7 shrink-0 place-items-center rounded-full border transition-all duration-200 ${
              isOpen
                ? "rotate-45 border-ink bg-ink text-paper"
                : "border-ink/10 text-ink-soft"
            }`}
          >
            <Plus size={12} weight="bold" />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pt-3 text-sm leading-relaxed text-ink-soft">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const mid = Math.ceil(FAQS.length / 2);

  return (
    <section id="faq" className="scroll-mt-28 bg-mint-deep/35 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Questions, <span className="text-accent">answered.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-4 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            {FAQS.slice(0, mid).map((item, i) => (
              <Reveal key={item.q} delay={i * 0.05}>
                <FaqItem item={item} />
              </Reveal>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {FAQS.slice(mid).map((item, i) => (
              <Reveal key={item.q} delay={i * 0.05}>
                <FaqItem item={item} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="mt-16">
          <div className="rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5">
            <div className="rounded-[calc(2rem-0.375rem)] bg-ink px-8 py-14 text-center">
              <p className="text-xl font-extrabold tracking-tight text-paper">
                Want to make an enquiry?
              </p>
              <a
                href="mailto:team@thevaworkshop.com"
                className="mt-6 inline-flex rounded-full bg-paper px-7 py-3.5 text-sm font-bold text-ink transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5"
              >
                team@thevaworkshop.com
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
