import type { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import AboutContent from "@/components/sections/AboutContent";
import Features from "@/components/sections/Features";
import Certifications from "@/components/sections/Certifications";

export const metadata: Metadata = {
  title: "À Propos | Securium Agency",
  description:
    "Technicien support et ingénieur technique de métier, j'ai fondé Securium pour proposer un accompagnement informatique de proximité aux professionnels et particuliers.",
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
