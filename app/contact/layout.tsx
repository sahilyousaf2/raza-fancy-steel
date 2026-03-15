import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Quote - Raza Fancy Steel",
  description: "Get in touch with Raza Fancy Steel for your industrial fabrication needs. Request a free quote for warehouse sheds, structures, and custom welding.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
