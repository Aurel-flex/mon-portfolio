import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb"; // 🌟 1. On importe le fil d'Ariane
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import { Metadata } from 'next'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Aurélien Duberville | Webmaster & Intervenant',
    template: '%s | Aurélien Duberville'
  },
  description: 'Webmaster et intervenant spécialisé en accessibilité, gestion de projet agile et éco-conception. Découvrez mon portfolio et mes articles .',
  keywords: ['Webmaster', 'Éco-conception', 'Next.js', 'Portfolio', 'Numérique responsable'],
  authors: [{ name: 'Aurélien Duberville' }],
  openGraph: {
    title: 'Aurélien Duberville | Webmaster',
    description: 'Reponsable de projets web éco-conçus, découvrez mon portfolio et mes articles sur le développement durable.',
    url: 'https://aurelienduberville.fr',
    siteName: 'Aurélien Duberville Portfolio',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'jfF__9QqBRraPjOSxVe2SYujJt3scbAGYsWn7YMFNvk',
  },
}
// ✅ Ajoute "preload: false" dans les options de la police
const monFont = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: false, // <-- Cette ligne supprime l'avertissement de la console
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" data-scroll-behavior="smooth">
      <body 
        className={`${inter.className} antialiased min-h-screen flex flex-col transition-colors duration-300`}
        suppressHydrationWarning
      >
        <Header />
        <Breadcrumb /> {/* 🌟 2. On l'affiche ici, juste sous le menu ! */}
        
        <div className="grow">
          {children}
        </div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}