"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Zap } from "lucide-react";

const REASONS = [
  {
    icon: Cpu,
    title: "INGÉNIERIE SUR-MESURE",
    description:
      "L'approche sur-mesure et l'ingénierie robuste (fini les solutions standardisées).",
  },
  {
    icon: ShieldCheck,
    title: "SÉCURITÉ ABSOLUE",
    description:
      "J'audite rigoureusement votre environnement pour identifier les failles et j'implémente des solutions blindées pour protéger vos données les plus critiques.",
  },
  {
    icon: Zap,
    title: "TRENDING TECHNOLOGIES",
    description:
      "De l'installation au maintien en conditions opérationnelles (MCO), je vous accompagne de A à Z avec une réactivité maximale pour garantir zéro temps mort.",
  },
];

export default function HomeWhyUs() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl text-center">
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-brand-500 backdrop-blur-md">
          POURQUOI MOI ?
        </span>

        <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
          POURQUOI NOUS ?
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="glass-panel p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/30 hover:bg-white/[0.04]"
            >
              <Icon className="text-brand-500" size={32} />
              <h3 className="mt-6 font-display text-lg font-bold tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
