"use client";

import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="px-6 pb-24"
    >
      <div className="glass-panel mx-auto max-w-4xl p-10">
        <h2 className="font-display text-2xl font-extrabold tracking-tighter text-white sm:text-3xl">
          L&apos;EXPERTISE IT À VOTRE SERVICE
        </h2>

        <div className="mt-6 flex flex-col gap-5 text-zinc-300">
          <p className="leading-relaxed">
            Fort d&apos;une solide expérience sur le terrain et la gestion d&apos;incidents, je
            maîtrise les environnements matériels de A à Z :
          </p>

          <p className="leading-relaxed">
            Du déploiement d&apos;équipements au reconditionnement pointu d&apos;ordinateurs
            portables (optimisations, upgrades RAM/SSD, configurations sur des gammes
            professionnelles comme Lenovo, Dell ou HP).
          </p>

          <blockquote className="text-gradient-gold border-l-2 border-brand-500/50 pl-6 font-display text-xl font-bold italic tracking-tight">
            « Aujourd&apos;hui, mon approche repose sur l&apos;efficacité : vous garantir un outil
            de travail performant et sécurisé. »
          </blockquote>

          <p className="leading-relaxed">
            Qu&apos;il s&apos;agisse de dépannage d&apos;urgence, de conseil en achat matériel ou
            d&apos;un accompagnement technique pour structurer la logistique de votre activité, je
            vous apporte des solutions concrètes, claires et durables.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
