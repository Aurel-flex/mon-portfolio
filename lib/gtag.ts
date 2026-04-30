// src/lib/gtag.ts

// Remplace par ton véritable identifiant Google Analytics
export const GA_TRACKING_ID = "G-ZXQS0FV7KZ"; 

export const initGA = () => {
  // On crée la balise script pour charger Google Analytics
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;

  // On crée la balise script pour configurer le suivi
  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}', {
      page_path: window.location.pathname,
    });
  `;

  // On injecte ces balises dans le <head> de ton site
  document.head.appendChild(script1);
  document.head.appendChild(script2);
};