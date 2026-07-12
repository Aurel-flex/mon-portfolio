"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ReCAPTCHA from "react-google-recaptcha";

export default function DevisPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    servicePrincipal: "",
    sousChoix: "",
    email: "",
    message: ""
  });
  
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  // 🌟 NOUVEAU : Un état pour gérer l'affichage de l'erreur du captcha
  const [captchaError, setCaptchaError] = useState(false);

  // --- LOGIQUE DE NAVIGATION INTELLIGENTE ---
  const isCreationSite = formData.servicePrincipal === "Création de site internet";
  
  const stepsList = isCreationSite 
    ? ["Besoins", "Détails", "Contact"] 
    : ["Besoins", "Contact"];

  const currentStepIndex = isCreationSite ? step - 1 : (step === 1 ? 0 : 1);
  const progressPercentage = ((currentStepIndex + 1) / stepsList.length) * 100;

  const handleServiceSelection = (service: string) => {
    setFormData({ 
      ...formData, 
      servicePrincipal: service, 
      sousChoix: service === "Création de site internet" ? "" : "Non applicable" 
    });
    
    if (service === "Création de site internet") {
      setStep(2);
    } else {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step === 3) {
      if (isCreationSite) {
        setStep(2);
      } else {
        setStep(1);
        setFormData({ ...formData, servicePrincipal: "", sousChoix: "" });
      }
    } else if (step === 2) {
      setStep(1);
      setFormData({ ...formData, servicePrincipal: "", sousChoix: "" });
    }
  };

  // --- SOUMISSION DU FORMULAIRE ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 🌟 NOUVEAU : On gère l'erreur visuellement au lieu de l'alert()
    if (!captchaToken) {
      setCaptchaError(true); // Active l'affichage du texte rouge
      return; // On stoppe l'envoi
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      if (!response.ok) {
        const errorText = await response.text(); 
        console.error("Erreur détaillée du serveur :", errorText);
        alert("L'API est introuvable ou a rencontré un problème. Regardez la console.");
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
      console.error("Erreur réseau :", error);
      alert("Erreur de connexion avec le serveur.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-6 pt-12 pb-24 min-h-[70vh]">
      <FadeIn>
        {!isSuccess && (
          <>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-center">
              Démarrons votre <span className="text-brand-light dark:text-brand-dark">projet</span>
            </h1>

            {/* --- BARRE DE PROGRESSION --- */}
            <div className="w-full max-w-lg mx-auto mb-16 mt-8">
              <div className="flex justify-between text-sm font-semibold text-gray-400 dark:text-gray-500 mb-4 px-2">
                {stepsList.map((label, index) => {
                  const isActive = currentStepIndex >= index;
                  return (
                    <span 
                      key={label} 
                      className={`transition-all duration-500 ${isActive ? "text-brand-light dark:text-brand-dark scale-105 drop-shadow-sm" : ""}`}
                    >
                      {label}
                    </span>
                  );
                })}
              </div>
              <div className="h-2.5 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-brand-light dark:bg-brand-dark transition-all duration-700 ease-in-out rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </>
        )}

        <div className="bg-white/80 dark:bg-gray-800/40 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-700/50">
          
          {/* --- ÉTAPE 1 --- */}
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-center mb-8 text-brand-light dark:text-brand-dark">De quel accompagnement avez-vous besoin ?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { titre: "Audit de site internet", sousTitre: "(SEO, Accessibilité, Éco-conception)" },
                  { titre: "Création de site internet", sousTitre: null },
                  { titre: "Rédaction web optimisée SEO", sousTitre: null },
                  { titre: "Autre projet ou demande", sousTitre: null }
                ].map((service) => (
                  <button
                    key={service.titre}
                    onClick={() => handleServiceSelection(service.titre)}
                    className="group relative p-8 text-left rounded-3xl border-2 border-gray-200 dark:border-gray-700 hover:border-brand-light/50 dark:hover:border-brand-dark/50 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-light/0 to-brand-light/5 dark:from-brand-dark/0 dark:to-brand-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className={`relative z-10 block font-bold text-xl ${service.sousTitre ? 'mb-1' : 'mb-3'} text-gray-900 dark:text-white group-hover:text-brand-light dark:group-hover:text-brand-dark transition-colors`}>
                      {service.titre}
                    </span>
                    {service.sousTitre && (
                      <span className="relative z-10 block text-sm font-medium text-brand-light dark:text-brand-dark mb-3">
                        {service.sousTitre}
                      </span>
                    )}
                    <span className="relative z-10 block text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      Cliquez pour sélectionner ce service.
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* --- ÉTAPE 2 --- */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
              <button onClick={handleBack} className="group flex items-center gap-2 text-brand-light dark:text-brand-dark font-medium hover:underline mb-2">
                <span className="transition-transform group-hover:-translate-x-1">←</span> Modifier le service
              </button>
              <h2 className="text-2xl font-bold mb-6 text-brand-light dark:text-brand-dark text-center">Précisons votre besoin</h2>
              
              <div className="grid grid-cols-1 gap-4">
                {["Site Vitrine Simple (One-page)", "Site Multipage Classique", "Site avec CMS (Gestion autonome du contenu)"].map((choix) => (
                  <button 
                    key={choix} 
                    onClick={() => { setFormData({ ...formData, sousChoix: choix }); setStep(3); }} 
                    className="w-full p-6 text-left rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-brand-light dark:hover:border-brand-dark hover:bg-brand-light/5 dark:hover:bg-brand-dark/5 transition-all duration-300 font-bold text-lg hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {choix}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* --- ÉTAPE 3 --- */}
          {step === 3 && (
            <div className="space-y-6">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Demande envoyée !</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
                    Merci pour votre confiance. Vous allez recevoir un e-mail de confirmation d'ici quelques instants. Je reviens vers vous très vite !
                  </p>
                  <Link 
                    href="/" 
                    className="text-white dark:text-gray-900 font-bold bg-brand-light dark:bg-brand-dark px-8 py-4 rounded-xl shadow-lg hover:opacity-90 hover:scale-105 transition-all"
                  >
                    Retour à l'accueil
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                  <button type="button" onClick={handleBack} className="group flex items-center gap-2 text-brand-light dark:text-brand-dark font-medium hover:underline mb-2">
                    <span className="transition-transform group-hover:-translate-x-1">←</span> Retour
                  </button>
                  <h2 className="text-2xl font-bold text-center text-brand-light dark:text-brand-dark">Dernière étape : vos coordonnées</h2>
                  
                  <div className="grid grid-cols-1 gap-6 mt-6">
                    <div className="relative group">
                      <label className="block font-medium mb-2 text-gray-700 dark:text-gray-300">Votre adresse e-mail *</label>
                      <input 
                        required 
                        type="email" 
                        value={formData.email} 
                        onChange={(e) => setFormData({...formData, email: e.target.value})} 
                        className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-brand-light dark:focus:border-brand-dark outline-none transition-all shadow-sm focus:shadow-md" 
                        placeholder="vous@exemple.com" 
                      />
                    </div>
                    
                    <div className="relative group">
                      <label className="block font-medium mb-2 text-gray-700 dark:text-gray-300">Parlez-moi de votre projet *</label>
                      <textarea 
                        required 
                        value={formData.message} 
                        onChange={(e) => setFormData({...formData, message: e.target.value})} 
                        className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-brand-light dark:focus:border-brand-dark outline-none transition-all shadow-sm focus:shadow-md h-40 resize-y" 
                        placeholder="Quels sont vos objectifs ? Avez-vous des délais particuliers ?" 
                      />
                    </div>
                  </div>

                  {/* 🌟 NOUVEAU : Bloc reCAPTCHA avec gestion visuelle de l'erreur */}
                  <div className="flex flex-col items-center pt-6">
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                      onChange={(token) => {
                        setCaptchaToken(token);
                        setCaptchaError(false); // On enlève l'erreur dès que la case est cochée !
                      }}
                    />
                    {/* Le message rouge apparaît ici si captchaError est true */}
                    {captchaError && (
                      <p className="text-red-500 font-medium text-sm mt-3 animate-in fade-in zoom-in-95">
                        Veuillez cocher la case pour prouver que vous n'êtes pas un robot.
                      </p>
                    )}
                  </div>

                  <div className="pt-8">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-brand-light dark:bg-brand-dark text-white dark:text-gray-900 font-bold px-10 py-5 rounded-xl hover:opacity-90 hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-3 text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-6 w-6 text-white dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Envoi sécurisé en cours...
                        </>
                      ) : (
                        "Confirmer ma demande de devis"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </FadeIn>
    </main>
  );
}