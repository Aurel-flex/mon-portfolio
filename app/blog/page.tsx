import { client } from "@/sanity/client";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import Image from "next/image"; // 🌟 1. On importe le composant Image optimisé

export const revalidate = 3600; 

// 🛠️ Requête GROQ mise à jour
const ARTICLES_QUERY = `*[_type == "article" && defined(slug.current)] | order(date desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  date,
  // 🌟 2. On récupère l'URL de l'image et le texte alternatif
  "imageUrl": image.asset->url,
  "imageAlt": image.alt
}`;

export default async function BlogPage() {
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
              // 🌟 Ajout de overflow-hidden pour que l'image respecte les bords arrondis de la carte
              className="group flex flex-col bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 overflow-hidden h-full"
            >
              
              {/* 🌟 3. Le bloc Image de couverture */}
              {article.imageUrl && (
                <div className="relative w-full h-48 sm:h-56 bg-gray-200 dark:bg-gray-700 overflow-hidden shrink-0">
                  <Image
                    src={article.imageUrl}
                    alt={article.imageAlt || `Image d'illustration pour ${article.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}

              {/* Contenu texte de la carte */}
              <div className="p-8 flex flex-col grow">
                <span className="text-sm font-medium text-brand-light dark:text-brand-dark mb-3 uppercase tracking-wider">
                  Article
                </span>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-brand-light dark:group-hover:text-brand-dark transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 grow">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-brand-light dark:text-brand-dark font-bold gap-2 mt-auto">
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

      {articles.length === 0 && (
        <p className="text-center text-gray-500 mt-20">
          Les articles arrivent bientôt ! Revenez me voir régulièrement.
        </p>
      )}
    </main>
  );
}