"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Process() {
  return (
    <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10 overflow-hidden">
      {/* Halo de lumière 3D en arrière-plan */}
      <div className="absolute top-1/3 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">

        {/* Colonne Gauche : Sticky UI */}
        <div className="lg:col-span-5 relative">
          <div className="static lg:sticky top-32 lg:top-40">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-black/50 backdrop-blur-md text-brand-500 text-sm font-bold tracking-widest mb-6 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              MON PROCESSUS
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-extrabold text-white mb-10 tracking-tight leading-tight">MA DÉMARCHE</h2>
            <Link href="/contact" className="inline-flex items-center justify-center bg-gradient-to-r from-brand-400 to-brand-600 text-black font-bold px-8 py-5 rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-all duration-300">
              ↳ PLANIFIER UNE CONSULTATION
            </Link>
          </div>
        </div>

        {/* Colonne Droite : Cartes Glassmorphism avec Scroll 3D */}
        <div className="lg:col-span-7 flex flex-col space-y-8 mt-16 lg:mt-0">

          {/* ÉTAPE 1 */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-3xl hover:border-brand-500/40 transition-all duration-500 group relative overflow-hidden shadow-2xl">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-500/10 blur-[50px] group-hover:bg-brand-500/20 transition-all duration-500"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-500 mb-4 relative z-10">1. AUDIT & STRATÉGIE</h3>
            <p className="text-lg text-zinc-400 leading-relaxed relative z-10">J&apos;analyse vos besoins techniques et vos objectifs business. Grâce à un audit précis, je définis l&apos;architecture idéale pour garantir la sécurité et la performance de votre infrastructure dès le départ.</p>
          </motion.div>

          {/* ÉTAPE 2 */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-3xl hover:border-brand-500/40 transition-all duration-500 group relative overflow-hidden shadow-2xl">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-500/10 blur-[50px] group-hover:bg-brand-500/20 transition-all duration-500"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-500 mb-4 relative z-10">2. ARCHITECTURE & DESIGN</h3>
            <p className="text-lg text-zinc-400 leading-relaxed relative z-10">Je conçois des solutions sur-mesure. Cette étape fusionne la stratégie de marque avec une architecture technique optimisée, assurant une expérience utilisateur fluide et une interface pensée pour convertir.</p>
          </motion.div>

          {/* ÉTAPE 3 */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-3xl hover:border-brand-500/40 transition-all duration-500 group relative overflow-hidden shadow-2xl">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-500/10 blur-[50px] group-hover:bg-brand-500/20 transition-all duration-500"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-500 mb-4 relative z-10">3. DÉVELOPPEMENT & DÉPLOIEMENT</h3>
            <p className="text-lg text-zinc-400 leading-relaxed relative z-10">J&apos;implémente votre solution avec rigueur. Du code aux réglages serveurs, je m&apos;assure que chaque élément est scalable, sécurisé et parfaitement responsive sur tous vos supports.</p>
          </motion.div>

          {/* ÉTAPE 4 */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="bg-gradient-to-br from-zinc-900/80 to-black backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-3xl hover:border-brand-500/50 transition-all duration-500 group relative overflow-hidden shadow-2xl">
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-brand-500/10 blur-[50px] group-hover:bg-brand-500/20 transition-all duration-500"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-500 mb-4 relative z-10">4. LANCEMENT & MAINTENANCE</h3>
            <p className="text-lg text-zinc-400 leading-relaxed relative z-10">Je teste et déploie votre projet en toute sérénité. Après la mise en ligne, j&apos;assure un suivi technique pour optimiser les performances et vous accompagner durablement dans votre croissance.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
