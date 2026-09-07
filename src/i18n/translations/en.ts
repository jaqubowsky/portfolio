export default {
  meta: {
    title: "Jakub Nalewajk - Fullstack Developer (Node.js, NestJS, Next.js)",
    description:
      "Fullstack developer based in Warsaw with 3 years of commercial experience. Node.js, NestJS, Next.js. I build domain logic, API integrations and the data layer, and set up how teams work with AI agents in their codebase.",
    keywords:
      "Jakub Nalewajk, fullstack developer, fullstack developer Warsaw, Node.js developer, NestJS developer, Next.js developer, React developer, TypeScript, PostgreSQL, Redis, BullMQ, Prisma, Drizzle ORM, Nx, Turborepo, Playwright, Vitest, Testing Library, AWS, Strapi, AI-assisted development, Claude Code, Vercel AI SDK, developer portfolio, fullstack jobs Warsaw, remote developer",
    blogTitle: "Blog - Jakub Nalewajk",
    blogDescription:
      "Practical articles about Next.js, React, TypeScript and web development. Guides, problem solutions and lessons from real projects.",
    notFoundTitle: "404 - Page Not Found | Jakub Nalewajk",
    notFoundDescription:
      "The page you're looking for doesn't exist. Head back to Jakub Nalewajk's portfolio.",
  },
  nav: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",
    services: "Services",
    skills: "Skills",
    contact: "Contact",
    blog: "Blog",
    skipToContent: "Skip to content",
    closeMenu: "Close menu",
  },
  hero: {
    jobTitle: "Fullstack Developer · Node.js, NestJS, Next.js",
    description:
      "Three years of commercial experience. I ship frontend and backend features, third-party API integrations and the data layer. In parallel I run dubaj.estate on my own, from architecture to the release process, and I set up how the team works with AI agents in that repository.",
    cta: "Get in Touch",
    downloadCv: "Download CV",
    availability: [
      { icon: "mdi:map-marker-outline", text: "Warsaw or remote" },
      { icon: "mdi:briefcase-outline", text: "Full-time" },
      { icon: "mdi:translate", text: "English C1" },
      { icon: "mdi:school-outline", text: "Engineer's in CS, WSB Merito" },
    ],
  },
  experience: {
    title: "Where I've worked",
    description:
      "Commercial projects I've worked on - from architecture to deployment.",
    jobs: [
      {
        company: "autoMEE",
        url: "https://automee.pl/",
        role: "Fullstack Developer",
        tech: "TypeScript, Node.js, React",
        period: "Jul 2026 – Present",
        location: "Full-time, remote",
        bullets: [
          "Shipping frontend and backend features in a 6-person team: document handling, PLN/EUR settlements and accounting workflows.",
          "Built third-party integrations with Kontomatik and Tink, enabling automated transaction import.",
          "Rolled out features to the Polish and UK markets, with market-specific configuration and compliance rules.",
        ],
      },
      {
        company: "CodeYourBrand",
        url: "https://www.codeyourbrand.com/",
        role: "Mid Frontend → Mid Fullstack Developer",
        tech: "Next.js, NestJS, Nx, Strapi",
        period: "Oct 2025 – Present",
        location: "Part-time since Jul 2026",
        bullets: [
          "I own dubaj.estate end to end, a Dubai real estate platform: architecture, release process and stakeholder communication.",
          "Set up the team's AI coding workflow in the repo: shared Claude Code configuration, custom commands, conventions and the documentation it operates against.",
          "Designed the platform as 5 vertical domain modules over four layers. Dependencies point one way, down, so no module reaches into another's internals (Nx, Next.js, Strapi CMS).",
          "Wrote 490+ unit, integration and e2e tests for dubaj.estate (Vitest, Testing Library, Playwright).",
          "Shipped new features for Parkingowo (Next.js, NestJS) across API endpoints, the data layer and the UI.",
          "Set up visual regression testing in CI. Every PR diffs rendered screenshots against a baseline, which caught 3 layout regressions last month before they reached the client.",
          "Lighthouse audits 7 paths in the same pipeline, holding 94 performance, 96 accessibility and 100 SEO. Renovate with automerge keeps dependencies current.",
          "Set up tagged releases with generated changelogs, branch protection and rulesets enforcing review before merge.",
          "Configured production hosting: AWS Amplify for the Next.js app, Strapi CMS with environment configuration per stage. I debug production issues from CloudWatch logs.",
          "Earlier, as Mid Frontend Developer, I rebuilt and tested Maspex Photo Service and its admin panel for a major FMCG company, as the only frontend developer on the project. Bundle size down ~30%. Both three-month milestones landed ahead of schedule, and I took dubaj.estate end to end within 3 months.",
        ],
      },
      {
        company: "Haergi",
        url: "https://haergi.pl/",
        role: "Frontend → Fullstack Developer",
        tech: "Next.js, Express, MongoDB",
        period: "Aug 2023 – Oct 2025",
        location: "Warsaw, Poland",
        bullets: [
          "Built the fullstack LeadMe AI platform, a SaaS for automating customer tasks and tracking operations (React, React Query, Express).",
          "Created InstagoAI from scratch, an AI website builder for small businesses (Next.js, Express, MongoDB, TypeScript). Owned the full stack: auth, backend, frontend, database modeling, AI workflows.",
          "Developed a B2B e-commerce platform for Mezze Foods (Warsaw restaurant) on top of InstagoAI, integrated with LeadMe AI for orders, invoicing and client messaging. 3,500+ orders per month.",
          "Wrote an i18n tool for CI/CD that generated translations for 15+ languages across ~1,500 keys. It removed manual translation work from every company project.",
          "Started as a frontend developer: 3 landing pages for startup products scoring 90+ on Lighthouse (performance and accessibility). Promoted to fullstack after 12 months.",
        ],
      },
    ],
  },
  featuredWork: {
    title: "A project I run on my own",
    description:
      "What the work looks like when I own everything from architecture to release.",
    problemLabel: "Problem",
    decisionsLabel: "Decisions",
    project: {
      name: "dubaj.estate",
      url: "https://dubaj.estate/",
      subtitle: "Dubai real estate platform · architecture to release",
      problem:
        "The platform had to keep growing into new business areas, and the team is one person. In that setup every shortcut in the code structure comes back a month later as hours of debugging.",
      decisions: [
        "Five vertical domain modules over four layers. Dependencies point one way, down, so no module reaches into another's internals.",
        "Unit, integration and e2e tests written alongside features, not after them (Vitest, Testing Library, Playwright).",
        "Visual regression in CI. Every PR diffs rendered screenshots against a baseline, so a layout break fails the build instead of reaching the client.",
        "Tagged releases with generated changelogs, branch protection and rulesets enforcing review. Renovate with automerge keeps dependencies current.",
      ],
      tech: [
        "Nx",
        "Next.js",
        "NestJS",
        "Strapi CMS",
        "Playwright",
        "AWS Amplify",
      ],
    },
  },
  projects: {
    title: "What I built after hours",
    description:
      "Projects I run from the database schema to deployment on my own server. Each one started because I hit a real problem and wanted it gone.",
    items: [
      {
        description:
          "While treating gut issues with a clinical dietitian, I was juggling 20+ supplements and antibiotics across multiple protocols. Built a fullstack PWA where AI parses doctor protocols (PDF, Excel, images), links them to my inventory, and builds a daily plan - with stock forecasting, push notifications, and one-tap check-off. Schema across 8+ tables, repository pattern, Drizzle migrations, unit, integration and e2e tests.",
      },
      {
        description:
          "Got tired of manually browsing job offers across multiple boards. Built a fullstack platform with a Turborepo monorepo - scrapes Polish job portals, generates vector embeddings with Transformers.js, and re-ranks offers against my profile. Supabase with pgvector for similarity search, all AI inference runs locally in TypeScript.",
      },
      {
        description:
          "Lost track of my subscriptions - had no idea how much I was paying monthly. Built a fullstack app with MySQL + Prisma, Stripe payments for premium, currency exchange rate syncing, and spending analytics with Recharts. Tiered server actions with auth, rate limiting, and Sentry.",
      },
    ],
  },
  services: {
    badge: "Services",
    title: "What I Can Build for You",
    description:
      "Custom websites and apps for businesses and individuals. Hairdresser, garage, gardener, shop - I get you online and take the manual work off your plate.",
    items: [
      {
        icon: "mdi:web",
        title: "Business Website",
        description:
          "Fast, responsive website. I build it for search engines from day one: quick loading, correct structure, meta tags. So your customers can find you.",
      },
      {
        icon: "mdi:cellphone-cog",
        title: "An App for Your Business",
        description:
          "Bookings, orders, staff schedules, invoices. One place instead of a notebook and a spreadsheet, and it works on a phone.",
      },
      {
        icon: "mdi:autorenew",
        title: "Automating Manual Work",
        description:
          "Same clicking every week? Copying data from email into a sheet? I will write something that does it for you and never slips at midnight.",
      },
    ],
    processBadge: "Process",
    processTitle: "How We Work Together",
    processDescription:
      "You work directly with me, no middlemen and no pointless meetings. A simple business website? Ready in 2-3 weeks. An app with bookings or orders? Usually one to two months, depending on scope.",
    steps: [
      {
        title: "Conversation",
        description:
          "Message me - tell me what you need. Initial consultations are free.",
      },
      {
        title: "Quote and Plan",
        description:
          "Together we settle the look, features and scope. You decide, I advise and quote. No hidden costs.",
      },
      {
        title: "Building",
        description:
          "I build and show progress as I go. Got feedback? We fix it right away, not at the end.",
      },
      {
        title: "Done",
        description:
          "The project goes live - fast, ready for Google and working on every device. I don't disappear after launch, I stay in touch.",
      },
    ],
    cta: "Let's talk about your project",
    supportNote:
      "After launch I don't leave you alone - I provide technical support and stay in touch in case of changes or questions.",
  },
  caseStudy: {
    badge: "Case Study",
    title: "What a Finished Project Looks Like",
    description: "My own portfolio site - designed and built from scratch.",
    project: {
      name: "jnalewajk.me",
      subtitle: "Business website with blog",
      problem:
        "I needed a site that shows what I do and what experience I have - with a blog, contact form and two languages.",
      solution:
        "Loads in under 1.5 seconds, is visible in Google and comfortable on mobile. Contact form, blog and automatic language switching. All built by me from scratch.",
      results: [
        { value: "95+", label: "Google performance" },
        { value: "<1.5s", label: "Load time" },
        { value: "2", label: "Languages (PL/EN)" },
      ],
      tech: [
        "Fast website",
        "Contact form",
        "Blog",
        "Google ready",
        "Responsive",
      ],
      cta: "Want something similar?",
      timeline: "~3 weeks",
      timelineLabel: "Timeline",
    },
  },
  skills: {
    title: "What I work with",
    description: "Technologies I use day to day in commercial work.",
    categories: {
      languages: "Languages",
      backend: "Backend",
      data: "Data & Queues",
      frontend: "Frontend",
      styling: "Styling & UI",
      testing: "Testing",
      architecture: "Architecture & Tooling",
      ai: "AI Tools",
      other: "Other",
    },
  },
  contact: {
    title: "Let's work together",
    description:
      "Looking for a fullstack developer for your team? I'm available full-time on two weeks' notice. Drop me a message - I'll respond within 24 hours.",
    sendMessage: "Send Message",
    responseTime: "I'll respond within 24 hours.",
    reachOut: "Reach out directly",
  },
  contactForm: {
    name: "Name",
    namePlaceholder: "John Smith",
    email: "Email",
    emailPlaceholder: "john@example.com",
    message: "Message",
    messagePlaceholder:
      "Tell me briefly what brings you here - a role, a project, a technical question.",
    sending: "Sending...",
    send: "Send Message",
    success:
      "Message sent successfully. I'll get back to you as soon as possible.",
    error: "Failed to send message. Please try again.",
    subject: "Contact from homepage",
  },
  blog: {
    heading: "Blog",
    backToBlog: "Back to blog",
    postsTagged: "Posts tagged",
    by: "by",
    on: "on",
    postMeta: "{author} · {date}",
    onThisPage: "On this page",
    sharePost: "Share this post:",
    shareVia: "Share via",
    prev: "Previous",
    next: "Next",
  },
  notFound: {
    heading: "404",
    subtitle: "Nothing here... yet.",
    backHome: "Back to homepage",
    imgAlt: "Jakub Nalewajk searching with a magnifying glass",
  },
  footer: {
    copyright: "Jakub Nalewajk",
  },
  servicesPage: {
    metaTitle: "Custom Websites & Apps - Pułtusk and Beyond | Jakub Nalewajk",
    metaDescription:
      "I build websites and apps that take manual work off small businesses: bookings, orders, schedules, invoices. Pułtusk, Warsaw and remote across Poland.",
    metaKeywords:
      "custom websites, websites Pułtusk, web development Pułtusk, app for business, custom app, online booking system, order panel, staff scheduling app, small business automation, business website, landing page, developer Pułtusk, developer Warsaw, websites Masovia, professional website, website for hairdresser, website for mechanic, website for gardener, custom web application, SEO optimization",
    heroTitle: "A website or an app that takes the manual work off you",
    heroDescription:
      "Customers call after hours to book a slot. Orders go into a notebook. The staff schedule lives in a spreadsheet. All of it can be built once and forgotten. Tell me what wears you down most and I will build it.",
    heroCta: "Let's talk - it's free",
    contactDescription:
      "Need a website for your business? Have an idea for an app that saves you a few hours a week? Drop me a message - I respond within 24 hours. Initial consultations are free.",
    contactSource: "Inquiry from services page",
    appIdea: {
      badge: "Got an idea?",
      title: "Every good project starts with a problem",
      description:
        "You don't need to know how to build it - you only need to know what bothers you. Tell me about your problem and I'll propose a solution.",
      items: [
        {
          icon: "mdi:calendar-clock",
          problem:
            "Customers call after hours to book a visit. I don't pick up and the slot is gone.",
          solution:
            "Online booking with confirmation. The calendar fills itself, at night too.",
        },
        {
          icon: "mdi:receipt-text-outline",
          problem:
            "Orders go into a notebook, then I copy them into invoices. A few hours every month and always a mistake somewhere.",
          solution:
            "An order panel that builds the invoice itself and sends it to the customer.",
        },
        {
          icon: "mdi:account-clock-outline",
          problem:
            "I build the staff schedule in a spreadsheet, and every week someone calls asking who works tomorrow.",
          solution:
            "An online schedule where everyone sees their shifts on their phone.",
        },
      ],
      cta: "Let's talk about your idea",
      problemLabel: "Problem",
      solutionLabel: "Solution",
    },
    faq: {
      badge: "FAQ",
      title: "Frequently Asked Questions",
      description: "Answers to the questions I hear most often from clients.",
      items: [
        {
          question: "How much does a website cost?",
          answer:
            "Every project is different, so I don't quote a single price. One thing I can guarantee - working directly with me, you pay less and get the site faster than through an agency. No pointless formalities, we get straight to work. Message me, tell me what you need, and you get a concrete quote with no hidden costs.",
          link: {
            href: "/blog/how-much-does-website-cost",
            text: "See what websites cost in 2026 →",
          },
        },
        {
          question: "Do you build apps too, not just websites?",
          answer:
            "Yes, and they often deliver the most. Online bookings, an order panel, staff schedules, invoicing, customer notifications. Day to day I work on an accounting platform serving over a thousand users, so systems that have to add up to the last cent are my bread and butter.",
        },
        {
          question: "Can I edit the content myself afterwards?",
          answer:
            "You have two options. I can build the site with an admin panel - then you edit texts, images and anything else, whenever you want. Together we decide what should be editable and what never changes, so you don't pay for things you don't need. If you'd rather not deal with it, we stay in touch and I handle changes for you.",
        },
        {
          question:
            "I already have a website, but it is old and slow. Can you help?",
          answer:
            "Yes. I can move your project to modern technology, improve the look, speed it up and optimize for Google. You do not have to start from scratch.",
        },
        {
          question: "Do I have to handle the domain and hosting myself?",
          answer:
            "No, I take care of it. Domain, hosting, configuration, the padlock in the address bar - I handle it end to end. You cover the domain and hosting costs, but I help you pick the best option and configure everything.",
        },
        {
          question: "What happens after launch? Am I on my own?",
          answer:
            "No. After launch I provide technical support and stay in touch. If something needs changing, fixing or adding - just message me.",
        },
      ],
    },
  },
  seo: {
    jobTitle: "Fullstack Developer (Node.js, NestJS, Next.js)",
    knowsAbout: [
      "web application development",
      "modular architecture",
      "API integrations",
      "automated testing",
      "CI/CD",
      "website development",
      "custom applications",
    ],
    serviceName: "Jakub Nalewajk | Custom Websites & Business Apps",
    serviceType: "Custom website and application development",
    serviceDescription:
      "Developer based in Pułtusk, Masovia. I build websites and apps that take manual work off small businesses: bookings, orders, schedules, invoices. Serving companies in Pułtusk, Warsaw and across Poland.",
    countryName: "Poland",
    offerCatalogName: "Development Services",
    offers: [
      {
        name: "Custom website",
        description:
          "Fast, responsive business website optimized for Google. Ideal for companies in Pułtusk and the surrounding area.",
      },
      {
        name: "App for your business",
        description:
          "Bookings, an order panel, staff schedules, invoices. One place instead of a notebook and spreadsheets.",
      },
      {
        name: "Automating repetitive work",
        description:
          "Copying data around, weekly reports, sending notifications. It runs itself, without mistakes.",
      },
    ],
  },
} as const;
