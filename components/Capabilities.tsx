import Container from "@/components/system/Container";
import SectionHeader from "@/components/system/SectionHeader";
import ServiceIndex from "@/components/ServiceIndex";
import { capabilities } from "@/data/capabilities";

export default function Capabilities() {
  return (
    <section className="border-y border-ink bg-grey-50 py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="What we can build for you"
              title="Three disciplines, one steady team"
              description="The same team behind the work above can take your idea from a rough sketch to something your customers remember."
            />
          </div>
          <div className="lg:col-span-7 lg:pt-16">
            <ServiceIndex items={capabilities} />
          </div>
        </div>
      </Container>
    </section>
  );
}
