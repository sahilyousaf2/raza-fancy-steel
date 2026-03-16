import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Raza Fancy Steel - Steel Fabrication Karachi",
  description: "Get in touch with Raza Fancy Steel for steel fabrication quotes and consultations. Located in Korangi Industrial Area, Karachi. Phone: +92 316 0290519",
  keywords: "contact Raza Fancy Steel, steel fabrication quote Karachi, welding services contact, warehouse shed inquiry, Korangi Industrial Area steel company",
  openGraph: {
    title: "Contact Raza Fancy Steel | Free Consultation",
    description: "Request a free quote for your steel fabrication project. Visit us in Korangi Industrial Area, Karachi or call +92 316 0290519",
    type: "website",
    locale: "en_PK",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
