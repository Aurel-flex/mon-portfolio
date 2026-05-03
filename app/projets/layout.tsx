import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mes Projets | Aurélien Duberville",
  description: "Découvrez mon portfolio de projets professionnels et personnels.",
  keywords: ["Portfolio web", "Projets React", "Next.js", "Éco-conception", "Sites web","Photographie"],
  icons: {
    icon: [
      { url: '/favicon.ico' }, // Classique
      { url: '/icon.png', type: 'image/png', sizes: '32x32' }, // Onglet
      { url: '/icon.png', type: 'image/png', sizes: '192x192' }, // Google / Android
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }, // iOS
    ],
  },
};

export default function ProjetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}