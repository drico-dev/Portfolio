import { motion } from "motion/react";

/**
 * En-tête de section standard : eyebrow (style commentaire de code),
 * titre et description optionnelle. `index` sert à numéroter l'eyebrow.
 */
export default function SectionHeading({ index, eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col gap-3 max-w-2xl ${alignment}`}
    >
      <span className="eyebrow">
        {"// "}
        {typeof index === "number" ? `${String(index).padStart(2, "0")} — ` : ""}
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl font-semibold text-ink-950 dark:text-white">{title}</h2>
      {description && (
        <p className="text-ink-500 dark:text-ink-400 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
