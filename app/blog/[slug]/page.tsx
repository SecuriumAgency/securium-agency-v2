import type { Metadata } from 'next';
import { blogArticles, getArticleBySlug } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Sparkles } from 'lucide-react';

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article introuvable | Securium Agency" };
  }

  const title = `${article.title} | Securium Agency`;

  return {
    title,
    description: article.excerpt,
    openGraph: {
      title,
      description: article.excerpt,
      type: "article",
      url: `https://www.securium-agency.fr/blog/${article.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const pageUrl = `https://www.securium-agency.fr/blog/${article.slug}`;

  const schemaData = [
    article.datePublished
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          image: "https://www.securium-agency.fr/logo/securium-logo.png",
          datePublished: article.datePublished,
          dateModified: article.datePublished,
          author: { "@type": "Organization", name: "Securium Agency", url: "https://www.securium-agency.fr" },
          publisher: {
            "@type": "Organization",
            name: "Securium Agency",
            logo: { "@type": "ImageObject", url: "https://www.securium-agency.fr/logo/securium-logo.png" },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
        }
      : null,
    article.faq?.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null,
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-black text-zinc-300 pt-32 pb-24 relative overflow-hidden">
      {schemaData.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}
      {/* Halos 3D */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <article className="max-w-4xl mx-auto px-4 relative z-10">

        {/* Navigation retour */}
        <Link href="/blog" className="inline-flex items-center text-zinc-500 hover:text-brand-500 transition-colors mb-12 font-bold uppercase tracking-wider text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" /> Retour au Journal
        </Link>

        {/* En-tête de l'article */}
        <header className="mb-16 border-b border-white/10 pb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-brand-500/10 border border-brand-500/20 text-brand-500 text-xs font-bold uppercase rounded-full tracking-wider">
              {article.tag}
            </span>
            <span className="text-zinc-500 text-sm flex items-center gap-1">
              <Clock className="w-4 h-4" /> Temps de lecture : {article.readTime}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight mb-8">
            {article.title}
          </h1>
          <p className="text-xl text-zinc-400 font-medium leading-relaxed">
            {article.excerpt}
          </p>
        </header>

        {/* Corps de l'article - Typographie Premium */}
        <div
          className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-brand-500 prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-zinc-400 prose-p:leading-relaxed prose-a:text-brand-500 hover:prose-a:text-brand-400 prose-strong:text-white prose-li:text-zinc-400"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* CTA Bas de page */}
        <div className="mt-24 pt-12 border-t border-white/10">
          <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 text-center">
            <Sparkles className="w-10 h-10 text-brand-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Besoin d&apos;appliquer ces stratégies à votre entreprise ?</h3>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">Confiez-nous l&apos;audit et l&apos;optimisation de votre infrastructure IT et de votre présence digitale.</p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-brand-500 text-black font-extrabold px-8 py-4 rounded-full hover:bg-brand-400 hover:scale-105 transition-all">
              PLANIFIER UNE CONSULTATION
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
