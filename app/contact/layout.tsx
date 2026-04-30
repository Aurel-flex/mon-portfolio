import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Aurélien Duberville",
  description: "Vous avez un projet web ou un besoin en formation numérique ? Contactez-moi pour en discuter. Zone d'intervention : Paris, Île-de-France et à distance.",
  keywords: ["Contact", "Développeur web freelance", "Intervention école", "Aurélien Duberville"],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}