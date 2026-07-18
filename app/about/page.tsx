import type { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import AboutContent from "@/components/sections/AboutContent";
import Features from "@/components/sections/Features";
import Certifications from "@/components/sections/Certifications";

export const metadata: Metadata = {
  title: "À Propos | Securium Agency",
  description:
    "Rémy Hamoui, technicien IT indépendant, fonde Securium pour un accompagnement informatique sur-mesure. Découvrez mon expertise.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <AboutHero />
      <AboutContent />
      <Features />
      <Certifications />
    </div>
  );
}
