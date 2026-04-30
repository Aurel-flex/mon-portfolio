import { client, urlFor } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image"; // Import pour l'optimisation Next.js

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // On ajoute "mainImage" à notre requête GROQ
  const query = `*[_type == "article" && slug.current == $slug][0] {
    title,
    content,
    date,
    excerpt,
    mainImage 
  }`;
  const article = await client.fetch(`*[_type == "article" && slug.current == $slug][0]{title, excerpt}`, { slug });
  
  if (!article) return { title: "Article non trouvé" };

  return {
    title: `${article.title} | Blog Aurélien Duberville`,
    description: article.excerpt,
  };
}
// 🌟 On définit comment le texte de Sanity doit être affiché en HTML
const ptComponents = {
  block: {
    h2: ({ children }: any) => <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-gray-100">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100">{children}</h3>,
    normal: ({ children }: any) => <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{children}</p>,
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-brand-light dark:text-brand-dark underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity">
        {children}
      </a>
    ),
  },
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 🌟 ÉTAPE 1 : On attend que les paramètres de l'URL soient disponibles
  const { slug } = await params;

  // 🌟 ÉTAPE 2 : On définit la requête GROQ
  const query = `*[_type == "article" && slug.current == $slug][0] {
    title,
    content,
    date,
    excerpt
  }`;

  // 🌟 ÉTAPE 3 : On envoie la requête en passant BIEN l'objet { slug } en deuxième paramètre
  const article = await client.fetch(query, { slug });

  // Si l'article n'existe pas, on affiche une erreur 404
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
        {/* 🌟 Affichage de l'image de couverture */}
        {article.mainImage && (
          <div className="relative w-full h-[400px] mb-12 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={urlFor(article.mainImage).url()}
              alt={article.title}
              fill
              className="object-cover"
              priority // Charge l'image en priorité pour le SEO
            />
          </div>
        )}

        {/* En-tête de l'article */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 italic border-l-4 border-brand-light dark:border-brand-dark pl-6 py-2">
            {article.excerpt}
          </p>
        </header>

        {/* Contenu principal (traduit par PortableText) */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <PortableText value={article.content} components={ptComponents} />
        </div>
      </FadeIn>
    </article>
  );
  
}
