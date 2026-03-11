function initVideoAutoplay() {
  document
    .querySelectorAll<HTMLVideoElement>("[data-autoplay-video]")
    .forEach((video) => {
      video.load();
      video.play().catch(() => {
        const play = () => {
          video.play().catch(() => {});
          document.removeEventListener("click", play);
        };
        document.addEventListener("click", play, { once: true });
      });
    });
}

initVideoAutoplay();
document.addEventListener("astro:page-load", initVideoAutoplay);
window.addEventListener("pageshow", (e) => {
  if (e.persisted) initVideoAutoplay();
});
