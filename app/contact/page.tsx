"use client";

import { useState, FormEvent } from "react";
import FadeIn from "@/components/FadeIn";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {    
    e.preventDefault(); 
    
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    object.captchaToken = captchaToken;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(object),
      });

      if (!response.ok) {
        console.error("Erreur détaillée du serveur :", await response.text());
        alert("L'API a rencontré un problème. Regardez la console.");
        setIsSubmitting(false);
        return;
      }

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
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
    <main className="max-w-5xl mx-auto w-full px-6 pt-10 pb-16">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight">
          Me <span className="text-brand-light dark:text-brand-dark">Contacter</span>
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Une question, un projet de création web ou une proposition d'intervention pédagogique ? Discutons-en !
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        
        {/* --- COLONNE DE GAUCHE : Coordonnées --- */}
        <div className="flex flex-col gap-6">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-6">Mes coordonnées</h2>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a aria-label="Lien vers mon adresse email" href="mailto:contact@aurelienduberville.fr" className="text-gray-600 dark:text-gray-400 hover:text-brand-light dark:hover:text-brand-dark transition-colors">
                    contact@aurelienduberville.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-light/10 text-brand-light dark:bg-brand-dark/10 dark:text-brand-dark shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">LinkedIn</h3>
                  <a aria-label="Lien vers mon profil LinkedIn" href="https://www.linkedin.com/in/aur%C3%A9lien-d-64276b152/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-brand-light dark:hover:text-brand-dark transition-colors">
                    Aurélien Duberville
                  </a>
                </div>
              </div>

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
        <div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 lg:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
            
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
                  aria-label="Envoyer un autre message"
                  onClick={() => setIsSuccess(false)}
                  className="text-brand-light dark:text-brand-dark font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-brand-light/50 rounded px-2 py-1"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* 🌟 J'ai replacé les commentaires ici, à l'intérieur de <form>, là où React les tolère ! */}
                <input 
                  type="checkbox" 
                  name="botcheck" 
                  className="hidden" 
                  style={{ display: 'none' }} 
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nom" className="font-medium text-gray-900 dark:text-gray-100 text-sm">Nom complet</label>
                    <input 
                      type="text" 
                      id="nom" 
                      name="nom" 
                      required 
                      className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-light transition-shadow"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-medium text-gray-900 dark:text-gray-100 text-sm">Adresse email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-light transition-shadow"
                      placeholder="john@exemple.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="sujet" className="font-medium text-gray-900 dark:text-gray-100 text-sm">Sujet de votre message</label>
                  <select 
                    id="sujet" 
                    name="sujet" 
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-light transition-shadow"
                  >
                    <option value="">Sélectionnez un sujet...</option>
                    <option value="creation">Projet de Création Web</option>
                    <option value="intervention">Proposition d'Intervention</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-medium text-gray-900 dark:text-gray-100 text-sm">Votre message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-light transition-shadow resize-y"
                    placeholder="Décrivez votre besoin ici..."
                  ></textarea>
                </div>

                <div className="flex flex-col items-center pt-1">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                    onChange={(token) => {
                      setCaptchaToken(token);
                      setCaptchaError(false);
                    }}
                  />
                  {captchaError && (
                    <p className="text-red-500 font-medium text-sm mt-2 animate-in fade-in zoom-in-95">
                      Veuillez cocher la case pour prouver que vous n'êtes pas un robot.
                    </p>
                  )}
                </div>

                <button 
                  aria-label="Envoyer le message"
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-light dark:bg-brand-dark text-white dark:text-gray-900 px-6 py-3.5 rounded-xl font-bold hover:opacity-90 transition-all focus:outline-none focus:ring-4 focus:ring-brand-light/50 disabled:opacity-70 disabled:cursor-not-allowed mt-1 flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
        </div>
      </div>
    </main>
  );
}