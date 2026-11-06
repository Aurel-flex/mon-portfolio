import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Aurélien Duberville",
  description: "Vous avez un projet web ou un besoin en formation numérique ? Contactez-moi pour en discuter. Basé à Tournan-en-Brie (77) : rendez-vous en Seine-et-Marne, à distance sur Paris et partout en France.",
  keywords: ["Contact", "Consultant numérique indépendant", "Création de site web", "SEO", "Intervention école", "Aurélien Duberville"],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}