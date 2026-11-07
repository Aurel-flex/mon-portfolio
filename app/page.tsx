import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { projets } from "@/data/projets";

// Projets mis en avant sur l'accueil (le premier s'affiche en pleine largeur)
const projetsVedette = ["demo-valbrie-toitures", "refonte-orange", "demo-osteo-des-tilleuls"]
  .map((slug) => projets.find((p) => p.slug === slug))
  .filter((p) => p !== undefined);

// Références : déposer le logo dans public/references/ et renseigner "logo" pour remplacer le nom par l'image
const references: { nom: string; url: string; logo?: string }[] = [
  { nom: "Orange", url: "https://www.orange.com/fr" },
  { nom: "Reflet Digital", url: "https://www.reflet-digital.com/fr" },
  { nom: "Espace Aubade", url: "https://www.espace-aubade.fr" },
  { nom: "Collinet Sièges", url: "https://www.collinet-sieges.com/fr" },
  { nom: "Monnaie Cuivre", url: "https://www.monnaie-cuivre.fr" },
  { nom: "Celuga", url: "https://www.celuga.fr" },
];

const chiffres = [
  { valeur: "6 ans", label: "de gestion de projets web, en entreprise, en agence puis en indépendant" },
  { valeur: "2", label: "refontes du site orange.com menées en Agile Scrum" },
  { valeur: "1", label: "seul interlocuteur, de la maquette à la mise en ligne" },
];

const badgesHero = ["Sites dès 800 €", "Devis gratuit", "Rendez-vous en personne"];

