"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-label="Présentation de Securium Agency"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <div className="flex max-w-4xl flex-col items-center gap-8">
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 md:mb-12 relative w-48 h-48 md:w-64 md:h-64 mx-auto flex justify-center items-center"
        >
          <div className="absolute top-10 w-full h-full bg-brand-500/20 blur-[80px] rounded-full z-0"></div>
          <Image
            src="/logo/securium-favicon.png"
            alt="Shield 3D Securium"
            fill
            priority
            sizes="(min-width: 768px) 256px, 192px"
            className="relative z-10 object-contain drop-shadow-[0_30px_60px_rgba(245,158,11,0.5)] filter contrast-125"
          />
        </motion.div>

        <div className="relative z-10 flex flex-col items-center gap-8">
          <header className="flex flex-col items-center gap-6">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-brand-500 backdrop-blur-md"
            >
              VOTRE PARTENAIRE TECHNIQUE DE CONFIANCE
            </motion.span>

            <div>
              <h1 className="bg-gradient-to-r from-brand-300 via-brand-500 to-brand-700 bg-clip-text text-transparent font-display text-4xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                SECURIUM
              </h1>
              <h2 className="mt-2 font-display text-lg font-bold tracking-tight text-white sm:text-xl md:text-2xl">
                AGENCE IT & DIGITALE
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl text-base text-zinc-400 sm:text-lg md:text-xl"
            >
              De l&apos;audit de votre infrastructure informatique à la conception de votre identité
              web. Je sécurise vos données sur Cloud privé, développe vos sites sur-mesure et dynamise
              votre image de marque.
            </motion.p>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/services"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-brand-500/50 bg-transparent px-8 py-3 font-bold tracking-wide text-brand-500 transition-all duration-300 hover:bg-brand-500 hover:text-black hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
            >
              DÉCOUVRIR NOS SERVICES
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
