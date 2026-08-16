"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SITE_URL = "https://www.aurelienduberville.fr";

// Un petit dictionnaire pour traduire les URL en jolis noms avec accents
const routeNames: Record<string, string> = {
  "a-propos": "À propos",
  "projets": "Projets",
  "interventions": "Interventions",
  "tarifs": "Tarifs",
  "blog": "Blog",
  "devis": "Devis",
  "contact": "Contact",
  "mentions-legales": "Mentions légales",
};

export default function Breadcrumb() {
  const pathname = usePathname();

  // Si on est sur la page d'accueil, le fil d'Ariane est inutile, on le cache
  if (pathname === "/") return null;

  // On découpe l'URL en morceaux (ex: "/blog/mon-article" devient ["blog", "mon-article"])
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  // Chemin complet (Accueil + chaque segment), réutilisé pour l'affichage et le JSON-LD
  const trail = [
    { label: "Accueil", href: "/" },
    ...pathSegments.map((segment, index) => ({
      href: `/${pathSegments.slice(0, index + 1).join("/")}`,
      label: routeNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
    })),
  ];

  // Balisage schema.org BreadcrumbList : aide Google à comprendre la structure
  // du site (fil d'Ariane / sitelinks dans les résultats de recherche)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((step, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: step.label,
      item: `${SITE_URL}${step.href === "/" ? "" : step.href}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* aria-label="Fil d'Ariane" est indispensable pour les lecteurs d'écran (Accessibilité) */}
      <nav aria-label="Fil d'Ariane" className="w-full max-w-5xl mx-auto px-6 pt-4 md:px-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          {trail.map((step, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={step.href} className="flex items-center gap-2">
                {index > 0 && <span>/</span>}
                {isLast ? (
                  <span className="font-semibold text-gray-900 dark:text-gray-100" aria-current="page">
                    {step.label}
                  </span>
                ) : (
                  <Link href={step.href} className="hover:text-brand-light dark:hover:text-brand-dark transition-colors">
                    {step.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}