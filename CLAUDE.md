# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

| Command           | Description                                                      |
| ----------------- | ---------------------------------------------------------------- |
| `npm run dev`     | Start development server at localhost:4321                       |
| `npm run build`   | Build production site (includes type checking via `astro check`) |
| `npm run preview` | Preview built site locally                                       |
| `astro check`     | Run TypeScript type checking standalone                          |

No test framework is configured. Validate changes with `npm run build`.

## Code Style

- Use `-` (hyphen) instead of `—` (em dash) in strings and text content.

## Architecture Overview

Astro 5 multilingual portfolio site (jnalewajk.me) with React 19 islands. TypeScript strict mode. Polish (default) + English.

### i18n System

- **Config**: `src/i18n/config.ts` - `LOCALES`, `DEFAULT_LOCALE` ('pl'), BCP47/OG/HTML mappings
- **Translations**: `src/i18n/translations/{pl,en}.ts` - all UI strings as `as const` TypeScript objects
- **Pathnames**: `src/i18n/config.ts` - `PATHNAMES` maps internal route keys to per-locale slugs (inspired by next-intl)
- **Utils**: `src/i18n/utils.ts` - `getLocale()`, `t()`, `getLocalizedPathname()`, `getLocalizedRoute()`, `getAlternateRoute()`, `buildHreflangMap()`, `formatDate()`
- **Routing**: `[...locale]` rest param - `undefined` for PL (no prefix), `'en'` for English
- **Content**: Posts in `src/content/posts/{pl,en}/` with `lang` field and `translationKey` for linking translations
- **Detection**: `src/scripts/locale-detect.ts` - redirects first-time visitors based on `navigator.language`
- **Switcher**: `src/components/molecules/LanguageSwitcher.astro` - reads hreflang links from `<head>` for translated blog post URLs

### Component Organization (Atomic Design)

- `src/components/atoms/` - Basic UI elements (buttons, inputs, badges)
- `src/components/molecules/` - Composed elements (cards, pagination, language switcher, navigation)
- `src/components/organisms/` - Full sections (header, footer, hero, blog listings)
- `src/components/react/` - Interactive React components (ContactForm, form inputs). Hydrated as React islands.

Each level has barrel `index.ts`. Import from barrel, not individual files.

### Routing & API

- `src/pages/[...locale]/index.astro` - Home page (`/` for PL, `/en/` for EN)
- `src/pages/[...locale]/blog/[...page].astro` - Paginated blog listing (pageSize: 6)
- `src/pages/[...locale]/blog/[slug]/index.astro` - Individual blog post (with alternateHref for translations)
- `src/pages/[...locale]/category/[tag]/[...page].astro` - Tag-filtered paginated blog
- `src/pages/404.astro` - Custom 404 page (SSR, locale-aware)
- `src/pages/api/recaptcha.ts` - POST, verifies reCAPTCHA token (SSR)
- `src/pages/api/send-email.ts` - POST, sends email via Resend API (SSR)

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
- `src/utils/validate-translations.ts` - validates translation completeness and structural consistency at build time

### SEO

- `src/utils/seo.ts` - `getSeoData()` generates canonical URLs, hreflang, JSON-LD (WebSite + Person + ProfessionalService for pages, BlogPosting for posts), OG/Twitter meta
- `getBreadcrumbJsonLd()` - BreadcrumbList schema for blog pages
- `AUTHOR` constant - author data with geo coordinates, socials, skills
- Layout includes `rel="me"` links, `noindex` support for paginated pages (page 2+)

### Tailwind CSS v4

- **No `tailwind.config` file** - Tailwind v4 uses CSS-based configuration
- All design tokens defined in `src/styles/global.css` as CSS custom properties (OKLCH color space)
- Dark mode via `@custom-variant dark (&:is(.dark *))` - requires `.dark` class on an ancestor
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

