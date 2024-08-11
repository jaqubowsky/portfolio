import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [
    tailwind(),
    icon(),
    react({
      experimentalReactChildren: true,
    }),
  ],
  adapter: node({
    mode: "standalone",
  }),
});
