"use server";
import { client } from "@/sanity/clients";
import { type SanityDocument } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";

export interface ProjectPreview extends SanityDocument {
  _id: string;
  title: string;
  logoUrl: string;
  thumbUrl: string;
}

export interface ProjectDetail extends SanityDocument {
  _id: string;
  title: string;
  description: string;
  logoUrl: string;
  githubUrl: string;
  serviceUrl: string;
  skills: string[];
  team: string;
  projectPeriod: {
    startDate: string;
    endDate: string;
  };
  contributions: {
    _key: string;
    title: string;
    content: PortableTextBlock[];
  }[];
  troubleshooting: {
    _key: string;
    problem: string;
    solution: PortableTextBlock[];
  }[];
  images: {
    _key: string;
    alt?: string;
    url: string; // asset->url 로 미리 변환
  }[];
}

export async function getProjectsPreview(): Promise<ProjectPreview[]> {
  const query = `*[_type == "projects"] {_id, title, "logoUrl": logo.asset->url ,"thumbUrl": images[0].asset->url}`;
  const res = await client.fetch(query);

  return res;
}

export async function getProjectDetailbyId(id: string): Promise<ProjectDetail> {
  const query = `*[_type == "projects" && _id == $id] {
    _id,
    title,
    description,
    "logoUrl": logo.asset->url,
    "githubUrl": githubUrl.current,
    "serviceUrl": serviceUrl.current,
    skills,
    team,
    projectPeriod,
    contributions[]{
      _key,
      _type,
      title,
      content
    },
    troubleshooting[]{
      _key,
      _type,
      problem,
      solution
    },
    images[]{
      _key,
      alt,
      "url": asset->url
    }
  }`;
  const options = { next: { revalidate: 40 } };
  const res = await client.fetch(query, { id }, options);
  return res[0];
}
