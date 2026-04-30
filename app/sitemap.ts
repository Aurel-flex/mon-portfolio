import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // On définit ton nom de domaine principal
  const baseUrl = "https://aurelienduberville.fr";

  // On retourne un tableau contenant toutes les routes importantes de ton site
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0, // La page d'accueil est la plus importante (1.0)
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projets`,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Plus fréquent car tu ajouteras de nouveaux projets
      priority: 0.9,
    },
    {
      url: `${baseUrl}/formations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}