import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schema";

const config = defineConfig({
  projectId: "n079dr6w",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-04-05",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: [project]}
})

export default config;