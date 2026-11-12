import { MotionConfig } from "@/components/designs/d2/MotionShell";
import Nav from "@/components/designs/d2/Nav";
import Hero from "@/components/designs/d2/Hero";
import ToolsStrip from "@/components/designs/d2/ToolsStrip";
import Offerings from "@/components/designs/d2/Offerings";
import Cohort from "@/components/designs/d2/Cohort";
import Store from "@/components/designs/d2/Store";
import Paths from "@/components/designs/d2/Paths";
import Testimonials from "@/components/designs/d2/Testimonials";
import Video from "@/components/designs/d2/Video";
import Faq from "@/components/designs/d2/Faq";
import Footer from "@/components/designs/d2/Footer";

export default function Design2Page() {
  return (
    <MotionConfig>
      <Nav />
      <main>
        <Hero />
        <ToolsStrip />
        <Offerings />
        <Cohort />
        <Store />
        <Paths />
        <Testimonials />
        <Video />
        <Faq />
      </main>
      <Footer />
    </MotionConfig>
  );
}
