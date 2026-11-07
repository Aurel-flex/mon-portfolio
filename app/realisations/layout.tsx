import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mes Réalisations | Aurélien Duberville",
  description: "Mes réalisations : sites vitrines, refontes et projets web professionnels et personnels.",
  keywords: ["Portfolio web", "Projets React", "Next.js", "Éco-conception", "Sites web","Photographie"],
};

export default function ProjetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}