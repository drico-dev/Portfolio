import { motion } from "motion/react";

/**
 * Carte d'une catégorie de compétences.
 * Reçoit un objet { title, icon, skills[] } — voir portfolioData.js -> skillCategories
 */
export default function SkillCard({ title, icon: Icon, skills, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="surface rounded-2xl p-6 flex flex-col gap-4 hover:border-azure-500/50 transition-colors duration-200"
    >
      <div className="w-10 h-10 rounded-lg bg-azure-500/10 flex items-center justify-center text-azure-600 dark:text-azure-400">
        <Icon size={20} strokeWidth={1.75} />
      </div>

      <h3 className="font-display text-lg font-semibold text-ink-950 dark:text-white">{title}</h3>

      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="text-xs font-mono text-ink-500 dark:text-ink-400 bg-ink-50 dark:bg-ink-800 border border-ink-100 dark:border-ink-700 rounded-md px-2 py-1"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
