const SELECTORS =
  ".animate-on-scroll, .animate-slide-left, .animate-slide-right";

let scrollObserver: IntersectionObserver | null = null;

function initScrollAnimations() {
  scrollObserver?.disconnect();

  scrollObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          scrollObserver?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "-50px", threshold: 0.1 },
  );

  for (const el of document.querySelectorAll(SELECTORS)) {
    scrollObserver.observe(el);
  }
}

initScrollAnimations();
document.addEventListener("astro:page-load", initScrollAnimations);
