import { useState } from 'react'

type UseCaptchaProps = {
  key: string
}

const CAPTCHA_URL = '/api/recaptcha/'
const CAPTCHA_ERROR_MSG = 'Failed to verify captcha. Please try again.'

const verifyCaptchaToken = async (recaptchaToken: string) => {
  const response = await fetch(CAPTCHA_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ recaptcha: recaptchaToken }),
  })

  if (!response.ok) throw new Error(CAPTCHA_ERROR_MSG)

  const json = await response.json()
  if (!json?.data?.success) throw new Error(CAPTCHA_ERROR_MSG)
}

declare global {
  var __loadRecaptcha: (() => void) | undefined
}

const executeCaptcha = (key: string): Promise<string> => {
  window.__loadRecaptcha?.()

  return new Promise((resolve, reject) => {
    const check = () => {
      if (typeof grecaptcha !== 'undefined') {
        grecaptcha.ready(() => {
          grecaptcha.execute(key, { action: 'submit' }).then(resolve, reject)
        })
      } else {
        setTimeout(check, 100)
      }
    }
    check()
  })
}

export const useCaptcha = ({ key }: UseCaptchaProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleVerifyCaptcha = async (callback: () => Promise<void>) => {
    setIsLoading(true)

    try {
      const token = await executeCaptcha(key)
      await verifyCaptchaToken(token)
      await callback()
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, handleVerifyCaptcha }
}
