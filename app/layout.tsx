import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import { Metadata } from 'next';

// ✅ Configuration unique et optimisée de la police
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: false, // <-- Supprime l'avertissement de la console
});

export const metadata: Metadata = {
  title: {
    default: 'Aurélien Duberville | Webmaster & Intervenant',
    template: '%s | Aurélien Duberville'
  },
  icons: {
    icon: '/icon.png', // Le chemin vers ton image
    shortcut: '/icon.png',
    apple: '/icon.png', // Très utile pour les iPhone/iPad
  },
  description: 'Webmaster et intervenant spécialisé en accessibilité, gestion de projet agile et éco-conception. Découvrez mon portfolio et mes articles.',
  keywords: ['Webmaster', 'Éco-conception', 'Next.js', 'Portfolio', 'Numérique responsable'],
  authors: [{ name: 'Aurélien Duberville' }],
  
  // ✅ Ajout de ta photo pour Facebook, LinkedIn, etc.
  openGraph: {
    title: 'Aurélien Duberville | Webmaster',
    description: 'Responsable de projets web éco-conçus, découvrez mon portfolio et mes articles sur le développement durable.',
    url: 'https://aurelienduberville.fr',
    siteName: 'Aurélien Duberville Portfolio',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://aurelienduberville.fr/aurelien-photo.webp', // Lien vers ta photo
        width: 800,
        height: 600,
        alt: 'Portrait de Aurélien Duberville',
      },
    ],
    
  },
  
  // ✅ Ajout de ta photo pour Twitter / X
  twitter: {
    card: 'summary_large_image',
    title: 'Aurélien Duberville | Webmaster',
    description: 'Webmaster et intervenant spécialisé en accessibilité et éco-conception.',
    images: ['https://aurelienduberville.fr/aurelien-photo.webp'], // Lien vers ta photo
  },
  
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'jfF__9QqBRraPjOSxVe2SYujJt3scbAGYsWn7YMFNvk',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" data-scroll-behavior="smooth">
      <body 
        // Utilisation propre de la police fusionnée
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