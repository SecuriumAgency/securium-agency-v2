"use client";
import ContactForm from '@/components/forms/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactShowcase() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Colonne Gauche : Infos */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Discutons de <span className="text-brand-500">votre projet.</span></h1>
          <p className="text-lg text-zinc-400">L&apos;architecture de votre réussite commence par un échange technique. Contactez-moi pour un audit ou un devis sur-mesure.</p>
          <div className="space-y-6 pt-8">
            <div className="flex items-center gap-4 text-zinc-300"><Mail className="text-brand-500" /> contact@securium-agency.fr</div>
            <div className="flex items-center gap-4 text-zinc-300"><Phone className="text-brand-500" /> 07 62 58 82 46</div>
            <div className="flex items-center gap-4 text-zinc-300"><MapPin className="text-brand-500" /> 134 Avenue de la Libération, 95370 Montigny-lès-Cormeilles</div>
          </div>
        </div>

        {/* Colonne Droite : Formulaire */}
        <ContactForm />
      </div>
    </div>
  );
}
