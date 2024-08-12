/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly GMAILA_APP_EMAIL: string;
  readonly GMAIL_APP_PASSWORD: string;
  readonly RECAPTCHA_KEY: string;
  readonly PUBLIC_RECAPTCHA_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
