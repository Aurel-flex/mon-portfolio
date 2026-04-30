"use client"; // 🌟 Obligatoire pour utiliser les onglets (useState)

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

export default function APropos() {
  // 🌟 Notre état pour gérer l'onglet actif
  const [activeTab, setActiveTab] = useState<'parcours' | 'interets'>('parcours');

  return (
    <main className="flex flex-col items-center w-full px-6 pt-12 md:pt-16 pb-24 max-w-4xl mx-auto">
      
      {/* --- SECTION 1 : PRÉSENTATION RAPIDE & CV --- */}
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center tracking-tight">
          À <span className="text-brand-light dark:text-brand-dark">propos</span>
        </h1>
        
        
              <div className="relative max-w-3xl mx-auto mb-12 p-8 md:p-12 bg-gray-50 dark:bg-gray-800/80 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          
          {/* Icône décorative (Guillemets géants en arrière-plan) */}
          <div className="absolute top-4 left-6 text-brand-light/10 dark:text-brand-dark/10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          <div className="relative z-10 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            <p>
              Responsable de projets numériques chez Orange et en agence, j'allie aujourd'hui ma passion pour la 
              <strong className="text-brand-light dark:text-brand-dark"> création numérique éco-conçue </strong> 
              et la <strong className="text-brand-light dark:text-brand-dark">pédagogie</strong>.
            </p>
            <p className="mt-6 font-semibold text-gray-900 dark:text-gray-100">
              Mon objectif ? Créer des outils digitaux performants tout en transmettant les clés de la tech et de la gestion de projet.
            </p>
          </div>
        </div>

        {/* Le bouton de téléchargement du CV */}
        <div className="flex justify-center mb-16">
          <a 
            href="/cv-aurelien.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-light dark:bg-brand-dark text-white dark:text-gray-900 px-8 py-4 rounded-full font-bold hover:opacity-90 transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-light/50 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Télécharger mon CV (PDF)
          </a>
        </div>
      </FadeIn>

      {/* --- SECTION 2 : NAVIGATION PAR ONGLETS --- */}
      <div className="w-full mb-16 border-b border-gray-200 dark:border-gray-800">
        <div className="flex justify-center gap-8 md:gap-16">
          <button 
            onClick={() => setActiveTab('parcours')}
            className={`pb-4 text-lg font-bold transition-all relative ${
              activeTab === 'parcours' 
              ? "text-brand-light dark:text-brand-dark" 
              : "text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300"
            }`}
          >
            Mon Parcours
            {activeTab === 'parcours' && <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-light dark:bg-brand-dark rounded-t-full"></span>}
          </button>
          
          <button 
            onClick={() => setActiveTab('interets')}
            className={`pb-4 text-lg font-bold transition-all relative ${
              activeTab === 'interets' 
              ? "text-brand-light dark:text-brand-dark" 
              : "text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300"
            }`}
          >
            Centres d'intérêt
            {activeTab === 'interets' && <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-light dark:bg-brand-dark rounded-t-full"></span>}
          </button>
        </div>
      </div>

      {/* --- SECTION 3 : CONTENU DYNAMIQUE --- */}
      <div className="w-full">
        {activeTab === 'parcours' ? (
          
          /* =========================================
             CONTENU DE L'ONGLET "PARCOURS"
             ========================================= */
          <div className="w-full flex flex-col gap-20">
            {/* --- SECTION EXPÉRIENCES PRO --- */}
            <section>
              <FadeIn>
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark text-2xl">
                    💼
                  </span>
                  Expériences Professionnelles
                </h2>
              </FadeIn>

              <div className="relative border-l-2 border-gray-100 dark:border-gray-800 ml-6">
                
                {/* --- Indépendant --- */}
                <FadeIn>
                  <div className="mb-12 ml-10 relative">
                    <span className="absolute flex items-center justify-center w-4 h-4 bg-brand-light dark:bg-brand-dark rounded-full -left-[49px] top-1.5 ring-8 ring-white dark:ring-gray-900"></span>
                    <h3 className="text-2xl font-bold">Assistant & Formateur Numérique</h3>
                    <p className="text-brand-light dark:text-brand-dark font-medium mt-1 mb-4">Indépendant • 2 ans</p>
                    
                    <ul className="text-gray-600 dark:text-gray-400 space-y-3 text-lg leading-relaxed">
                      <li className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-light dark:text-brand-dark shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        <span>Formations numériques individuelles dédiées aux personnes âgées.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-light dark:text-brand-dark shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        <span>Accompagnement et tutorat d'étudiants dans les métiers du numérique.</span>
                      </li>
                    </ul>
                  </div>
                </FadeIn>

                {/* --- Reflet Digital --- */}
                <FadeIn>
                  <div className="mb-12 ml-10 relative">
                    <span className="absolute flex items-center justify-center w-4 h-4 bg-brand-light dark:bg-brand-dark rounded-full -left-[49px] top-1.5 ring-8 ring-white dark:ring-gray-900"></span>
                    <h3 className="text-2xl font-bold">Chef de Projet Web</h3>
                    <p className="text-brand-light dark:text-brand-dark font-medium mt-1 mb-4">Agence Reflet Digital • 1 an</p>
                    <ul className="text-gray-600 dark:text-gray-400 space-y-3 text-lg leading-relaxed">
                      <li className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-light dark:text-brand-dark shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        <span>Chefferie de projet et Tierce Maintenance Applicative (TMA) sur plusieurs plateformes :</span>
                      </li>
                      <ul className="list-disc list-outside ml-12 space-y-2">
                        <li>Le site institutionnel <a href="https://www.espace-aubade.fr" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4 hover:text-brand-light dark:hover:text-brand-dark transition-colors">Espace Aubade</a>.</li>
                        <li>Le site ATS de recrutement <a href="https://www.job-espace-aubade.com/" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4 hover:text-brand-light dark:hover:text-brand-dark transition-colors">Job Espace Aubade</a>.</li>
                        <li>Le site de mobilier de luxe <a href="https://www.collinet-sieges.com/fr" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4 hover:text-brand-light dark:hover:text-brand-dark transition-colors">Collinet Sièges</a>.</li>
                      </ul>
                    </ul>
                  </div>
                </FadeIn>

                {/* --- Orange --- */}
                <FadeIn>
                  <div className="mb-12 ml-10 relative">
                    <span className="absolute flex items-center justify-center w-4 h-4 bg-brand-light dark:bg-brand-dark rounded-full -left-[49px] top-1.5 ring-8 ring-white dark:ring-gray-900"></span>
                    <h3 className="text-2xl font-bold">Assistant Product Owner</h3>
                    <p className="text-brand-light dark:text-brand-dark font-medium mt-1 mb-4">Orange (Siège Social) • 3 ans</p>
                    <ul className="text-gray-600 dark:text-gray-400 space-y-3 text-lg leading-relaxed">
                      <li className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-light dark:text-brand-dark shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        <span>Participation à 2 refontes du site institutionnel <a href="https://www.orange.com" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4 hover:text-brand-light dark:hover:text-brand-dark transition-colors">orange.com</a> en méthode Agile Scrum.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-light dark:text-brand-dark shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        <span>Gestion multi-intranet sous Drupal (communication interne) et multisite WordPress (externe).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-light dark:text-brand-dark shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        <span>Formation de divers services et collaborateurs aux solutions numériques.</span>
                      </li>
                    </ul>
                  </div>
                </FadeIn>

              </div>
            </section>

            {/* --- SECTION ÉTUDES --- */}
            <section>
              <FadeIn>
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark text-2xl">
                    🎓
                  </span>
                  Études & Diplômes
                </h2>
              </FadeIn>

              <div className="relative border-l-2 border-gray-100 dark:border-gray-800 ml-6">
                <FadeIn>
                  <div className="mb-10 ml-10 relative">
                    <span className="absolute flex items-center justify-center w-4 h-4 bg-brand-light dark:bg-brand-dark rounded-full -left-[49px] top-1.5 ring-8 ring-white dark:ring-gray-900"></span>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">Mastère 2 - Communication Digitale & Marketing d'Influence</h3>
                    <p className="text-brand-light dark:text-brand-dark font-medium mt-1 mb-4">ESG - Ecole Supérieur de Gestion - Strasbourg</p>
                  </div>
                </FadeIn>
                <FadeIn>
                  <div className="mb-10 ml-10 relative">
                    <span className="absolute flex items-center justify-center w-4 h-4 bg-brand-light dark:bg-brand-dark rounded-full -left-[49px] top-1.5 ring-8 ring-white dark:ring-gray-900"></span>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">Master 1 - Culture et Métiers du Web</h3>
                    <p className="text-brand-light dark:text-brand-dark font-medium mt-1 mb-4">Université Gustave Eiffel - Champs-sur-marne</p>
                  </div>
                </FadeIn>
                <FadeIn>
                  <div className="mb-10 ml-10 relative">
                    <span className="absolute flex items-center justify-center w-4 h-4 bg-brand-light dark:bg-brand-dark rounded-full -left-[49px] top-1.5 ring-8 ring-white dark:ring-gray-900"></span>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">Licence MITIC - Communication et Management</h3>
                    <p className="text-brand-light dark:text-brand-dark font-medium mt-1 mb-4">Université Gustave Eiffel - Val d'Europe</p>
                  </div>
                </FadeIn>
                <FadeIn>
                  <div className="mb-4 ml-10 relative">
                    <span className="absolute flex items-center justify-center w-4 h-4 bg-brand-light dark:bg-brand-dark rounded-full -left-[49px] top-1.5 ring-8 ring-white dark:ring-gray-900"></span>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">DUT MMI - Métiers du Multimédia et de l'Internet</h3>
                    <p className="text-brand-light dark:text-brand-dark font-medium mt-1 mb-4">Université Gustave Eiffel - Champs-sur-marne</p>
                  </div>
                </FadeIn>
              </div>
            </section>
          </div>

        ) : (

          /* =========================================
             CONTENU DE L'ONGLET "CENTRES D'INTÉRÊT"
             ========================================= */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <FadeIn>
              <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark rounded-2xl flex items-center justify-center mb-6">
                  {/* Icône Globe / Environnement */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Éco-conception</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Je m'intéresse de près à l'impact environnemental du numérique. Je privilégie les architectures légères et les bonnes pratiques pour un web plus durable.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark rounded-2xl flex items-center justify-center mb-6">
                  {/* Icône Diplôme / Pédagogie */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Pédagogie & Transmission</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Ancien assistant numérique, j'aime vulgariser des concepts complexes. La transmission est pour moi le prolongement naturel de l'expertise technique.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark rounded-2xl flex items-center justify-center mb-6">
                  {/* Icône Ordinateur / Code */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Culture Tech</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Passionné par l'évolution des usages, de l'UX Design et de l'histoire du réseau. Je suis toujours en veille sur les nouvelles méthodes de développement.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark rounded-2xl flex items-center justify-center mb-6">
                  {/* Icône Carte / Mobilité */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Mobilité & Extérieur</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  En dehors des écrans, j'apprécie la simplicité des déplacements à vélo et les balades pour me déconnecter et m'aérer l'esprit.
                </p>
              </div>
            </FadeIn>

          </div>
        )}
      </div>
    </main>
  );
}