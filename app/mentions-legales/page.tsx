import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Securium Agency",
};

export default function MentionsLegalesPage() {
  return (
    <div className="relative min-h-screen px-6 pb-24 pt-16">
      <div className="glass-panel prose prose-invert prose-amber mx-auto max-w-4xl p-10">
        <h1 className="text-gradient-gold font-display tracking-tighter">MENTIONS LÉGALES</h1>

        <p>
          Éditeur du site : Securium Digital Agency. Ce site est une œuvre de l&apos;esprit
          protégée par les lois sur la propriété intellectuelle. Toute reproduction est interdite
          sans autorisation préalable.
        </p>

        <h2>Éditeur du site</h2>
        <p>
          Securium (Rémy Hamoui)
          <br />
          134 Avenue de la Libération, 95370 Montigny-lès-Cormeilles
          <br />
          E-mail : contact@securium-agency.fr
          <br />
          SIRET : 942 496 571 00012
          <br />
          Directeur de la publication : Rémy Hamoui
        </p>

        <h2>Conception et développement</h2>
        <p>
          Ce site a été conçu et développé en interne par <strong>Securium Agency</strong>, agence
          spécialisée en expériences web immersives.
        </p>

        <h2>Hébergement</h2>
        <p>
          Ce site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, images, logo) est la
          propriété de Securium Agency, sauf mention contraire, et ne peut être reproduit sans
          autorisation préalable.
        </p>
      </div>
    </div>
  );
}
