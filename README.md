# Personal Portfolio Website

A modern, performant portfolio website built with Astro, featuring a blog system, contact form, and interactive React components. Deployed on Vercel with full TypeScript support.

🌐 **Live Site**: [jnalewajk.me](https://jnalewajk.me)

## ✨ Features

- **🚀 Astro + React Hybrid**: Static site generation with React islands for interactivity
- **📝 Blog System**: Dynamic blog with MDX support, categories, and tag filtering
- **📧 Contact Form**: Secure contact form with reCAPTCHA validation and email delivery
- **🎨 Modern Design**: Clean, responsive design with dark/light theme toggle
- **⚡ Performance**: Optimized for speed with Vercel analytics integration
- **🔍 SEO Ready**: Structured data and meta tags for search engine optimization
- **♿ Accessible**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) with SSG
- **UI Library**: React 19 for interactive components
- **Styling**: Tailwind CSS with custom design system
- **Content**: MDX with Astro Content Collections
- **Form Handling**: React Email + Nodemailer
- **Security**: Google reCAPTCHA integration
- **Deployment**: Vercel with serverless functions
- **Analytics**: Vercel Web Analytics & Speed Insights

## 🏗️ Architecture

### Component Organization
- **Atomic Design**: Components structured as `atoms/`, `molecules/`, and `organisms/`
- **Hybrid Approach**: Static Astro components with React islands for interactivity
- **Type Safety**: Full TypeScript support with strict configuration

### Key Features
- Content management through Astro Content Collections
- Secure contact form with spam protection
- Blog system with pagination and categorization
- Theme switching with persistent user preference
- Email templates using React Email components

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Add your reCAPTCHA and Gmail credentials
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

Visit `http://localhost:4321` to view your site.

## 📝 Environment Variables

```env
PUBLIC_RECAPTCHA_KEY=your_public_recaptcha_key
RECAPTCHA_KEY=your_private_recaptcha_key
GMAIL_APP_EMAIL=your_gmail_address
GMAIL_APP_PASSWORD=your_gmail_app_password
```

## 🧞 Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site (includes type checking) |
| `npm run preview` | Preview built site locally |
| `astro check` | Run TypeScript type checking |

## 📁 Project Structure

```
src/
├── components/          # UI Components
│   ├── atoms/          # Basic building blocks
│   ├── molecules/      # Combined components
│   ├── organisms/      # Complex sections
│   └── react/          # Interactive React components
├── content/            # Blog posts and content
├── emails/             # Email templates
├── hooks/              # React hooks
├── layouts/            # Page layouts
├── pages/              # Routes and API endpoints
├── styles/             # Global styles
└── utils/              # Utility functions
```

## 🤝 Contributing

This is a personal portfolio project, but feel free to use it as inspiration for your own portfolio. If you find bugs or have suggestions, please open an issue.

## 📄 License

MIT License - feel free to use this code for your own projects.
