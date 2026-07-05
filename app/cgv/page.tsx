import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Securium Agency",
};

const SECTIONS = [
  {
    title: "1. Objet",
    body: "Les présentes conditions générales de vente régissent les prestations de conception, développement et accompagnement digital proposées par Securium Agency à ses clients professionnels et particuliers.",
  },
  {
    title: "2. Devis et tarifs",
    body: "Chaque prestation fait l'objet d'un devis gratuit et personnalisé. Les prix indiqués sont exprimés en euros, toutes taxes comprises (TTC), et restent valables 30 jours à compter de leur émission.",
  },
  {
    title: "3. Commande et paiement",
    body: "La prestation est considérée comme définitive après signature du devis et versement de l'acompte convenu. Un échéancier de paiement est précisé dans chaque contrat.",
  },
  {
    title: "4. Délais de livraison",
    body: "Les délais de livraison des projets sont donnés à titre indicatif dans le devis et peuvent varier selon la complexité et les retours client. Securium Agency s'engage à tenir le client informé de l'avancement.",
  },
  {
    title: "5. Droit de rétractation",
    body: "Conformément à la réglementation en vigueur, le client professionnel ne bénéficie pas d'un droit de rétractation une fois la prestation de développement engagée.",
  },
  {
    title: "6. Responsabilité et propriété intellectuelle",
    body: "Securium Agency met tout en œuvre pour livrer un travail conforme au cahier des charges. La propriété intellectuelle des livrables est transférée au client après règlement intégral de la prestation.",
  },
];

export default function CgvPage() {
  return (
    <div className="relative min-h-screen pb-24">
      <div className="bg-zinc-950/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 max-w-5xl mx-auto mt-24 text-zinc-300 shadow-2xl">
        <h1 className="text-gradient-gold text-5xl font-extrabold font-syne tracking-tight mb-8">
          Conditions Générales de Vente
        </h1>

        <div className="flex flex-col gap-8">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="font-syne text-white font-bold mb-2">{section.title}</h2>
              <p className="text-zinc-300 text-sm leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
