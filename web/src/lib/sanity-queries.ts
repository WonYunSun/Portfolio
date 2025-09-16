import { client } from "@/sanity/clients";
import { type SanityDocument } from "next-sanity";

export interface Project extends SanityDocument {
  _id: string;
  title: string;
  logoUrl: string;
}

export async function getProjectsPreview(): Promise<Project[]> {
  const query = `*[_type == "projects"] {_id, title, "logoUrl": logo.asset->url}`;
  const res = await client.fetch(query);

  return res;
}
