// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
// Páginas são estáticas por padrão; as que dependem da data de hoje usam `export const prerender = false`.
export default defineConfig({
  site: "https://sacro-imperio-digital.vercel.app",
  output: "static",
  adapter: vercel(),
  integrations: [mdx()],
  redirects: {
    "/ladainha-do-preciosismo-sangue": "/ladainha-do-preciosissimo-sangue",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
