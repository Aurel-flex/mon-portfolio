"use client"; // Ce composant a besoin du navigateur pour calculer le scroll

import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Le navigateur observe si l'élément entre dans l'écran
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Une fois affiché, on arrête d'observer pour économiser la batterie du visiteur !
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    });

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      // motion-reduce:transition-none désactive l'effet pour les personnes sensibles aux animations
      className={`transition-all duration-1000 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
}