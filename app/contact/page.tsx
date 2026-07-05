import type { Metadata } from "next";
import ContactShowcase from "@/components/sections/ContactShowcase";

export const metadata: Metadata = {
  title: "Contact | Securium Agency",
  description:
    "Contactez Securium Agency pour un devis gratuit sur votre projet digital.",
};

export default function ContactPage() {
  return <ContactShowcase />;
}
