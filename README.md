# Portfolio — Jakub Nalewajk

> Frontend Developer portfolio with an MDX blog, reCAPTCHA-protected contact form, and React 19 islands for interactivity. Static-first with Astro 5, deployed on Vercel.

**[Live Demo](https://jnalewajk.me)**

![Portfolio Banner](./public/og-image.png)

---

## What it does

- **Portfolio sections** — hero with animated avatar, experience timeline, project showcase with live demos, categorized skills grid, and a working contact form
- **Blog system** — MDX-powered posts with pagination, tag filtering, table of contents with active heading tracking, and share links
- **Contact form** — client-side reCAPTCHA v3 verification, React Email template rendering, server-side Gmail SMTP delivery, and confetti animation on success
- **Theme system** — dark/light toggle with OKLCH color tokens, persistent preference, and smooth transitions

## Architecture

```
src/
├── components/
│   ├── atoms/                # Basic UI elements (Badge, Card, IconBox, Heading, etc.)
│   ├── molecules/            # Composed elements (SectionHeader, BlogCard, BackToTop)
│   ├── organisms/            # Full sections (Home, Experience, Projects, Skills, Contact)
│   └── react/                # Interactive React islands (ContactForm, form inputs)
├── content/posts/            # MDX blog posts with Zod-validated frontmatter
├── emails/                   # React Email templates (ContactFormEmail)
├── hooks/                    # React hooks (useCaptcha)
├── layouts/                  # Page layouts (Layout, MarkdownPostLayout)
├── pages/
│   ├── api/                  # SSR endpoints: reCAPTCHA verification, email sending
│   ├── blog/                 # Paginated blog listing + individual post pages
│   └── category/             # Tag-filtered paginated blog
├── styles/                   # Tailwind v4 CSS-based config with OKLCH design tokens
└── utils/                    # Shared helpers (cn, formatDate, getPostData, ServerResponse)
```

Components follow **Atomic Design** — atoms are primitive UI elements, molecules compose atoms, organisms compose molecules into full page sections. Each level has a barrel `index.ts` for clean imports. Pages only import organisms and layouts.

## Key technical decisions

- **Astro 5 with React 19 islands** — static generation for all content pages, selective hydration (`client:load`) only for the contact form to minimize client-side JavaScript
- **Tailwind CSS v4 with CSS-based config** — no `tailwind.config` file; all design tokens defined as CSS custom properties in OKLCH color space with `@custom-variant` for dark mode
- **Content Collections with MDX** — type-safe blog posts with Zod schema validation (title, description, category enum, draft boolean, tags, image), draft filtering in `getStaticPaths`
- **Contact form pipeline** — `useCaptcha` hook verifies token via `/api/recaptcha`, React Email renders HTML client-side, `/api/send-email` delivers via Nodemailer (Gmail SMTP, port 465, SSL)
- **Atomic Design with barrel exports** — strict atoms/molecules/organisms hierarchy with `index.ts` per directory; shared patterns extracted into reusable components (`SectionHeader`, `IconBox`, `BackToTop`)

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Astro 5 (SSG + SSR for API routes) |
| Language | TypeScript (strict) |
| UI | React 19, Tailwind CSS 4, Astro components |
| Content | MDX, Astro Content Collections, Zod |
| Email | React Email + Nodemailer (Gmail SMTP) |
| Security | Google reCAPTCHA v3 |
| Linting | Biome |
| Deployment | Vercel (serverless functions, Web Analytics, Speed Insights) |

## Getting started

```bash
git clone https://github.com/jaqubowsky/portfolio.git
cd portfolio
npm install
cp .env.example .env      # fill in required values
npm run dev                # start dev server at localhost:4321
```

Requires Node.js 18+.
