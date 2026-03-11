import { PUBLIC_RECAPTCHA_KEY } from "astro:env/client";
import { Button, Input, Label, Textarea } from "@components/react";
import ContactFormEmail from "@emails/ContactFormEmail";
import { useCaptcha } from "@hooks/useCaptcha";
import { render } from "@react-email/render";
import { cn } from "@utils/cn";
import { getErrorMessage } from "@utils/error";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";

type ContactFormTranslations = {
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  sending: string;
  send: string;
  success: string;
  error: string;
  subject: string;
};

type Message = {
  type: "success" | "error";
  text?: string;
};

const PARTICLE_COUNT = 1000;
const SPREAD = 360;

const ONE_SECOND = 1000;

const ContactForm = ({
  translations,
}: {
  translations: ContactFormTranslations;
}) => {
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);

  const { handleVerifyCaptcha, isLoading: isCaptchaLoading } = useCaptcha({
    key: PUBLIC_RECAPTCHA_KEY,
  });

  const isLoading = isFormLoading || isCaptchaLoading;

  const handleSendFormData = async (data: FormData) => {
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: data,
    });

    if (!response.ok) throw new Error(translations.error);

    setMessage({
      type: "success",
      text: translations.success,
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsFormLoading(true);

    try {
      const form = e.target as HTMLFormElement;

      await handleVerifyCaptcha(async () => {
        const formData = new FormData(form);

        const html = await render(
          <ContactFormEmail
            name={formData.get("name") as string}
            email={formData.get("email") as string}
            subject={translations.subject}
            message={formData.get("message") as string}
          />,
        );

        formData.append("html", html);
        formData.append("subject", translations.subject);

        await handleSendFormData(formData);

        form.reset();

        confetti({
          particleCount: PARTICLE_COUNT,
          spread: SPREAD,
        });
      });
    } catch (error) {
      setMessage({
        type: "error",
        text: getErrorMessage(error, translations.error),
      });
    } finally {
      setIsFormLoading(false);
    }
  };

  useEffect(() => {
    if (!message) return;

    const id = setTimeout(() => setMessage(null), ONE_SECOND * 5);
    return () => clearTimeout(id);
  }, [message]);

  return (
    <form className="space-y-3 w-full mt-2" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Label>
          {translations.name}
          <Input
            name="name"
            type="text"
            placeholder={translations.namePlaceholder}
            required
          />
        </Label>

        <Label>
          {translations.email}
          <Input
            name="email"
            type="email"
            placeholder={translations.emailPlaceholder}
            required
          />
        </Label>
      </div>

      <Label>
        {translations.message}
        <Textarea
          name="message"
          placeholder={translations.messagePlaceholder}
          rows={5}
          required
        />
      </Label>

      <div
        className={cn(
          "flex items-start justify-start transition-all duration-500 ease-in-out w-full",
          message ? "h-8" : "h-0",
        )}
      >
        {message && (
          <p
            className={cn(
              "text-sm",
              message.type === "success" && "text-green-600",
              message.type === "error" && "text-red-600",
            )}
          >
            {message.text}
          </p>
        )}
      </div>
      <Button
        disabled={isLoading}
        className="w-full"
        type="submit"
        data-umami-event="contact-submit"
      >
        {isLoading ? translations.sending : translations.send}
      </Button>
    </form>
  );
};

export default ContactForm;
