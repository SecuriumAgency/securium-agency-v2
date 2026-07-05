"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Cpu, MonitorSmartphone, Megaphone, UserCheck, MessageSquareText, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ServicesShowcase() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 pt-32 pb-24 overflow-hidden relative">
      {/* Halos d'ambiance globaux */}
      <div className="fixed top-0 left-1/4 w-[800px] h-[800px] bg-brand-500/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* HEADER PAGE */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/50 bg-brand-500/10 text-brand-500 text-sm font-bold tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            MES EXPERTISES
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white tracking-tight">
            SOLUTIONS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-brand-700">SUR-MESURE</span>
          </h1>
        </motion.div>

        {/* --- SERVICE 1 : PC --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-40">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-1/2 relative">
            <div className="aspect-square rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl flex items-center justify-center relative overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <Cpu className="w-40 h-40 text-brand-500/80 drop-shadow-[0_0_30px_rgba(245,158,11,0.5)] group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">Optimisation &<br/>Reconditionnement PC</h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">Un ordinateur lent ou défaillant ne nécessite pas toujours un remplacement. J&apos;interviens sur votre parc matériel (particulièrement sur les gammes professionnelles comme Lenovo, Dell ou HP) pour lui redonner une seconde vie. De la résolution de conflits matériels à l&apos;amélioration pure des performances, je vous garantis un outil de travail réactif et fiable.</p>
            <ul className="space-y-4 mb-10">
              {['Diagnostic matériel & Configuration BIOS', 'Mise à niveau des composants (RAM, SSD...)', 'Nettoyage système et optimisation'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300"><CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0" />{item}</li>
              ))}
            </ul>
            <div className="inline-block px-6 py-3 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-500 font-bold text-lg shadow-[0_0_20px_rgba(245,158,11,0.2)]">SUR DEVIS</div>
          </motion.div>
        </div>

        {/* --- SERVICE 2 : WEB (Inversé) --- */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-40">
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-1/2 relative">
            <div className="aspect-square rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl flex items-center justify-center relative overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-bl from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <MonitorSmartphone className="w-40 h-40 text-brand-500/80 drop-shadow-[0_0_30px_rgba(245,158,11,0.5)] group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">Développement Web</h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">Une présence en ligne robuste est indispensable. Je conçois des sites vitrines professionnels et des boutiques e-commerce clés en main. Chaque projet est développé avec un design responsive, une sécurisation optimale et des performances techniques poussées pour s&apos;adapter parfaitement aux mobiles.</p>
            <ul className="space-y-4 mb-10">
              {['Conception Sites Vitrines', 'Création Boutiques E-commerce', 'Design Responsive & Sécurisation'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300"><CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0" />{item}</li>
              ))}
            </ul>
            <div className="inline-block px-6 py-3 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-500 font-bold text-lg shadow-[0_0_20px_rgba(245,158,11,0.2)]">À PARTIR DE : 1 500 €</div>
          </motion.div>
        </div>

        {/* --- SERVICE 3 : BRANDING --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-40">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-1/2 relative">
            <div className="aspect-square rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl flex items-center justify-center relative overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <Megaphone className="w-40 h-40 text-brand-500/80 drop-shadow-[0_0_30px_rgba(245,158,11,0.5)] group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">Stratégie Digitale<br/>& Branding</h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">Je gère et dynamise votre identité visuelle. De l&apos;animation de vos réseaux sociaux (Community Management) à la création de vidéos courtes dynamiques (Reels/TikTok) avec montage et effets, jusqu&apos;à la conception de vos supports print uniques (flyers, cartes).</p>
            <ul className="space-y-4 mb-10">
              {['Community Management & Stratégie', 'Montage Vidéos Courtes (Reels/TikTok)', 'Design Graphique & Supports Print'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300"><CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0" />{item}</li>
              ))}
            </ul>
            <div className="inline-block px-6 py-3 rounded-xl border border-white/10 text-white font-bold text-lg backdrop-blur-md bg-white/5">SUR DEVIS</div>
          </motion.div>
        </div>

        {/* --- SECTION : POURQUOI CHOISIR SECURIUM --- */}
        <div className="mb-40 pt-20 border-t border-white/10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">Pourquoi Choisir <span className="text-brand-500">Securium</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl hover:-translate-y-2 hover:border-brand-500/30 transition-all duration-300">
              <UserCheck className="w-12 h-12 text-brand-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4 uppercase">Approche Sur-Mesure</h3>
              <p className="text-zinc-400 leading-relaxed">Chaque projet est unique. Que ce soit pour la configuration d&apos;un serveur Cloud, le déploiement de matériel ou la création de votre site web, j&apos;adapte mes solutions techniques à vos véritables besoins et à votre budget.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl hover:-translate-y-2 hover:border-brand-500/30 transition-all duration-300">
              <MessageSquareText className="w-12 h-12 text-brand-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4 uppercase">Transparence Totale</h3>
              <p className="text-zinc-400 leading-relaxed">Fini le jargon informatique incompréhensible. Je vous explique clairement chaque intervention ou étape de développement, et je vous tiens régulièrement informé de l&apos;avancée de vos projets.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl hover:-translate-y-2 hover:border-brand-500/30 transition-all duration-300">
              <ShieldCheck className="w-12 h-12 text-brand-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4 uppercase">Support & Suivi Continu</h3>
              <p className="text-zinc-400 leading-relaxed">Mon engagement ne s&apos;arrête pas à la livraison. Je reste à votre disposition pour assurer la maintenance technique, la résolution d&apos;incidents rapides et garantir la sécurité de vos données sur le long terme.</p>
            </motion.div>
          </div>
        </div>

        {/* --- CTA FINAL --- */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative bg-gradient-to-br from-zinc-900 to-black border border-brand-500/20 rounded-3xl p-12 md:p-20 text-center overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.1)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-500/10 blur-[100px] z-0 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white text-sm font-bold tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              UN PROJET EN TÊTE ?
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-12">DISCUTONS DE VOS <span className="text-brand-500">BESOINS</span></h2>
            <Link href="mailto:contact@securium-agency.fr" className="inline-flex items-center justify-center bg-brand-500 text-black font-extrabold text-lg md:text-xl px-10 py-5 rounded-full hover:bg-brand-400 hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] transition-all duration-300">
              ↳ CONTACT@SECURIUM-AGENCY.FR
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
