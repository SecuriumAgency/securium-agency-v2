"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, ArrowUpRight, Mail, Sparkles, Terminal, ShieldAlert, Zap, Target, Rocket } from 'lucide-react';

export default function BlogShowcase() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 pt-32 pb-24 overflow-hidden relative">
      {/* Halos d'ambiance 3D - Optimisation du DOM via pointer-events-none */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-500/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[800px] h-[800px] bg-brand-500/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* HEADER PAGE - H1 SEO Optimisé */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-24 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/50 bg-brand-500/10 text-brand-500 text-sm font-bold tracking-widest mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="sr-only">Ressources en </span>VEILLE & EXPERTISE IT
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white tracking-tight mb-6">
            LE JOURNAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-brand-700">DIGITAL</span>
          </h1>
          <h2 className="text-xl text-zinc-400 max-w-2xl mx-auto font-normal">
            Stratégies SEO, architecture Next.js, cybersécurité et déploiement d&apos;infrastructures web hautes performances pour les entreprises.
          </h2>
        </motion.div>

        {/* --- ARTICLE À LA UNE (FEATURED) - H2 SEO --- */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <Link href="/blog/migration-cloud-prive-cybersecurite" className="block group">
            <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[2rem] hover:border-brand-500/40 transition-all duration-500 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-12">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Image / Icon Box */}
              <div className="w-full md:w-1/2 aspect-video bg-black/50 rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                <Terminal className="w-24 h-24 text-brand-500/50 group-hover:text-brand-500 group-hover:scale-110 transition-all duration-700 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-brand-500/10 border border-brand-500/20 text-brand-500 text-xs font-bold uppercase rounded-full tracking-wider">Cloud & Sécurité</span>
                  <span className="text-zinc-500 text-sm flex items-center gap-1"><Clock className="w-4 h-4" /> Temps de lecture : 8 min</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-brand-400 transition-colors">
                  Migration Cloud Privé & Cybersécurité : L&apos;Architecture Incontournable en 2026
                </h3>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                  Protégez vos données critiques et divisez vos temps de latence par 3. Guide technique sur le déploiement d&apos;infrastructures serveurs sécurisées (OVH, IONOS) et les protocoles de défense contre les cyberattaques modernes.
                </p>
                <div className="inline-flex items-center font-bold text-white group-hover:text-brand-500 transition-colors">
                  Lire le dossier technique <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* --- GRILLE SECONDAIRE - H3 SEO LONGUE TRAÎNE --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">

          {/* Article 0 : Architecture Headless Next.js */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Link href="/blog/pourquoi-choisir-architecture-headless-nextjs" className="block group h-full">
              <div className="bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl hover:-translate-y-2 hover:border-brand-500/30 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-500/10 blur-[40px] group-hover:bg-brand-500/20 transition-all"></div>
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <span className="text-brand-500 text-xs font-bold uppercase tracking-wider">Architecture Web</span>
                  <Rocket className="w-5 h-5 text-zinc-600 group-hover:text-brand-500 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-brand-400 transition-colors">Architecture Headless Next.js 2026 : Le Guide B2B</h3>
                <p className="text-zinc-400 mb-8 relative z-10 flex-grow">Pourquoi les dirigeants d&apos;entreprise migrent vers le Headless Next.js en 2026 : vitesse de chargement, sécurité renforcée et conversion B2B. Le guide complet.</p>
                <div className="relative z-10 flex items-center text-sm font-bold text-zinc-500 group-hover:text-brand-500 transition-colors mt-auto">
                  Lire le guide B2B <ArrowUpRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Article 1 : Core Web Vitals */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Link href="/blog/refonte-web-nextjs-react-core-web-vitals" className="block group h-full">
              <div className="bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl hover:-translate-y-2 hover:border-brand-500/30 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-500/10 blur-[40px] group-hover:bg-brand-500/20 transition-all"></div>
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <span className="text-brand-500 text-xs font-bold uppercase tracking-wider">Performance Web</span>
                  <Zap className="w-5 h-5 text-zinc-600 group-hover:text-brand-500 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-brand-400 transition-colors">Refonte Web Next.js & React : Explosion des Core Web Vitals</h3>
                <p className="text-zinc-400 mb-8 relative z-10 flex-grow">Découvrez comment une architecture Headless propulse votre référencement naturel. Étude de cas sur l&apos;optimisation des temps de chargement et l&apos;impact direct sur le taux de conversion et l&apos;UX.</p>
                <div className="relative z-10 flex items-center text-sm font-bold text-zinc-500 group-hover:text-brand-500 transition-colors mt-auto">
                  Accéder à l&apos;étude <ArrowUpRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Article 2 : SEO Premium */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link href="/blog/strategie-seo-locale-autorite-domaine" className="block group h-full">
              <div className="bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl hover:-translate-y-2 hover:border-brand-500/30 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-500/10 blur-[40px] group-hover:bg-brand-500/20 transition-all"></div>
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <span className="text-brand-500 text-xs font-bold uppercase tracking-wider">Acquisition SEO</span>
                  <Target className="w-5 h-5 text-zinc-600 group-hover:text-brand-500 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-brand-400 transition-colors">Stratégie SEO Locale & Autorité de Domaine : Dominer son Marché</h3>
                <p className="text-zinc-400 mb-8 relative z-10 flex-grow">L&apos;art de structurer un cocon sémantique et une stratégie Netlinking agressive. Pourquoi le référencement naturel sur-mesure est le meilleur investissement ROI pour votre entreprise locale.</p>
                <div className="relative z-10 flex items-center text-sm font-bold text-zinc-500 group-hover:text-brand-500 transition-colors mt-auto">
                  Découvrir la méthode <ArrowUpRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Article 3 : Cybersécurité & Audit */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link href="/blog/audit-materiel-it-cybersecurite" className="block group h-full">
              <div className="bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl hover:-translate-y-2 hover:border-brand-500/30 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-500/10 blur-[40px] group-hover:bg-brand-500/20 transition-all"></div>
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <span className="text-brand-500 text-xs font-bold uppercase tracking-wider">Audit & Hardware</span>
                  <ShieldAlert className="w-5 h-5 text-zinc-600 group-hover:text-brand-500 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-brand-400 transition-colors">Comment auditer efficacement son parc matériel IT ?</h3>
                <p className="text-zinc-400 mb-8 relative z-10 flex-grow">Les 5 étapes cruciales pour identifier les failles matérielles et logicielles. Reconditionnement PC, optimisation du BIOS et prévention des pannes pour garantir la continuité de votre activité.</p>
                <div className="relative z-10 flex items-center text-sm font-bold text-zinc-500 group-hover:text-brand-500 transition-colors mt-auto">
                  Lire les recommandations <ArrowUpRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          </motion.div>

        </div>

        {/* --- CTA NEWSLETTER / CONTACT --- */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative bg-gradient-to-br from-zinc-900 to-black border border-brand-500/20 rounded-3xl p-12 text-center overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.05)]">
          <div className="relative z-10 max-w-2xl mx-auto">
            <Mail className="w-12 h-12 text-brand-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Passez à l&apos;échelle supérieure.</h2>
            <p className="text-zinc-400 mb-8">Vous souhaitez appliquer ces stratégies à votre propre infrastructure ? Discutons de votre projet d&apos;ingénierie web, de cybersécurité ou de référencement.</p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-brand-500 text-black font-extrabold px-8 py-4 rounded-full hover:bg-brand-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-300">
              ↳ DEMANDER UN AUDIT
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
