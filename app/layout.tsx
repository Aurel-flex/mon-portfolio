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
    default: 'Aurélien Duberville | Développeur Web & Éco-conception',
    template: '%s | Aurélien Duberville'
  },
  description: 'Portfolio d\'Aurélien Duberville, expert en développement web durable, Next.js et architecture Headless CMS. Découvrez mes projets et mes articles sur le numérique responsable.',
  keywords: ['Développeur Web', 'Éco-conception', 'Next.js', 'Portfolio', 'Numérique responsable'],
  authors: [{ name: 'Aurélien Duberville' }],
  openGraph: {
    title: 'Aurélien Duberville | Développeur Web',
    description: 'Expert en développement web durable et Next.js.',
    url: 'https://aurelienduberville.fr',
    siteName: 'Aurélien Duberville Portfolio',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
}

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