import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import AppelFinal from "@/components/AppelFinal";
import type { Metadata } from "next";

// 🌟 Métadonnées SEO et GEO intégrées directement
export const metadata: Metadata = {
  title: "Tarifs & Prestations | Aurélien Duberville",
  description:
    "Tarifs transparents de création de site internet : one page dès 800 €, site vitrine dès 1 800 €, site WordPress dès 2 000 €, refonte dès 1 500 €. Audit, rédaction SEO et devis gratuit.",
};

type Offre = {
  titre: string;
  pourQui: string;
  aPartirDe: string;
  fourchette: string;
  delai: string;
  inclus: string[];
};

// Création et refonte : fourchettes indicatives, le devis précise le prix final
const offres: Offre[] = [
  {
    titre: "One page sur-mesure",
    pourQui: "Artisan, indépendant, lancement d'activité",
    aPartirDe: "800 €",
    fourchette: "800 – 1 500 €",
    delai: "2 à 3 semaines",
    inclus: [
      "Une page longue de 5 à 7 sections",
      "Design sur-mesure et responsive, sans CMS",
      "Formulaire de contact et mentions légales",
      "Optimisation SEO de base",
    ],
  },
  {
    titre: "Site vitrine multipage",
    pourQui: "TPE qui veut un site soigné, léger et éco-conçu",
    aPartirDe: "1 800 €",
    fourchette: "1 800 – 3 500 €",
    delai: "3 à 5 semaines",
    inclus: [
      "4 à 8 pages, design sur-mesure",
      "Code optimisé, léger et éco-conçu",
      "SEO on-page (balises, structure, maillage)",
      "Formulaire de contact et suivi d'audience",
    ],
  },
  {
    titre: "Site avec CMS, vous êtes autonome",
    pourQui: "Vous voulez modifier textes, photos et actus vous-même",
    aPartirDe: "2 000 €",
    fourchette: "2 000 – 4 500 €",
    delai: "3 à 6 semaines",
    inclus: [
      "5 à 10 pages sous WordPress, thème personnalisé",
      "Blog ou actualités prêts à l'emploi",
      "Formation à la prise en main (1 à 2 h)",
      "Tutoriel PDF pour les mises à jour courantes",
    ],
  },
  {
    titre: "Refonte de site existant",
    pourQui: "Site daté, lent, mal référencé ou pas adapté au mobile",
    aPartirDe: "1 500 €",
    fourchette: "1 500 – 5 000 €",
    delai: "3 à 8 semaines",
    inclus: [
      "Audit de l'existant avant de commencer",
      "Nouvelle maquette et reprise des contenus",
      "Redirections 301 pour conserver votre référencement",
      "Mise en ligne sans coupure de service",
    ],
  },
];

const options = [
  { label: "Page supplémentaire", prix: "150 – 300 €" },
  { label: "Rédaction web SEO", prix: "80 – 150 € / page" },
  { label: "Maintenance (mises à jour, sauvegardes, petites modifs)", prix: "30 – 80 € / mois" },
  { label: "Hébergement + nom de domaine (à votre nom)", prix: "≈ 50 – 150 € / an" },
];

const facteursPrix = [
  "Le nombre de pages et la quantité de contenu",
  "Les textes et photos : fournis par vous ou à produire",
  "Les fonctionnalités : réservation en ligne, multilingue, petite boutique…",
  "Les délais : un lancement urgent demande une organisation dédiée",
];

type Formule = {
  titre: string;
  sousTitre?: string;
  prix: string;
  description: string;
  inclus: string[];
  cta: { label: string; href: string };
  ctaSecondaire?: { label: string; href: string };
};

const autresPrestations: Formule[] = [
  {
    titre: "Audit de site internet",
    sousTitre: "SEO, accessibilité, éco-conception",
    prix: "300 – 800 €",
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
    titre: "Rédaction web optimisée SEO",
    prix: "80 – 150 € / page",
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
    prix: "Sur devis",
    description:
      "Des modules de formation pour vos étudiants ou vos équipes, sur les métiers et outils du numérique.",
    inclus: [
      "Modules adaptables (d'une à plusieurs journées)",
      "Approche pratique, cas concrets et ateliers",
      "Sujets : Agile Scrum, HTML/CSS/JS, WordPress, culture numérique",
      "Format construit avec vous selon votre maquette pédagogique",
    ],
    cta: { label: "Me contacter", href: "/contact?sujet=intervention" },
    ctaSecondaire: { label: "Voir le détail des modules", href: "/interventions" },
  },
];

const MENTION_TVA = "Prix nets : TVA non applicable, art. 293 B du CGI (micro-entreprise).";

