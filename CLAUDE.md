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

Astro 5 multilingual portfolio site (jnalewajk.me) with React 19 islands. TypeScript strict mode. Polish (default) + English.

### i18n System
- **Config**: `src/i18n/config.ts` — `LOCALES`, `DEFAULT_LOCALE` ('pl'), BCP47/OG/HTML mappings
- **Translations**: `src/i18n/translations/{pl,en}.ts` — all UI strings as `as const` TypeScript objects
- **Utils**: `src/i18n/utils.ts` — `getLocale()`, `t()`, `getLocalizedPathname()`, `stripLocaleFromPath()`, `formatDate()`
- **Routing**: `[...locale]` rest param — `undefined` for PL (no prefix), `'en'` for English
- **Content**: Posts in `src/content/posts/{pl,en}/` with `lang` field and `translationKey` for linking translations
- **Detection**: `src/scripts/locale-detect.ts` — redirects first-time visitors based on `navigator.language`
- **Switcher**: `src/components/molecules/LanguageSwitcher.astro` — reads hreflang links from `<head>` for translated blog post URLs

### Component Organization (Atomic Design)
- `src/components/atoms/` — Basic UI elements (buttons, inputs, badges)
- `src/components/molecules/` — Composed elements (cards, pagination, language switcher, navigation)
- `src/components/organisms/` — Full sections (header, footer, hero, blog listings)
- `src/components/react/` — Interactive React components (ContactForm, form inputs). Hydrated as React islands.

Each level has barrel `index.ts`. Import from barrel, not individual files.

### Routing & API
- `src/pages/[...locale]/index.astro` — Home page (`/` for PL, `/en/` for EN)
- `src/pages/[...locale]/blog/[...page].astro` — Paginated blog listing (pageSize: 6)
- `src/pages/[...locale]/blog/[slug]/index.astro` — Individual blog post (with alternateHref for translations)
- `src/pages/[...locale]/category/[tag]/[...page].astro` — Tag-filtered paginated blog
- `src/pages/404.astro` — Custom 404 page (SSR, locale-aware)
- `src/pages/api/recaptcha.ts` — POST, verifies reCAPTCHA token (SSR)
- `src/pages/api/send-email.ts` — POST, sends email via Resend API (SSR)

### Contact Form Flow
1. `ContactForm.tsx` submits → `useCaptcha` hook verifies token via `/api/recaptcha`
2. On success, email HTML is rendered **client-side** using `@react-email/render` with the `ContactFormEmail` template from `src/emails/`
3. Rendered HTML + form data POSTed to `/api/send-email`
4. Server sends via Resend API
5. Success triggers `canvas-confetti` animation

### Content Collections
- Blog posts in `src/content/posts/{en,pl}/` as MDX files
- Schema in `src/content.config.ts`: title, description, author, pubDate, category (enum), draft (boolean), image ({url, alt}), tags (string[]), lang (enum from LOCALES), translationKey (optional string)
- Posts with `draft: true` are filtered out in `getStaticPaths`
- `src/utils/validate-translations.ts` — validates translation completeness and structural consistency at build time

### SEO
- `src/utils/seo.ts` — `getSeoData()` generates canonical URLs, hreflang, JSON-LD (WebSite + Person + ProfessionalService for pages, BlogPosting for posts), OG/Twitter meta
- `getBreadcrumbJsonLd()` — BreadcrumbList schema for blog pages
- `AUTHOR` constant — author data with geo coordinates, socials, skills
- Layout includes `rel="me"` links, `noindex` support for paginated pages (page 2+)

### Tailwind CSS v4
- **No `tailwind.config` file** — Tailwind v4 uses CSS-based configuration
- All design tokens defined in `src/styles/global.css` as CSS custom properties (OKLCH color space)
- Dark mode via `@custom-variant dark (&:is(.dark *))` — requires `.dark` class on an ancestor
- Typography plugin loaded via `@plugin "@tailwindcss/typography"`
- Vite plugin: `@tailwindcss/vite`

### Path Aliases
```
@components/* → src/components/*
@layouts/*    → src/layouts/*
@pages/*      → src/pages/*
@utils/*      → src/utils/*
@hooks/*      → src/hooks/*
@emails/*     → src/emails/*
@images/*     → src/assets/images/*
@i18n/*       → src/i18n/*
@i18n         → src/i18n (barrel)
@scripts/*    → src/scripts/*
```

### Key Utilities
- `src/utils/cn.ts` — `cn()` class merging via `clsx` + `tailwind-merge`
- `src/utils/date.ts` — `formatDate()` re-exported from i18n utils
- `src/utils/error.ts` — `getErrorMessage()` for safe error extraction
- `src/utils/responses.ts` — `ServerResponse()` wrapper for API JSON responses
- `src/utils/posts.ts` — `getPostsForLocale()`, `getPostData()`, `stripLocalePrefix()`

### Environment Variables
Required for contact form (defined in `astro.config.mjs` env schema):
- `PUBLIC_RECAPTCHA_KEY` (client-side)
- `RECAPTCHA_KEY` (server-side)
- `RESEND_API_KEY` (server-side)
- `RESEND_FROM_EMAIL` (server-side)
- `CONTACT_EMAIL` (server-side)

Server env vars are imported from `astro:env/server`, client vars from `astro:env/client`.

### Deployment
- Node.js adapter (standalone) with Dokploy/Traefik on VPS
- Docker multi-stage build
- Site URL: `https://jnalewajk.me`

### Adding a New Blog Post
1. Create MDX files in `src/content/posts/{en,pl}/` with matching `translationKey`
2. Add the translated post URL pair to `translatedPosts` array in `astro.config.mjs` (for sitemap hreflang)
3. Run `npm run build` to validate translations (mismatched structure/fields are warned)
