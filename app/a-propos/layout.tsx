import type { Metadata } from "next";

// 🌟 Voici les métadonnées SEO et GEO pour cette page spécifique
export const metadata: Metadata = {
  title: "À propos | Aurélien Duberville - Consultant numérique indépendant",
  description: "Découvrez mon parcours d'Assistant Product Owner chez Orange, mon expertise en stratégie, création et référencement de sites web, et ma passion pour la pédagogie numérique.",
  // Mots-clés utiles pour le SEO classique et pour orienter les IA (GEO)
  keywords: ["Aurélien Duberville", "Consultant numérique indépendant", "SEO", "Formateur", "Développeur web", "Éco-conception", "Chef de projet", "Orange"],
};

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Le layout ne fait qu'englober ta page.tsx existante sans la modifier
  return <>{children}</>;
}