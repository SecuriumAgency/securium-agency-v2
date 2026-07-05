import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Securium Agency",
  description:
    "Politique de confidentialité et protection des données personnelles de Securium Agency.",
};

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-white mb-12 border-b border-white/10 pb-6 tracking-tight">Politique de Confidentialité</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-brand-500">1. Responsable du traitement des données</h2>
          <p className="text-zinc-400">Les données personnelles collectées sur ce site sont traitées par <strong>Rémy Hamoui (Securium)</strong>, agissant en tant que responsable du traitement.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-brand-500">2. Données collectées et finalité</h2>
          <p className="text-zinc-400">Via le formulaire de contact, Securium collecte : Nom, Prénom, Adresse e-mail, téléphone et contenu du message. Ces données servent à :</p>
          <ul className="list-disc list-inside text-zinc-400 space-y-2">
            <li>Répondre aux demandes de renseignements et support technique.</li>
            <li>Établir des devis sur-mesure pour vos projets IT, Web ou Branding.</li>
            <li>Assurer le suivi commercial et la relation client.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-brand-500">3. Durée de conservation</h2>
          <p className="text-zinc-400">Données prospects : <strong>3 ans</strong> à compter du dernier contact. Données clients (facturation/contrats) : <strong>10 ans</strong>.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-brand-500">4. Partage et sécurité</h2>
          <p className="text-zinc-400">Vos données sont strictement confidentielles. Elles ne sont ni vendues, ni louées, ni cédées à des tiers. Securium s&apos;engage à mettre en œuvre les mesures techniques nécessaires à leur protection.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-brand-500">5. Vos droits</h2>
          <p className="text-zinc-400">Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, de portabilité et d&apos;effacement. Pour exercer ces droits : <strong>contact@securium-agency.fr</strong>.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-brand-500">6. Utilisation des Cookies</h2>
          <p className="text-zinc-400">Le site utilise des cookies techniques nécessaires au fonctionnement et à la sécurité, ainsi que des cookies de mesure d&apos;audience. En naviguant, vous consentez à leur utilisation. Configuration possible via votre navigateur.</p>
        </section>

        <div className="pt-8 border-t border-white/10 text-sm text-zinc-600">
          <p>Dernière mise à jour : 20/06/2026</p>
        </div>
      </div>
    </main>
  );
}
