import Announcement from "@/components/designs/d5/Announcement";
import Nav from "@/components/designs/d5/Nav";
import Hero from "@/components/designs/d5/Hero";
import Trust from "@/components/designs/d5/Trust";
import Offerings from "@/components/designs/d5/Offerings";
import Cohort from "@/components/designs/d5/Cohort";
import PhotoBand from "@/components/designs/d5/PhotoBand";
import Store from "@/components/designs/d5/Store";
import Paths from "@/components/designs/d5/Paths";
import Testimonials from "@/components/designs/d5/Testimonials";
import Video from "@/components/designs/d5/Video";
import Faq from "@/components/designs/d5/Faq";
import Footer from "@/components/designs/d5/Footer";

export default function Design5Page() {
  return (
    <>
      <Announcement />
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Offerings />
        <Cohort />
        <PhotoBand />
        <Store />
        <Paths />
        <Testimonials />
        <Video />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
