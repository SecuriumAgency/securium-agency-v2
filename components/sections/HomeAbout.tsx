"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BADGES = [
  {
    icon: "/images/about/icone-consultant-independant.png",
    label: "Consultant indépendant",
  },
  {
    icon: "/images/about/icone-cybersecurite-protection-donnees.png",
    label: "Protection des données",
  },
  {
    icon: "/images/about/icone-infrastructure-informatique.png",
    label: "Infrastructure informatique",
  },
];

export default function HomeAbout() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="glass-panel flex items-center justify-center p-12">
          <Image
            src="/logo/securium-logo.png"
            alt="Securium Digital Agency"
            width={400}
            height={400}
            className="h-auto w-full max-w-sm"
          />
        </div>

        <div>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-brand-500 backdrop-blur-md">
            À propos
          </span>

          <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
            À l&apos;origine de Securium
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Technicien support et ingénieur technique de métier, j&apos;ai fondé Securium pour
            proposer un accompagnement informatique de proximité, exigeant et sur-mesure. Mon
            objectif : allier rigueur technique et disponibilité réelle, pour que chaque client
            bénéficie d&apos;une infrastructure fiable, sécurisée et pensée pour durer.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {BADGES.map((badge) => (
              <div
                key={badge.label}
                className="glass-panel flex flex-col items-center gap-3 p-5 text-center transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/30 hover:bg-white/[0.04]"
              >
                <Image src={badge.icon} alt={badge.label} width={48} height={48} className="h-12 w-12" />
                <span className="text-xs text-zinc-400">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
