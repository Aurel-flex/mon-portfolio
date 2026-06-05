// src/data/projets.ts
export type Project = {
  id: string;
  title: string;
  slug: string;
  category: "Professionnels" | "Personnels";
  tags: string[];
  description: string;
  fullDescription: string;
  link?: string;
  links?: { label: string; url: string }[];
  image: string;
};

export const projets: Project[] = [
  {
    id: "1",
    title: "Refonte Orange.com",
    slug: "refonte-orange",
    category: "Professionnels",
    tags: ["Drupal", "Agile Scrum", "Refonte"],
    description: "Participation à la refonte du site institutionnel d'Orange au siège social.",
    fullDescription: "Dans un environnement Agile Scrum au sein du siège d'Orange, j'ai accompagné la refonte du site institutionnel. Ma mission s'est concentrée sur la gestion du backlog, la coordination entre les besoins métier et les développeurs Drupal, tout en garantissant l'accessibilité d'un site à très fort trafic.",
    link: "https://orange.com/fr/",
    image: "/projets/orangecom-home.webp", // À ajouter dans public/projets/
  },
  {
    id: "2",
    title: "Orange 5G Lab",
    slug: "orange-5g-lab",
    category: "Professionnels",
    tags: ["WordPress", "Multisite", "Flexibilité"],
    description: "Déploiement et maintenance du site vitrine dédié à l'innovation 5G.",
    fullDescription: "Gestion du site 5G Lab sous un environnement WordPress. Ce projet visait à démontrer la flexibilité des environnements de gestion de contenu pour répondre à des besoins de communication ciblés et innovants.",
    link: "https://5glab.orange.com/fr/",
    image: "/projets/5g-lab.webp",
  },
  {
    id: "3",
    title: "Agora Voxa",
    slug: "agora-voxa",
    category: "Personnels",
    tags: ["Next.js", "Éducation", "WebApp"],
    description: "Projet d'étude en cours de développement : plateforme de débat citoyen.",
    fullDescription: "Agora Voxa est un projet né durant mes études, visant à créer un espace de discussion structuré et accessible. Développé avec Next.js, il met l'accent sur la performance et une interface utilisateur épurée.",
    link: "https://agora-voxa.vercel.app/",
    image: "/projets/agora.webp",
  },
  {
    id: "4",
    title: "Monnaie Cuivre",
    slug: "monnaie-cuivre",
    category: "Professionnels",
    tags: ["HTML", "CSS", "JS"],
    description: "Depuis ces dernières années, l’Association Monnaie Cuivre Collecte a fait un travail de fond considérable pour comprendre et appréhender les défis que représentent l’allongement de la durée de vie, le pouvoir d’achat des séniors, l’entretien de l’habitat, le risque d’isolement et de solitude, etc.",
    fullDescription: "Site vitrine pour l’Association Monnaie Cuivre Collecte",
    link: "https://www.monnaie-cuivre.fr/",
    image: "/projets/monnaie-cuivre.webp",
  },
   {
    id: "5",
    title: "Le Kokon",
    slug: "le-kokon",
    category: "Personnels",
    tags: ["HTML", "CSS", "JS"],
    description: "Le Kokon est un incubateur de projets étudiants au Kampus de Strasbourg. J'ai participé à la création de leur site vitrine pour présenter les projets incubés et les événements organisés.",
    fullDescription: "Le site du Kokon représente la métaphore d'un cocon, un espace de croissance et de transformation pour les projets étudiants. En développant ce site, j'ai cherché à créer une expérience immersive qui reflète l'esprit d'innovation et de collaboration du Kokon, tout en mettant en avant les projets incubés et les événements organisés.",
    image: "/projets/Kokon-logo.png",
    links: [
      {
        label: "Voir le Teaser",
        // 🌟 Ajout du slash "/" au tout début de l'URL
        url: "/projets/Kokon/teasing/index.html" 
      },
      {
        label: "Voir la Landing Page",
        // 🌟 Ajout du slash "/" au tout début de l'URL
        url: "/projets/Kokon/index.html" 
      }
    ]
  },
  {
    id: "6",
    title: "Projet Photo",
    slug: "projet-photo",
    category: "Personnels",
    tags: ["Photo", "Lightroom", "Engagement"],
    description: "Projet personnel de photographie urbaine, mettant en avant les personnes sans domicile fixe dans les rues de Paris.",
    fullDescription: "Ce projet de photographie urbaine vise à sensibiliser le public aux réalités des personnes sans domicile fixe à Paris. En capturant des portraits et des scènes de rue, j'espère humaniser ces individus souvent invisibilisés et encourager une réflexion sur les enjeux sociaux liés à l'itinérance.",
    link: "/projets/Projet-Photo-Aurelien-Duberville.pdf", // Lien vers un PDF ou une galerie d'images
    image: "/projets/projet-photo.webp",
  },
  
];