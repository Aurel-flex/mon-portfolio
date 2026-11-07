import FadeIn from "@/components/FadeIn";

// En-tête de page commun (même DA que l'accueil) : surtitre violet, grand titre, halo et trame de points
export default function PageHero({
  surtitre,
  titre,
  children,
  align = "center",
}: {
  surtitre: string;
  titre: React.ReactNode;
  children?: React.ReactNode;
  align?: "center" | "left";
}) {
  const centre = align === "center";
  return (
    <section className="relative w-full">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] max-w-[100vw] h-[420px] rounded-full bg-brand-light/10 dark:bg-brand-dark/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(109,40,217,0.12)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(167,139,250,0.10)_1px,transparent_0)] bg-[size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <FadeIn>
        <div className={`relative max-w-3xl ${centre ? "mx-auto text-center" : ""} pt-4 md:pt-8 pb-12 md:pb-16`}>
          <p className="text-sm font-bold uppercase tracking-wider text-brand-light dark:text-brand-dark mb-3">{surtitre}</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-6">{titre}</h1>
          {children && (
            <div className={`text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 ${centre ? "mx-auto" : ""} max-w-2xl`}>
              {children}
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  );
}
