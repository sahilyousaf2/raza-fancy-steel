import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Steel Fabrication Portfolio - Raza Fancy Steel",
  description: "Explore our portfolio of 200+ steel fabrication projects across Pakistan. Warehouse sheds, solar structures, industrial fabrication, and more in Karachi, Lahore, and beyond.",
  keywords: "steel fabrication projects, warehouse shed projects Karachi, solar panel installation Pakistan, industrial fabrication portfolio, steel construction projects",
  openGraph: {
    title: "Project Portfolio | Raza Fancy Steel",
    description: "200+ completed projects across Pakistan. View our featured work in warehouse fabrication, solar structures, and industrial steel work.",
    type: "website",
    locale: "en_PK",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
