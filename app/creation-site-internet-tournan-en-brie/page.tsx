import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import AppelFinal from "@/components/AppelFinal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création de site internet à Tournan-en-Brie (77)",
  description:
    "Consultant web basé à Tournan-en-Brie : création de sites internet pour artisans, professionnels de santé et commerces en Seine-et-Marne. Rendez-vous en personne, site vitrine dès 800 €, devis gratuit.",
};

type Metier = {
  secteur: string;
  metier: string;
  enjeu: string;
  contenu: string[];
  formule: string;
  icon: string;
  demo?: string;
};

// Exemples de sites types par corps de métier (ce que je propose, pas des références clients)
const metiers: Metier[] = [
  {
    secteur: "Bâtiment",
    metier: "Couvreur, artisan toiture",
    enjeu: "Être appelé en premier quand une fuite survient, et rassurer sur la qualité du travail.",
    contenu: [
      "Bouton d'appel visible en permanence sur mobile",
      "Galerie de chantiers avant / après",
      "Garantie décennale, qualifications (RGE…) et zone d'intervention",
      "Demande de devis avec envoi de photos",
    ],
    formule: "Site vitrine multipage · dès 1 800 €",
    demo: "/realisations/demo-valbrie-toitures",
    icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  },
  {
    secteur: "Santé",
    metier: "Ostéopathe",
    enjeu: "Expliquer quand consulter et faciliter la prise de rendez-vous, sans démarchage.",
    contenu: [
      "Lien direct vers votre agenda en ligne (Doctolib ou autre)",
      "Pages « Quand consulter ? » pour nourrissons, sportifs, femmes enceintes",
      "Infos pratiques : accès, tarifs, remboursement par les mutuelles",
      "Contenu informatif, dans le respect des règles de communication de la profession",
    ],
    formule: "One page ou multipage · dès 800 €",
    demo: "/realisations/demo-osteo-des-tilleuls",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
  },
  {
    secteur: "Santé",
    metier: "Pédicure-podologue",
    enjeu: "Présenter clairement les soins proposés et les informations pratiques du cabinet.",
    contenu: [
      "Soins détaillés : semelles orthopédiques, bilan postural, soins courants",
      "Prise de rendez-vous en ligne et horaires à jour",
      "Accessibilité du cabinet (PMR, stationnement)",
      "Communication informative, conforme aux recommandations de l'Ordre",
    ],
    formule: "One page sur-mesure · dès 800 €",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
  },
  {
    secteur: "Commerce & restauration",
    metier: "Restaurant, boulangerie, commerce de proximité",
    enjeu: "Donner envie de passer la porte et tenir les informations à jour sans effort.",
    contenu: [
      "Carte ou produits modifiables par vous-même",
      "Horaires, fermetures exceptionnelles et plan d'accès",
      "Commande à emporter ou réservation simple",
      "Liens vers vos avis Google et réseaux sociaux",
    ],
    formule: "Site avec CMS, vous êtes autonome · dès 2 000 €",
    icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z",
  },
  {
    secteur: "Beauté & bien-être",
    metier: "Coiffeur, esthéticienne, praticien bien-être",
    enjeu: "Montrer votre univers et remplir l'agenda en dehors des heures d'ouverture.",
    contenu: [
      "Prestations et tarifs clairs",
      "Réservation en ligne 24 h / 24",
      "Galerie de réalisations ou flux Instagram",
      "Bons cadeaux et offres du moment",
    ],
    formule: "One page sur-mesure · dès 800 €",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
  },
  {
    secteur: "Conseil & services",
    metier: "Coach, consultant, profession libérale",
    enjeu: "Démontrer votre expertise pour être choisi avant même le premier échange.",
    contenu: [
      "Présentation de votre approche et de votre parcours",
      "Prise de rendez-vous pour un appel découverte",
      "Articles de blog pour être trouvé sur vos sujets",
      "Formulaire de contact qualifié",
    ],
    formule: "Site avec CMS, vous êtes autonome · dès 2 000 €",
    icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z",
  },
];

const atoutsLocaux = [
  {
    titre: "On se rencontre en vrai",
    texte: "Un café à Tournan, un rendez-vous dans votre atelier ou votre cabinet : on construit le projet ensemble, pas uniquement par e-mail.",
  },
  {
    titre: "Visibilité locale soignée",
    texte: "Référencement local, fiche Google Business Profile reliée au site, mots-clés « métier + ville » : vos voisins vous trouvent.",
  },
  {
    titre: "Un seul interlocuteur",
    texte: "De la maquette à la mise en ligne, puis pour les évolutions : vous savez toujours à qui vous adresser.",
  },
];

const communes = [
  "Tournan-en-Brie",
  "Gretz-Armainvilliers",
  "Presles-en-Brie",
  "Ozoir-la-Ferrière",
  "Roissy-en-Brie",
  "Pontault-Combault",
  "Lésigny",
  "Ferrières-en-Brie",
  "Favières",
  "Châtres",
  "Liverdy-en-Brie",
  "Neufmoutiers-en-Brie",
  "Fontenay-Trésigny",
  "Marles-en-Brie",
  "Chaumes-en-Brie",
];

