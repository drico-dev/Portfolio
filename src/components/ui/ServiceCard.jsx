import { motion } from "motion/react";

/**
 * Carte de présentation d'un service.
 * Reçoit un objet { title, icon, description } — voir portfolioData.js -> services
 */
export default function ServiceCard({ title, icon: Icon, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group relative surface rounded-2xl p-6 overflow-hidden hover:border-azure-500/50 transition-colors duration-200"
    >
      {/* Numéro fantôme en fond, façon repère d'IDE */}
      <span className="absolute -top-2 right-4 font-display text-6xl font-semibold text-ink-950/[0.04] dark:text-white/[0.04] select-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative flex flex-col gap-4">
        <div className="w-11 h-11 rounded-xl bg-azure-600 text-white flex items-center justify-center group-hover:bg-azure-500 transition-colors duration-200">
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <h3 className="font-display text-lg font-semibold text-ink-950 dark:text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-ink-500 dark:text-ink-400">{description}</p>
      </div>
    </motion.div>
  );
}
