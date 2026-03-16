import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://razafancysteel.com"),
  title: "Raza Fancy Steel | Steel Fabrication & Industrial Construction Karachi",
  description: "Raza Fancy Steel - Premier steel fabrication and industrial construction company in Karachi, Pakistan. Specializing in warehouse sheds, solar structures, fiberglass work, fire fighting systems, and custom welding solutions since 2000.",
  keywords: "steel fabrication, industrial construction, warehouse sheds, solar structures, Karachi, Pakistan, stainless steel, welding",
  authors: [{ name: "Raza Fancy Steel" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Raza Fancy Steel | Steel Fabrication Experts Across Pakistan",
    description: "Providing high-quality industrial fabrication, warehouse sheds, solar structures, and custom welding solutions since 2000.",
    url: "https://razafancysteel.com",
    siteName: "Raza Fancy Steel",
    type: "website",
    locale: "en_PK",
    alternateLocale: "ur_PK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <JsonLd />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
