import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "9a8ht86o",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
