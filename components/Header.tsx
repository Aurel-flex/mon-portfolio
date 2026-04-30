"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 🌟 1. On importe l'outil de Next.js

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const pathname = usePathname(); // 🌟 2. On récupère l'URL actuelle

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const closeMenu = () => setIsMenuOpen(false);

  // 🌟 3. Fonction intelligente pour gérer le style de nos liens
  const getLinkClass = (path: string) => {
    const baseStyle = "transition-colors hover:text-brand-light dark:hover:text-brand-dark";
    
    // Si c'est l'accueil, l'URL doit être exactement "/".
    // Pour les autres, on vérifie si l'URL "commence par" le chemin (ex: pour que /blog/mon-article garde le lien "Blog" actif).
    const isActive = path === "/" ? pathname === "/" : pathname.startsWith(path);
    
    return isActive 
      ? `${baseStyle} text-brand-light dark:text-brand-dark font-bold` // Le style ACTIF (Violet + Gras)
      : baseStyle; // Le style NORMAL
  };

  return (
    <header className="p-6 max-w-5xl mx-auto w-full relative z-50">
      <div className="flex justify-between items-center">
        
        {/* Ton Logo */}
        <div className="font-bold text-2xl text-brand-light dark:text-brand-dark z-50">
          <Link href="/" onClick={closeMenu}>AD.</Link>
        </div>
        
        {/* Navigation Bureau */}
        <nav className="hidden md:flex gap-6 items-center font-medium">
          <Link href="/" className={getLinkClass("/")}>Accueil</Link>
          <Link href="/a-propos" className={getLinkClass("/a-propos")}>À propos</Link>
          <Link href="/projets" className={getLinkClass("/projets")}>Projets</Link>
          <Link href="/interventions" className={getLinkClass("/interventions")}>Interventions</Link>
          <Link href="/blog" className={getLinkClass("/blog")}>Blog</Link>
          <Link href="/contact" className={getLinkClass("/contact")}>Contact</Link>
          
          {/* Bouton Dark Mode Bureau */}
          <button onClick={toggleTheme} className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none ${!isDarkMode ? 'bg-brand-light' : 'bg-gray-700'}`} aria-label="Basculer le thème">
            <span className={`inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white transition-transform duration-300 ${!isDarkMode ? 'translate-x-9' : 'translate-x-1'}`}>
              {!isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-brand-light"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-2.25l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-800"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
              )}
            </span>
          </button>
        </nav>

        {/* Boutons Mobile */}
        <div className="flex items-center gap-4 md:hidden z-50">
          {/* Bouton Dark Mode Mobile */}
          <button onClick={toggleTheme} className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none ${!isDarkMode ? 'bg-brand-light' : 'bg-gray-700'}`}>
            <span className={`inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white transition-transform duration-300 ${!isDarkMode ? 'translate-x-9' : 'translate-x-1'}`}>
              {!isDarkMode ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-brand-light"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-2.25l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
              ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-800"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
              )}
            </span>
          </button>

          {/* Bouton Hamburger */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-900 dark:text-white p-1">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            )}
          </button>
        </div>
      </div>

     {/* Menu Déroulant Mobile */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white p-6 flex flex-col gap-6 text-lg font-medium border-b border-gray-200 dark:border-gray-700 md:hidden shadow-xl z-50">
          <Link href="/" onClick={closeMenu} className={getLinkClass("/")}>Accueil</Link>
          <Link href="/a-propos" onClick={closeMenu} className={getLinkClass("/a-propos")}>À propos</Link>
          <Link href="/projets" onClick={closeMenu} className={getLinkClass("/projets")}>Projets</Link>
          <Link href="/interventions" onClick={closeMenu} className={getLinkClass("/interventions")}>Interventions</Link>
          <Link href="/blog" onClick={closeMenu} className={getLinkClass("/blog")}>Blog</Link>
          <Link href="/contact" onClick={closeMenu} className={getLinkClass("/contact")}>Contact</Link>       
        </nav>
      )}
    </header>
  );
}