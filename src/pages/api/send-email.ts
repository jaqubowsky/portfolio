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
  const data = await request.formData();
  const email = data.get("email") as string;
  const subject = data.get("subject") as string;
  const message = data.get("message") as string;

  const mailOptions = {
    from: {
      name: "noreply",
      address: import.meta.env.GMAIL_APP_EMAIL,
    },
    to: email,
    subject: `Message from ${email}: ${subject}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return ServerResponse({ message: "msg_email_failed", status: 500 });
    }
  });

  return ServerResponse({ message: "msg_email_sent" });
};
