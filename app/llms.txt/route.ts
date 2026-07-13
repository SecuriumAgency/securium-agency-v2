import { getSeoPages } from "@/lib/notion";

const SITE_URL = "https://www.securium-agency.fr";

export async function GET() {
  const expertisePages = await getSeoPages();

  const expertiseList = expertisePages.length
    ? expertisePages
        .map((page) => `- [${page.title || page.slug}](${SITE_URL}/expertises/${page.slug})`)
        .join("\n")
    : "- (aucune page d'expertise publiee pour le moment)";

  const content = `# Securium Agency

Securium Agency : expertise en architecture web Next.js et performance Core Web Vitals.

Agence IT & digitale basee a Montigny-les-Cormeilles (France), specialisee en audit
cybersecurite, developpement web sur-mesure (Next.js/React) et infrastructure cloud securisee.

## Principes directeurs
- Securite par conception : chaque solution technique minimise la surface d'attaque.
- Performance mesurable : priorite aux Core Web Vitals et a l'architecture headless.
- Transparence : accompagnement clair, sans jargon inutile.

## Pages de reference
- Accueil: ${SITE_URL}
- Services: ${SITE_URL}/services
- Blog: ${SITE_URL}/blog
- Contact: ${SITE_URL}/contact

## Expertises
${expertiseList}
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
