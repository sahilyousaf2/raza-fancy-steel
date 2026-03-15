import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Industrial Steel Fabrication Experts",
  description: "Explore our comprehensive steel fabrication services including warehouse sheds, solar structures, fiber glass work, and custom welding solutions.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
