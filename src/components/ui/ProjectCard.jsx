import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, LayoutTemplate } from "lucide-react";
import Badge from "./Badge.jsx";

/**
 * Carte projet de la section Réalisations.
 * Reçoit un objet projet — voir portfolioData.js -> projects
 *
 * Si `image` ne charge pas (photo pas encore ajoutée dans /public/assets/projects),
 * une vignette de repli est affichée à la place, pour ne jamais casser la mise en page.
 */
export default function ProjectCard({ project, index = 0 }) {
  const { title, description, image, stack = [], links = {}, icon: Icon, category } = project;
  const [imageFailed, setImageFailed] = useState(false);
  const hasLink = links.demo || links.code;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group surface rounded-2xl overflow-hidden flex flex-col hover:border-azure-500/50 transition-colors duration-200"
    >
      {/* Aperçu façon fenêtre de navigateur */}
      <div className="relative aspect-[16/10] bg-ink-50 dark:bg-ink-800 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-8 bg-ink-100/80 dark:bg-ink-900/80 backdrop-blur flex items-center gap-1.5 px-3 z-10">
          <span className="w-2.5 h-2.5 rounded-full bg-ink-300 dark:bg-ink-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink-300 dark:bg-ink-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink-300 dark:bg-ink-600" />
        </div>

        {!imageFailed ? (
          <img
            src={image}
            alt={`Aperçu du projet ${title}`}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="w-full h-full object-cover pt-8 transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="w-full h-full pt-8 flex items-center justify-center text-ink-300 dark:text-ink-600">
            {Icon ? <Icon size={40} strokeWidth={1.25} /> : <LayoutTemplate size={40} strokeWidth={1.25} />}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-6 flex-1">
        <div className="flex items-center justify-between gap-3">
          <Badge tone="azure">{category}</Badge>
          {hasLink && (
            <div className="flex items-center gap-1 text-ink-400 dark:text-ink-500 group-hover:text-azure-600 dark:group-hover:text-azure-400 transition-colors">
              <ArrowUpRight size={16} />
            </div>
          )}
        </div>

        <h3 className="font-display text-lg font-semibold text-ink-950 dark:text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-ink-500 dark:text-ink-400 flex-1">{description}</p>

        <ul className="flex flex-wrap gap-2 pt-2">
          {stack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
