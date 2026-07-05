import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import HomeWhyUs from "@/components/sections/HomeWhyUs";
import HomeAbout from "@/components/sections/HomeAbout";
import Process from "@/components/sections/Process";
import HomeServices from "@/components/sections/HomeServices";
import HomeTrust from "@/components/sections/HomeTrust";

const TITLE = "Securium Agency | L'Excellence Digitale";
const DESCRIPTION =
  "Securium Agency conçoit des expériences web sur-mesure, ultra premium, qui allient design, performance et sécurité.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <HomeWhyUs />
      <HomeAbout />
      <Process />
      <HomeServices />
      <HomeTrust />
    </div>
  );
}
