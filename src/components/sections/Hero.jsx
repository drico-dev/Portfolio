import { motion } from "motion/react";
import { ArrowRight, FileDown } from "lucide-react";
import { personalInfo, skillCategories } from "../../data/portfolioData.js";
import Button from "../ui/Button.jsx";
import CodeWindow from "../ui/CodeWindow.jsx";

// Les 3 premières compétences de chaque catégorie "clé" pour le mini bloc de code du Hero.
const heroStack = skillCategories
  .filter((category) => ["frontend", "backend"].includes(category.id))
  .flatMap((category) => category.skills.slice(0, 2));

const codeFields = [
  { key: "nom", value: personalInfo.name },
  { key: "role", value: personalInfo.role },
  { key: "stack", value: heroStack },
  { key: "localisation", value: personalInfo.location },
];

export default function Hero() {
  return (
    <section id="accueil" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Texture de fond discrète, façon grille de code, estompée sur les bords */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 grid-fade-mask opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-ink-200) 1px, transparent 1px), linear-gradient(to bottom, var(--color-ink-200) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="section-shell grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-ink-200 dark:border-ink-700 px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-ink-500 dark:text-ink-400">{personalInfo.availability}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-ink-950 dark:text-white"
          >
            Salut, je suis{" "}
            <span className="text-azure-600 dark:text-azure-400">{personalInfo.name}</span> —{" "}
            {personalInfo.role}.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-ink-500 dark:text-ink-400 max-w-xl leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <Button href="#projets" icon={ArrowRight}>
              Voir mes réalisations
            </Button>
            <Button href={personalInfo.cvFile} download variant="secondary" icon={FileDown}>
              Télécharger mon CV
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <CodeWindow fields={codeFields} />
        </motion.div>
      </div>
    </section>
  );
}
