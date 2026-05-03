import type { NextConfig } from "next";

const nextConfig: NextConfig = {
// ✅ Ajout des configurations d'images
  images: {
    // On ajoute des tailles plus petites pour que Next.js puisse générer une image proche de 250px
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },};

export default nextConfig;
