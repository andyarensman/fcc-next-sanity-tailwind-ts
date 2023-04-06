import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "n079dr6w",
    dataset: "production",
    apiVersion: "2023-04-05",
  });

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}