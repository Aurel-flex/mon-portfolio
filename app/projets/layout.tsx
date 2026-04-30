import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mes Projets | Aurélien Duberville",
  description: "Découvrez mon portfolio de projets web professionnels et personnels, développés avec une approche d'éco-conception.",
  keywords: ["Portfolio web", "Projets React", "Next.js", "Éco-conception", "Sites web"],
};

export default function ProjetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}