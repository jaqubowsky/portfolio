export const prerender = false;

import { ServerResponse } from "@utils/responses";
import type { APIRoute } from "astro";

const RECAPTCHA_URL = "https://www.google.com/recaptcha/api/siteverify";
const REQUEST_HEADERS = {
  "Content-Type": "application/x-www-form-urlencoded",
};
const RECAPTCHA_KEY = import.meta.env.RECAPTCHA_KEY;

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") !== "application/json") {
    return ServerResponse({ message: "msg_invalid_content_type", status: 400 });
  }

  if (!RECAPTCHA_KEY) {
    return ServerResponse({ message: "msg_recaptcha_not_found", status: 500 });
  }

  const data = await request.json();

  const requestBody = new URLSearchParams({
    secret: RECAPTCHA_KEY,
    response: data.recaptcha,
  });

  const response = await fetch(RECAPTCHA_URL, {
    method: "POST",
    headers: REQUEST_HEADERS,
    body: requestBody.toString(),
  });

  const responseData = await response.json();

  return ServerResponse({ data: responseData });
};
