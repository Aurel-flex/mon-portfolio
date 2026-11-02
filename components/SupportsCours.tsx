import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

// Extraits publics des supports de cours. Les images sont générées avec un filigrane incrusté ;
// les slides "verrouillées" sont floutées dans le fichier lui-même (le .pptx n'est pas en ligne).
const supports = [
  {
    slug: "scrum",
    titre: "Piloter un projet web en Agilité : les bases de Scrum",
    details: "Module Gestion de projet · 12 slides · 3 h, apports + atelier",
    apercus: [1, 5, 8, 9],
    verrouilles: [6, 11],
    total: 12,
  },
  {
    slug: "communication",
    titre: "Communiquer dans un projet : réunions, reporting et restitution client",
    details: "Module Communication · 12 slides · 3 h, apports + mise en situation",
    apercus: [1, 4, 8, 9],
    verrouilles: [5, 11],
    total: 12,
  },
];

const slideSrc = (slug: string, kind: "apercu" | "verrouille", n: number) =>
  `/supports-cours/${slug}-${kind}-${String(n).padStart(2, "0")}.webp`;

export default function SupportsCours() {
  return (
    <section className="mb-16" aria-labelledby="supports-titre">
      <FadeIn>
        <h2 id="supports-titre" className="text-3xl font-bold mb-4 text-center tracking-tight">
          Aperçu de mes <span className="text-brand-light dark:text-brand-dark">supports de cours</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Deux extraits de modules conçus pour un public BTS / Bachelor : des slides claires, un fil rouge concret
          et des ateliers pour mettre en pratique. Le support complet est transmis sur demande.
        </p>
      </FadeIn>

      {supports.map((support) => (
        <FadeIn key={support.slug}>
          <div className="mb-14">
            <h3 className="text-xl font-bold mb-1">{support.titre}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">{support.details}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {support.apercus.map((n) => (
                <Image
                  key={n}
                  src={slideSrc(support.slug, "apercu", n)}
                  alt={`${support.titre}, aperçu de la slide ${n}`}
                  width={1200}
                  height={675}
                  sizes="(max-width: 640px) 100vw, 480px"
                  className="w-full h-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm"
                />
              ))}
            </div>

            <div className="relative mt-4 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
              <div className="grid grid-cols-1 sm:grid-cols-2" aria-hidden="true">
                {support.verrouilles.map((n) => (
                  <Image key={n} src={slideSrc(support.slug, "verrouille", n)} alt="" width={800} height={450} sizes="(max-width: 640px) 100vw, 480px" className="w-full h-auto" />
                ))}
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center bg-white/70 dark:bg-gray-900/70">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-light text-white">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </span>
                <p className="font-bold text-gray-900 dark:text-white">
                  + {support.total - support.apercus.length} slides dans le support complet
                </p>
                <Link
                  href={`/contact?sujet=intervention&support=${support.slug}`}
                  className="bg-brand-light dark:bg-brand-dark text-white dark:text-gray-900 px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-4 focus:ring-brand-light/50"
                >
                  Demander le support complet
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </section>
  );
}
