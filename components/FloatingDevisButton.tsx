"use client"; // On ajoute ceci car le composant doit lire l'URL en direct

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function FloatingDevisButton() {
  // On récupère l'URL actuelle (ex: "/", "/blog", ou "/devis")
  const pathname = usePathname();

  // Si l'utilisateur est déjà sur la page devis, on n'affiche rien (null)
  if (pathname === "/devis") {
    return null;
  }
// Sinon, on affiche le bouton normalement
  return (
<Link
      href="/devis"
      aria-label="Aller à la page de demande de devis"
      className="
        /* 📱 DESIGN MOBILE : Caché par défaut */
        hidden
        
        /* 💻 DESIGN ORDINATEUR (md:) : Affiché et positionné en bas à droite */
        md:flex z-50 items-center justify-center gap-2 group font-bold transition-all shadow-2xl hover:scale-105 hover:shadow-brand-light/50 rounded-full bg-brand-light dark:bg-brand-dark text-white dark:text-gray-900 md:bottom-8 md:right-8 md:px-6 md:py-4 fixed
      "
    >
      {/* On affiche toujours le texte complet, car la position centrée nous donne plus de place */}
      <span>Demander un devis</span>
      
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
      </svg>
    </Link>
  );
}