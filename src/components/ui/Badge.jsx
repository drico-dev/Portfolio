const TONE_STYLES = {
  neutral:
    "bg-ink-50 text-ink-600 border-ink-100 dark:bg-ink-800 dark:text-ink-300 dark:border-ink-700",
  azure:
    "bg-azure-100 text-azure-700 border-azure-200 dark:bg-azure-500/10 dark:text-azure-300 dark:border-azure-500/20",
};

/**
 * Petite étiquette utilisée pour les technologies (stack) et les catégories.
 * `tone` = "neutral" | "azure"
 */
export default function Badge({ children, tone = "neutral", className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] tracking-wide
        ${TONE_STYLES[tone] ?? TONE_STYLES.neutral} ${className}`}
    >
      {children}
    </span>
  );
}