const faq = [
  {
    question: "Combien de temps pour recevoir un devis ?",
    reponse:
      "Après notre échange initial sur votre besoin, vous recevez une proposition détaillée sous quelques jours, sans engagement de votre part.",
  },
  {
    question: "De quoi dépend le prix d'un projet ?",
    reponse:
      "Les fourchettes ci-dessus couvrent la grande majorité des projets. Le prix exact dépend du nombre de pages, des contenus à produire (textes, photos), des fonctionnalités souhaitées et des délais. Le devis détaille chaque poste : vous savez précisément ce que vous payez.",
  },
  {
    question: "Les prix incluent-ils la TVA ?",
    reponse:
      "Je suis en micro-entreprise : la TVA n'est pas applicable (art. 293 B du CGI). Les prix affichés sont donc les prix que vous payez, sans TVA en plus.",
  },
  {
    question: "L'hébergement et le nom de domaine sont-ils compris ?",
    reponse:
      "Non : ils sont souscrits à votre nom pour que vous restiez propriétaire de votre site. Comptez environ 50 à 150 € par an selon l'hébergeur. Je m'occupe de la configuration et vous conseille l'offre la plus adaptée.",
  },
  {
    question: "Travaillez-vous avec un CMS ?",
    reponse:
      "Oui si le besoin le nécessite, notamment WordPress, pour vous permettre de gérer votre contenu en toute autonomie une fois le site livré. Je peux également créer un site sur-mesure sans CMS, plus léger, si c'est plus adapté à votre projet.",
  },
  {
    question: "Proposez-vous un accompagnement après la mise en ligne ?",
    reponse:
      "Je reste disponible après la livraison pour répondre à vos questions. Pour un suivi régulier (mises à jour, sauvegardes, petites modifications), une formule de maintenance mensuelle est possible.",
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
      <PageHero surtitre="Tarifs transparents" titre={<>Tarifs et <span className="text-brand-light dark:text-brand-dark">Prestations</span></>}>
        <p>
          Des fourchettes claires pour estimer votre budget dès maintenant. Chaque devis détaille
          ensuite le prix exact, poste par poste, selon votre projet.
        </p>
      </PageHero>

      {/* --- CRÉATION & REFONTE : FOURCHETTES --- */}
      <FadeIn>
        <h2 className="text-3xl font-bold mb-3 text-center tracking-tight">
          Création &amp; <span className="text-brand-light dark:text-brand-dark">refonte de site</span>
        </h2>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-10">{MENTION_TVA}</p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {offres.map((offre) => (
          <FadeIn key={offre.titre}>
            <div className="relative h-full flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-brand-light dark:hover:border-brand-dark rounded-3xl p-8 transition-colors shadow-sm">
              <h3 className="text-2xl font-bold mb-1">{offre.titre}</h3>
              <p className="text-sm font-medium text-brand-light dark:text-brand-dark mb-6">{offre.pourQui}</p>

              <p className="text-sm text-gray-500 dark:text-gray-400">À partir de</p>
              <p className="text-4xl font-bold tracking-tight mb-1">{offre.aPartirDe}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Fourchette : <strong className="text-gray-900 dark:text-gray-100">{offre.fourchette}</strong> · Délai : {offre.delai}
              </p>

              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 mb-8 grow">
                {offre.inclus.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-light dark:text-brand-dark shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/devis"
                className="self-start inline-flex items-center gap-2 bg-brand-light dark:bg-brand-dark text-white dark:text-gray-900 font-bold px-6 py-3 rounded-xl hover:opacity-90 hover:scale-105 transition-all"
              >
                Demander un devis
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* --- OPTIONS & FACTEURS DE PRIX --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <FadeIn>
          <div className="h-full bg-gray-50 dark:bg-gray-800/80 rounded-3xl border border-gray-200 dark:border-gray-700 p-8">
            <h3 className="text-xl font-bold mb-5">Options et frais annexes</h3>
            <dl className="divide-y divide-gray-200 dark:divide-gray-700">
              {options.map((o) => (
                <div key={o.label} className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-gray-600 dark:text-gray-400">{o.label}</dt>
                  <dd className="font-bold whitespace-nowrap">{o.prix}</dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="h-full bg-gray-50 dark:bg-gray-800/80 rounded-3xl border border-gray-200 dark:border-gray-700 p-8">
            <h3 className="text-xl font-bold mb-5">Ce qui fait varier le prix</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              {facteursPrix.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="text-brand-light dark:text-brand-dark shrink-0">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Le devis détaille chaque poste : pas de frais cachés, pas de surprise à la livraison.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* --- AUTRES PRESTATIONS --- */}
      <FadeIn>
        <h2 className="text-3xl font-bold mb-10 text-center tracking-tight">
          Autres <span className="text-brand-light dark:text-brand-dark">prestations</span>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {autresPrestations.map((formule) => (
          <FadeIn key={formule.titre}>
            <div className="h-full flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 hover:border-brand-light dark:hover:border-brand-dark transition-colors shadow-sm">
              <h3 className="text-xl font-bold mb-1">{formule.titre}</h3>
              {formule.sousTitre && (
                <p className="text-sm font-medium text-brand-light dark:text-brand-dark mb-4">
                  {formule.sousTitre}
                </p>
              )}
              <p className="text-2xl font-bold tracking-tight mb-4">{formule.prix}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{formule.description}</p>

              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 mb-8 grow">
                {formule.inclus.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-light dark:text-brand-dark shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-2">
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
      <AppelFinal
        titre="Un projet en tête ?"
        texte="Parlons-en. Vous recevrez un devis gratuit et détaillé, adapté à votre besoin et à votre budget."
        principal={{ href: "/devis", label: "Demander un devis gratuit" }}
      />
    </main>
  );
}
