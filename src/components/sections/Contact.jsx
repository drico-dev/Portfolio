import { motion } from "motion/react";
import { FileDown, Send } from "lucide-react";
import { contactMethods, personalInfo, socialLinks } from "../../data/portfolioData.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import Button from "../ui/Button.jsx";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="section-shell flex flex-col gap-16">
        <SectionHeading
          index={5}
          eyebrow="Contact"
          title="Discutons de votre projet"
          description="Une idée de site, une application à concevoir, ou juste une question sur une stack technique — je réponds sous 24h."
        />

        <div className="grid lg:grid-cols-[1fr_1fr] gap-6">
          {/* Moyens de contact */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactMethods.map(({ id, icon: Icon, label, value, href }, index) => {
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="surface rounded-2xl p-5 flex flex-col gap-3 h-full hover:border-azure-500/50 transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-azure-500/10 flex items-center justify-center text-azure-600 dark:text-azure-400">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-ink-400 dark:text-ink-500 mb-1">{label}</p>
                    <p className="text-sm font-medium text-ink-900 dark:text-white wrap-break-word">{value}</p>
                  </div>
                </motion.div>
              );

              return (
                <div key={id}>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block h-full">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              );
            })}
          </div>

          {/* Panneau CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-2xl bg-ink-950 dark:bg-azure-600 text-white p-8 flex flex-col justify-between gap-8"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative flex flex-col gap-3">
              <span className="eyebrow text-azure-300 dark:text-white/80">// Prêt à collaborer ?</span>
              <h3 className="font-display text-2xl font-semibold">{personalInfo.name}</h3>
              <p className="text-sm text-ink-300 dark:text-white/80 leading-relaxed">{personalInfo.availability}.</p>
            </div>

            <div className="relative flex flex-col gap-3">
              <Button href={socialLinks.find((s) => s.id === "email")?.href} icon={Send} className="bg-black text-ink-950 border-white hover:bg-black">
                M'envoyer un message
              </Button>
              <Button
                href={personalInfo.cvFile}
                download
                variant="secondary"
                icon={FileDown}
                className="border-white/30 text-white hover:text-white hover:border-white"
              >
                Télécharger mon CV
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
