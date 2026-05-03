"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const pathname = usePathname();

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

  const getLinkClass = (path: string) => {
    const baseStyle = "transition-colors hover:text-brand-light dark:hover:text-brand-dark";
    const isActive = path === "/" ? pathname === "/" : pathname.startsWith(path);
    
    return isActive 
      ? `${baseStyle} text-brand-light dark:text-brand-dark font-bold`
      : baseStyle;
  };

  return (
    <header className="p-6 max-w-5xl mx-auto w-full relative z-40">
      <div className="flex justify-between items-center">
        
        {/* Ton Logo */}
        <div className="font-bold text-2xl text-brand-light dark:text-brand-dark z-40">
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
          <button 
            onClick={toggleTheme} 
            className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none ${!isDarkMode ? 'bg-brand-light' : 'bg-gray-700'}`} 
            aria-label={isDarkMode ? "Passer au thème clair" : "Passer au thème sombre"}
          >
            <span className={`inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white transition-transform duration-300 ${!isDarkMode ? 'translate-x-9' : 'translate-x-1'}`}>
              {!isDarkMode ? (
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-brand-light"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-2.25l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
              ) : (
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-800"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
              )}
            </span>
          </button>
        </nav>

        {/* Boutons Mobile */}
        <div className="flex items-center gap-4 md:hidden z-40">
          
          {/* Bouton Dark Mode Mobile */}
          <button 
            onClick={toggleTheme} 
            className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none ${!isDarkMode ? 'bg-brand-light' : 'bg-gray-700'}`}
            aria-label={isDarkMode ? "Passer au thème clair" : "Passer au thème sombre"}
          >
            <span className={`inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white transition-transform duration-300 ${!isDarkMode ? 'translate-x-9' : 'translate-x-1'}`}>
              {!isDarkMode ? (
                 <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-brand-light"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-2.25l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
              ) : (
                 <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-800"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
              )}
            </span>
          </button>

          {/* Bouton Hamburger Accessible */}
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="text-gray-900 dark:text-white p-1"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Ouvrir le menu principal"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay sombre pour fermer au clic à l'extérieur */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] md:hidden transition-opacity"
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}

      {/* Panneau Latéral Droit (Drawer) */}
      <nav 
        id="mobile-navigation"
        className={`fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-white dark:bg-gray-900 shadow-2xl z-[100] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* En-tête du panneau avec bouton de fermeture */}
        <div className="flex justify-end p-6 border-b border-gray-100 dark:border-gray-800">
          <button 
            onClick={closeMenu} 
            className="p-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-light rounded-full"
            aria-label="Fermer le menu"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Liens de navigation */}
        <div className="flex flex-col gap-6 p-8 text-lg font-medium overflow-y-auto">
          <Link href="/" onClick={closeMenu} className={getLinkClass("/")}>Accueil</Link>
          <Link href="/a-propos" onClick={closeMenu} className={getLinkClass("/a-propos")}>À propos</Link>
          <Link href="/projets" onClick={closeMenu} className={getLinkClass("/projets")}>Projets</Link>
          <Link href="/interventions" onClick={closeMenu} className={getLinkClass("/interventions")}>Interventions</Link>
          <Link href="/blog" onClick={closeMenu} className={getLinkClass("/blog")}>Blog</Link>
          <Link href="/contact" onClick={closeMenu} className={getLinkClass("/contact")}>Contact</Link>       
        </div>
      </nav>
    </header>
  );
}