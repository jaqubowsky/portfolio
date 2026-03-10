# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site (includes type checking via `astro check`) |
| `npm run preview` | Preview built site locally |
| `astro check` | Run TypeScript type checking standalone |

No test framework is configured. Validate changes with `npm run build`.

## Architecture Overview

Astro 5 portfolio site (jnalewajk.me) with React 19 islands, deployed on Vercel. TypeScript strict mode.

### Component Organization (Atomic Design)
- `src/components/atoms/` — Basic UI elements (buttons, inputs, badges)
- `src/components/molecules/` — Composed elements (cards, pagination, form groups)
- `src/components/organisms/` — Full sections (header, footer, hero, blog listings)
- `src/components/react/` — Interactive React components (ContactForm, form inputs). These are hydrated as React islands within Astro pages.

### Routing & API
- `src/pages/index.astro` — Home page
- `src/pages/blog/[...page].astro` — Paginated blog listing (pageSize: 6)
- `src/pages/blog/[slug]/index.astro` — Individual blog post
- `src/pages/category/[tag]/[...page].astro` — Tag-filtered paginated blog
- `src/pages/api/recaptcha.ts` — POST, verifies reCAPTCHA token (SSR, `prerender = false`)
- `src/pages/api/send-email.ts` — POST, sends email via Nodemailer/Gmail SMTP (SSR, `prerender = false`)

### Contact Form Flow
1. `ContactForm.tsx` submits → `useCaptcha` hook verifies token via `/api/recaptcha`
2. On success, email HTML is rendered **client-side** using `@react-email/render` with the `ContactFormEmail` template from `src/emails/`
3. Rendered HTML + form data POSTed to `/api/send-email`
4. Server sends via Nodemailer (Gmail SMTP, port 465, SSL)
5. Success triggers `canvas-confetti` animation

### Content Collections
- Blog posts in `src/content/posts/` as MDX files
- Schema in `src/content/config.ts`: title, description, author, pubDate, category (enum: blog/news/tutorial/programming), draft (boolean), image ({url, alt}), tags (string[])
- Posts with `draft: true` are filtered out in `getStaticPaths`

### Tailwind CSS v4
- **No `tailwind.config` file** — Tailwind v4 uses CSS-based configuration
- All design tokens defined in `src/styles/global.css` as CSS custom properties (OKLCH color space)
- Dark mode via `@custom-variant dark (&:is(.dark *))` — requires `.dark` class on an ancestor
- Typography plugin loaded via `@plugin "@tailwindcss/typography"`
- Vite plugin: `@tailwindcss/vite`; PostCSS plugin: `@tailwindcss/postcss`

### Path Aliases
```
@components/* → src/components/*
@layouts/*    → src/layouts/*
@pages/*      → src/pages/*
@utils/*      → src/utils/*
@hooks/*      → src/hooks/*
@emails/*     → src/emails/*
@images/*     → src/assets/images/*
```

### Key Utilities
- `src/utils/cn.ts` — `cn()` class merging via `clsx` + `tailwind-merge`
- `src/utils/date.ts` — `formatDate()` using `Intl.DateTimeFormat`
- `src/utils/error.ts` — `getErrorMessage()` for safe error extraction
- `src/utils/responses.ts` — `ServerResponse()` wrapper for API JSON responses

### Environment Variables
Required for contact form (validated in `astro.config.mjs` with `validateSecrets: true`):
- `PUBLIC_RECAPTCHA_KEY` (client-side)
- `RECAPTCHA_KEY` (server-side)
- `GMAIL_APP_EMAIL` (server-side)
- `GMAIL_APP_PASSWORD` (server-side)

Server env vars are imported from `astro:env/server`, client vars from `astro:env/client`.

### Deployment
- Vercel adapter with serverless functions for API routes
- Vercel Web Analytics and Speed Insights enabled
- Site URL: `https://jnalewajk.me`
