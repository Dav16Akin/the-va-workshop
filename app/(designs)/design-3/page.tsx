import { D3Announcement, D3Nav } from "@/components/designs/d3/header";
import { D3Hero } from "@/components/designs/d3/hero";
import { D3Cohort } from "@/components/designs/d3/cohort";
import { D3MotionProvider } from "@/components/designs/d3/motion-provider";
import {
  D3Faq,
  D3FinalCta,
  D3Footer,
  D3OfferingsSection,
  D3Paths,
  D3Store,
  D3Testimonials,
  D3Tools,
  D3Tracks,
  D3Video,
} from "@/components/designs/d3/sections";

export default function Design3Page() {
  return (
    <D3MotionProvider>
      <div className="d3 min-h-screen">
        <D3Announcement />
        <D3Nav />
        <main>
          <D3Hero />
          <D3Tools />
          <D3OfferingsSection />
          <D3Tracks />
          <D3Cohort />
          <D3Testimonials />
          <D3Store />
          <D3Paths />
          <D3Video />
          <D3Faq />
          <D3FinalCta />
        </main>
        <D3Footer />
      </div>
    </D3MotionProvider>
  );
}
