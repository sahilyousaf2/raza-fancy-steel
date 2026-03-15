import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Portfolio | Raza Fancy Steel Featured Works",
  description: "Browse our portfolio of completed industrial and commercial steel projects across Pakistan, from warehouses to specialized structural work.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
