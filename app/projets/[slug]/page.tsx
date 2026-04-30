import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

// 🌟 1. On ajoute "async" et on indique que params est une "Promise"
export default async function ProjetDetail({ params }: { params: Promise<{ slug: string }> }) {
  
  // 🌟 2. On "attend" (await) que Next.js décode l'URL pour récupérer le slug
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // On cherche le projet
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const otherProjects = projects.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <main className="max-w-5xl mx-auto px-6 pt-12 pb-24">
      <FadeIn>
        
        {/* --- Bouton Retour Stylisé --- */}
        <Link href="/projets" className="group inline-flex items-center gap-2 text-gray-500 hover:text-brand-light dark:text-gray-400 dark:hover:text-brand-dark font-medium mb-10 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour aux projets
        </Link>

        {/* --- En-tête du projet --- */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm font-semibold rounded-full text-gray-700 dark:text-gray-300">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark rounded-md text-sm font-bold tracking-wide uppercase">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* --- Image Principale Éco-conçue --- */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl mb-16 bg-gray-100 dark:bg-gray-800">
          <Image
            src={project.image}
            alt={`Aperçu du projet ${project.title}`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* --- Contenu : Disposition en 2 colonnes --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
               {/* 🌟 Remplacement de l'emoji par une icône SVG stylisée */}
               <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                 </svg>
               </span>
               À propos du projet
            </h2>
            <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-6">
              <p>{project.fullDescription}</p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 h-fit">
            <h3 className="text-xl font-bold mb-6">Détails</h3>
            
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Type</p>
                <p className="font-bold">{project.category}</p>
              </div>
            </div>

            {project.link ? (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 w-full bg-brand-light dark:bg-brand-dark text-white dark:text-gray-900 px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all hover:scale-[1.02] shadow-md"
              >
                Visiter le site
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              <p className="text-sm italic text-gray-500 text-center">Ce projet est un outil interne non accessible au public.</p>
            )}
          </div>

        </div>

        <hr className="border-gray-200 dark:border-gray-800 mb-16" />

        {/* --- Section "Continuer l'exploration" --- */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Continuer l'exploration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map(op => (
              <Link key={op.id} href={`/projets/${op.slug}`} className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-brand-light dark:hover:border-brand-dark transition-all shadow-sm hover:shadow-md">
                <p className="text-sm text-brand-light dark:text-brand-dark font-medium mb-2">{op.category}</p>
                <h4 className="font-bold text-xl group-hover:text-brand-light dark:group-hover:text-brand-dark transition-colors flex items-center justify-between">
                  {op.title}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </h4>
              </Link>
            ))}
          </div>
        </div>
        
      </FadeIn>
    </main>
  );
}