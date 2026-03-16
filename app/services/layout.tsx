import type { Metadata } from "next";
import ServiceJsonLd from "@/components/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Our Services | Steel Fabrication Services Karachi - Raza Fancy Steel",
  description: "Complete steel fabrication services: warehouse shed fabrication, solar panel structure installation, fiberglass work, fire fighting pipeline systems, stainless steel fancy work, and custom welding solutions in Karachi, Pakistan.",
  keywords: "warehouse shed fabrication Karachi, solar panel structure installation, fiberglass work Pakistan, fire fighting pipeline systems, stainless steel fancy work, custom welding services, NFPA compliant fire systems",
  openGraph: {
    title: "Steel Fabrication Services | Raza Fancy Steel",
    description: "6 comprehensive fabrication services: warehouse sheds, solar structures, fiberglass, fire fighting systems, stainless steel work, and custom welding.",
    type: "website",
    locale: "en_PK",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ServiceJsonLd />
      {children}
    </>
  );
}
