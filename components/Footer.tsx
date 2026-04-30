import Link from "next/link";

export default function Footer() {
  // Cette petite fonction récupère l'année en cours automatiquement (pratique pour le copyright !)
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-gray-100/50 dark:bg-gray-950/50 mt-auto py-10 transition-colors">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* --- Colonne de gauche : Identité & Copyright --- */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <p className="font-bold text-gray-900 dark:text-gray-100 text-lg">
            Aurélien Duberville
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
            Création de sites web éco-conçus & Interventions pédagogiques en école.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
            © {currentYear} - Tous droits réservés.
          </p>
        </div>

        {/* --- Colonne de droite : Liens Rapides --- */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <nav aria-label="Menu du pied de page" className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
            <Link href="/a-propos" className="hover:text-brand-light dark:hover:text-brand-dark transition-colors">À propos</Link>
            <Link href="/projets" className="hover:text-brand-light dark:hover:text-brand-dark transition-colors">Projets</Link>
            <Link href="/interventions" className="hover:text-brand-light dark:hover:text-brand-dark transition-colors">Interventions</Link>
            <Link href="/contact" className="hover:text-brand-light dark:hover:text-brand-dark transition-colors">Contact</Link>
          </nav>
          
          {/* Mentions Légales */}
          <Link 
            href="/mentions-legales" 
            className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 underline underline-offset-4 decoration-dotted transition-colors"
          >
            Mentions légales & Confidentialité
          </Link>
        </div>
        
      </div>
    </footer>
  );
}