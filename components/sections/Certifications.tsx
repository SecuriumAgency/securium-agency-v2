import { BadgeCheck, Lock, ServerCog, ShieldCheck } from "lucide-react";

const CERTIFICATIONS = [
  {
    icon: ShieldCheck,
    title: "Conformité RGPD",
    description: "Traitement des données conforme aux exigences européennes.",
  },
  {
    icon: Lock,
    title: "Sécurité SSL/TLS",
    description: "Chiffrement de bout en bout sur l'ensemble de nos livraisons.",
  },
  {
    icon: ServerCog,
    title: "Hébergement souverain",
    description: "Infrastructure cloud dédiée, disponibilité 99,9%.",
  },
  {
    icon: BadgeCheck,
    title: "Qualité certifiée",
    description: "Processus de développement audité et documenté.",
  },
];

export default function Certifications() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
          Nos garanties
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="glass-panel p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/30 hover:bg-white/[0.04]"
            >
              <Icon className="text-brand-500" size={32} />
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
