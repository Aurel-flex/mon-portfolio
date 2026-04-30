"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    formData.append("access_key", "66b6d4e6-3cc4-4325-99f3-11c203f69b82");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        console.error("Erreur renvoyée par l'API", data);
        alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur de connexion", error);
      alert("Erreur réseau. Vérifiez votre connexion internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="max-w-5xl mx-auto w-full px-6 pt-12 pb-24">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center tracking-tight">
          Me <span className="text-brand-light dark:text-brand-dark">Contacter</span>
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
          Une question, un projet de création web ou une proposition d'intervention pédagogique ? Discutons-en !
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* --- COLONNE DE GAUCHE : Coordonnées --- */}
        <div className="flex flex-col gap-8">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-6">Mes coordonnées</h2>
            
            <div className="space-y-6">
              {/* Carte Email */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:contact@aurelienduberville.fr" className="text-gray-600 dark:text-gray-400 hover:text-brand-light dark:hover:text-brand-dark transition-colors">
                    contact@aurelienduberville.fr
                  </a>
                </div>
              </div>

              {/* Carte LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/aur%C3%A9lien-d-64276b152/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-brand-light dark:hover:text-brand-dark transition-colors">
                    Aurélien Duberville
                  </a>
                </div>
              </div>

              {/* Carte Localisation */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Zone d'intervention</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Paris, Île-de-France & À distance
                  </p>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>

        {/* --- COLONNE DE DROITE : Formulaire --- */}
        <FadeIn>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
            
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message envoyé !</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-brand-light dark:text-brand-dark font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-brand-light/50 rounded px-2 py-1"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Champ Nom */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nom" className="font-medium text-gray-900 dark:text-gray-100">Nom complet</label>
                    <input 
                      type="text" 
                      id="nom" 
                      name="nom" 
                      required 
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent transition-shadow"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Champ Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-medium text-gray-900 dark:text-gray-100">Adresse email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent transition-shadow"
                      placeholder="john@exemple.com"
                    />
                  </div>
                </div>

                {/* Champ Sujet */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="sujet" className="font-medium text-gray-900 dark:text-gray-100">Sujet de votre message</label>
                  <select 
                    id="sujet" 
                    name="sujet" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent transition-shadow"
                  >
                    <option value="">Sélectionnez un sujet...</option>
                    <option value="creation">Projet de Création Web</option>
                    <option value="intervention">Proposition d'Intervention</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                {/* Champ Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-medium text-gray-900 dark:text-gray-100">Votre message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent transition-shadow resize-y"
                    placeholder="Décrivez votre besoin ici..."
                  ></textarea>
                </div>

                {/* Bouton Envoyer */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-light dark:bg-brand-dark text-white dark:text-gray-900 px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all focus:outline-none focus:ring-4 focus:ring-brand-light/50 disabled:opacity-70 disabled:cursor-not-allowed mt-2 flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer le message"
                  )}
                </button>
              </form>
            )}

          </div>
        </FadeIn>
      </div>
    </main>
  );
}