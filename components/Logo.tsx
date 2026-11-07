// Logo : une fenêtre de navigateur contenant une maquette de page (titre, texte, bouton, image).
// Les couleurs suivent le thème (violet de la charte, détails couleur du fond).
export default function Logo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <rect x="4" y="8" width="56" height="48" rx="10" className="fill-brand-light dark:fill-brand-dark" />
      <g className="fill-white dark:fill-gray-900">
        <circle cx="12" cy="14.5" r="2" />
        <circle cx="19" cy="14.5" r="2" fillOpacity="0.7" />
        <circle cx="26" cy="14.5" r="2" fillOpacity="0.45" />
        <rect x="11" y="25" width="26" height="5" rx="2.5" />
        <rect x="11" y="34" width="17" height="4" rx="2" fillOpacity="0.6" />
        <rect x="11" y="43" width="12" height="6" rx="3" />
        <rect x="40" y="25" width="13" height="24" rx="4" fillOpacity="0.35" />
      </g>
    </svg>
  );
}
