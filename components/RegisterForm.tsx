"use client";

import { useState } from "react";
import { PROGRAMMES } from "@/lib/programmes";
import { Confirmation, Field, SubmitPill, inputCls } from "@/components/FormKit";

export default function RegisterForm({ programme }: { programme: string }) {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <Confirmation
        title="Registration received."
        body="We've saved your place in the cohort. A secure payment link and your registration confirmation are on their way to your email."
      />
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5"
    >
      <div className="grid gap-5 rounded-[calc(2rem-0.375rem)] bg-white p-8 md:grid-cols-2 md:p-10">
        <Field label="Full name" required>
          <input required name="name" className={inputCls} placeholder="Jane Doe" />
        </Field>
        <Field label="Email address" required>
          <input required type="email" name="email" className={inputCls} placeholder="jane@example.com" />
        </Field>
        <Field label="Phone number" required>
          <input required type="tel" name="phone" className={inputCls} placeholder="+234 800 000 0000" />
        </Field>
        <Field label="Country" required>
          <input required name="country" className={inputCls} placeholder="Nigeria" />
        </Field>
        <div className="md:col-span-2">
          <Field label="Address" required>
            <input required name="address" className={inputCls} placeholder="123 Main Street, Lagos" />
          </Field>
        </div>
        <div className="md:col-span-2">
          <Field label="Programme" required>
            <select required name="programme" className={inputCls} defaultValue={programme}>
              {PROGRAMMES.map((p) => (
                <option key={p.slug}>{p.name}</option>
              ))}
            </select>
          </Field>
        </div>
        <div className="md:col-span-2">
          <Field label="Payment method" required>
            <select required name="payment" className={inputCls} defaultValue="Bank transfer">
              <option>Bank transfer</option>
              <option>Card</option>
            </select>
          </Field>
          <p className="mt-3 text-xs leading-relaxed text-ink-soft">
            A secure payment link is sent to your email to complete your
            registration. Your place in the cohort is confirmed once payment is
            received.
          </p>
        </div>
        <div className="md:col-span-2">
          <SubmitPill label="Complete registration" />
        </div>
      </div>
    </form>
  );
}
