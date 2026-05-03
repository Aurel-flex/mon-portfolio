// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/mentions-legales/'] // On ne veut pas indexer ton interface Sanity Studio
    },
    sitemap: 'https://aurelienduberville.fr/sitemap.xml',
  }
}