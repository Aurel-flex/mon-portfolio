import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

// 🌟 Métadonnées SEO et GEO intégrées directement
export const metadata: Metadata = {
  title: "Tarifs & Prestations | Aurélien Duberville",
  description:
    "Découvrez mes prestations de webmaster indépendant : audit de site, création de site internet, rédaction web SEO et interventions pédagogiques. Devis personnalisé et gratuit.",
};

type Formule = {
  titre: string;
  sousTitre?: string;
  description: string;
  inclus: string[];
  cta: { label: string; href: string };
  ctaSecondaire?: { label: string; href: string };
};

const formules: Formule[] = [
  {
    titre: "Audit de site internet",
    sousTitre: "SEO, accessibilité, éco-conception",
    description:
      "Un diagnostic complet de votre site existant pour identifier ce qui freine votre visibilité et vos conversions.",
    inclus: [
      "Analyse SEO technique et sémantique",
      "Contrôle d'accessibilité (RGAA / WCAG)",
      "Évaluation de l'éco-conception et de la performance",
      "Rapport clair avec recommandations priorisées",
    ],
    cta: { label: "Demander un devis", href: "/devis" },
  },
  {
    titre: "Création de site internet",
    sousTitre: "Vitrine, multipage ou avec CMS",
    description:
      "Un site pensé pour convertir vos visiteurs en clients, du cahier des charges jusqu'à la mise en ligne.",
    inclus: [
      "Design sur-mesure et responsive",
      "Format adapté à votre besoin (one-page, multipage, CMS)",
      "Optimisation SEO de base incluse",
      "Accompagnement jusqu'à la mise en ligne",
    ],
    cta: { label: "Demander un devis", href: "/devis" },
  },
  {
    titre: "Rédaction web optimisée SEO",
    description:
      "Des contenus pensés pour être lus, compris... et bien référencés par les moteurs de recherche.",
    inclus: [
      "Rédaction de pages ou d'articles optimisés SEO",
      "Structuration sémantique (titres, balises, maillage interne)",
      "Ton adapté à votre cible et à votre image de marque",
      "Contenu livré prêt à l'emploi pour votre CMS",
    ],
    cta: { label: "Demander un devis", href: "/devis" },
  },
  {
    titre: "Interventions pédagogiques",
    sousTitre: "Écoles & organismes de formation",
    description:
      "Des modules de formation pour vos étudiants ou vos équipes, sur les métiers et outils du numérique.",
    inclus: [
      "Modules adaptables (d'une à plusieurs journées)",
      "Approche pratique, cas concrets et ateliers",
      "Sujets : Agile Scrum, HTML/CSS/JS, WordPress, culture numérique",
      "Format construit avec vous selon votre maquette pédagogique",
    ],
    cta: { label: "Discuter d'une intervention", href: "/contact" },
    ctaSecondaire: { label: "Voir le détail des modules", href: "/interventions" },
  },
];

const faq = [
  {
    question: "Combien de temps pour recevoir un devis ?",
    reponse:
      "Après notre échange initial sur votre besoin, vous recevez une proposition adaptée à votre projet, sans engagement de votre part.",
  },
  {
    question: "De quoi dépend le prix d'un projet ?",
    reponse:
      "Chaque projet est différent : la complexité du site, le nombre de pages, les fonctionnalités souhaitées et le contenu à produire influencent le tarif final. C'est pourquoi chaque devis est personnalisé, plutôt qu'un tarif générique qui ne correspondrait pas à votre besoin réel.",
  },
  {
    question: "Travaillez-vous avec un CMS ?",
    reponse:
      "Oui, notamment WordPress, pour vous permettre de gérer votre contenu en toute autonomie une fois le site livré.",
  },
  {
    question: "Proposez-vous un accompagnement après la mise en ligne ?",
    reponse:
      "Je reste disponible après la livraison pour répondre à vos questions et vous accompagner dans la prise en main de votre site.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.reponse,
    },
  })),
};

export default function TarifsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-12 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* --- EN-TÊTE --- */}
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center tracking-tight">
          Tarifs et <span className="text-brand-light dark:text-brand-dark">Prestations</span>
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
          Chaque projet est unique : je préfère un devis sur-mesure à un prix générique.
          Voici le contenu de mes principales prestations pour vous aider à identifier celle qui correspond à votre besoin.
        </p>
      </FadeIn>

      {/* --- FORMULES --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {formules.map((formule) => (
          <FadeIn key={formule.titre}>
            <div className="h-full flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 hover:border-brand-light dark:hover:border-brand-dark transition-colors shadow-sm">
              <h2 className="text-2xl font-bold mb-1">{formule.titre}</h2>
              {formule.sousTitre && (
                <p className="text-sm font-medium text-brand-light dark:text-brand-dark mb-4">
                  {formule.sousTitre}
                </p>
              )}
              <p className="text-gray-600 dark:text-gray-400 mb-6">{formule.description}</p>

              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 mb-8 grow">
                {formule.inclus.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-light dark:text-brand-dark shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 mt-auto pt-2">
                <Link
                  href={formule.cta.href}
                  className="inline-flex items-center gap-2 bg-brand-light dark:bg-brand-dark text-white dark:text-gray-900 font-bold px-6 py-3 rounded-xl hover:opacity-90 hover:scale-105 transition-all"
                >
                  {formule.cta.label}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                {formule.ctaSecondaire && (
                  <Link
                    href={formule.ctaSecondaire.href}
                    className="inline-flex items-center gap-2 text-brand-light dark:text-brand-dark font-bold px-2 py-3 hover:underline"
                  >
                    {formule.ctaSecondaire.label}
                  </Link>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* --- FAQ --- */}
      <FadeIn>
        <h2 className="text-3xl font-bold mb-10 text-center tracking-tight">
          Questions <span className="text-brand-light dark:text-brand-dark">fréquentes</span>
        </h2>
      </FadeIn>

      <div className="max-w-3xl mx-auto flex flex-col gap-4 mb-20">
        {faq.map((item) => (
          <FadeIn key={item.question}>
            <details className="group bg-gray-50 dark:bg-gray-800/80 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 open:shadow-sm">
              <summary className="flex items-center justify-between gap-4 font-bold text-lg cursor-pointer list-none">
                {item.question}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5 shrink-0 text-brand-light dark:text-brand-dark transition-transform group-open:rotate-45"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">{item.reponse}</p>
            </details>
          </FadeIn>
        ))}
      </div>

      {/* --- CALL TO ACTION --- */}
      <FadeIn>
        <div className="bg-brand-light dark:bg-brand-dark rounded-3xl p-8 md:p-12 text-center text-white dark:text-gray-900 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Un projet en tête ?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl">
            Parlons-en. Vous recevrez un devis personnalisé, adapté à votre besoin et à votre budget.
          </p>
          <Link
            href="/devis"
            className="bg-white dark:bg-gray-900 text-brand-light dark:text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
          >
            Demander un devis gratuit
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}
