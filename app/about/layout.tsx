import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Raza Fancy Steel Karachi",
  description: "Learn about Raza Fancy Steel's 25-year legacy in steel fabrication, our story, and the experts behind our premium industrial solutions in Karachi.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
