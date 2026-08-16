import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import { Metadata } from 'next';
import FloatingDevisButton from "@/components/FloatingDevisButton";
// ✅ Configuration unique et optimisée de la police
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: false, // <-- Supprime l'avertissement de la console
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aurelienduberville.fr'),
  title: {
    default: 'Aurélien Duberville | Consultant numérique indépendant',
    template: '%s | Aurélien Duberville'
  },
  icons: {
    icon: '/icon.png', // Le chemin vers ton image
    shortcut: '/icon.png',
    apple: '/icon.png', // Très utile pour les iPhone/iPad
  },
  description: 'Consultant numérique indépendant : stratégie, création et référencement (SEO) de votre site web. Un seul interlocuteur, du début à la fin. Découvrez mon portfolio et mes articles.',
  keywords: ['Consultant numérique indépendant', 'Création de site web', 'Référencement SEO', 'Stratégie digitale', 'Next.js', 'Éco-conception'],
  authors: [{ name: 'Aurélien Duberville' }],

  // ✅ Ajout de ta photo pour Facebook, LinkedIn, etc.
  openGraph: {
    title: 'Aurélien Duberville | Consultant numérique indépendant',
    description: 'Stratégie, création et référencement (SEO) de votre site web — un seul interlocuteur, du début à la fin.',
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
    title: 'Aurélien Duberville | Consultant numérique indépendant',
    description: 'Stratégie, création et référencement (SEO) de votre site web — un seul interlocuteur, du début à la fin.',
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

// Balisage schema.org (Person + WebSite) : aide Google à identifier le site,
// rattacher les pages entre elles et proposer des liens annexes (sitelinks)
// sous le résultat principal dans les pages de recherche.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Aurélien Duberville",
      url: "https://www.aurelienduberville.fr",
      image: "https://www.aurelienduberville.fr/aurelien-photo.webp",
      jobTitle: "Consultant numérique indépendant",
      sameAs: ["https://www.linkedin.com/in/aur%C3%A9lien-d-64276b152/"],
    },
    {
      "@type": "WebSite",
      name: "Aurélien Duberville",
      url: "https://www.aurelienduberville.fr",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} antialiased min-h-screen flex flex-col transition-colors duration-300`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* 🌟 2. Le script d'initialisation du thème ajouté ici */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />

        <Header />
        <Breadcrumb /> {/* 🌟 2. On l'affiche ici, juste sous le menu ! */}
        
        <div className="grow">
          {children}
        </div>
        <FloatingDevisButton />
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}