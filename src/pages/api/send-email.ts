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
  if (request.headers.get("Content-Type") !== "application/json") {
    return new Response(JSON.stringify({ message: "Invalid content type" }), {
      status: 400,
    });
  }

  const data = await request.json();

  const mailOptions = {
    from: {
      name: "noreply",
      address: import.meta.env.GMAIL_APP_EMAIL,
    },
    to: data.email,
    subject: data.subject,
    text: data.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });

  return new Response(JSON.stringify({ message: "Email sent!" }));
};
