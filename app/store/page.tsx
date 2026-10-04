import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Store from "@/components/Store";

export const metadata: Metadata = {
  title: "VA Storefront | The VA Workshop",
  description:
    "Templates, contracts, and workspace gear for working VAs. Everything priced in Naira and built for the way VAs actually work.",
};

export default function StorePage() {
  return (
    <main>
      <PageHeader
        title="Tools & gear for working VAs."
        lede="Digital templates and remote-work equipment, all priced in Naira."
      />
      <Store />
    </main>
  );
}
