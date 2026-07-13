import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeoPages } from "@/lib/notion";

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
  const description =
    page?.description ||
    "Découvrez notre expertise sur-mesure en IT, cybersécurité et développement web.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://www.securium-agency.fr/expertises/${slug}`,
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

  return (
    <div className="min-h-screen bg-black text-zinc-300 pt-32 pb-24 px-4">
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
