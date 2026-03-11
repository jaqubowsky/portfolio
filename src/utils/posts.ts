import type { CollectionEntry } from "astro:content";
import { LOCALES, type Locale } from "@i18n/config";

const localePrefix = new RegExp(`^(${LOCALES.join("|")})\\/`);

export function stripLocalePrefix(id: string): string {
  return id.replace(localePrefix, "");
}

export const getPostData = (post: CollectionEntry<"posts">, locale: Locale) => {
  const slug = stripLocalePrefix(post.id);
  return {
    ...post.data,
    slug,
    locale,
  };
};

export const getPostsForLocale = (
  posts: CollectionEntry<"posts">[],
  locale: Locale,
) =>
  posts
    .filter((p) => p.data.lang === locale && !p.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
