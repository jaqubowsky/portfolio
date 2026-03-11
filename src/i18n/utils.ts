import { DEFAULT_LOCALE, LOCALE_BCP47, LOCALES, type Locale } from "./config";
import { translations } from "./translations";

export type Translations = (typeof translations)[Locale];

export function getLocale(input?: URL | string): Locale {
  if (input instanceof URL) {
    const [, segment] = input.pathname.split("/");
    const match = LOCALES.find((l) => l === segment);
    return match ?? DEFAULT_LOCALE;
  }

  const match = LOCALES.find((l) => l === input);
  return match ?? DEFAULT_LOCALE;
}

export function t(locale: Locale): Translations {
  return translations[locale];
}

export function getAlternateLocales(locale: Locale): Locale[] {
  return LOCALES.filter((l) => l !== locale);
}

export function getLocaleParam(locale: Locale): Locale | undefined {
  return locale === DEFAULT_LOCALE ? undefined : locale;
}

export function getLocalizedPathname(path: string, locale: Locale): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return cleanPath;
  return `/${locale}${cleanPath}`;
}

const localePrefixRegex = new RegExp(
  `^\\/(${LOCALES.filter((l) => l !== DEFAULT_LOCALE).join("|")})(?=\\/|$)`,
);

export function stripLocaleFromPath(path: string): string {
  return path.replace(localePrefixRegex, "") || "/";
}

export function formatDate(
  date: Date | string,
  locale: Locale = DEFAULT_LOCALE,
) {
  return new Intl.DateTimeFormat(LOCALE_BCP47[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
