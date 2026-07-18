import type { Metadata } from "next";
import ContactShowcase from "@/components/sections/ContactShowcase";

export const metadata: Metadata = {
  title: "Contact | Securium Agency",
  description:
    "Devis gratuit et sur-mesure : audit IT, cybersécurité, développement web et branding. Contactez Securium Agency dès aujourd'hui.",
};

export default function ContactPage() {
  return <ContactShowcase />;
}
