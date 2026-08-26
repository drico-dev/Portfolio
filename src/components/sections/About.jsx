import { useState } from "react";
import { motion } from "motion/react";
import { UserRound } from "lucide-react";
import { personalInfo, stats } from "../../data/portfolioData.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import StatCard from "../ui/StatCard.jsx";

export default function About() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="a-propos" className="py-24 sm:py-32">
      <div className="section-shell flex flex-col gap-16">
        <SectionHeading index={1} eyebrow="À propos" title="La personne derrière le code" />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-azure-500/20 -z-10" />
            <div className="aspect-[4/5] rounded-3xl overflow-hidden surface">
              {!imageFailed ? (
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  onError={() => setImageFailed(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-ink-300 dark:text-ink-600">
                  <UserRound size={72} strokeWidth={1} />
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <p className="text-base sm:text-lg leading-relaxed text-ink-600 dark:text-ink-300">
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <StatCard key={stat.id} {...stat} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
