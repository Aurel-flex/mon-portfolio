import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const reperes = [
  { titre: "Tournan-en-Brie (77)", texte: "Rendez-vous en Seine-et-Marne, Paris et à distance" },
  { titre: "6 ans", texte: "de projets web : Orange, agence, indépendant" },
  { titre: "Formateur", texte: "Agile, communication et développement web" },
];

type Experience = {
  poste: string;
  structure: string;
  points: React.ReactNode[];
  sites?: { nom: string; url: string; detail: string }[];
};

const lienClasses = "font-medium underline underline-offset-4 hover:text-brand-light dark:hover:text-brand-dark transition-colors";

const experiences: Experience[] = [
  {
    poste: "Consultant numérique et Formateur indépendant",
    structure: "Indépendant · 2 ans",
    points: [
      "Création de sites internet sur mesure pour des particuliers et des indépendants.",
      "Formations numériques individuelles dédiées aux personnes âgées.",
      "Accompagnement et tutorat d'étudiants dans les métiers du numérique.",
    ],
  },
  {
    poste: "Chef de Projet numérique",
    structure: "Agence Reflet Digital · 1 an",
    points: ["Chefferie de projet et Tierce Maintenance Applicative (TMA) sur plusieurs plateformes :"],
    sites: [
      { nom: "Espace Aubade", url: "https://www.espace-aubade.fr", detail: "Le site institutionnel" },
      { nom: "Job Espace Aubade", url: "https://www.job-espace-aubade.com/", detail: "Le site ATS de recrutement" },
      { nom: "Collinet Sièges", url: "https://www.collinet-sieges.com/fr", detail: "Le site de mobilier de luxe" },
    ],
  },
  {
    poste: "Product Owner | Chef de projet",
    structure: "Orange (Siège social) · 3 ans",
    points: [
      <>Participation à 2 refontes du site institutionnel <a href="https://www.orange.com" target="_blank" rel="noopener noreferrer" className={lienClasses}>orange.com</a> en méthode Agile Scrum.</>,
      "Gestion multi-intranet sous Drupal (communication interne) et multisite WordPress (externe).",
      "Formation de divers services et collaborateurs aux solutions numériques.",
    ],
  },
];

const diplomes = [
  { titre: "Master 2 - Communication Digitale & Marketing d'Influence", ecole: "ESG - École Supérieure de Gestion - Strasbourg" },
  { titre: "Master 1 - Culture et Métiers du Web", ecole: "Université Gustave Eiffel - Champs-sur-Marne" },
  { titre: "Licence MITIC - Communication et Management", ecole: "Université Gustave Eiffel - Val d'Europe" },
  { titre: "DUT MMI - Métiers du Multimédia et de l'Internet", ecole: "Université Gustave Eiffel - Champs-sur-Marne" },
];

const interets = [
  {
    titre: "Éco-conception",
    texte: "Je m'intéresse de près à l'impact environnemental du numérique. Je privilégie les architectures légères et les bonnes pratiques pour un web plus durable.",
    icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
  },
  {
    titre: "Pédagogie et Transmission",
    texte: "Assistant numérique, j'aime vulgariser des concepts complexes. La transmission est pour moi le prolongement naturel de l'expertise technique.",
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
  },
  {
    titre: "Culture Tech",
    texte: "Passionné par l'évolution des usages, de l'UX Design et de l'histoire du réseau. Je suis toujours en veille sur les nouvelles méthodes de développement.",
    icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25",
  },
  {
    titre: "Mobilité & Extérieur",
    texte: "En dehors des écrans, j'apprécie la simplicité des déplacements à vélo et les balades pour me déconnecter et m'aérer l'esprit.",
    icon: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z",
  },
];

