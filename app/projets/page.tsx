"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // 🌟 Import de l'image
import { projects } from "@/data/projects";
import FadeIn from "@/components/FadeIn";

export default function ProjetsHub() {
  const [filter, setFilter] = useState("Tous");

  const filteredProjects = projects.filter(p => 
    filter === "Tous" ? true : p.category === filter
  );

  return (
    <main className="max-w-5xl mx-auto px-6 pt-12 pb-24">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Mes <span className="text-brand-light dark:text-brand-dark">Projets</span></h1>
        
        {/* Section Filtres */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
          {["Tous", "Professionnels", "Personnels"].map((cat) => (
            <button
            aria-label={`Filtrer par ${cat}`}
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border-2 transition-all shrink-0 ${
                filter === cat 
                ? "bg-brand-light border-brand-light text-white dark:bg-brand-dark dark:border-brand-dark dark:text-gray-900" 
                : "border-gray-200 dark:border-gray-700 hover:border-brand-light dark:hover:border-brand-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <FadeIn key={project.id}>
            {/* Le "group" permet d'animer les enfants quand on survole la carte entière */}
            <Link href={`/projets/${project.slug}`} className="group block bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
              
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* 🌟 LE FILTRE VIOLET : Il disparaît (opacity-0) quand on survole (group-hover) */}
                <div className="absolute inset-0 bg-brand-light/40 dark:bg-brand-dark/40 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0 z-10"></div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-brand-light dark:group-hover:text-brand-dark transition-colors">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{project.description}</p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </main>
  );
}