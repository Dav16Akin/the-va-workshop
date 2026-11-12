import Nav from "@/components/designs/d3/Nav";
import Hero from "@/components/designs/d3/Hero";
import ToolsStrip from "@/components/designs/d3/ToolsStrip";
import Offerings from "@/components/designs/d3/Offerings";
import Cohort from "@/components/designs/d3/Cohort";
import Store from "@/components/designs/d3/Store";
import Paths from "@/components/designs/d3/Paths";
import Testimonials from "@/components/designs/d3/Testimonials";
import VideoBlock from "@/components/designs/d3/VideoBlock";
import Faq from "@/components/designs/d3/Faq";
import Footer from "@/components/designs/d3/Footer";

export default function Design3Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ToolsStrip />
        <Offerings />
        <Cohort />
        <Store />
        <Paths />
        <Testimonials />
        <VideoBlock />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
