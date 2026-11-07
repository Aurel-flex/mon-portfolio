import type { NextConfig } from "next";

const nextConfig: NextConfig = {
// ✅ Ajout des configurations d'images
  images: {
    // On ajoute des tailles plus petites pour que Next.js puisse générer une image proche de 250px
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      ],
  },

  // La page Projets est devenue Réalisations : on redirige les anciennes adresses (308, permanent).
  // Le slug est restreint à [a-z0-9-] car les redirections passent avant /public : les images
  // et démos servies sous /projets/... (avec un point ou plusieurs segments) ne sont pas touchées.
  async redirects() {
    return [
      { source: "/projets", destination: "/realisations", permanent: true },
      { source: "/projets/:slug([a-z0-9-]+)", destination: "/realisations/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
