import mdx from '@astrojs/mdx'
import node from '@astrojs/node'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, envField } from 'astro/config'
import icon from 'astro-icon'
import { DEFAULT_LOCALE, LOCALE_BCP47, LOCALES } from './src/i18n/config'

const SITE = 'https://jnalewajk.me'

const legacyRedirects = {
  '/blog/deploying-astro-on-dokploy/': '/en/blog/deploying-astro-on-dokploy/',
  '/blog/my-programming-journey/': '/en/blog/my-programming-journey/',
}

const translatedPosts = [
  ['/blog/wdrazanie-astro-na-dokploy/', '/en/blog/deploying-astro-on-dokploy/'],
  ['/blog/moja-droga-w-programowaniu/', '/en/blog/my-programming-journey/'],
  ['/blog/i18n-w-astro-kompletny-poradnik/', '/en/blog/i18n-in-astro-complete-guide/'],
]

const postHreflangMap = new Map()
for (const [plPath, enPath] of translatedPosts) {
  const links = [
    { url: `${SITE}${plPath}`, lang: 'pl-PL' },
    { url: `${SITE}${enPath}`, lang: 'en-US' },
  ]
  postHreflangMap.set(`${SITE}${plPath}`, links)
  postHreflangMap.set(`${SITE}${enPath}`, links)
}

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
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: LOCALE_BCP47,
      },
      serialize(item) {
        const links = postHreflangMap.get(item.url)
        if (links) item.links = links

        return item
      },
    }),
  ],

  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: [...LOCALES],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  redirects: Object.fromEntries(
    Object.entries(legacyRedirects).map(([from, to]) => [from, { status: 301, destination: to }])
  ),

  adapter: node({
    mode: 'standalone',
  }),

  compressHTML: true,

  env: {
    schema: {
      PUBLIC_RECAPTCHA_KEY: envField.string({
        context: 'client',
        access: 'public',
      }),
      RECAPTCHA_KEY: envField.string({
        context: 'server',
        access: 'secret',
      }),
      RESEND_API_KEY: envField.string({
        context: 'server',
        access: 'secret',
      }),
      RESEND_FROM_EMAIL: envField.string({
        context: 'server',
        access: 'secret',
      }),
      CONTACT_EMAIL: envField.string({
        context: 'server',
        access: 'secret',
      }),
    },
    validateSecrets: false,
  },

  site: SITE,

  vite: {
    plugins: [tailwindcss()],
  },
})
