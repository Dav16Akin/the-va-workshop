import { HERO_SLIDES, STORE_INTRO } from "@/lib/content";
import { Nav } from "@/components/designs/d4/nav";
import { Hero } from "@/components/designs/d4/hero";
import { ToolStrip } from "@/components/designs/d4/tool-strip";
import { JourneyTabs } from "@/components/designs/d4/journey-tabs";
import { Offerings } from "@/components/designs/d4/offerings";
import { Tracks } from "@/components/designs/d4/tracks";
import { Cohort } from "@/components/designs/d4/cohort";
import { StoreTabs } from "@/components/designs/d4/store";
import { Paths } from "@/components/designs/d4/paths";
import { Testimonials } from "@/components/designs/d4/testimonials";
import { Video } from "@/components/designs/d4/video";
import { Faq } from "@/components/designs/d4/faq";
import { FinalCta } from "@/components/designs/d4/final-cta";
import { Footer } from "@/components/designs/d4/footer";
import { Heading, container } from "@/components/designs/d4/primitives";

export default function Design4Page() {
  return (
    <div className="d4 min-h-screen bg-d4-midnight font-d4-sans text-white antialiased">
      <Nav />
      <main>
        <Hero />
        <ToolStrip />

        <section id="how-it-works" className="py-20 sm:py-28">
          <div className={container}>
            <div className="mx-auto max-w-[820px] text-center">
              <Heading accent={HERO_SLIDES[1].headlineMark}>{HERO_SLIDES[1].headlinePre.trim()}</Heading>
            </div>
            <div className="mt-12">
              <JourneyTabs />
            </div>
          </div>
        </section>

        <Offerings />

        <section id="tracks" className="py-20 sm:py-28">
          <div className={container}>
            <Tracks />
          </div>
        </section>

        <Cohort />

        <section id="store" className="py-20 sm:py-28">
          <div className={container}>
            <div className="max-w-[760px]">
              <Heading>{STORE_INTRO.title}</Heading>
              <p className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-d4-ash">{STORE_INTRO.sub}</p>
            </div>
            <div className="mt-12">
              <StoreTabs />
            </div>
          </div>
        </section>

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
