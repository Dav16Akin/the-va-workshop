import Nav from "@/components/designs/d1/Nav";
import Hero from "@/components/designs/d1/Hero";
import Programmes from "@/components/designs/d1/Programmes";
import Tools from "@/components/designs/d1/Tools";
import Capabilities from "@/components/designs/d1/Capabilities";
import FeatureCards from "@/components/designs/d1/FeatureCards";
import Paths from "@/components/designs/d1/Paths";
import Stories from "@/components/designs/d1/Stories";
import Video from "@/components/designs/d1/Video";
import Faq from "@/components/designs/d1/Faq";
import Footer from "@/components/designs/d1/Footer";

export default function Design1Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Programmes />
        <Tools />
        <Capabilities />
        <FeatureCards />
        <Paths />
        <Stories />
        <Video />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
