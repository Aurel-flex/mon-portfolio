import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full px-8 pt-8 md:pt-16 pb-40">
      
      {/* La section Photo de profil */}
      <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8 rounded-full overflow-hidden border-4 border-brand-light dark:border-brand-dark shadow-xl shrink-0">
        <Image
          src="/aurelien-photo.webp"
          alt="Portrait de Aurélien Duberville"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          /* 🌟 Ajout de 'object-top' pour faire descendre l'image et voir le haut de la tête */
          className="object-cover object-[center_20%]" 
          priority 
        />
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center tracking-tight">
        Aurélien Duberville
      </h1>
      
      <h2 className="text-2xl text-brand-light dark:text-brand-dark mb-8 font-medium text-center">
        Webmaster et intervenant pédagogique
      </h2>
      
      <p className="text-center max-w-lg mb-12 text-lg leading-relaxed">
        Création de sites accessibles et interventions en gestion de projet agile, communication et développement web.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a href="/a-propos" className="w-full sm:w-auto bg-brand-light dark:bg-brand-dark text-white dark:text-gray-900 px-8 py-3 rounded-md font-bold hover:opacity-90 transition-opacity focus:outline-none focus:ring-4 focus:ring-brand-light/50 dark:focus:ring-brand-dark/50 text-center">
          Me découvrir
        </a>
        
        <a href="/contact" className="w-full sm:w-auto border-2 border-brand-light dark:border-brand-dark text-brand-light dark:text-brand-dark px-8 py-3 rounded-md font-bold hover:bg-brand-light hover:text-white dark:hover:bg-brand-dark dark:hover:text-gray-900 transition-colors focus:outline-none focus:ring-4 focus:ring-brand-light/50 dark:focus:ring-brand-dark/50 text-center">
          Me contacter

        </a>
      </div>
      
    </main>
  );
}