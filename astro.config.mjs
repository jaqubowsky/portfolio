import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(),
    react({
      experimentalReactChildren: true,
    }),
    mdx({
      optimize: true,
    }),
    sitemap(),
  ],

  adapter: node({
    mode: "standalone",
  }),

  env: {
    schema: {
      PUBLIC_RECAPTCHA_KEY: envField.string({
        context: "client",
        access: "public",
      }),
      RECAPTCHA_KEY: envField.string({
        context: "server",
        access: "secret",
      }),
      GMAIL_APP_EMAIL: envField.string({
        context: "server",
        access: "secret",
      }),
      GMAIL_APP_PASSWORD: envField.string({
        context: "server",
        access: "secret",
      }),
    },
    validateSecrets: false,
  },

  site: "https://jnalewajk.me",

  security: {
    checkOrigin: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
