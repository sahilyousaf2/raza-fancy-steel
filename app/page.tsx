import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raza Fancy Steel | Steel Fabrication & Industrial Construction Karachi",
  description: "Premier steel fabrication company in Karachi since 2000. Specializing in warehouse sheds, solar panel structures, fiberglass work, fire fighting systems, stainless steel fancy work, and custom welding solutions.",
  keywords: "steel fabrication Karachi, warehouse shed fabrication, solar panel structure, fiberglass work, fire fighting pipeline, stainless steel work, welding services Pakistan, industrial construction",
  openGraph: {
    title: "Raza Fancy Steel | Steel Fabrication Experts Since 2000",
    description: "200+ projects completed across Pakistan. Quality steel fabrication services including warehouse sheds, solar structures, and custom welding.",
    type: "website",
    locale: "en_PK",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceCards />
    </>
  );
}
