import { useState } from "react";

type UseCaptchaProps = {
  key: string;
};

const CAPTCHA_URL = "/api/recaptcha";
const BASE_ERROR_MSG = "Failed to verify captcha. Please try again.";

export const useCaptcha = ({ key }: UseCaptchaProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleVerifyKey = async (recaptcha: string) => {
    try {
      const response = await fetch(CAPTCHA_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recaptcha }),
      });
      if (!response.ok) throw new Error(BASE_ERROR_MSG);

      const data = await response.json();
      if (!data?.success) throw new Error(BASE_ERROR_MSG);

      return true;
    } catch (error) {
      return false;
    }
  };

  const handleVerifyCaptcha = async (callback: () => Promise<void>) => {
    setIsLoading(true);

    try {
      await new Promise<void>((resolve, reject) => {
        grecaptcha.ready(() => {
          grecaptcha
            .execute(key, { action: "submit" })
            .then(async (recaptcha) => {
              try {
                const verified = await handleVerifyKey(recaptcha);
                if (!verified) throw new Error(BASE_ERROR_MSG);

                await callback();
                resolve();
              } catch (error) {
                reject(new Error(BASE_ERROR_MSG));
              }
            });
        });
      });
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleVerifyCaptcha };
};
