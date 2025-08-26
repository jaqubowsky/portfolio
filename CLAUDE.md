# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site (includes type checking) |
| `npm run preview` | Preview built site locally |
| `astro check` | Run TypeScript type checking |

## Architecture Overview

This is an Astro-based portfolio website with React components, deployed on Vercel. Key architectural decisions:

### Component Organization
- **Atomic Design Pattern**: Components are organized into `atoms/`, `molecules/`, and `organisms/`
- **Astro Components**: Main UI components in `.astro` format for static generation
- **React Components**: Interactive components (ContactForm, form inputs) in `src/components/react/`
- **Hybrid Approach**: Static Astro components with React islands for interactivity

### Content Management
- **Content Collections**: Blog posts defined in `src/content/posts/` using Astro's content collections
- **MDX Support**: Blog posts written in MDX format with frontmatter schema validation
- **Type Safety**: Content schema defined in `src/content/config.ts` with Zod validation

### Key Features
- **Contact Form**: React-based contact form with reCAPTCHA validation and email sending via Nodemailer
- **Blog System**: Dynamic blog with pagination, categories, and tag filtering
- **Theme Toggle**: Dark/light mode switching
- **Email Integration**: Contact form emails rendered with React Email components

### Path Aliases
```typescript
@components/* → src/components/*
@layouts/* → src/layouts/*
@pages/* → src/pages/*
@utils/* → src/utils/*
@hooks/* → src/hooks/*
@emails/* → src/emails/*
```

### Environment Variables
Required for contact form functionality:
- `PUBLIC_RECAPTCHA_KEY` (client-side)
- `RECAPTCHA_KEY` (server-side)
- `GMAIL_APP_EMAIL` (server-side)
- `GMAIL_APP_PASSWORD` (server-side)

### Styling
- **Tailwind CSS**: Utility-first CSS with custom design system
- **PostCSS**: Build-time CSS processing
- **Global Styles**: Base styles in `src/styles/global.css`

### Deployment
- **Vercel Adapter**: Configured for serverless deployment
- **Web Analytics**: Vercel analytics enabled
- **Build Process**: Type checking occurs during build step