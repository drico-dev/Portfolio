import { motion } from "motion/react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.4 },
  },
};

const line = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Élément signature du Hero : une fenêtre de code animée qui se "tape" au
 * chargement de la page. `fields` est une liste de { key, value } — les
 * données proviennent de src/data/portfolioData.js, rien n'est en dur ici.
 */
export default function CodeWindow({ fileName = "profil.js", variableName = "developpeur", fields = [] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: -1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="surface w-full max-w-md rounded-2xl overflow-hidden shadow-2xl shadow-ink-950/10 dark:shadow-black/40"
    >
      {/* Barre de titre façon éditeur de code */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-ink-100 dark:border-ink-700 bg-ink-50/60 dark:bg-ink-800/60">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-ink-400 dark:text-ink-500">{fileName}</span>
      </div>

      {/* Corps du "code" */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="p-5 font-mono text-[13px] sm:text-sm leading-relaxed"
      >
        <motion.p variants={line} className="text-ink-400 dark:text-ink-500">
          <span className="text-azure-500">const</span> {variableName} = {"{"}
        </motion.p>

        {fields.map(({ key, value }) => (
          <motion.p key={key} variants={line} className="pl-4 text-ink-700 dark:text-ink-300">
            <span className="text-ink-500 dark:text-ink-400">{key}</span>
            <span className="text-ink-400">:</span>{" "}
            <span className="text-azure-600 dark:text-azure-400">
              {Array.isArray(value) ? `[${value.map((v) => `'${v}'`).join(", ")}]` : `'${value}'`}
            </span>
            <span className="text-ink-400">,</span>
          </motion.p>
        ))}

        <motion.p variants={line} className="text-ink-400 dark:text-ink-500">
          {"}"}
          <motion.span
            aria-hidden="true"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block w-[2px] h-[14px] bg-azure-500 ml-1 translate-y-[2px]"
          />
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
