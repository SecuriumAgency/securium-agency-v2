import type { Metadata } from "next";
import ServicesShowcase from "@/components/sections/ServicesShowcase";

export const metadata: Metadata = {
  title: "Nos Services | Securium Agency",
  description:
    "Audit IT, création web et SEO technique : découvrez notre méthode de travail chez Securium Agency.",
};

export default function ServicesPage() {
  return <ServicesShowcase />;
}
