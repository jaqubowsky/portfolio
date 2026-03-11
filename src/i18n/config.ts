export const LOCALES = ["pl", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "pl";

export const LOCALE_LABELS: Record<Locale, string> = {
  pl: "Polski",
  en: "English",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  pl: "pl",
  en: "en",
};

export const LOCALE_OG: Record<Locale, string> = {
  pl: "pl_PL",
  en: "en_US",
};

export const LOCALE_BCP47: Record<Locale, string> = {
  pl: "pl-PL",
  en: "en-US",
};
