import { client } from "@/sanity/clients";
import { type SanityDocument } from "next-sanity";

export interface Project extends SanityDocument {
  _id: string;
  title: string;
  logoUrl: string;
  thumbUrl: string;
}

export async function getProjectsPreview(): Promise<Project[]> {
  const query = `*[_type == "projects"] {_id, title, "logoUrl": logo.asset->url ,"thumbUrl": images[0].asset->url}`;
  const res = await client.fetch(query);

  return res;
}
