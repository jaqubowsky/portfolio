import { readdirSync, readFileSync } from 'node:fs'
import { basename, join } from 'node:path'

import { DEFAULT_LOCALE, LOCALE_BCP47, LOCALES, PATHNAMES, type Locale } from './config'
import { translations } from './translations'

export type Translations = (typeof translations)[Locale]

export function getLocale(input?: URL | string): Locale {
  if (input instanceof URL) {
    const [, segment] = input.pathname.split('/')
    const match = LOCALES.find((l) => l === segment)
    return match ?? DEFAULT_LOCALE
  }

  const match = LOCALES.find((l) => l === input)
  return match ?? DEFAULT_LOCALE
}

export function t(locale: Locale): Translations {
  return translations[locale]
}

export function getAlternateLocales(locale: Locale): Locale[] {
  return LOCALES.filter((l) => l !== locale)
}

export function getLocaleParam(locale: Locale): Locale | undefined {
  return locale === DEFAULT_LOCALE ? undefined : locale
}

export function getLocalizedPathname(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  if (locale === DEFAULT_LOCALE) return cleanPath
  return `/${locale}${cleanPath}`
}

const localePrefixRegex = new RegExp(
  `^\\/(${LOCALES.filter((l) => l !== DEFAULT_LOCALE).join('|')})(?=\\/|$)`
)

export function stripLocaleFromPath(path: string): string {
  return path.replace(localePrefixRegex, '') || '/'
}

export function getLocalizedRoute(key: keyof typeof PATHNAMES, locale: Locale): string {
  const entry = PATHNAMES[key]
  const path = typeof entry === 'string' ? entry : entry[locale]
  return getLocalizedPathname(path, locale)
}

export function getAlternateRoute(key: keyof typeof PATHNAMES, locale: Locale): string {
  const alternates = LOCALES.filter((l) => l !== locale)
  if (alternates.length !== 1) return ''
  return getLocalizedRoute(key, alternates[0])
}

export function buildHreflangMap(siteUrl: string): Map<string, { url: string; lang: string }[]> {
  const map = new Map<string, { url: string; lang: string }[]>()

  for (const entry of Object.values(PATHNAMES)) {
    const paths: Record<Locale, string> = {} as Record<Locale, string>
    for (const l of LOCALES) {
      const path = typeof entry === 'string' ? entry : entry[l]
      paths[l] = getLocalizedPathname(path, l)
    }

    const links = [
      ...LOCALES.map((l) => ({
        url: `${siteUrl}${paths[l]}/`,
        lang: LOCALE_BCP47[l],
      })),
      {
        url: `${siteUrl}${paths[DEFAULT_LOCALE]}/`,
        lang: 'x-default',
      },
    ]

    for (const l of LOCALES) {
      map.set(`${siteUrl}${paths[l]}/`, links)
    }
  }

  return map
}

export function buildLastmodMap(siteUrl: string, postsDir: string): Map<string, string> {
  const map = new Map<string, string>()
  for (const locale of LOCALES) {
    const dir = join(postsDir, locale)
    for (const file of readdirSync(dir)) {
      if (!file.endsWith('.mdx')) continue
      const content = readFileSync(join(dir, file), 'utf-8')
      const match = content.match(/pubDate:\s*(\d{4}-\d{2}-\d{2})/)
      if (!match) continue
      const slug = basename(file, '.mdx')
      const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`
      map.set(`${siteUrl}${prefix}/blog/${slug}/`, match[1])
    }
  }
  return map
}

export function formatDate(date: Date | string, locale: Locale = DEFAULT_LOCALE) {
  return new Intl.DateTimeFormat(LOCALE_BCP47[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}
