import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";
import { defineConfig, envField } from "astro/config";

import mdx from "@astrojs/mdx";

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
  ],
  adapter: vercel({
    webAnalytics: { enabled: true },
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
    validateSecrets: true,
  },
  site: "https://jnalewajk.me",
});
