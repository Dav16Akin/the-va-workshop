"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, LinkSimple, PaperPlaneTilt } from "@phosphor-icons/react";
import Reveal from "@/components/Reveal";
import { Geo, Marked, Squiggle } from "@/components/Decor";

type FormState = "idle" | "submitting" | "success";

const inputCls =
  "w-full rounded-2xl border-ink/10 bg-ink/5 px-4 py-3 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-soft/50 focus:border-accent focus:bg-white border";
const labelCls = "mb-1.5 block text-xs font-bold text-ink";

const steps = [
  "Apply with your experience & Loom intro",
  "Get reviewed by our team",
  "Get matched with prospective clients",
];

export function TalentPoolPanel() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    fullName: "",
    country: "",
    address: "",
    phone: "",
    email: "",
    yearsExperience: "",
    servicesOffered: "",
    loomLink: "",
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
      `Full Name: ${form.fullName}\nCountry: ${form.country}\nAddress: ${form.address}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nYears of VA Experience: ${form.yearsExperience}\nServices Offered: ${form.servicesOffered}\n\nLoom Introduction Link: ${form.loomLink}`,
    );
    setTimeout(() => {
      window.location.href = `mailto:team@thevaworkshop.com?subject=Talent Pool Application — ${form.fullName}&body=${body}`;
      setFormState("success");
    }, 600);
  };

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <Reveal>
        <div className="rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5">
          <div className="relative overflow-hidden rounded-[calc(2rem-0.375rem)] bg-ink text-paper">
            <Geo
              kind="quarterBr"
              tone="accent"
              blend="normal"
              className="anim-float pointer-events-none absolute -right-10 top-20 h-36 w-36 opacity-25"
            />
            <div className="relative h-44">
              <Image
                src="/images/talent-pool.png"
                alt="Confident virtual assistant holding her laptop, ready for client work"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover bg-top"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent"
              />
            </div>
            <div className="relative p-8 md:p-9">
              <h3 className="text-2xl font-extrabold tracking-tight">
                How the{" "}
                <span className="relative inline-block text-lav">
                  talent pool
                  <Squiggle
                    variant="underline"
                    tone="lav"
                    className="absolute -bottom-1.5 left-0 h-2.5 w-full"
                  />
                </span>{" "}
                works
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-paper/65">
                Submit your application below. Our team reviews every
                application, and selected candidates are added to our curated
                pool. When a client needs a VA, we match them directly with the
                best fit.
              </p>

              <ol className="mt-8 space-y-6">
                {steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="mt-0.5 text-2xl font-extrabold leading-none tracking-tight text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 border-b border-white/10 pb-5 text-[15px] leading-relaxed text-paper/85">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              <p className="mt-7 border-l-2 border-mint-deep/70 pl-4 text-xs leading-relaxed text-paper/60">
                Only trained, qualified VAs are accepted. Previous VA Workshop
                graduates are given priority.
              </p>
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
                Application submitted!
              </h3>
              <p className="mx-auto mt-3 max-w-[36ch] text-sm leading-relaxed text-ink-soft">
                Thank you for applying to the VA Workshop talent pool. Our team
                will review your application and be in touch soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-[calc(2rem-0.375rem)] bg-white p-8 md:p-10"
            >
              <h3 className="text-lg font-extrabold tracking-tight">
                Your application
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="tp-fullName" className={labelCls}>
                    Full name *
                  </label>
                  <input
                    id="tp-fullName"
                    name="fullName"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="tp-country" className={labelCls}>
                    Country *
                  </label>
                  <input
                    id="tp-country"
                    name="country"
                    type="text"
                    required
                    value={form.country}
                    onChange={handleChange}
                    placeholder="Nigeria"
                    className={inputCls}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="tp-address" className={labelCls}>
                    Address *
                  </label>
                  <input
                    id="tp-address"
                    name="address"
                    type="text"
                    required
                    value={form.address}
                    onChange={handleChange}
                    placeholder="123 Main Street, Lagos"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="tp-phone" className={labelCls}>
                    Phone number *
                  </label>
                  <input
                    id="tp-phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234 800 000 0000"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="tp-email" className={labelCls}>
                    Email address *
                  </label>
                  <input
                    id="tp-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className={inputCls}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="tp-years" className={labelCls}>
                    Years of VA experience *
                  </label>
                  <select
                    id="tp-years"
                    name="yearsExperience"
                    required
                    value={form.yearsExperience}
                    onChange={handleChange}
                    className={`${inputCls} cursor-pointer`}
                  >
                    <option value="">Select experience level</option>
                    <option value="Less than 1 year">Less than 1 year</option>
                    <option value="1–2 years">1–2 years</option>
                    <option value="2–4 years">2–4 years</option>
                    <option value="4+ years">4+ years</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="tp-services" className={labelCls}>
                    Services offered & VA experience *
                  </label>
                  <textarea
                    id="tp-services"
                    name="servicesOffered"
                    required
                    value={form.servicesOffered}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your VA experience and the services you specialise in (e.g. email management, social media, bookkeeping, project management)..."
                    className={`${inputCls} resize-y leading-relaxed`}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="tp-loom"
                    className={`${labelCls} flex items-center gap-1.5`}
                  >
                    <LinkSimple size={12} weight="bold" />
                    Loom introduction link *
                  </label>
                  <input
                    id="tp-loom"
                    name="loomLink"
                    type="url"
                    required
                    value={form.loomLink}
                    onChange={handleChange}
                    placeholder="https://www.loom.com/share/..."
                    className={inputCls}
                  />
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
                    Record a short Loom video (2–5 min) introducing yourself,
                    your past work, and what you can offer clients.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold text-paper transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <PaperPlaneTilt size={15} weight="bold" />
                {formState === "submitting"
                  ? "Submitting..."
                  : "Submit application"}
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </div>
  );
}

export default function TalentPool() {
  return (
    <section
      id="talent-pool"
      className="scroll-mt-28 bg-mint-deep/35 px-4 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Join our <Marked className="text-accent">talent pool.</Marked>
          </h2>
          <p className="mx-auto mt-5 max-w-[55ch] text-lg leading-relaxed text-ink-soft">
            Already trained and ready to work? Apply to our talent pool and get
            matched directly with clients who need your exact skills.
          </p>
        </Reveal>

        <div className="mt-16">
          <TalentPoolPanel />
        </div>
      </div>
    </section>
  );
}
