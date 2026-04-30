import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function MentionsLegales() {
  return (
    <main className="max-w-4xl mx-auto w-full px-6 pt-12 md:pt-16 pb-24">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center tracking-tight">
          Mentions <span className="text-brand-light dark:text-brand-dark">Légales</span>
        </h1>
        
        <div className="bg-gray-50 dark:bg-gray-800/80 p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          
          {/* Section Éditeur du site */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              1. Éditeur du site
            </h2>
            <p className="mb-2">Le présent site web est édité par :</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Nom et Prénom :</strong> Aurélien Duberville</li>
              <li><strong>Adresse :</strong> 22 rue Primo Lévi, France</li>
              <li><strong>Email :</strong> <a href="mailto:contact@aurelienduberville.fr" className="text-brand-light dark:text-brand-dark hover:underline">contact@aurelienduberville.fr</a></li>
              <li><strong>Directeur de la publication :</strong> Aurélien Duberville</li>
            </ul>
          </section>

          {/* Section Hébergement */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              2. Hébergement
            </h2>
            <p className="mb-2">Le site est hébergé par :</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Nom de l'hébergeur :</strong> Hostinger International Ltd.</li>
              <li><strong>Adresse :</strong> 61 Lordou Vironos Street, 6023 Larnaca, Chypre</li>
              <li><strong>Site web :</strong> <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" className="text-brand-light dark:text-brand-dark hover:underline">www.hostinger.fr</a></li>
            </ul>
          </section>

          {/* Section Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              3. Propriété intellectuelle
            </h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          {/* Section Données personnelles et Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              4. Données personnelles et Cookies
            </h2>
            <p className="mb-4">
              Dans une démarche d'éco-conception et de respect de la vie privée, ce site limite au maximum la collecte de données.
            </p>
            <p className="mb-4">
              <strong>Formulaire de contact :</strong> Les informations recueillies via le formulaire de contact (nom, email, message) sont destinées uniquement à Aurélien Duberville dans le but de répondre à votre demande. Elles ne sont ni vendues, ni cédées à des tiers. Conformément à la loi « Informatique et Libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant l'adresse email mentionnée ci-dessus.
            </p>
            <p>
              <strong>Cookies :</strong> Le site utilise Google Analytics pour mesurer l'audience. Ces traceurs ne sont déposés sur votre terminal qu'avec votre consentement explicite, recueilli via notre bandeau dédié lors de votre première visite. Votre choix est mémorisé pour une durée de 6 mois.
            </p>
          </section>

          {/* Section Éco-conception */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              5. Démarche d'éco-conception
            </h2>
            <p>
              Ce site portfolio a été développé avec une volonté de minimiser son impact environnemental. Le code a été optimisé (Next.js, architecture statique), les requêtes serveur sont limitées, et le mode sombre par défaut permet de réduire la consommation énergétique sur les écrans compatibles (OLED).
            </p>
          </section>

        </div>
        
        {/* Bouton de retour */}
        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-brand-light dark:text-brand-dark font-bold hover:underline transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Retour à l'accueil
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}