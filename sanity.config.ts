import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "n079dr6w",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-04-05",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config;