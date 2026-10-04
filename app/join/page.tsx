import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Journey from "@/components/Journey";
import Cohorts from "@/components/Cohorts";
import TalentPool from "@/components/TalentPool";

export const metadata: Metadata = {
  title: "Join a Cohort | The VA Workshop",
  description:
    "Your four-step journey to a hired VA career: train, build, apply, and get hired. See upcoming cohort dates and join the talent pool.",
};

export default function JoinPage() {
  return (
    <main>
      <PageHeader
        title="Your journey to a hired VA career."
        lede="Four steps, six weeks, and a closing ceremony you will actually want to attend. Here is exactly how it works."
      />
      <Journey />
      <Cohorts />
      <TalentPool />
    </main>
  );
}
