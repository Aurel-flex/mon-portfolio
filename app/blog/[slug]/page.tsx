import { client } from "@/sanity/client";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const article = await client.fetch(`*[_type == "article" && slug.current == $slug][0]{title, excerpt}`, { slug });
  
  if (!article) return { title: "Article non trouvé" };

  return {
    title: `${article.title} | Blog Aurélien Duberville`,
    description: article.excerpt,
  };
}

const ptComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-gray-100">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100">{children}</h3>,
    normal: ({ children }) => <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => (
      <a aria-label={`Lien vers ${children}`} href={value?.href} className="text-brand-light dark:text-brand-dark underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity">
        {children}
      </a>
    ),
  },
};

// 🌟 AJOUT : Fonction pour formater la date proprement en français
const formatDate = (dateString: string) => {
  if (!dateString) return null;
  return new Date(dateString).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  
  const { slug } = await params;

  const query = `*[_type == "article" && slug.current == $slug][0] {
    title,
    content,
    date,
    excerpt,
    "imageUrl": mainImage.asset->url,
    "imageAlt": mainImage.alt
  }`;

  const article = await client.fetch(query, { slug });

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-6 pt-12 pb-24">
      <FadeIn>
        {/* Bouton Retour */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-brand-light dark:text-brand-dark font-bold mb-10 hover:-translate-x-1 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Retour au blog
        </Link>
        
        {/* Affichage de l'image avec les nouvelles variables */}
        {article.imageUrl && (
          <div className="relative w-full h-[400px] mb-12 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={article.imageUrl}
              alt={article.imageAlt || `Image de couverture : ${article.title}`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority 
            />
          </div>
        )}

        {/* En-tête de l'article */}
        <header className="mb-12">
          {/* 🌟 AJOUT : Affichage de la date formatée avec balise sémantique */}
          {article.date && (
            <time 
              dateTime={article.date} 
              className="text-brand-light dark:text-brand-dark font-bold text-sm uppercase tracking-widest mb-4 block"
            >
              Publié le {formatDate(article.date)}
            </time>
          )}

          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 italic border-l-4 border-brand-light dark:border-brand-dark pl-6 py-2">
            {article.excerpt}
          </p>
        </header>

        {/* Contenu principal */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <PortableText value={article.content} components={ptComponents} />
        </div>
      </FadeIn>
    </article>
  );
}