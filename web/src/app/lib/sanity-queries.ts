import { client } from "@/sanity/clients";
import { type SanityDocument } from "next-sanity";

const PROJECTS_QUERY = `*[_type == "projects"]{
  _id, 
  title, 
  description, 
  "logoUrl": logo.asset->url,
  skills,
  contributions,
  troubleshooting,
  githubUrl,
  serviceUrl
}`;

export async function getProjects() {
  return client.fetch<SanityDocument[]>(PROJECTS_QUERY);
}

export async function getProjectById(id: string) {
  const query = `*[_type == "projects" && _id == $id][0]`;
  return client.fetch<SanityDocument>(query, { id });
}
