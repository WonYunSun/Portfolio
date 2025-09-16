import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "st8o20kw",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});