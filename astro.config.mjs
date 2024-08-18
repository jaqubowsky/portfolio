import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [
    icon(),
    react({
      experimentalReactChildren: true,
    }),
    mdx({
      optimize: true,
    }),
  ],
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
