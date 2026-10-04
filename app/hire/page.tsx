import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Hire a VA | The VA Workshop",
  description:
    "Connect your business with skilled, trained virtual assistants from the VA Workshop talent pool. Pre-vetted professionals, matched to your needs.",
};

export default function HirePage() {
  return (
    <main>
      <PageHeader
        title="Looking to hire a VA?"
        lede="We connect businesses with skilled, trained virtual assistants ready to support you from day one."
      />
      <Clients />
      <Testimonials />
    </main>
  );
}
