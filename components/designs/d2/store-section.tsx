import { STORE_INTRO } from "@/lib/content";
import { Container, SectionHead } from "./primitives";
import { Reveal } from "./reveal";
import { StoreTabs } from "./store";

export function Store() {
  return (
    <section id="store" className="pt-24 sm:pt-32">
      <Container>
        <Reveal>
          <SectionHead
            chip="The VA store"
            title={STORE_INTRO.title}
            sub={STORE_INTRO.sub}
            cta={{ label: "Visit the store", href: "/store" }}
          />
        </Reveal>
        <div className="mt-12 sm:mt-14">
          <StoreTabs />
        </div>
      </Container>
    </section>
  );
}
