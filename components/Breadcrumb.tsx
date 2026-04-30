"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Un petit dictionnaire pour traduire les URL en jolis noms avec accents
const routeNames: Record<string, string> = {
  "a-propos": "À propos",
  "projets": "Projets",
  "formations": "Interventions",
  "blog": "Blog",
  "contact": "Contact",
};

export default function Breadcrumb() {
  const pathname = usePathname();

  // Si on est sur la page d'accueil, le fil d'Ariane est inutile, on le cache
  if (pathname === "/") return null;

  // On découpe l'URL en morceaux (ex: "/blog/mon-article" devient ["blog", "mon-article"])
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    // aria-label="Fil d'Ariane" est indispensable pour les lecteurs d'écran (Accessibilité)
    <nav aria-label="Fil d'Ariane" className="w-full max-w-5xl mx-auto px-6 pt-4 md:px-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        
        {/* Le point de départ : Accueil */}
        <li>
          <Link href="/" className="hover:text-brand-light dark:hover:text-brand-dark transition-colors">
            Accueil
          </Link>
        </li>
        
        {/* On boucle sur chaque morceau de l'URL */}
        {pathSegments.map((segment, index) => {
          // On recrée le lien complet jusqu'à ce segment
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          
          // On vérifie si c'est le dernier élément de la liste (la page actuelle)
          const isLast = index === pathSegments.length - 1;
          
          // On cherche le joli nom dans notre dictionnaire, sinon on met une majuscule
          const label = routeNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

          return (
            <li key={segment} className="flex items-center gap-2">
              <span>/</span> {/* Petit séparateur minimaliste */}
              
              {isLast ? (
                // Si c'est la page actuelle, pas de lien et texte en gras
                <span className="font-semibold text-gray-900 dark:text-gray-100" aria-current="page">
                  {label}
                </span>
              ) : (
                // Si c'est une page parent, on met un lien
                <Link href={href} className="hover:text-brand-light dark:hover:text-brand-dark transition-colors">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}