import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next"; // 🌟 Import ajouté

// 🌟 Métadonnées SEO et GEO intégrées directement
export const metadata: Metadata = {
  title: "Interventions Pédagogiques | Aurélien Duberville",
  description: "Modules de formation en école : Gestion de Projet Agile (Scrum), Initiation au Web (HTML/CSS/JS), WordPress et Culture Numérique.",
};
export default function Interventions() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-12 pb-24">
      
      {/* --- EN-TÊTE & PITCH --- */}
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight">
          Interventions <span className="text-brand-light dark:text-brand-dark">Pédagogiques</span>
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
                       Fort de mon expérience terrain en agence web et au siège d'Orange, j'ai à cœur de transmettre la réalité de nos métiers aux futurs professionnels. 

            </p>
            <p className="mt-6 font-semibold text-gray-900 dark:text-gray-100">
            Ayant déjà formé des collaborateurs et accompagné des étudiants en tutorat, je propose aujourd'hui d'animer des modules basés sur la pratique, les cas concrets et les méthodologies réelles utilisées en entreprise.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* --- LES MODULES (Grille de 4) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
        {/* Module 1 : Gestion de Projet Agile */}
        <FadeIn>
          <div className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 hover:border-brand-light dark:hover:border-brand-dark transition-colors shadow-sm">
            <div className="w-14 h-14 bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark rounded-2xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold mb-3">Gestion de Projet Agile (Scrum)</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 h-12">
              Dépasser la théorie pour comprendre comment une équipe produit fonctionne réellement au quotidien.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex gap-2 text-sm">
                <span className="font-bold text-gray-900 dark:text-gray-100 w-24 shrink-0">Public :</span>
                <span className="text-gray-600 dark:text-gray-400">Étudiants en Web, Communication ou Marketing.</span>
              </div>
              <div className="flex gap-2 text-sm">
                <span className="font-bold text-gray-900 dark:text-gray-100 w-24 shrink-0">Format :</span>
                <span className="text-gray-600 dark:text-gray-400">Ateliers pratiques, simulation de sprints et jeux de rôles.</span>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Objectifs pédagogiques :</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li className="flex items-start gap-2"><span className="text-brand-light dark:text-brand-dark shrink-0">✓</span> Comprendre le framework Scrum et ses rituels.</li>
              <li className="flex items-start gap-2"><span className="text-brand-light dark:text-brand-dark shrink-0">✓</span> Savoir rédiger des User Stories efficaces.</li>
              <li className="flex items-start gap-2"><span className="text-brand-light dark:text-brand-dark shrink-0">✓</span> Gérer et prioriser un backlog produit.</li>
              <li className="flex items-start gap-2"><span className="text-brand-light dark:text-brand-dark shrink-0">✓</span> Collaborer entre profils métiers et techniques.</li>
            </ul>
          </div>
        </FadeIn>

        {/* Module 2 : Initiation Dev Web */}
        <FadeIn>
          <div className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 hover:border-brand-light dark:hover:border-brand-dark transition-colors shadow-sm">
            <div className="w-14 h-14 bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark rounded-2xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold mb-3">Initiation Web : HTML, CSS & JS</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 h-12">
              Démystifier le code pour permettre aux futurs professionnels du digital de comprendre la technique.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex gap-2 text-sm">
                <span className="font-bold text-gray-900 dark:text-gray-100 w-24 shrink-0">Public :</span>
                <span className="text-gray-600 dark:text-gray-400">Profils débutants, communicants, designers ou chefs de projet.</span>
              </div>
              <div className="flex gap-2 text-sm">
                <span className="font-bold text-gray-900 dark:text-gray-100 w-24 shrink-0">Format :</span>
                <span className="text-gray-600 dark:text-gray-400">Live-coding, vulgarisation et création d'un mini-projet fil rouge.</span>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Objectifs pédagogiques :</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li className="flex items-start gap-2"><span className="text-brand-light dark:text-brand-dark shrink-0">✓</span> Comprendre l'architecture d'une page web (HTML).</li>
              <li className="flex items-start gap-2"><span className="text-brand-light dark:text-brand-dark shrink-0">✓</span> Appliquer des styles et comprendre le responsive (CSS).</li>
              <li className="flex items-start gap-2"><span className="text-brand-light dark:text-brand-dark shrink-0">✓</span> Ajouter des interactions simples (JavaScript de base).</li>
              <li className="flex items-start gap-2"><span className="text-brand-light dark:text-brand-dark shrink-0">✓</span> Acquérir le vocabulaire pour dialoguer avec des développeurs.</li>
            </ul>
          </div>
        </FadeIn>

        {/* Module 3 : CMS WordPress */}
        <FadeIn>
          <div className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 hover:border-brand-light dark:hover:border-brand-dark transition-colors shadow-sm">
            <div className="w-14 h-14 bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark rounded-2xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold mb-3">Création de sites avec WordPress</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 h-12">
              Maîtriser le CMS le plus utilisé au monde pour concevoir, gérer et administrer des projets web.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex gap-2 text-sm">
                <span className="font-bold text-gray-900 dark:text-gray-100 w-24 shrink-0">Public :</span>
                <span className="text-gray-600 dark:text-gray-400">Étudiants en Communication, E-business et Marketing.</span>
              </div>
              <div className="flex gap-2 text-sm">
                <span className="font-bold text-gray-900 dark:text-gray-100 w-24 shrink-0">Format :</span>
                <span className="text-gray-600 dark:text-gray-400">Projet fil rouge : création d'un site complet de A à Z.</span>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Objectifs pédagogiques :</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li className="flex items-start gap-2"><span className="text-brand-light dark:text-brand-dark shrink-0">✓</span> Comprendre le fonctionnement d'un CMS (Thèmes, Plugins).</li>
              <li className="flex items-start gap-2"><span className="text-brand-light dark:text-brand-dark shrink-0">✓</span> Configurer un nom de domaine et un hébergement.</li>
              <li className="flex items-start gap-2"><span className="text-brand-light dark:text-brand-dark shrink-0">✓</span> Structurer le contenu et gérer l'administration.</li>
              <li className="flex items-start gap-2"><span className="text-brand-light dark:text-brand-dark shrink-0">✓</span> Appliquer les bases du SEO et de la sécurité web.</li>
            </ul>
          </div>
        </FadeIn>

        {/* Module 4 : Culture Numérique */}
        <FadeIn>
          <div className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 hover:border-brand-light dark:hover:border-brand-dark transition-colors shadow-sm">
            <div className="w-14 h-14 bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark rounded-2xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold mb-3">Culture & Histoire du Numérique</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 h-12">
              Donner du contexte pour comprendre les enjeux d'aujourd'hui (réseaux, GAFAM, éthique).
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex gap-2 text-sm">
                <span className="font-bold text-gray-900 dark:text-gray-100 w-24 shrink-0">Public :</span>
                <span className="text-gray-600 dark:text-gray-400">Toutes filières confondues (idéal pour les 1ères années).</span>
              </div>
              <div className="flex gap-2 text-sm">
                <span className="font-bold text-gray-900 dark:text-gray-100 w-24 shrink-0">Format :</span>
                <span className="text-gray-600 dark:text-gray-400">Cours interactif, échanges, quiz de connaissances et débats.</span>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Objectifs pédagogiques :</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li className="flex items-start gap-2"><span className="text-brand-light dark:text-brand-dark shrink-0">✓</span> Connaître les dates clés et pionniers d'Internet.</li>
              <li className="flex items-start gap-2"><span className="text-brand-light dark:text-brand-dark shrink-0">✓</span> Analyser l'évolution des réseaux sociaux et leurs modèles.</li>
              <li className="flex items-start gap-2"><span className="text-brand-light dark:text-brand-dark shrink-0">✓</span> Saisir les enjeux économiques actuels (GAFAM, BATX).</li>
              <li className="flex items-start gap-2"><span className="text-brand-light dark:text-brand-dark shrink-0">✓</span> Développer un esprit critique face à la technologie.</li>
            </ul>
          </div>
        </FadeIn>

      </div>

      {/* --- CALL TO ACTION --- */}
      <FadeIn>
        <div className="bg-brand-light dark:bg-brand-dark rounded-3xl p-8 md:p-12 text-center text-white dark:text-gray-900 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Un besoin pour vos étudiants ?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl">
            Ces modules sont adaptables en fonction de vos maquettes pédagogiques (de 1 à plusieurs jours). Discutons de vos attentes et du format le plus adapté pour vos classes.
          </p>
          <Link 
            href="/contact" 
            className="bg-white dark:bg-gray-900 text-brand-light dark:text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
          >
            Discuter d'une intervention
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </FadeIn>

    </main>
  );
}