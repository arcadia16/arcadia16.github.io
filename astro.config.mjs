// @ts-check
import { defineConfig } from "astro/config";
import { DATA } from "./src/data/site.ts";

// https://astro.build/config
export default defineConfig({
  site: DATA.url,
});
