import { services } from "../../data/portfolioData.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import ServiceCard from "../ui/ServiceCard.jsx";

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="section-shell flex flex-col gap-16">
        <SectionHeading
          index={3}
          eyebrow="Ce que je propose"
          title="Services"
          description="Du site vitrine à l'application métier sur mesure, un accompagnement complet sur la partie technique."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
