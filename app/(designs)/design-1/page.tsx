import type { Metadata } from "next";
import { D1MotionRoot } from "@/components/designs/d1/motion-root";
import { D1Nav } from "@/components/designs/d1/nav";
import { D1Hero } from "@/components/designs/d1/hero";
import { D1Tools } from "@/components/designs/d1/tools";
import { D1Offerings } from "@/components/designs/d1/offerings";
import { D1Tracks } from "@/components/designs/d1/tracks";
import { D1Cohort } from "@/components/designs/d1/cohort";
import { D1Store } from "@/components/designs/d1/store";
import { D1Paths } from "@/components/designs/d1/paths";
import { D1Testimonials } from "@/components/designs/d1/testimonials";
import { D1Faq, D1FinalCta, D1Footer, D1Video } from "@/components/designs/d1/closing";

export const metadata: Metadata = {
  title: "Design 1 · Studio | The VA Workshop",
};

export default function Design1Page() {
  return (
    <div className="d1 min-h-dvh">
      <D1MotionRoot>
        <D1Nav />
        <main>
          <D1Hero />
          <D1Tools />
          <D1Offerings />
          <D1Tracks />
          <D1Cohort />
          <D1Store />
          <D1Paths />
          <D1Testimonials />
          <D1Video />
          <D1Faq />
          <D1FinalCta />
        </main>
        <D1Footer />
      </D1MotionRoot>
    </div>
  );
}
