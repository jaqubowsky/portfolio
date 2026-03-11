import type { APIRoute } from "astro";
import { LOCALES } from "@i18n/config";
import { ServerResponse } from "@utils/responses";

export const prerender = false;

export const POST: APIRoute = async ({ cookies, request }) => {
  const locale = await request.text();

  if (!LOCALES.includes(locale as (typeof LOCALES)[number])) {
    return ServerResponse({ status: 400, message: "Invalid locale" });
  }

  cookies.set("preferred-locale", locale, {
    path: "/",
    maxAge: 31536000,
    sameSite: "lax",
    secure: true,
    httpOnly: true,
  });

  return ServerResponse({ status: 200 });
};
