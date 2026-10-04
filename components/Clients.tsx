"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, PaperPlaneTilt } from "@phosphor-icons/react";
import Reveal from "@/components/Reveal";
import { Blob, Marked } from "@/components/Decor";

type FormState = "idle" | "submitting" | "success";

const inputCls =
  "w-full rounded-2xl border border-ink/10 bg-ink/5 px-4 py-3 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-soft/50 focus:border-accent focus:bg-white";
const labelCls = "mb-1.5 block text-xs font-bold text-ink";

const benefits = [
  { title: "Pre-vetted", detail: "Every VA completes the Workshop programme" },
  { title: "Exact match", detail: "Matched to your specific service needs" },
  {
    title: "Real introductions",
    detail: "Our team handles every introduction",
  },
  { title: "Human follow-up", detail: "No automated systems, ever" },
];

const budgets = [
  "Under ₦100,000/month",
  "₦100,000–₦250,000/month",
  "₦250,000–₦500,000/month",
  "₦500,000+/month",
  "Open to discussion",
];

export function ClientsPanel() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    servicesDesired: "",
    email: "",
    budget: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    const body = encodeURIComponent(
      `Name: ${form.name}\nBusiness Name: ${form.businessName}\nServices Desired: ${form.servicesDesired}\nEmail: ${form.email}\nBudget Range: ${form.budget}`,
    );
    setTimeout(() => {
      window.location.href = `mailto:team@thevaworkshop.com?subject=VA Hire Enquiry — ${form.businessName}&body=${body}`;
      setFormState("success");
    }, 600);
  };

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <Reveal>
        <div className="rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5">
          <div className="relative overflow-hidden rounded-[calc(2rem-0.375rem)] bg-white">
            <Blob
              tone="mintDeep"
              className="anim-float-slow pointer-events-none absolute -right-10 -top-8 h-32 w-32 opacity-40"
            />
            <div className="relative h-44">
              <Image
                src="/images/hire-va.png"
                alt="Business owner reviewing virtual assistant candidates on her laptop"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover object-bottom"
              />
            </div>
            <div className="relative p-8 md:p-9">
              <h3 className="text-2xl font-extrabold tracking-tight">
                Why hire <Marked className="text-accent">through us</Marked>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Every VA in our pool has completed the Workshop programme, so
                you skip the guesswork and start working with someone ready.
              </p>

              <div className="mt-8 space-y-5">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="border-l-2 border-accent/25 pl-4"
                  >
                    <p className="text-[15px] font-extrabold tracking-tight text-ink">
                      {benefit.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">
                      {benefit.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5">
          {formState === "success" ? (
            <div className="rounded-[calc(2rem-0.375rem)] bg-white p-14 text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent-deep">
                <CheckCircle size={28} weight="duotone" />
              </span>
              <h3 className="mt-5 text-2xl font-extrabold tracking-tight">
                Enquiry received!
              </h3>
              <p className="mx-auto mt-3 max-w-[32ch] text-sm leading-relaxed text-ink-soft">
                Our team will review your requirements and be in touch with the
                right VA match for your business.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-[calc(2rem-0.375rem)] bg-white p-8 md:p-10"
            >
              <h3 className="text-lg font-extrabold tracking-tight">
                Tell us what you need
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="cl-name" className={labelCls}>
                    Your name *
                  </label>
                  <input
                    id="cl-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="cl-business" className={labelCls}>
                    Business name *
                  </label>
                  <input
                    id="cl-business"
                    name="businessName"
                    type="text"
                    required
                    value={form.businessName}
                    onChange={handleChange}
                    placeholder="Acme Ltd"
                    className={inputCls}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="cl-services" className={labelCls}>
                    Services you need *
                  </label>
                  <textarea
                    id="cl-services"
                    name="servicesDesired"
                    required
                    value={form.servicesDesired}
                    onChange={handleChange}
                    rows={3}
                    placeholder="e.g. inbox management, social media scheduling, data entry, customer support..."
                    className={`${inputCls} resize-y leading-relaxed`}
                  />
                </div>
                <div>
                  <label htmlFor="cl-email" className={labelCls}>
                    Email address *
                  </label>
                  <input
                    id="cl-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@business.com"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="cl-budget" className={labelCls}>
                    Monthly budget *
                  </label>
                  <select
                    id="cl-budget"
                    name="budget"
                    required
                    value={form.budget}
                    onChange={handleChange}
                    className={`${inputCls} cursor-pointer`}
                  >
                    <option value="">Select budget range</option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold text-paper transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <PaperPlaneTilt size={15} weight="bold" />
                {formState === "submitting" ? "Sending..." : "Send enquiry"}
              </button>
              <p className="mt-4 text-center text-xs leading-relaxed text-ink-soft">
                Our team will follow up with a personalised VA match, no
                automated responses.
              </p>
            </form>
          )}
        </div>
      </Reveal>
    </div>
  );
}

export default function Clients() {
  return (
    <section
      id="hire-a-va"
      className="scroll-mt-28 bg-mint-deep/35 px-4 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Pre-vetted VAs,{" "}
            <Marked className="text-accent">ready to start.</Marked>
          </h2>
          <p className="mx-auto mt-5 max-w-[55ch] text-lg leading-relaxed text-ink-soft">
            Tell us what you need and we will match you with a trained virtual
            assistant who can support your business from day one.
          </p>
        </Reveal>

        <div className="mt-16">
          <ClientsPanel />
        </div>
      </div>
    </section>
  );
}
