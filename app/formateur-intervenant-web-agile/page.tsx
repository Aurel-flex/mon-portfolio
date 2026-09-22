import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intervenant / Formateur externe : Agile, Communication & Développement Web",
  description:
    "Recherchez-vous un intervenant externe en gestion de projet Agile, communication ou développement web front-end ? Pédagogie active, cas réels, adaptable du Bac au Bac+5.",
};

const piliers = [
  {
    titre: "Gestion de projet Agile",
    texte: "Scrum, Kanban, pilotage de projet, animation de rituels — comprendre et pratiquer les méthodes réellement utilisées en entreprise.",
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
  },
  {
    titre: "Communication & Posture",
    texte: "Communication de projet, prise de parole, restitution client : les savoir-être qui font la différence en entretien comme en poste.",
    icon: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
  },
  {
    titre: "Développement Web Front-End",
    texte: "HTML5, CSS3, responsive design, intégration et administration WordPress — de la théorie à un vrai mini-projet.",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  },
];

const formats = [
  "Vacations",
  "Modules intensifs",
  "Cours magistraux",
  "Jurys",
  "Suivi de projets",
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Intervenant / Formateur externe en Agile, Communication et Développement Web",
  description:
    "Interventions pédagogiques pour écoles, universités et organismes de formation : gestion de projet Agile, communication, développement web front-end.",
  provider: { "@type": "Person", name: "Aurélien Duberville", url: "https://www.aurelienduberville.fr" },
  areaServed: "France",
  url: "https://www.aurelienduberville.fr/formateur-intervenant-web-agile",
};

export default function FormateurInterventantWebAgile() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-12 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center tracking-tight">
          Intervenant & <span className="text-brand-light dark:text-brand-dark">Formateur externe</span>
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
          Responsable pédagogique en école, université ou bootcamp ? Je recherche des missions d'enseignement
          en gestion de projet Agile, communication et développement web front-end, avec une pédagogie ancrée
          dans la pratique et les cas réels d'entreprise.
        </p>
      </FadeIn>

      {/* --- PILIERS ENSEIGNÉS --- */}
      <FadeIn>
        <h2 className="text-3xl font-bold mb-10 text-center tracking-tight">
          Modules & <span className="text-brand-light dark:text-brand-dark">piliers enseignés</span>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {piliers.map((p) => (
          <FadeIn key={p.titre}>
            <div className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 hover:border-brand-light dark:hover:border-brand-dark transition-colors shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">{p.titre}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{p.texte}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* --- PROFIL PÉDAGOGIQUE --- */}
      <FadeIn>
        <div className="max-w-3xl mx-auto mb-16 p-8 md:p-12 bg-gray-50 dark:bg-gray-800/80 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">Profil pédagogique</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            Mise en pratique par des projets concrets et des cas réels, pédagogie active, adaptation au niveau
            du public — du Bac au Bac+5, y compris en reconversion professionnelle.
          </p>
        </div>
      </FadeIn>

      {/* --- DISPONIBILITÉS & FORMATS --- */}
      <FadeIn>
        <h2 className="text-2xl font-bold mb-6 text-center">Disponibilités & formats</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {formats.map((f) => (
            <span
              key={f}
              className="px-5 py-2 rounded-full bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark font-medium"
            >
              {f}
            </span>
          ))}
        </div>
      </FadeIn>

      <FadeIn>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-16">
          Envie de voir le détail complet de tous mes modules ?{" "}
          <Link href="/interventions" className="text-brand-light dark:text-brand-dark font-bold hover:underline">
            Découvrez mes interventions pédagogiques
          </Link>.
        </p>
      </FadeIn>

      <FadeIn>
        <div className="bg-brand-light dark:bg-brand-dark rounded-3xl p-8 md:p-12 text-center text-white dark:text-gray-900 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Une mission d'enseignement à pourvoir ?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl">
            Décrivez-moi votre besoin (niveau, volume horaire, format), je reviens vers vous rapidement.
          </p>
          <Link
            href="/devis?type=formation"
            className="bg-white dark:bg-gray-900 text-brand-light dark:text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
          >
            Me contacter pour une mission d'enseignement
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}