const aiguillage = [
  {
    href: "/creation-site-artisan-independant",
    titre: "Indépendant ou artisan ?",
    texte: "Boostez votre visibilité locale avec un site internet sur-mesure, clé en main.",
    cta: "Découvrir l'offre artisans",
    secondaire: { href: "/creation-site-internet-tournan-en-brie", label: "Près de Tournan-en-Brie ? Voir des exemples par métier" },
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
  {
    href: "/formateur-intervenant-web-agile",
    titre: "Un intervenant pédagogique ?",
    texte: "Agile, communication, développement web : formez vos étudiants avec un pro du terrain.",
    cta: "Découvrir l'offre formation",
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
  },
];

const etapes = [
  {
    numero: "1",
    titre: "On échange sur votre besoin",
    description: "Un premier contact pour comprendre votre projet, vos objectifs et vos contraintes.",
  },
  {
    numero: "2",
    titre: "Vous recevez un devis personnalisé",
    description: "Une proposition claire et adaptée à votre besoin, sans engagement de votre part.",
  },
  {
    numero: "3",
    titre: "Réalisation et mise en ligne",
    description: "Je réalise votre projet et vous accompagne jusqu'à la mise en ligne, et au-delà.",
  },
];

const fleche = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

// Sites présentés en alternance dans la maquette du hero
const sitesHero = [
  { src: "/projets/demo-valbrie-toitures.webp", url: "valbrie-toitures.fr", alt: "Exemple de site vitrine réalisé pour un couvreur" },
  { src: "/projets/demo-osteo-des-tilleuls.webp", url: "osteo-des-tilleuls.fr", alt: "Exemple de site vitrine réalisé pour un cabinet d'ostéopathie" },
];

// Calques d'alternance : le 1er contenu reste opaque en dessous, le 2e apparaît / disparaît par-dessus
// en fondu (animation "swap" décalée de 5 s), ce qui évite toute transparence à mi-fondu.
// Sans animation (motion-reduce), seul le 1er contenu reste affiché.
const calque = (i: number) =>
  i === 0 ? "" : "absolute inset-0 opacity-0 animate-swap [animation-delay:-5s] motion-reduce:hidden";

// Cadre de navigateur stylisé qui affiche les sites en fondu, dans l'ordre donné
function Navigateur({ sites, priority = false }: { sites: typeof sitesHero; priority?: boolean }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-2xl shadow-brand-light/20 dark:shadow-black/40">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="relative ml-3 flex-1 rounded-md bg-white dark:bg-gray-800 px-3 py-0.5 text-[11px] text-gray-400">
          {sites.map((site, i) => (
            <span key={site.url} className={`block truncate ${i === 0 ? "" : `${calque(1)} px-3 py-0.5 rounded-md bg-white dark:bg-gray-800`}`}>{site.url}</span>
          ))}
        </span>
      </div>
      <div className="relative aspect-video">
        {sites.map((site, i) => (
          <div key={site.src} className={`${calque(i)} ${i === 0 ? "absolute inset-0" : ""}`}>
            <Image src={site.src} alt={site.alt} fill sizes="(max-width: 768px) 90vw, 520px" className="object-cover object-top" priority={priority && i === 0} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Disposition fixe : une fenêtre devant (en bas à gauche), une derrière qui dépasse (en haut à droite).
// Les fenêtres ne bougent pas : les deux sites s'échangent en fondu (l'ordre est inversé dans la fenêtre arrière).
const fenetres = [
  { classes: "translate-y-[16%] -rotate-2 z-[2]", sites: sitesHero },
  { classes: "translate-x-[16%] rotate-3 scale-90 z-[1] opacity-85", sites: [...sitesHero].reverse() },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-clip pb-24">

      {/* --- HERO --- */}
      <section className="relative w-full">
        {/* Halos décoratifs */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-brand-light/15 dark:bg-brand-dark/10 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(109,40,217,0.12)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(167,139,250,0.10)_1px,transparent_0)] bg-[size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

        <div className="relative max-w-6xl mx-auto px-6 md:px-8 pt-10 md:pt-16 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-light/20 dark:border-brand-dark/30 bg-white/70 dark:bg-gray-900/70 px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 mb-6 backdrop-blur">
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75 animate-ping motion-reduce:animate-none" />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-green-500" />
              </span>
              Disponible · Tournan-en-Brie (77), Paris et à distance
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              Un site{" "}
              <span className="bg-gradient-to-r from-brand-light to-violet-500 dark:from-brand-dark dark:to-violet-300 bg-clip-text text-transparent">à votre image</span>,
              qui attire vos clients.
            </h1>

            <p className="max-w-xl mb-8 text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400">
              Je conçois, développe et référence des sites sur-mesure pour les artisans, indépendants
              et professionnels de santé. Un seul interlocuteur, de l&apos;idée à la mise en ligne.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
              <Link href="/devis" className="inline-flex justify-center items-center gap-2 bg-brand-light dark:bg-brand-dark text-white dark:text-gray-900 px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-brand-light/30 dark:shadow-brand-dark/20 hover:-translate-y-0.5 hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-brand-light/50">
                Demander un devis {fleche}
              </Link>
              <Link href="#realisations" className="inline-flex justify-center items-center gap-2 border-2 border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 px-8 py-3.5 rounded-xl font-bold hover:border-brand-light dark:hover:border-brand-dark hover:text-brand-light dark:hover:text-brand-dark transition-colors focus:outline-none focus:ring-4 focus:ring-brand-light/50">
                Voir mes réalisations
              </Link>
            </div>

            <ul className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              {badgesHero.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-brand-light dark:text-brand-dark">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Composition : deux fenêtres fixes dont les sites s'échangent + carte de présentation */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none mt-16 lg:mt-0 pb-8">
            <div className="relative aspect-[16/12] animate-float motion-reduce:animate-none">
              {fenetres.map((f, i) => (
                <div key={i} className={`absolute top-0 left-0 w-[84%] ${f.classes}`}>
                  <Navigateur sites={f.sites} priority={i === 0} />
                </div>
              ))}
            </div>

            {/* Indicateurs synchronisés avec l'alternance */}
            <div aria-hidden="true" className="relative flex justify-center gap-2 mt-6 motion-reduce:hidden">
              <span className="relative w-6 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden">
                <span className="absolute inset-0 bg-brand-light dark:bg-brand-dark animate-swap" />
              </span>
              <span className="relative w-6 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden">
                <span className="absolute inset-0 bg-brand-light dark:bg-brand-dark opacity-0 animate-swap [animation-delay:-5s]" />
              </span>
            </div>

            <div className="absolute -bottom-2 right-2 sm:right-6 flex items-center gap-3 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl p-3 pr-5">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-brand-light dark:border-brand-dark shrink-0">
                <Image src="/aurelien-photo.webp" alt="Portrait d'Aurélien Duberville" fill sizes="56px" className="object-cover object-[center_20%]" priority />
              </div>
              <div>
                <p className="font-bold leading-tight">
                  Aurélien <span className="text-brand-light dark:text-brand-dark">D</span>.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Consultant numérique indépendant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RÉFÉRENCES --- */}
      <section className="w-full border-y border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 shrink-0">Projets menés pour</p>
          {/* Bandeau défilant : la liste est affichée deux fois pour boucler sans saut, pause au survol */}
          <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
              {[0, 1].map((copie) => (
                <ul key={copie} aria-hidden={copie === 1} className="flex shrink-0 items-center gap-x-12 pr-12">
                  {references.map((r) => (
                    <li key={r.nom} className="flex items-center h-10">
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={copie === 1 ? -1 : undefined}
                        aria-label={`${r.nom} (nouvel onglet)`}
                        className="block rounded-md focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-light/50"
                      >
                        {r.logo ? (
                          <Image
                            src={r.logo}
                            alt={r.nom}
                            width={140}
                            height={40}
                            className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                          />
                        ) : (
                          <span className="whitespace-nowrap text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-brand-light dark:hover:text-brand-dark">
                            {r.nom}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- RÉALISATIONS --- */}
      <section id="realisations" className="w-full max-w-6xl px-6 md:px-8 mt-24 scroll-mt-24">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-brand-light dark:text-brand-dark mb-2">Réalisations</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Des sites pensés pour convaincre</h2>
            </div>
            <Link href="/realisations" className="inline-flex items-center gap-2 text-brand-light dark:text-brand-dark font-bold hover:underline shrink-0">
              Voir toutes les réalisations {fleche}
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projetsVedette.map((p, i) => (
            <FadeIn key={p.slug} className={i === 0 ? "md:col-span-2" : ""}>
              <Link
                href={`/realisations/${p.slug}`}
                className="group relative block h-full rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-brand-light dark:hover:border-brand-dark hover:shadow-xl hover:shadow-brand-light/15 dark:hover:shadow-brand-dark/10"
              >
                <div className={`relative w-full ${i === 0 ? "aspect-video md:aspect-[2/1]" : "aspect-video"}`}>
                  <Image
                    src={p.image}
                    alt={`Aperçu du projet ${p.title}`}
                    fill
                    sizes={i === 0 ? "(max-width: 768px) 100vw, 1120px" : "(max-width: 768px) 100vw, 560px"}
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.slice(0, 2).map((t) => (
                      <span key={t} className="rounded-full px-3 py-1 text-xs font-semibold text-white bg-brand-light/75 backdrop-blur-md ring-1 ring-inset ring-white/25">{t}</span>
                    ))}
                  </div>
                  <h3 className={`font-bold tracking-tight ${i === 0 ? "text-2xl md:text-3xl" : "text-xl"}`}>{p.title}</h3>
                  {i === 0 && <p className="mt-2 text-white/80 max-w-md line-clamp-2">{p.description}</p>}
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    Découvrir le projet {fleche}
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* --- CHIFFRES --- */}
      <section className="w-full max-w-6xl px-6 md:px-8 mt-24">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chiffres.map((c) => (
              <div key={c.valeur + c.label} className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8">
                <p className="text-5xl font-black tracking-tight bg-gradient-to-r from-brand-light to-violet-500 dark:from-brand-dark dark:to-violet-300 bg-clip-text text-transparent mb-3">
                  {c.valeur}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{c.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* --- SECTION AIGUILLAGE : ARTISAN vs FORMATEUR --- */}
      <FadeIn>
        <section className="w-full max-w-4xl px-6 md:px-8 mt-28">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center tracking-tight">
            Quel est votre <span className="text-brand-light dark:text-brand-dark">besoin</span> ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiguillage.map((bloc) => (
              <div
                key={bloc.href}
                className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:border-brand-light dark:hover:border-brand-dark hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d={bloc.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">{bloc.titre}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{bloc.texte}</p>
                {/* Le lien principal couvre toute la carte (after:inset-0), le lien secondaire passe au-dessus */}
                <Link
                  href={bloc.href}
                  className="inline-flex items-center gap-2 text-brand-light dark:text-brand-dark font-bold group-hover:underline after:absolute after:inset-0 after:rounded-3xl"
                >
                  {bloc.cta}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                {"secondaire" in bloc && bloc.secondaire && (
                  <Link
                    href={bloc.secondaire.href}
                    className="relative z-10 block mt-3 text-sm text-gray-500 dark:text-gray-400 hover:text-brand-light dark:hover:text-brand-dark hover:underline underline-offset-4"
                  >
                    {bloc.secondaire.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* --- SECTION "COMMENT ÇA SE PASSE" --- */}
      <FadeIn>
        <section className="w-full max-w-4xl px-6 md:px-8 mt-28">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center tracking-tight">
            Comment ça se <span className="text-brand-light dark:text-brand-dark">passe</span>
          </h2>

          <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-4">
            {etapes.map((etape, index) => (
              <div key={etape.numero} className="flex items-stretch flex-1 gap-4">
                <FadeIn>
                  <div className="group relative h-full overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:border-brand-light dark:hover:border-brand-dark hover:-translate-y-1 transition-all duration-300">
                    {/* Chiffre géant décoratif en arrière-plan */}
                    <span
                      aria-hidden="true"
                      className="absolute -top-6 -right-3 text-8xl font-black text-brand-light/5 dark:text-brand-dark/5 select-none"
                    >
                      {etape.numero}
                    </span>

                    <div className="relative z-10">
                      <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark font-bold text-lg mb-5 group-hover:bg-brand-light group-hover:text-white dark:group-hover:bg-brand-dark dark:group-hover:text-gray-900 transition-colors">
                        {etape.numero}
                      </div>
                      <h3 className="font-bold text-lg mb-2">{etape.titre}</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{etape.description}</p>
                    </div>
                  </div>
                </FadeIn>

                {/* Connecteur entre les étapes (bureau uniquement) */}
                {index < etapes.length - 1 && (
                  <div aria-hidden="true" className="hidden md:flex items-center shrink-0 text-brand-light/30 dark:text-brand-dark/30">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/tarifs"
              className="inline-flex items-center gap-2 text-brand-light dark:text-brand-dark font-bold hover:underline"
            >
              Voir les tarifs : sites dès 800 € {fleche}
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* --- APPEL FINAL --- */}
      <FadeIn>
        <section className="w-full max-w-6xl px-6 md:px-8 mt-28">
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-light px-8 py-14 md:p-16 text-center text-white">
            <div aria-hidden="true" className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10" />
            <h2 className="relative text-3xl md:text-5xl font-bold tracking-tight mb-4">Un projet de site ? Parlons-en.</h2>
            <p className="relative text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10">
              Décrivez-moi votre activité : vous recevez une proposition claire, gratuite et sans engagement.
            </p>
            <div className="relative flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/devis" className="inline-flex justify-center items-center gap-2 bg-white text-brand-light px-8 py-4 rounded-xl font-bold shadow-lg hover:-translate-y-0.5 transition-transform">
                Demander un devis gratuit {fleche}
              </Link>
              <Link href="/contact" className="inline-flex justify-center items-center gap-2 border-2 border-white/40 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
                Poser une question
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

    </main>
  );
}
