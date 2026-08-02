import Image from "next/image";
import Link from "next/link"; // 🌟 AJOUT DE L'IMPORT ICI
import FadeIn from "@/components/FadeIn";

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

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full px-8 pt-8 md:pt-16 pb-40">
      
      {/* La section Photo de profil */}
      <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8 rounded-full overflow-hidden border-4 border-brand-light dark:border-brand-dark shadow-xl shrink-0">
        <Image
          src="/aurelien-photo.webp"
          alt="Portrait de Aurélien Duberville"
          fill
          sizes="(max-width: 768px) 250px, 210px"
          className="object-cover object-[center_20%]" 
          priority 
        />
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center tracking-tight">
        <span className="text-brand-light dark:text-brand-dark">A</span>urélien <span className="text-brand-light dark:text-brand-dark">D</span>uberville
      </h1>
      
      <h2 className="text-2xl text-brand-light dark:text-brand-dark mb-8 font-medium text-center">
        Webmaster et intervenant pédagogique
      </h2>
      
      <p className="text-center max-w-lg mb-12 text-lg leading-relaxed">
        Création de sites accessibles et interventions en gestion de projet agile, communication et développement web.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        {/* 🌟 REMPLACEMENT DES <a href> PAR <Link href> */}
        
        <Link href="/a-propos" className="w-full sm:w-auto border-2 border-brand-light dark:border-brand-dark text-brand-light dark:text-brand-dark px-8 py-3 rounded-md font-bold hover:bg-brand-light hover:text-white dark:hover:bg-brand-dark dark:hover:text-gray-900 transition-colors focus:outline-none focus:ring-4 focus:ring-brand-light/50 dark:focus:ring-brand-dark/50 text-center">
          Me découvrir
        </Link>
        
        <Link href="/contact"className="w-full sm:w-auto bg-brand-light dark:bg-brand-dark text-white dark:text-gray-900 px-8 py-3 rounded-md font-bold hover:opacity-90 transition-opacity focus:outline-none focus:ring-4 focus:ring-brand-light/50 dark:focus:ring-brand-dark/50 text-center" >
          Me contacter
        </Link>
      </div>

      {/* --- SECTION "COMMENT ÇA SE PASSE" --- */}
      <FadeIn>
        <section className="w-full max-w-4xl mt-28">
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
              Découvrir mes prestations
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>
      </FadeIn>

    </main>
  );
}