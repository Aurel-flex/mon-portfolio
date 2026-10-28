// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Pas de blocage des mentions légales ici : la page a un "noindex", que Google doit pouvoir lire
      disallow: ['/admin/', '/projets/Kokon/', '/img/']
    },
    sitemap: 'https://www.aurelienduberville.fr/sitemap.xml',
  }
}