- `src/utils/cn.ts` - `cn()` class merging via `clsx` + `tailwind-merge`
- `src/utils/date.ts` - `formatDate()` re-exported from i18n utils
- `src/utils/error.ts` - `getErrorMessage()` for safe error extraction
- `src/utils/responses.ts` - `ServerResponse()` wrapper for API JSON responses
- `src/utils/posts.ts` - `getPostsForLocale()`, `getPostData()`, `stripLocalePrefix()`

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
2. Add the translated post pathname pair to `PATHNAMES` in `src/i18n/config.ts` (for sitemap hreflang)
3. If the post introduces new locale-specific tags (e.g. PL `biznes` / EN `business`), add a category pathname pair to `PATHNAMES` as well (e.g. `'/category/business': { pl: '/category/biznes', en: '/category/business' }`)
4. Run `npm run build` to validate translations (mismatched structure/fields are warned)

## Writing Style for Blog Posts & UI Content

Jakub's writing voice is direct, honest, and never corporate. Two audiences, one voice - just different depth levels.

### Jakub's voice - extracted from how he actually communicates

- **Gets to the point immediately** - no intros, no "in this article we will discuss". Start with the thing. "Pytanie ile kosztuje strona to jedno z najczęściej wpisywanych w Google." Done, we're in.
- **Thinks out loud** - shares reasoning, not just conclusions. "Z tym SEO u mnie to ciężko bo mało o nim wiem" - this honesty IS the brand. Don't hide limitations, frame them.
- **Uses rhetorical questions** - "Jak to możliwe?", "Czy będzie szybka?", "Co jeśli coś się zepsuje?" - pulls the reader in
- **Breaks complex things into "a co z tym?"** - tables, bullet lists, comparisons. Never a wall of text explaining 5 things at once
- **Ends with clear action** - not "contact us for more information" but "Napisz, powiedz czego potrzebujesz - dostaniesz konkretną wycenę"
- **Honest about tradeoffs** - "Tania strona, która nie przynosi klientów, to nie oszczędność - to strata pieniędzy." Doesn't pretend everything is great

### Audience: Business owners ("Janusze")

Posts on `/uslugi`, FAQ, service descriptions, business-oriented blog posts.

- **Zero jargon** - translate EVERYTHING to human language:
  - ~~CMS~~ → "panel administracyjny"
  - ~~SSL~~ → "kłódka przy adresie"
  - ~~SEO~~ → "żeby Google Cię znalazł"
  - ~~deploy~~ → "strona ląduje w sieci"
  - ~~responsywna~~ → "działa na telefonie tak samo dobrze jak na komputerze"
- **Problem → solution** - start from what Janusz FEELS, not what you do. "Tracisz klientów bo Cię nie ma w Google" not "oferuję optymalizację SEO"
- **Comparisons he understands** - "taniej niż w agencji", "gotowa w 2-3 tygodnie", "bez czekania na zespół"
- **Colloquial PL** - "od razu lecimy do roboty", "ogarniam wszystko od A do Z", "bez zbędnych formalności"
- **Never corporate** - no "w ramach", "w zakresie", "oferujemy Państwu", "skontaktuj się w celu omówienia"

Example good CTA: "Napisz, powiedz czego potrzebujesz"
Example bad CTA: "Skontaktuj się w celu omówienia szczegółów współpracy"

### Audience: Recruiters & developers

Technical blog posts, programming tutorials, career content.

- **Jargon is fine** - readers know what Next.js, SSR, TypeScript are
- **Still direct** - no academic tone. "Miałem dość ręcznego przeglądania ofert pracy. Zbudowałem platformę." not "The motivation behind this project was to streamline..."
- **Show don't tell** - code snippets, screenshots, concrete numbers ("3500 zamówień miesięcznie", "w mniej niż 15 minut")
- **Personal angle** - "zbudowałem bo potrzebowałem", "napotkałem problem i postanowiłem go rozwiązać" - not generic tutorials

### Both audiences

- Use `-` (hyphen) not `—` (em dash) in all content
- Short sentences. One thought = one sentence. Break up paragraphs
- Tables and lists over prose when comparing things
- Honest > impressive. Don't promise what you can't deliver
- PL version is more casual, EN version slightly more professional but still approachable
- Never translate Polish idioms literally to English - adapt the vibe, not the words
