import type { Metadata } from "next";
import ServicesShowcase from "@/components/sections/ServicesShowcase";

export const metadata: Metadata = {
  title: "Nos Services | Securium Agency",
  description:
    "Audit IT, développement web sur-mesure et SEO technique : découvrez nos services et demandez votre devis gratuit.",
};

export default function ServicesPage() {
  return <ServicesShowcase />;
}
