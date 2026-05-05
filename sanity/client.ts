import { createClient } from "next-sanity";
import { createImageUrlBuilder } from '@sanity/image-url'
export const client = createClient({
  projectId: "i9h6rp94",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

// 🌟 Ce builder permet de transformer les références d'images Sanity en URLs utilisables
const builder = createImageUrlBuilder(client)
export function urlFor(source: any) {
  return builder.image(source);
}