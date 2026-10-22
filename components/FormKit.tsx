"use client";

import { ArrowUpRight, CheckCircle } from "@phosphor-icons/react";

export const inputCls =
  "w-full rounded-2xl border border-ink/10 bg-ink/5 px-5 py-3.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-soft/60 focus:border-accent focus:bg-white";

export function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold text-ink">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      {children}
    </label>
  );
}

export function SubmitPill({ label }: { label: string }) {
  return (
    <button
      type="submit"
      className="group inline-flex items-center gap-2 rounded-full bg-ink py-3.5 pl-8 pr-3 text-sm font-bold text-paper transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98]"
    >
      {label}
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/10 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105">
        <ArrowUpRight size={16} weight="bold" />
      </span>
    </button>
  );
}

export function Confirmation({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5">
      <div className="rounded-[calc(2rem-0.375rem)] bg-white p-10 text-center md:p-14">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-mint-deep text-accent-deep">
          <CheckCircle size={26} weight="duotone" />
        </span>
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight">{title}</h2>
        <p className="mx-auto mt-4 max-w-[46ch] text-base leading-relaxed text-ink-soft">
          {body}
        </p>
      </div>
    </div>
  );
}
