import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb"; // 🌟 1. On importe le fil d'Ariane
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aurélien Duberville | Webmaster & Intervenant",
  description: "Création de sites éco-conçus et interventions en école sur la gestion de projet agile et le développement web.",
};

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