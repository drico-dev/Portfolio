import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projectCategories, projects } from "../../data/portfolioData.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Tous") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projets" className="py-24 sm:py-32 bg-ink-50/50 dark:bg-ink-900/40">
      <div className="section-shell flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            index={4}
            eyebrow="Portfolio"
            title="Réalisations"
            description="Une sélection de projets livrés récemment, du site vitrine à l'outil métier en temps réel."
          />

          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200 ${
                    isActive
                      ? "bg-azure-600 border-azure-600 text-white"
                      : "border-ink-200 dark:border-ink-700 text-ink-500 dark:text-ink-400 hover:border-azure-500 hover:text-azure-600 dark:hover:text-azure-400"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
