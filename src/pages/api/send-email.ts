export const prerender = false;

import { ServerResponse } from "@utils/responses";
import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: import.meta.env.GMAIL_APP_EMAIL,
    pass: import.meta.env.GMAIL_APP_PASSWORD,
  },
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const email = data.get("email") as string | null;
    const subject = data.get("subject") as string | null;
    const html = data.get("html") as string | null;

    if (!email || !subject || !html) {
      return ServerResponse({ message: "msg_invalid_input", status: 400 });
    }

    const mailOptions = {
      from: {
        name: "noreply",
        address: import.meta.env.GMAIL_APP_EMAIL,
      },
      to: import.meta.env.GMAIL_APP_EMAIL,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);

    return ServerResponse({ message: "msg_email_sent" });
  } catch (error) {
    return ServerResponse({ message: "msg_email_failed", status: 500 });
  }
};
