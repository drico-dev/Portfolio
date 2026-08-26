import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, FileDown } from "lucide-react";
import { navLinks, personalInfo } from "../../data/portfolioData.js";
import { useActiveSection } from "../../hooks/useActiveSection.js";
import ThemeToggle from "../ui/ThemeToggle.jsx";
import Button from "../ui/Button.jsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((link) => link.id));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ferme le menu mobile automatiquement si l'écran repasse en desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-ink-950/80 backdrop-blur-lg border-b border-ink-100 dark:border-ink-800"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="section-shell flex items-center justify-between h-16 sm:h-20">
        <a href="#accueil" className="font-display font-semibold text-lg text-ink-950 dark:text-white">
          <span className="text-azure-600 dark:text-azure-400">{"<"}</span>
          {personalInfo.initials}
          <span className="text-azure-600 dark:text-azure-400">{" />"}</span>
        </a>

        {/* Navigation desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  activeId === link.id
                    ? "text-azure-600 dark:text-azure-400"
                    : "text-ink-500 dark:text-ink-400 hover:text-ink-900 dark:hover:text-white"
                }`}
              >
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-azure-500/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button href={personalInfo.cvFile} download size="sm" icon={FileDown}>
            CV
          </Button>
        </div>

        {/* Bouton menu mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMobileOpen((open) => !open)}
            aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileOpen}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-200"
          >
            {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Panneau menu mobile */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-white dark:bg-ink-950 border-b border-ink-100 dark:border-ink-800"
          >
            <ul className="section-shell flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                      activeId === link.id
                        ? "text-azure-600 dark:text-azure-400 bg-azure-500/10"
                        : "text-ink-600 dark:text-ink-300"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button href={personalInfo.cvFile} download size="sm" icon={FileDown} className="w-full">
                  Télécharger le CV
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
