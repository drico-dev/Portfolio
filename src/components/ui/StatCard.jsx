import { motion } from "motion/react";

/**
 * Carte statistique compacte (ex. "6+ Projets livrés").
 * Reçoit un objet { value, label } — voir src/data/portfolioData.js -> stats
 */
export default function StatCard({ value, label, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="surface rounded-2xl px-5 py-6 flex flex-col gap-1"
    >
      <span className="font-display text-3xl sm:text-4xl font-semibold text-azure-600 dark:text-azure-400">
        {value}
      </span>
      <span className="text-sm text-ink-500 dark:text-ink-400">{label}</span>
    </motion.div>
  );
}
