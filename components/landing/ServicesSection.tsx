import Container from "@/components/system/Container";
import SectionHeader from "@/components/system/SectionHeader";
import ServiceDetail from "@/components/ServiceDetail";
import ServicesTabs from "@/components/ServicesTabs";
import type { ServiceDiscipline, ServiceTab } from "@/types/content";

interface ServicesSectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  disciplines: ServiceDiscipline[];
}

const toTab = (discipline: ServiceDiscipline): ServiceTab => ({
  id: discipline.id,
  label: discipline.tabLabel,
  panel: (
    <ServiceDetail
      kicker={discipline.kicker}
      title={discipline.title}
      lead={discipline.lead}
      animation={discipline.animation}
      items={discipline.items}
    />
  ),
});

export default function ServicesSection({ id, eyebrow, title, description, disciplines }: ServicesSectionProps) {
  return (
    <section id={id} className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-12">
          <ServicesTabs tabs={disciplines.map(toTab)} />
        </div>
      </Container>
    </section>
  );
}
