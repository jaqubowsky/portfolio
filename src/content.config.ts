import { defineCollection } from "astro:content";
import { LOCALES } from "@i18n/config";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      category: z.enum(["blog", "news", "tutorial", "programming"]),
      draft: z.boolean(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
      lang: z.enum(LOCALES),
      translationKey: z.string().optional(),
    }),
});

export const collections = {
  posts: postsCollection,
};
