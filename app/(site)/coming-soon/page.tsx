import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Geo } from "@/components/Decor";

export const metadata: Metadata = {
  title: "Coming Soon | The VA Workshop",
  description:
    "We're building new tools to help VAs practise interviews and track their learning and career progress.",
};

export default function ComingSoonPage() {
  return (
    <main>
      <PageHeader
        title="Coming soon."
        lede="We're developing new tools to help VAs practise, prepare and track their progress. This space is under construction."
      />
      <section className="px-4 pb-24 md:pb-32">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5">
          <Geo
            kind="quarter"
            tone="mintDeep"
            className="anim-float-slow pointer-events-none absolute -right-8 -top-8 h-32 w-32"
          />
          <div className="relative rounded-[calc(2rem-0.375rem)] bg-white p-10 text-center md:p-14">
            <p className="text-sm font-semibold text-accent-deep">In development</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              AI Mock Interview Preparation & Progress Tracking
            </h2>
            <p className="mx-auto mt-5 max-w-[50ch] text-base leading-relaxed text-ink-soft">
              We're developing a smarter way to help VAs practise for remote job
              interviews and track their learning and career progress. Join the
              waitlist and we'll notify you the moment either launches.
            </p>
            <a
              href="/waitlist"
              className="mt-8 inline-flex rounded-full bg-ink px-8 py-3.5 text-sm font-bold text-paper transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5"
            >
              Join the waitlist
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