const chevron = (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-light dark:text-brand-dark shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

// Titre de section avec pastille violette (mallette, toque…)
function TitreSection({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
      <span aria-hidden="true" className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-brand-light text-white dark:bg-brand-dark dark:text-gray-900 shadow-md shadow-brand-light/30 -rotate-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </span>
      {children}
    </h2>
  );
}

const pointTimeline = "absolute w-4 h-4 bg-brand-light dark:bg-brand-dark rounded-full -left-[49px] top-1.5 ring-8 ring-white dark:ring-gray-900";

export default function APropos() {
  return (
    <main className="w-full overflow-x-clip pb-24">

      {/* --- PRÉSENTATION : GRANDE PHOTO + TEXTE --- */}
      <section className="relative">
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/4 w-[700px] h-[420px] rounded-full bg-brand-light/10 dark:bg-brand-dark/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 md:px-8 pt-8 md:pt-14 grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-12 lg:gap-16 items-center">
          <FadeIn>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              {/* Cadre décalé derrière la photo */}
              <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-brand-light dark:border-brand-dark" />
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-light/20 dark:shadow-black/40 bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/aurelien-photo.webp"
                  alt="Portrait d'Aurélien Duberville, consultant numérique et formateur"
                  fill
                  sizes="(max-width: 1024px) 384px, 480px"
                  className="object-cover object-[center_15%]"
                  priority
                />
              </div>
              <p className="absolute -bottom-5 left-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg px-4 py-2 text-xl font-bold tracking-tight">
                Aurélien <span className="text-brand-light dark:text-brand-dark">D</span>.
              </p>
            </div>
          </FadeIn>

          <div className="text-center lg:text-left">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-light dark:text-brand-dark mb-3">À propos</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Bonjour, moi c&apos;est <span className="text-brand-light dark:text-brand-dark">Aurélien</span>.
            </h1>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
              <p>
                Responsable de projets numériques chez Orange puis en agence, j&apos;allie aujourd&apos;hui ma passion pour la
                <strong className="text-brand-light dark:text-brand-dark"> création numérique éco-conçue </strong>
                et la <strong className="text-brand-light dark:text-brand-dark">pédagogie</strong>.
              </p>
              <p>
                Mon objectif ? Créer des sites qui vous conviennent tout en transmettant les clés du numérique et de la gestion de projet.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
              {reperes.map((r) => (
                <li key={r.titre} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 p-4">
                  <p className="font-bold">{r.titre}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{r.texte}</p>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="/CV_Aurelien_Duberville_Consultant_Numerique.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-brand-light dark:bg-brand-dark text-white dark:text-gray-900 px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-brand-light/30 hover:-translate-y-0.5 transition-transform focus:outline-none focus:ring-4 focus:ring-brand-light/50"
              >
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Télécharger mon CV (PDF)
              </a>
              <Link
                href="/contact"
                className="inline-flex justify-center items-center gap-2 border-2 border-gray-200 dark:border-gray-700 px-7 py-3.5 rounded-xl font-bold hover:border-brand-light dark:hover:border-brand-dark hover:text-brand-light dark:hover:text-brand-dark transition-colors focus:outline-none focus:ring-4 focus:ring-brand-light/50"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 md:px-8 mt-28 flex flex-col gap-24">

        {/* --- EXPÉRIENCES PRO --- */}
        <section>
          <FadeIn>
            <TitreSection icon="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
              Expériences Professionnelles
            </TitreSection>
          </FadeIn>

          <div className="relative border-l-2 border-gray-100 dark:border-gray-800 ml-6">
            {experiences.map((exp) => (
              <FadeIn key={exp.poste}>
                <div className="mb-12 ml-10 relative">
                  <span className={pointTimeline} />
                  <h3 className="text-2xl font-bold">{exp.poste}</h3>
                  <p className="text-brand-light dark:text-brand-dark font-medium mt-1 mb-4">{exp.structure}</p>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-3 text-lg leading-relaxed">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {chevron}
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.sites && (
                    <ul className="list-disc list-outside ml-12 mt-3 space-y-2 text-gray-600 dark:text-gray-400 text-lg">
                      {exp.sites.map((site) => (
                        <li key={site.nom}>
                          {site.detail}{" "}
                          <a href={site.url} target="_blank" rel="noopener noreferrer" className={lienClasses}>{site.nom}</a>.
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* --- ÉTUDES --- */}
        <section>
          <FadeIn>
            <TitreSection icon="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5">
              Études et Diplômes
            </TitreSection>
          </FadeIn>

          <div className="relative border-l-2 border-gray-100 dark:border-gray-800 ml-6">
            {diplomes.map((d) => (
              <FadeIn key={d.titre}>
                <div className="mb-10 ml-10 relative">
                  <span className={pointTimeline} />
                  <h3 className="text-xl md:text-2xl font-bold leading-tight">{d.titre}</h3>
                  <p className="text-brand-light dark:text-brand-dark font-medium mt-1">{d.ecole}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* --- CENTRES D'INTÉRÊT --- */}
        <section>
          <FadeIn>
            <TitreSection icon="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">
              Centres d&apos;intérêt
            </TitreSection>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interets.map((it) => (
              <FadeIn key={it.titre} className="h-full">
                <div className="h-full p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark rounded-2xl flex items-center justify-center mb-6">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d={it.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{it.titre}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{it.texte}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* --- APPEL FINAL --- */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-light px-8 py-12 md:p-14 text-center text-white">
            <div aria-hidden="true" className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10" />
            <h2 className="relative text-2xl md:text-4xl font-bold tracking-tight mb-4">Envie de travailler ensemble ?</h2>
            <p className="relative text-lg text-white/85 max-w-xl mx-auto mb-8">
              Un site à créer, une refonte ou une intervention en école : parlons de votre projet.
            </p>
            <div className="relative flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/devis" className="inline-flex justify-center items-center bg-white text-brand-light px-8 py-4 rounded-xl font-bold shadow-lg hover:-translate-y-0.5 transition-transform">
                Demander un devis
              </Link>
              <Link href="/realisations" className="inline-flex justify-center items-center border-2 border-white/40 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
                Voir mes réalisations
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
