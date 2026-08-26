import { motion } from "motion/react";

const VARIANT_STYLES = {
  primary:
    "bg-azure-600 text-white border border-azure-600 hover:bg-azure-700 hover:border-azure-700 shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset] dark:shadow-none",
  secondary:
    "bg-transparent text-ink-900 dark:text-ink-50 border border-ink-200 dark:border-ink-700 hover:border-azure-500 hover:text-azure-600 dark:hover:text-azure-400",
  ghost:
    "bg-transparent text-ink-600 dark:text-ink-300 border border-transparent hover:text-azure-600 dark:hover:text-azure-400",
};

const SIZE_STYLES = {
  sm: "text-sm px-4 py-2 gap-1.5",
  md: "text-sm sm:text-base px-5 py-2.5 gap-2",
  lg: "text-base px-6 py-3.5 gap-2.5",
};

/**
 * Bouton générique du site : rendu en <a> si `href` est fourni, en <button> sinon.
 *
 * Props :
 * - variant: "primary" | "secondary" | "ghost"
 * - size: "sm" | "md" | "lg"
 * - icon: composant icône lucide-react (optionnel)
 * - iconPosition: "left" | "right"
 * - href / target / download: pour un rendu en lien (ex. téléchargement du CV)
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  href,
  target,
  download,
  className = "",
  ...props
}) {
  const baseClasses = `inline-flex items-center justify-center rounded-full font-medium
    transition-colors duration-200 focus-visible:outline-none
    ${VARIANT_STYLES[variant] ?? VARIANT_STYLES.primary}
    ${SIZE_STYLES[size] ?? SIZE_STYLES.md}
    ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={size === "lg" ? 20 : 16} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={size === "lg" ? 20 : 16} />}
    </>
  );

  const MotionTag = href ? motion.a : motion.button;

  return (
    <MotionTag
      href={href}
      target={target}
      download={download}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={baseClasses}
      {...props}
    >
      {content}
    </MotionTag>
  );
}
