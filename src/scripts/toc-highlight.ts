let tocObserver: IntersectionObserver | null = null;

function initTocHighlight() {
  tocObserver?.disconnect();

  const tocLinks = document.querySelectorAll("[data-toc-link]");
  if (!tocLinks.length) return;

  const headingEls = Array.from(tocLinks)
    .map((link) => {
      const slug = link.getAttribute("href")?.replace("#", "");
      return slug ? document.getElementById(slug) : null;
    })
    .filter(Boolean) as HTMLElement[];

  const visibleIds = new Set<string>();

  tocObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          visibleIds.add(entry.target.id);
        } else {
          visibleIds.delete(entry.target.id);
        }
      }

      const activeId =
        headingEls.find((el) => visibleIds.has(el.id))?.id ?? null;

      for (const link of tocLinks) {
        const isActive = link.getAttribute("href") === `#${activeId}`;
        link.classList.toggle("!text-primary", isActive);
        link.classList.toggle("!text-foreground", isActive);
        link.classList.toggle("font-semibold", isActive);
      }
    },
    { rootMargin: "-80px 0px -60% 0px", threshold: 0 },
  );

  for (const el of headingEls) {
    tocObserver.observe(el);
  }
}

initTocHighlight();
document.addEventListener("astro:page-load", initTocHighlight);
