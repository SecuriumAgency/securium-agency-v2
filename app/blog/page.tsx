import type { Metadata } from "next";
import BlogShowcase from "@/components/sections/BlogShowcase";

export const metadata: Metadata = {
  title: "Le Journal Digital | Securium Agency",
  description:
    "Guides SEO, cybersécurité et développement web par Securium Agency. Lisez nos derniers articles pour booster votre stratégie digitale.",
};

export default function BlogPage() {
  return <BlogShowcase />;
}
