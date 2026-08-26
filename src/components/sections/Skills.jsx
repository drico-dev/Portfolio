import { skillCategories } from "../../data/portfolioData.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import SkillCard from "../ui/SkillCard.jsx";

export default function Skills() {
  return (
    <section id="competences" className="py-24 sm:py-32 bg-ink-50/50 dark:bg-ink-900/40">
      <div className="section-shell flex flex-col gap-16">
        <SectionHeading
          index={2}
          eyebrow="Stack technique"
          title="Compétences & outils"
          description="Les technologies avec lesquelles je construis des produits fiables, du prototypage à la mise en production."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
