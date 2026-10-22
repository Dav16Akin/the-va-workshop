"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Confirmation, Field, SubmitPill, inputCls } from "@/components/FormKit";

const WINDOWS: Record<"Saturday" | "Sunday", string[]> = {
  Saturday: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"],
  Sunday: ["2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"],
};

export default function BookPage() {
  const [day, setDay] = useState<"Saturday" | "Sunday">("Saturday");
  const [done, setDone] = useState(false);

  return (
    <main>
      <PageHeader
        title="Book a Career Discovery Session."
        lede="A paid 1-on-1 session with the founder to discuss your career goals, challenges, CV, portfolio and next steps."
      />
      <section className="px-4 pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 rounded-[1.5rem] bg-mint-deep/60 px-6 py-5 text-sm leading-relaxed text-ink">
            <span className="font-bold">Available booking windows:</span> Saturday
            10:00 AM to 6:00 PM, and Sunday 2:00 PM to 6:00 PM.
          </div>

          {done ? (
            <Confirmation
              title="Booking received."
              body="We've saved your session request. A secure payment link and your booking confirmation are on their way to your email."
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
                <Field label="Phone number" required>
                  <input required type="tel" name="phone" className={inputCls} placeholder="+234 800 000 0000" />
                </Field>
                <Field label="Preferred day" required>
                  <select
                    className={inputCls}
                    value={day}
                    onChange={(e) => setDay(e.target.value as "Saturday" | "Sunday")}
                  >
                    <option>Saturday</option>
                    <option>Sunday</option>
                  </select>
                </Field>
                <Field label="Preferred date" required>
                  <input required type="date" name="date" className={inputCls} />
                </Field>
                <Field label="Preferred time" required>
                  <select required name="time" className={inputCls} defaultValue={WINDOWS[day][0]}>
                    {WINDOWS[day].map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </Field>
                <div className="md:col-span-2">
                  <Field label="Reason for booking" required>
                    <textarea
                      required
                      name="reason"
                      rows={4}
                      className={inputCls}
                      placeholder="Tell us what you want to work through in this session."
                    />
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
                    A secure payment link is sent to your email to complete the
                    session fee. Your slot is confirmed once payment is received.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <SubmitPill label="Confirm booking" />
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
