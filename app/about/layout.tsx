import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Raza Fancy Steel - 25+ Years Steel Fabrication Excellence",
  description: "Learn about Raza Fancy Steel - founded by Late Yousaf Mohan in 2000, now led by CEO Raza Yousaf. 25+ years of excellence in steel fabrication across Pakistan with 200+ completed projects.",
  keywords: "about Raza Fancy Steel, Yousaf Mohan founder, Raza Yousaf CEO, steel fabrication company history, Karachi steel company, Pakistani fabrication industry",
  openGraph: {
    title: "About Raza Fancy Steel | 25+ Years of Excellence",
    description: "From a small workshop to one of Pakistan's most trusted steel fabrication names. Meet our leadership team and learn our story.",
    type: "website",
    locale: "en_PK",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