const faq = [
  {
    question: "Peut-on se rencontrer avant de lancer le projet ?",
    reponse:
      "Oui, je suis basé à Tournan-en-Brie. Le premier rendez-vous se fait volontiers en personne, à Tournan ou directement dans votre local ou votre cabinet. La visio reste possible si c'est plus simple pour vous.",
  },
  {
    question: "Combien coûte un site internet pour un artisan ou un cabinet ?",
    reponse:
      "Comptez à partir de 800 € pour un one page sur-mesure, 1 800 € pour un site vitrine multipage et 2 000 € pour un site que vous pouvez modifier vous-même. Le détail des formules et des options est sur la page Tarifs, et le devis est gratuit.",
  },
  {
    question: "Vous occupez-vous aussi de ma fiche Google ?",
    reponse:
      "Je relie votre site à votre fiche Google Business Profile et je vous conseille pour l'optimiser (catégories, photos, horaires, réponses aux avis). C'est souvent le premier point de contact de vos clients locaux.",
  },
  {
    question: "Les professions de santé ont-elles des règles particulières ?",
    reponse:
      "Oui : la communication doit rester informative et ne pas s'apparenter à de la publicité commerciale. Je conçois les contenus dans ce cadre (présentation des soins, informations pratiques, prise de rendez-vous) et vous validez chaque texte avant la mise en ligne.",
  },
];

const SITE_URL = "https://www.aurelienduberville.fr";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Aurélien Duberville, création de site internet à Tournan-en-Brie",
    description:
      "Création de sites internet sur-mesure pour artisans, professionnels de santé et commerces à Tournan-en-Brie et en Seine-et-Marne.",
    url: `${SITE_URL}/creation-site-internet-tournan-en-brie`,
    provider: { "@type": "Person", name: "Aurélien Duberville", url: SITE_URL },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tournan-en-Brie",
      postalCode: "77220",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    areaServed: communes.map((name) => ({ "@type": "City", name })),
    priceRange: "800 € – 5 000 €",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.reponse },
    })),
  },
];

export default function CreationSiteTournanEnBrie() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-12 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* --- EN-TÊTE --- */}
      <PageHero surtitre="Tournan-en-Brie · Seine-et-Marne" titre={<>Création de site internet à <span className="text-brand-light dark:text-brand-dark">Tournan-en-Brie</span></>}>
        <p>
          Artisan, professionnel de santé, commerçant ou indépendant à Tournan-en-Brie et dans les environs ?
          Consultant web installé ici, je crée des sites internet sur-mesure qui vous rendent visible auprès des
          clients de votre secteur, avec un interlocuteur que vous pouvez rencontrer en personne.
        </p>
      </PageHero>

      {/* --- ATOUTS LOCAUX --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {atoutsLocaux.map((a) => (
          <FadeIn key={a.titre}>
            <div className="h-full bg-gray-50 dark:bg-gray-800/80 rounded-3xl border border-gray-200 dark:border-gray-700 p-8">
              <h2 className="font-bold text-lg mb-2">{a.titre}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{a.texte}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* --- EXEMPLES PAR MÉTIER --- */}
      <FadeIn>
        <h2 className="text-3xl font-bold mb-4 text-center tracking-tight">
          Un site pensé pour <span className="text-brand-light dark:text-brand-dark">votre métier</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Un couvreur et un ostéopathe n'ont pas les mêmes besoins. Voici, pour chaque corps de métier,
          ce que je mets en place pour que votre site vous apporte des clients.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {metiers.map((m) => (
          <FadeIn key={m.metier}>
            <article className="h-full flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 hover:border-brand-light dark:hover:border-brand-dark transition-colors shadow-sm">
              <div className="flex items-center gap-4 mb-5">
                <span aria-hidden="true" className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d={m.icon} />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-light dark:text-brand-dark">{m.secteur}</p>
                  <h3 className="text-xl font-bold leading-tight">{m.metier}</h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-5">{m.enjeu}</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6 grow">
                {m.contenu.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <span className="text-brand-light dark:text-brand-dark shrink-0">✓</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{m.formule}</p>
                {m.demo && (
                  <Link href={m.demo} className="text-sm font-bold text-brand-light dark:text-brand-dark hover:underline">
                    Voir un exemple de site →
                  </Link>
                )}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-20">
          Votre métier n'est pas dans la liste ? Chaque site est conçu sur-mesure :{" "}
          <Link href="/devis?type=artisan" className="text-brand-light dark:text-brand-dark font-bold hover:underline">parlez-moi de votre activité</Link>
          {" "}ou consultez{" "}
          <Link href="/tarifs" className="text-brand-light dark:text-brand-dark font-bold hover:underline">le détail des tarifs</Link>.
        </p>
      </FadeIn>

      {/* --- ZONE D'INTERVENTION --- */}
      <FadeIn>
        <div className="max-w-3xl mx-auto mb-20 p-8 md:p-12 bg-gray-50 dark:bg-gray-800/80 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm text-center">
          <h2 className="text-2xl font-bold mb-4">Zone d&apos;intervention</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Rendez-vous en personne à Tournan-en-Brie et dans les communes voisines de Seine-et-Marne,
            à distance sur Paris et partout en France.
          </p>
          <ul className="flex flex-wrap justify-center gap-2">
            {communes.map((c) => (
              <li key={c} className="px-4 py-1.5 rounded-full bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark text-sm font-medium">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>

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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 shrink-0 text-brand-light dark:text-brand-dark transition-transform group-open:rotate-45">
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
        titre="Un projet de site à Tournan ou aux alentours ?"
        texte="Décrivez-moi votre activité : je vous propose un rendez-vous et un devis gratuit, sans engagement."
        principal={{ href: "/devis?type=artisan", label: "Demander un devis gratuit" }}
      />
    </main>
  );
}
