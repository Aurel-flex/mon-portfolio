import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création de site internet pour artisans et indépendants",
  description:
    "Un site internet professionnel et sur-mesure pour votre activité d'artisan ou d'indépendant : visibilité locale, crédibilité renforcée, un seul interlocuteur du début à la fin. Devis gratuit.",
};

const benefices = [
  {
    titre: "Livraison clé en main",
    texte: "Je m'occupe de tout : conception, textes, hébergement et mise en ligne. Vous n'avez rien à gérer techniquement.",
    icon: "M9 12.75L11.25 15 15 9.75M21 12c0 4.556-3.03 8.4-7.182 9.63A5.99 5.99 0 0112 22.5a5.99 5.99 0 01-1.818-.87C6.03 20.4 3 16.556 3 12c0-.564.035-1.12.104-1.665A9.72 9.72 0 0112 4.5c3.998 0 7.454 2.343 9.063 5.729A9.75 9.75 0 0121 12z",
  },
  {
    titre: "Crédibilité professionnelle",
    texte: "Un site propre et rassurant, qui donne confiance à vos prospects avant même le premier appel.",
    icon: "M9 12.75L11.25 15 15 9.75m6 3.75c0 5.385-4.365 9.75-9.75 9.75S1.5 17.385 1.5 12 5.865 2.25 12.25 2.25c1.5 0 2.9.35 4.15.97",
  },
  {
    titre: "Visibilité locale (SEO)",
    texte: "Un site pensé pour être trouvé sur Google par les clients de votre zone d'intervention.",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
  {
    titre: "Autonomie future",
    texte: "Vous gardez la main sur vos contenus après la livraison, sans dépendre de moi pour chaque petite modification.",
    icon: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.281z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Création de site internet pour artisans et indépendants",
  description:
    "Conception et création de sites internet sur-mesure pour artisans et indépendants : visibilité locale, autonomie de gestion, accompagnement de bout en bout.",
  provider: { "@type": "Person", name: "Aurélien Duberville", url: "https://www.aurelienduberville.fr" },
  areaServed: "France",
  url: "https://www.aurelienduberville.fr/creation-site-artisan-independant",
};

export default function CreationSiteArtisanIndependant() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-12 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center tracking-tight">
          Un site internet pour <span className="text-brand-light dark:text-brand-dark">artisans et indépendants</span>
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
          Vous êtes plombier, coach, consultant, artisan du bâtiment ou toute autre activité indépendante ?
          Un site internet professionnel est souvent ce qui manque pour être visible localement et rassurer vos futurs clients.
          Je m'occupe de tout, de la conception à la mise en ligne — un seul interlocuteur, du début à la fin.
        </p>
      </FadeIn>

      <FadeIn>
        <h2 className="text-3xl font-bold mb-10 text-center tracking-tight">
          Ce que vous <span className="text-brand-light dark:text-brand-dark">obtenez</span>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {benefices.map((b) => (
          <FadeIn key={b.titre}>
            <div className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 hover:border-brand-light dark:hover:border-brand-dark transition-colors shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">{b.titre}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{b.texte}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-16">
          Vous voulez voir le détail des formules et des exemples concrets ?{" "}
          <Link href="/tarifs" className="text-brand-light dark:text-brand-dark font-bold hover:underline">Consultez mes tarifs</Link>
          {" "}ou{" "}
          <Link href="/projets" className="text-brand-light dark:text-brand-dark font-bold hover:underline">mes réalisations</Link>.
        </p>
      </FadeIn>

      <FadeIn>
        <div className="bg-brand-light dark:bg-brand-dark rounded-3xl p-8 md:p-12 text-center text-white dark:text-gray-900 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Prêt à booster votre visibilité ?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl">
            Décrivez-moi votre activité, je reviens vers vous avec un devis personnalisé et gratuit.
          </p>
          <Link
            href="/devis?type=artisan"
            className="bg-white dark:bg-gray-900 text-brand-light dark:text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
          >
            Demander un devis
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}
