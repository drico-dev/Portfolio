import { footerLinks, personalInfo, socialLinks } from "../../data/portfolioData.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-100 dark:border-ink-800">
      <div className="section-shell py-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <a href="#accueil" className="font-display font-semibold text-lg text-ink-950 dark:text-white">
            <span className="text-azure-600 dark:text-azure-400">{"<"}</span>
            {personalInfo.initials}
            <span className="text-azure-600 dark:text-azure-400">{" />"}</span>
          </a>
          <p className="text-sm text-ink-500 dark:text-ink-400 max-w-xs">{personalInfo.tagline}</p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="text-sm text-ink-500 dark:text-ink-400 hover:text-azure-600 dark:hover:text-azure-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-3">
          {socialLinks.map(({ id, label, href, icon: Icon }) => (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-ink-200 dark:border-ink-700 text-ink-500 dark:text-ink-400 hover:text-azure-600 dark:hover:text-azure-400 hover:border-azure-500/50 transition-colors"
              >
                <Icon size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="section-shell pb-8">
        <p className="text-xs font-mono text-ink-400 dark:text-ink-600">
          © {year} {personalInfo.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
