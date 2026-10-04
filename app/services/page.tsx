import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Offerings from "@/components/Offerings";
import Training from "@/components/Training";
import Cohorts from "@/components/Cohorts";

export const metadata: Metadata = {
  title: "Services & Trainings | The VA Workshop",
  description:
    "Six offerings that take you from total beginner to placed VA: trainings, resume and portfolio building, 1-on-1 coaching, community and job leads, AI mock interviews, and progress tracking.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="How we get you there."
        lede="Every offering is designed to give you practical skills, support, and hirable assets, from your first lesson to your first client."
      />
      <Offerings />
      <Training />
      <Cohorts />
    </main>
  );
}
