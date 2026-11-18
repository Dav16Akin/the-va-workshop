import { Announcement, Nav } from "@/components/designs/d2/nav";
import { Hero } from "@/components/designs/d2/hero";
import { Stats, ToolStrip } from "@/components/designs/d2/tools-stats";
import { Tracks } from "@/components/designs/d2/tracks";
import { Offerings } from "@/components/designs/d2/offerings";
import { Cohort } from "@/components/designs/d2/cohort";
import { Store } from "@/components/designs/d2/store-section";
import { Paths } from "@/components/designs/d2/paths";
import { Testimonials } from "@/components/designs/d2/testimonials";
import { Video } from "@/components/designs/d2/video";
import { Faq, FinalCta, Footer } from "@/components/designs/d2/closing";

export default function DesignTwoPage() {
  return (
    <div className="d2 min-h-screen">
      <Announcement />
      <Nav />
      <main>
        <Hero />
        <ToolStrip />
        <Stats />
        <Tracks />
        <Offerings />
        <Cohort />
        <Store />
        <Paths />
        <Testimonials />
        <Video />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
