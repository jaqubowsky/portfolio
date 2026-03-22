export const LOCALES = ['pl', 'en'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'pl'

export const LOCALE_LABELS: Record<Locale, string> = {
  pl: 'Polski',
  en: 'English',
}

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  pl: 'pl',
  en: 'en',
}

export const LOCALE_OG: Record<Locale, string> = {
  pl: 'pl_PL',
  en: 'en_US',
}

export const LOCALE_BCP47: Record<Locale, string> = {
  pl: 'pl-PL',
  en: 'en-US',
}

export const PATHNAMES = {
  '/': '/',
  '/blog': '/blog',
  '/services': {
    pl: '/uslugi',
    en: '/services',
  },
  '/blog/deploying-astro-on-dokploy': {
    pl: '/blog/wdrazanie-astro-na-dokploy',
    en: '/blog/deploying-astro-on-dokploy',
  },
  '/blog/my-programming-journey': {
    pl: '/blog/moja-droga-w-programowaniu',
    en: '/blog/my-programming-journey',
  },
  '/blog/i18n-in-astro-complete-guide': {
    pl: '/blog/i18n-w-astro-kompletny-poradnik',
    en: '/blog/i18n-in-astro-complete-guide',
  },
  '/blog/how-much-does-website-cost': {
    pl: '/blog/ile-kosztuje-strona-internetowa',
    en: '/blog/how-much-does-website-cost',
  },
  '/blog/refactoring-ai-code': {
    pl: '/blog/refaktoryzacja-kodu-ai',
    en: '/blog/refactoring-ai-code',
  },
  '/category/programming': {
    pl: '/category/programowanie',
    en: '/category/programming',
  },
  '/category/journey': {
    pl: '/category/droga',
    en: '/category/journey',
  },
  '/category/career': {
    pl: '/category/kariera',
    en: '/category/career',
  },
  '/category/websites': {
    pl: '/category/strony-internetowe',
    en: '/category/websites',
  },
  '/category/pricing': {
    pl: '/category/cennik',
    en: '/category/pricing',
  },
  '/category/business': {
    pl: '/category/biznes',
    en: '/category/business',
  },
  '/category/refactoring': {
    pl: '/category/refaktoryzacja',
    en: '/category/refactoring',
  },
  '/category/fullstack-developer': '/category/fullstack-developer',
  '/category/astro': '/category/astro',
  '/category/docker': '/category/docker',
  '/category/self-hosting': '/category/self-hosting',
  '/category/dokploy': '/category/dokploy',
  '/category/traefik': '/category/traefik',
  '/category/seo': '/category/seo',
  '/category/i18n': '/category/i18n',
  '/category/typescript': '/category/typescript',
  '/category/ai': '/category/ai',
  '/category/react': '/category/react',
  '/category/nextjs': '/category/nextjs',
  '/category/clean-code': '/category/clean-code',
} as const satisfies Record<string, string | Record<Locale, string>>
