import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import RegisterForm from "@/components/RegisterForm";
import { getProgramme, PROGRAMMES } from "@/lib/programmes";

export const metadata: Metadata = {
  title: "Register for a Cohort | The VA Workshop",
  description:
    "Register for the November 2026 VA Workshop cohort. Collect your contact details and process payment to secure your place.",
};

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ programme?: string }>;
}) {
  const params = await searchParams;
  const programme = getProgramme(params.programme ?? "");
  const name = programme?.name ?? PROGRAMMES[0].name;

  return (
    <main>
      <PageHeader
        title={`Join the ${name} Cohort.`}
        lede="Next cohort begins November 2026. Secure your place by completing your registration and payment."
      />
      <section className="px-4 pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl">
          <RegisterForm programme={name} />
          <p className="mt-6 text-center text-sm leading-relaxed text-ink-soft">
            Don't see a date for your preferred programme yet?{" "}
            <a
              href="/waitlist"
              className="font-semibold text-accent-deep underline decoration-accent decoration-2 underline-offset-4"
            >
              Join the waitlist
            </a>{" "}
            and we'll notify you when the next cohort is announced.
          </p>
        </div>
      </section>
    </main>
  );
}
