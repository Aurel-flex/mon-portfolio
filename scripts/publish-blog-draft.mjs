#!/usr/bin/env node
// Pousse un article de blog en BROUILLON (non publié) dans Sanity.
//
// Usage : node scripts/publish-blog-draft.mjs chemin/vers/article.json
//
// Le fichier JSON attendu :
// {
//   "title": "Titre de l'article",
//   "slug": "titre-de-larticle",          // kebab-case, sans accents
//   "excerpt": "Résumé en 1-2 phrases.",
//   "body": [
//     { "type": "h2", "text": "Un sous-titre" },
//     { "type": "p", "text": "Un paragraphe." }
//   ]
// }
//
// Nécessite la variable d'environnement SANITY_API_TOKEN (token avec droits
// d'écriture "Editor" sur le projet Sanity). Le document est créé avec un
// id préfixé "drafts." : il n'apparaît donc jamais sur le site public tant
// qu'il n'est pas publié manuellement dans Sanity Studio.

import { readFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";

const PROJECT_ID = process.env.SANITY_PROJECT_ID || "i9h6rp94";
const DATASET = process.env.SANITY_DATASET || "production";
const API_VERSION = process.env.SANITY_API_VERSION || "2024-01-01";
const TOKEN = process.env.SANITY_API_TOKEN;

function fail(message) {
  console.error(`❌ ${message}`);
  process.exit(1);
}

function slugify(input) {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function toPortableTextBlocks(body) {
  if (!Array.isArray(body) || body.length === 0) {
    fail("Le champ 'body' doit être un tableau non vide de { type, text }.");
  }

  const styleByType = { h2: "h2", h3: "h3", p: "normal" };

  return body.map(({ type, text }) => {
    const style = styleByType[type];
    if (!style) {
      fail(`Type de bloc inconnu : "${type}" (attendu : "h2", "h3" ou "p").`);
    }
    if (!text || typeof text !== "string") {
      fail("Chaque bloc doit avoir un champ 'text' non vide.");
    }

    return {
      _type: "block",
      _key: randomUUID(),
      style,
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: randomUUID(),
          text,
          marks: [],
        },
      ],
    };
  });
}

async function main() {
  const filePath = process.argv[2];
  if (!filePath) {
    fail("Usage : node scripts/publish-blog-draft.mjs chemin/vers/article.json");
  }
  if (!TOKEN) {
    fail(
      "SANITY_API_TOKEN manquant. Crée un token Editor sur https://sanity.io/manage (projet " +
        PROJECT_ID +
        ") et exporte-le avant d'exécuter ce script."
    );
  }

  let raw;
  try {
    raw = await readFile(filePath, "utf-8");
  } catch (err) {
    fail(`Impossible de lire le fichier "${filePath}" : ${err.message}`);
  }

  let article;
  try {
    article = JSON.parse(raw);
  } catch (err) {
    fail(`JSON invalide dans "${filePath}" : ${err.message}`);
  }

  const { title, excerpt, body } = article;
  const slug = article.slug ? slugify(article.slug) : slugify(title || "");

  if (!title || typeof title !== "string") fail("Le champ 'title' est requis.");
  if (!slug) fail("Impossible de déterminer un 'slug' valide.");
  if (!excerpt || typeof excerpt !== "string") fail("Le champ 'excerpt' est requis.");

  const content = toPortableTextBlocks(body);
  const today = new Date().toISOString().split("T")[0];

  const document = {
    _id: `drafts.${slug}`,
    _type: "article",
    title,
    slug: { _type: "slug", current: slug },
    excerpt,
    date: today,
    content,
  };

  const endpoint = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ mutations: [{ createOrReplace: document }] }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    fail(`Échec de l'écriture Sanity (${response.status}) : ${errorBody}`);
  }

  console.log(`✅ Brouillon créé dans Sanity : "${title}" (${document._id})`);
  console.log("   Il n'est pas visible sur le site tant qu'il n'est pas publié dans Sanity Studio.");
}

main().catch((err) => fail(err.message));
