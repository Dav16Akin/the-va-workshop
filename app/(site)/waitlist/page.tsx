"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { PROGRAMMES } from "@/lib/programmes";
import { Confirmation, Field, SubmitPill, inputCls } from "@/components/FormKit";

export default function WaitlistPage() {
  const [done, setDone] = useState(false);

  return (
    <main>
      <PageHeader
        title="Join the waitlist."
        lede="Don't see a date for your preferred programme yet? Join the waitlist and we'll notify you when the next cohort is announced."
      />
      <section className="px-4 pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl">
          {done ? (
            <Confirmation
              title="You're on the waitlist."
              body="We'll email you the moment the next cohort for your preferred programme is announced."
            />
          ) : (
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
                <div className="md:col-span-2">
                  <Field label="Preferred programme" required>
                    <select required name="programme" className={inputCls} defaultValue={PROGRAMMES[0].name}>
                      {PROGRAMMES.map((p) => (
                        <option key={p.slug}>{p.name}</option>
                      ))}
                      <option>Not sure yet</option>
                    </select>
                  </Field>
                </div>
                <div className="md:col-span-2">
                  <SubmitPill label="Join the Waitlist" />
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
