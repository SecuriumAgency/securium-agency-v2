"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel flex items-center justify-center p-12"
        >
          <Image
            src="/logo/securium-logo.png"
            alt="Securium Digital Agency"
            width={400}
            height={400}
            className="h-auto w-full max-w-sm"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-brand-500 backdrop-blur-md">
            Notre agence
          </span>

          <h1 className="text-gradient-gold mt-6 font-display text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
            À PROPOS
          </h1>

          <div className="glass-panel mt-8 p-8">
            <p className="text-lg leading-relaxed text-zinc-300">
              Technicien support et ingénieur technique de métier, j&apos;ai fondé Securium pour
              proposer un accompagnement informatique de proximité aux professionnels et
              particuliers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
