import type { Metadata } from "next";
import BlogShowcase from "@/components/sections/BlogShowcase";

export const metadata: Metadata = {
  title: "Le Journal Digital | Securium Agency",
  description: "Conseils, retours d'expérience et actualités IT signés Securium Agency.",
};

export default function BlogPage() {
  return <BlogShowcase />;
}
