import type { Metadata } from "next";
import { Inter, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ParticleBackground from "@/components/3d/ParticleBackgroundLazy";
import { GoogleTagManager } from "@next/third-parties/google";
import { getOrganizationJsonLd } from "@/lib/structured-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});
const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

const SITE_URL = "https://www.securium-agency.fr";
const TITLE = "Securium Agency | L'Excellence Digitale";
const DESCRIPTION =
  "Securium Agency conçoit des expériences web sur-mesure, ultra premium, qui allient design, performance et sécurité.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["agence digitale", "développement web premium", "design 3D", "Securium Agency"],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Securium Agency",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${inter.className} ${spaceGrotesk.variable} ${syne.variable} flex flex-col min-h-screen`}>
        <GoogleTagManager gtmId="GTM-PFWC2XW5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationJsonLd()) }}
        />
        <ParticleBackground />
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
