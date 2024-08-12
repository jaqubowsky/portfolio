import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [
    tailwind(),
    icon(),
    react({
      experimentalReactChildren: true,
    }),
    mdx({
      optimize: true,
    }),
  ],
  adapter: node({
    mode: "standalone",
  }),
});
