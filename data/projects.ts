// src/data/projects.ts
export type Project = {
  id: string;
  title: string;
  slug: string;
  category: "Professionnels" | "Personnels";
  tags: string[];
  description: string;
  fullDescription: string;
  link?: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Refonte Orange.com",
    slug: "refonte-orange",
    category: "Professionnels",
    tags: ["Drupal", "Agile Scrum", "Refonte"],
    description: "Participation à la refonte du site institutionnel d'Orange au siège social.",
    fullDescription: "Dans un environnement Agile Scrum au sein du siège d'Orange, j'ai accompagné la refonte du site institutionnel. Ma mission s'est concentrée sur la gestion du backlog, la coordination entre les besoins métier et les développeurs Drupal, tout en garantissant l'accessibilité d'un site à très fort trafic.",
    link: "https://orange.com/fr/",
    image: "/projects/orangecom-home.webp", // À ajouter dans public/projects/
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
    image: "/projects/5g-lab.webp",
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
    image: "/projects/agora.webp",
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
    image: "/projects/monnaie-cuivre.webp",
  },
  {
    id: "5",
    title: "Projet Photo",
    slug: "projet-photo",
    category: "Personnels",
    tags: ["Photo", "Lightroom", "Engagement"],
    description: "Projet personnel de photographie urbaine, mettant en avant les personnes sans domicile fixe dans les rues de Paris.",
    fullDescription: "Ce projet de photographie urbaine vise à sensibiliser le public aux réalités des personnes sans domicile fixe à Paris. En capturant des portraits et des scènes de rue, j'espère humaniser ces individus souvent invisibilisés et encourager une réflexion sur les enjeux sociaux liés à l'itinérance.",
    link: "/projects/Projet-Photo-Aurelien-Duberville.pdf", // Lien vers un PDF ou une galerie d'images
    image: "/projects/projet-photo.webp",
  },
  
];