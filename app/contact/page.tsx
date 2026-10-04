import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Contact | The VA Workshop",
  description:
    "Get in touch with the VA Workshop team: email, location, and office hours, plus a direct enquiry line for cohorts, hiring, and the talent pool.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Want to make an enquiry?"
        lede="Cohorts, hiring, the talent pool, or the storefront, our team answers every message personally."
      />
      <ContactSection />
      <FAQ />
    </main>
  );
}
