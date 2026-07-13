import { Boxes, Code2, Gauge, MessageCircle, ShieldCheck, TrendingUp } from "lucide-react";

const FEATURES = [
  {
    icon: Boxes,
    title: "Design 3D Immersif",
    description: "Des interfaces qui sortent du cadre, portées par des expériences 3D sur-mesure.",
  },
  {
    icon: Code2,
    title: "Développement sur-mesure",
    description: "Un code propre, maintenable et évolutif, taillé pour vos besoins spécifiques.",
  },
  {
    icon: Gauge,
    title: "Performance & Core Web Vitals",
    description: "Des sites rapides et optimisés, pensés pour le référencement et l'expérience utilisateur.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité renforcée",
    description: "Une infrastructure durcie et des pratiques de développement sécurisées par conception.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Visibilité",
    description: "Une stratégie de contenu et une architecture technique pensées pour votre croissance.",
  },
  {
    icon: MessageCircle,
    title: "Support premium",
    description: "Un accompagnement dédié, réactif, à chaque étape de votre projet.",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
          Ce que nous faisons
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="glass-panel p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/30 hover:bg-white/[0.04]"
            >
              <Icon className="text-brand-500" size={32} />
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
