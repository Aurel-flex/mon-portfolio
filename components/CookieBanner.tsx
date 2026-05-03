"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// 🌟 1. On importe notre fonction pour initialiser Google Analytics
import { initGA } from "@/lib/gtag";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Au chargement, on vérifie si un choix a déjà été fait
    const consentData = localStorage.getItem("cnil-cookie-consent");
    
    if (consentData) {
      // 🌟 2. On extrait "accepted" en plus du timestamp
      const { accepted, timestamp } = JSON.parse(consentData);
      
      // Calcul de 6 mois en millisecondes (environ 180 jours)
      const sixMonthsInMs = 180 * 24 * 60 * 60 * 1000;
      const isExpired = new Date().getTime() - timestamp > sixMonthsInMs;

      // Si le choix a moins de 6 mois, on ne montre pas le bandeau
      if (!isExpired) {
        // 🌟 3. Si l'utilisateur avait déjà accepté, on lance Google Analytics
        if (accepted) {
          initGA();
        }
        return;
      }
    }
    
    // Si pas de choix ou choix expiré (> 6 mois), on affiche le bandeau
    setShowBanner(true);
  }, []);

  const handleConsent = (accepted: boolean) => {
    // On sauvegarde le choix et la date du jour
    const consentData = {
      accepted,
      timestamp: new Date().getTime(),
    };
    
    localStorage.setItem("cnil-cookie-consent", JSON.stringify(consentData));
    setShowBanner(false);

    // 🌟 4. Si l'utilisateur clique sur "Tout accepter", on lance l'analyse
    if (accepted) {
      console.log("Cookies acceptés : Lancement de Google Analytics !");
      initGA();
    } else {
      console.log("Cookies refusés : Aucun pistage.");
    }
  };

  // Si le bandeau ne doit pas s'afficher, on ne génère aucun code HTML (optimisation)
  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4 md:p-6 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in-up">
      
      <div className="text-sm text-gray-700 dark:text-gray-300 max-w-4xl leading-relaxed">
        <p className="font-bold text-base mb-1 text-gray-900 dark:text-gray-100">🍪 Gestion des cookies</p>
        Nous utilisons des cookies pour analyser notre trafic et améliorer votre expérience. 
        Conformément aux recommandations de la CNIL, votre choix sera conservé pendant 6 mois. 
        Vous pouvez en savoir plus sur notre page de <Link href="/mentions-legales" className="underline hover:text-brand-light dark:hover:text-brand-dark transition-colors">Politique de confidentialité</Link>.
      </div>

      <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0 w-full md:w-auto">
        <button 
          aria-label="Refuser tous les cookies"
          onClick={() => handleConsent(false)} 
          className="flex-1 md:flex-none px-6 py-2.5 rounded-lg border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800"
        >
          Tout refuser
        </button>
        <button 
          aria-label="Accepter tous les cookies"
          onClick={() => handleConsent(true)} 
          className="flex-1 md:flex-none px-6 py-2.5 rounded-lg bg-brand-light dark:bg-brand-dark text-white dark:text-gray-900 font-bold hover:opacity-90 transition-opacity focus:outline-none focus:ring-4 focus:ring-brand-light/50 dark:focus:ring-brand-dark/50"
        >
          Tout accepter
        </button>
      </div>

    </div>
  );
}