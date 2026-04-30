import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mes Projets | Aurélien Duberville",
  description: "Découvrez mon portfolio de projets professionnels et personnels.",
  keywords: ["Portfolio web", "Projets React", "Next.js", "Éco-conception", "Sites web","Photographie"],
};

export default function ProjetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}