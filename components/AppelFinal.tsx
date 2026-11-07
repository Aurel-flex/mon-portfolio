import Link from "next/link";
import FadeIn from "@/components/FadeIn";

type Lien = { href: string; label: string };

// Bandeau d'appel à l'action de fin de page (même DA que l'accueil)
export default function AppelFinal({
  titre,
  texte,
  principal,
  secondaire,
}: {
  titre: string;
  texte: string;
  principal: Lien;
  secondaire?: Lien;
}) {
  return (
    <FadeIn>
      <section className="relative overflow-hidden rounded-[2rem] bg-brand-light px-8 py-12 md:p-16 text-center text-white">
        <div aria-hidden="true" className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10" />
        <h2 className="relative text-2xl md:text-4xl font-bold tracking-tight mb-4">{titre}</h2>
        <p className="relative text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-8">{texte}</p>
        <div className="relative flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={principal.href}
            className="inline-flex justify-center items-center gap-2 bg-white text-brand-light px-8 py-4 rounded-xl font-bold shadow-lg hover:-translate-y-0.5 transition-transform focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            {principal.label}
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          {secondaire && (
            <Link
              href={secondaire.href}
              className="inline-flex justify-center items-center border-2 border-white/40 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              {secondaire.label}
            </Link>
          )}
        </div>
      </section>
    </FadeIn>
  );
}
