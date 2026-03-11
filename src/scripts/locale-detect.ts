import { DEFAULT_LOCALE, LOCALES } from "@i18n/config";

const COOKIE_NAME = "preferred-locale";

const hasCookie = document.cookie
  .split(";")
  .some((c) => c.trim().startsWith(`${COOKIE_NAME}=`));

if (!hasCookie && window.location.pathname === "/") {
  const lang = (navigator.language || "").split("-")[0].toLowerCase();
  const match = LOCALES.find((l) => l === lang);

  if (match && match !== DEFAULT_LOCALE) {
    const secure = location.protocol === "https:" ? ";secure" : "";
    document.cookie = `${COOKIE_NAME}=${match};path=/;max-age=31536000;samesite=lax${secure}`;
    window.location.replace(`/${match}`);
  }
}
