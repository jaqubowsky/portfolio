import type { CollectionEntry } from "astro:content";

export const getPostData = (post: CollectionEntry<"posts">) => ({
  ...post.data,
  slug: post.id,
});
