import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Offerings from "@/components/Offerings";
import Cohorts from "@/components/Cohorts";
import StorefrontPreview from "@/components/StorefrontPreview";
import ApplyTabs from "@/components/ApplyTabs";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Offerings />
      <Cohorts />
      <StorefrontPreview />
      <ApplyTabs />
      <Testimonials />
      <VideoSection />
      <FAQ />
      <CtaBanner />
    </main>
  );
}
