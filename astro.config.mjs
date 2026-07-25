import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://vic.trodd.dev",
  server: {
    allowedHosts: ['vtpc']
  }
});
