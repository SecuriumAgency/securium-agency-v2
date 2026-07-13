"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: "/images/services/audit-cybersecurite.png",
    title: "Audit & Cybersécurité",
    description:
      "Analyse complète de votre environnement IT et sécurisation de vos données sensibles.",
  },
  {
    icon: "/images/services/conception-architecture.png",
    title: "Conception & Architecture",
    description:
      "Conception d'infrastructures sur-mesure, pensées pour la performance et la scalabilité.",
  },
  {
    icon: "/images/services/accompagnement-technique.png",
    title: "Accompagnement Technique",
    description: "Un support de proximité, réactif, pour vous accompagner à chaque étape.",
  },
];

export default function HomeServices() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-display text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
          Nos 3 piliers
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="glass-panel flex flex-col items-center p-10 text-center transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/30 hover:bg-white/[0.04]"
            >
              <Image src={service.icon} alt={service.title} width={96} height={96} className="h-24 w-24" />
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
