import { client } from "@/sanity/client";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

// 🌟 On demande à Next.js de vérifier s'il y a de nouveaux articles toutes les heures
export const revalidate = 3600; 

// 🛠️ Requête GROQ Corrigée : 
// On ajoute "&& defined(slug.current)" pour s'assurer que l'article a une URL
const ARTICLES_QUERY = `*[_type == "article" && defined(slug.current)] | order(date desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  date
}`;

export default async function BlogPage() {
  // Récupération des données filtrées depuis Sanity
  const articles = await client.fetch(ARTICLES_QUERY);

  return (
    <main className="max-w-5xl mx-auto px-6 pt-12 pb-24">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center tracking-tight">
          Mon <span className="text-brand-light dark:text-brand-dark">Blog</span>
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
          Partage d'expériences sur l'éco-conception, le développement web et la gestion de projet.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article: any) => (
          <FadeIn key={article._id}>
            <Link 
              href={`/blog/${article.slug}`}
              className="group block p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <span className="text-sm font-medium text-brand-light dark:text-brand-dark mb-3 uppercase tracking-wider">
                  Article
                </span>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-brand-light dark:group-hover:text-brand-dark transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-brand-light dark:text-brand-dark font-bold gap-2">
                  Lire l'article
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

      {/* Message si aucun article n'est trouvé */}
      {articles.length === 0 && (
        <p className="text-center text-gray-500 mt-20">
          Les articles arrivent bientôt ! Revenez me voir régulièrement.
        </p>
      )}
    </main>
  );
}