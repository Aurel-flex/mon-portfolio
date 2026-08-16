import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demandez votre devis gratuit",
  description: "Demandez un devis gratuit et personnalisé pour votre projet de site web, référencement SEO ou intervention pédagogique. Réponse rapide, sans engagement.",
  keywords: ["Devis site web", "Devis SEO", "Consultant numérique indépendant", "Aurélien Duberville"],
};

export default function DevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
