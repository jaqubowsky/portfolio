import { Button, Input, Label, Textarea } from "@components/react";
import { useCaptcha } from "@hooks/useCaptcha";
import { getErrorMessage } from "@utils/error";
import { cn } from "@utils/index";
import { useState } from "react";

const RECAPTCHA_SITE_KEY = import.meta.env.PUBLIC_RECAPTCHA_KEY;

type Message = {
  type: "success" | "error";
  message: string;
};

const BASE_ERROR_MSG = "Failed to send message. Please try again.";

const ContactForm = () => {
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);

  const { handleVerifyCaptcha, isLoading: isCaptchaLoading } = useCaptcha({
    key: RECAPTCHA_SITE_KEY,
  });

  const isLoading = isFormLoading || isCaptchaLoading;

  const handleSendFormData = async (data: FormData) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: data,
      });

      if (!response.ok) throw new Error(BASE_ERROR_MSG);

      setMessage({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
    } catch (error) {
      setMessage({
        type: "error",
        message: getErrorMessage(error, BASE_ERROR_MSG),
      });
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsFormLoading(true);

    try {
      await handleVerifyCaptcha(async () => {
        const formData = new FormData(e.target as HTMLFormElement);
        await handleSendFormData(formData);
      });
    } catch (error) {
      setMessage({
        type: "error",
        message: getErrorMessage(error, BASE_ERROR_MSG),
      });
    } finally {
      setIsFormLoading(false);
    }
  };

  return (
    <form className="space-y-6 max-w-lg w-full" onSubmit={onSubmit}>
      <Label>
        Name
        <Input name="name" type="text" placeholder="ex. John Doe" required />
      </Label>

      <Label>
        Email
        <Input
          name="email"
          type="email"
          placeholder="ex john@doe.com"
          required
        />
      </Label>

      <Label>
        Subject
        <Input
          name="subject"
          type="text"
          placeholder="ex. Inquiry about services"
          required
        />
      </Label>

      <Label htmlFor="message">
        Message
        <Textarea
          name="message"
          placeholder="Hello, i would like to know more about your services."
          rows={5}
          required
        />
      </Label>

      {message && (
        <p
          className={cn(
            "text-red-500",
            message.type === "success" && "text-emerald-500"
          )}
        >
          {message.message}
        </p>
      )}

      <Button disabled={isLoading} className="w-full" type="submit">
        {isLoading ? "Loading..." : "Submit"}
      </Button>
    </form>
  );
};

export default ContactForm;
