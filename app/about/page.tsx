import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "About Us & Team | The VA Workshop",
  description:
    "Meet the people behind the VA Workshop: founder Anjy and the team training Africa's next generation of virtual assistants.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="The people behind the workshop."
        lede="A small team with one goal: turning motivated beginners into hired, confident virtual assistants."
      />
      <About />
      <Testimonials />
    </main>
  );
}
