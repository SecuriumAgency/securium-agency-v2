"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Un accompagnement réactif et un vrai sens du service. Je recommande.",
    author: "Gérant, PME locale",
  },
  {
    quote: "Une expertise technique rassurante, du diagnostic à la mise en œuvre.",
    author: "Responsable IT",
  },
  {
    quote: "Disponibilité et professionnalisme à chaque étape du projet.",
    author: "Client particulier",
  },
];

export default function HomeTrust() {
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
          Ils M&apos;ont Fait Confiance
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.author}
              className="glass-panel flex flex-col gap-4 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/30 hover:bg-white/[0.04]"
            >
              <Quote className="text-brand-500" size={28} />
              <p className="text-sm leading-relaxed text-zinc-300">{testimonial.quote}</p>
              <span className="mt-auto text-xs font-semibold tracking-wide text-zinc-500">
                {testimonial.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
