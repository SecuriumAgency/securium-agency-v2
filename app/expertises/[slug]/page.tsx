import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeoPages } from "@/lib/notion";

const SITE_URL = "https://www.securium-agency.fr";
const META_DESCRIPTION_MAX_LENGTH = 160;

// Les descriptions viennent de Notion (contenu éditorial externe) : on garantit la limite Google en cas de dépassement.
function truncateDescription(description: string, maxLength = META_DESCRIPTION_MAX_LENGTH): string {
  if (description.length <= maxLength) return description;
  const truncated = description.slice(0, maxLength - 1);
  return `${truncated.slice(0, truncated.lastIndexOf(" "))}…`;
}

export async function generateStaticParams() {
  const pages = await getSeoPages();
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pages = await getSeoPages();
  const page = pages.find((p) => p.slug === slug);

  const title = page?.title || "Expertise | Securium Agency";
  const description = truncateDescription(
    page?.description ||
      "Découvrez notre expertise sur-mesure en IT, cybersécurité et développement web. Demandez votre devis gratuit."
  );

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/expertises/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `${SITE_URL}/expertises/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ExpertisePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pages = await getSeoPages();
  const page = pages.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title || page.slug,
    description: page.description || undefined,
    url: `${SITE_URL}/expertises/${slug}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Île-de-France" },
      { "@type": "Country", name: "France" },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-zinc-300 pt-32 pb-24 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <div className="max-w-4xl mx-auto">
        {page.keyword && (
          <span className="text-brand-500 text-sm font-bold uppercase tracking-wider">
            {page.keyword}
          </span>
        )}
        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight mt-4 mb-8">
          {page.title || page.slug}
        </h1>
        {page.description && (
          <p className="text-xl text-zinc-400 leading-relaxed">{page.description}</p>
        )}
      </div>
    </div>
  );
}
