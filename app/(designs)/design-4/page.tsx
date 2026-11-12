import Nav from "@/components/designs/d4/Nav";
import Hero from "@/components/designs/d4/Hero";
import TrustRow from "@/components/designs/d4/TrustRow";
import ToolStrip from "@/components/designs/d4/ToolStrip";
import Programmes from "@/components/designs/d4/Programmes";
import Offerings from "@/components/designs/d4/Offerings";
import Cohort from "@/components/designs/d4/Cohort";
import Store from "@/components/designs/d4/Store";
import Paths from "@/components/designs/d4/Paths";
import Testimonials from "@/components/designs/d4/Testimonials";
import FAQ from "@/components/designs/d4/FAQ";
import Footer from "@/components/designs/d4/Footer";

export default function Design4Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustRow />
        <ToolStrip />
        <Programmes />
        <Offerings />
        <Cohort />
        <Store />
        <Paths />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
