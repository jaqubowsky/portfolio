export const prerender = false;

import {
  CONTACT_EMAIL,
  RESEND_API_KEY,
  RESEND_FROM_EMAIL,
} from "astro:env/server";
import { ServerResponse } from "@utils/responses";
import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const email = data.get("email") as string | null;
    const subject = data.get("subject") as string | null;
    const html = data.get("html") as string | null;

    if (!email || !subject || !html) {
      return ServerResponse({ message: "msg_invalid_input", status: 400 });
    }

    await resend.emails.send({
      from: `Portfolio <${RESEND_FROM_EMAIL}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject,
      html,
    });

    return ServerResponse({ message: "msg_email_sent" });
  } catch (_error) {
    return ServerResponse({ message: "msg_email_failed", status: 500 });
  }
};
