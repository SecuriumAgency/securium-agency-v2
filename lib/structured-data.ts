const SITE_URL = "https://www.securium-agency.fr";
const LOGO_URL = `${SITE_URL}/logo/securium-logo.png`;

const SERVICES = [
  {
    name: "Développement Web sur-mesure",
    description:
      "Conception de sites vitrines et boutiques e-commerce Next.js : design responsive, sécurisation et performance technique.",
  },
  {
    name: "Audit & Cybersécurité IT",
    description:
      "Audit d'infrastructure informatique, sécurisation des données et migration vers des environnements Cloud privés.",
  },
  {
    name: "Optimisation & Reconditionnement PC",
    description:
      "Diagnostic matériel, configuration BIOS et remise à niveau de parcs informatiques professionnels.",
  },
  {
    name: "Stratégie Digitale & Branding",
    description:
      "Community management, création de contenus vidéo courts et supports graphiques pour dynamiser votre image de marque.",
  },
] as const;

// ProfessionalService JSON-LD injecté dans le layout racine (référencement local + national).
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "Securium Agency",
    alternateName: "Securium Digital Agency",
    description:
      "Agence IT & digitale : audit et sécurisation d'infrastructure, développement web sur-mesure Next.js, stratégie digitale et branding pour professionnels et particuliers.",
    url: SITE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    telephone: "+33762588246",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "134 Avenue de la Libération, Bâtiment D",
      addressLocality: "Montigny-lès-Cormeilles",
      postalCode: "95370",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.9886,
      longitude: 2.1897,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Val-d'Oise" },
      { "@type": "AdministrativeArea", name: "Île-de-France" },
      { "@type": "Country", name: "France" },
    ],
    founder: {
      "@type": "Person",
      name: "Rémy Hamoui",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Securium Agency",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          provider: { "@id": `${SITE_URL}/#organization` },
        },
      })),
    },
  };
}
