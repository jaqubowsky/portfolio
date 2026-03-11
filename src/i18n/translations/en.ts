export default {
  meta: {
    title: "Jakub Nalewajk — Frontend & Next.js Developer for Hire",
    description:
      "Freelance frontend & Next.js developer from Poland. I build fast web apps and custom websites in React and Next.js. 4+ years of experience. Get in touch.",
    keywords:
      "Jakub Nalewajk, Frontend Developer, Next.js developer, React developer, hire Next.js developer, hire frontend developer, freelance frontend developer, freelance Next.js developer, freelance React developer, TypeScript developer, portfolio, web developer, web developer Poland, custom websites, web applications, SEO optimization, freelance developer Poland, Next.js developer for hire, React developer for hire, frontend developer for hire, web developer for hire",
    blogTitle: "Blog - Jakub Nalewajk",
    blogDescription:
      "Practical articles about Next.js, React, TypeScript, and building websites. Tutorials, problem-solving, and lessons from real projects.",
    notFoundTitle: "404 — Page Not Found | Jakub Nalewajk",
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
    closeMenu: "Close menu",
  },
  hero: {
    jobTitle: "Frontend Developer",
    description:
      "Frontend & Next.js Developer with 4+ years of experience. I build fast web applications and custom websites — from architecture to deployment. Available as a freelancer or as a developer on your team.",
    cta: "Get in Touch",
    downloadCv: "Download CV",
  },
  stats: {
    experience: "Years of experience",
    projects: "Projects delivered",
    clients: "Happy clients",
  },
  experience: {
    badge: "Experience",
    title: "Where I've Worked",
    description:
      "Commercial projects I've worked on — from architecture to deployment.",
    jobs: [
      {
        company: "CodeYourBrand",
        role: "Frontend Developer",
        tech: "Next.js, Nx, Turborepo",
        period: "Oct 2025 – Present",
        location: "Remote",
        bullets: [
          "Owned frontend development of Maspex Photo Service for one of Central Europe's largest FMCG companies and built customer-facing application and admin panel using Turborepo and Next.js; delivered in under 6 months and approved by the client.",
          "Led frontend development for a Dubai Real Estate platform as project owner, implementing layered architecture with Nx, Next.js 16, and Strapi CMS; built a reusable component library documented with Storybook.",
          "Shipped features and reviewed PRs across the frontend team for the TwoContinents travel platform, improving code quality and consistency.",
        ],
      },
      {
        company: "Haergi",
        role: "Fullstack Developer",
        tech: "Next.js, Express",
        period: "Aug 2023 – Oct 2025",
        location: "Warsaw, Poland",
        bullets: [
          "Built e-commerce platform for B2B food ordering that handled 3,500+ orders monthly.",
          "Created intuitive ordering interface for Mezze Foods restaurant B2B clients that replaced manual phone orders, with integrated PayU and Stripe payments.",
          "Developed InstagoAI — an AI-powered website builder enabling non-technical users to create sites in under 15 minutes.",
        ],
      },
    ],
  },
  projects: {
    badge: "Projects",
    title: "Things I've Built",
    description:
      "Tools I built for myself and use every day. Each project started because I hit a real problem and decided to solve it.",
    items: [
      {
        description:
          "Got tired of manually browsing job offers across multiple boards. Built a platform that scrapes Polish job portals and ranks offers against my profile using vector embeddings and AI re-ranking.",
      },
      {
        description:
          "Lost track of my subscriptions — had no idea how much I was paying monthly. Built an app to track and manage them with Stripe payments and Sentry monitoring.",
      },
      {
        description:
          "Was setting up the same boilerplate for every new project. Built a production-ready template with Better Auth (Google OAuth), Stripe, Sentry, Docker and CI/CD — now I start a new project in minutes instead of hours.",
      },
    ],
  },
  services: {
    badge: "Services",
    title: "What I Can Build for You",
    description:
      "I build custom websites and web applications for businesses and individuals. Hairdresser, gardener, online store — every business deserves a professional web presence.",
    items: [
      {
        icon: "mdi:web",
        title: "Business Website",
        description:
          "Fast, responsive website for your business — optimized for Google so your customers can find you.",
      },
      {
        icon: "mdi:application-outline",
        title: "Online System",
        description:
          "Custom solution tailored to your business — booking system, order management panel, or a client-facing form.",
      },
      {
        icon: "mdi:chart-line",
        title: "SEO Optimization",
        description:
          "Every project is built with SEO in mind from day one — so your site ranks high on Google.",
      },
    ],
    processTitle: "How We Work Together",
    processDescription:
      "You work directly with me — no middlemen, no unnecessary meetings. A simple business website? Ready in 2–3 weeks. No waiting on a team — we gather requirements and I get straight to work.",
    steps: [
      {
        title: "Free Discovery Call",
        description:
          "Write or call me — tell me about your idea. No commitment, we'll figure out what you need and if I can help.",
      },
      {
        title: "Quote & Plan",
        description:
          "We discuss the details, I define the project scope and give you a clear quote — no hidden costs.",
      },
      {
        title: "Development",
        description:
          "I build the project, showing progress along the way. No waiting on others — fast and focused.",
      },
      {
        title: "Launch",
        description:
          "Your site goes live, optimized for Google and ready for customers. I also provide post-launch support.",
      },
    ],
    cta: "Let's discuss your project",
  },
  skills: {
    badge: "Skills",
    title: "What I Work With",
    description:
      "Technologies I use daily to build fast, scalable web applications.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      other: "Other",
    },
  },
  contact: {
    badge: "Contact",
    title: "Let's Work Together",
    description:
      "Looking to hire a frontend or Next.js developer for your team? Need a custom website for your business? Drop me a message — I'll respond within 24 hours.",
    sendMessage: "Send a Message",
    responseTime: "I'll respond within 24 hours.",
    reachOut: "Reach Out Directly",
  },
  contactForm: {
    name: "Name",
    namePlaceholder: "John Doe",
    email: "Email",
    emailPlaceholder: "john@doe.com",
    message: "Message",
    messagePlaceholder:
      "Briefly describe what you need — e.g. a business website, booking system...",
    sending: "Sending...",
    send: "Send Message",
    success: "Message sent successfully. I will get back to you soon.",
    error: "Failed to send message. Please try again.",
    subject: "Contact from portfolio",
  },
  blog: {
    heading: "Blog",
    backToBlog: "Back to Blog",
    postsTagged: "Posts tagged",
    by: "by",
    on: "on",
    postMeta: "{author} · {date}",
    onThisPage: "On this page",
    sharePost: "Share this post on:",
    shareVia: "Share via",
    prev: "Prev",
    next: "Next",
  },
  notFound: {
    heading: "404",
    subtitle: "Nothing here... yet.",
    backHome: "Back to Home",
    imgAlt: "Jakub Nalewajk searching with a magnifying glass",
  },
  footer: {
    copyright: "Jakub Nalewajk",
    status: "System Status",
  },
  seo: {
    jobTitle: "Frontend Developer / Next.js Developer",
    knowsAbout: [
      "web development",
      "web applications",
      "custom websites",
      "frontend development",
      "Next.js",
      "React",
      "TypeScript",
      "SEO optimization",
    ],
    serviceName: "Strona na Miarę – Jakub Nalewajk | Frontend & Next.js Developer",
    serviceType: "Web development, custom websites, and web applications",
    serviceDescription:
      "Freelance frontend and Next.js developer from Pułtusk, Poland — available for hire. Building custom websites, online systems, and web applications with React and Next.js.",
    countryName: "Poland",
    offerCatalogName: "Development services",
    offers: [
      {
        name: "Custom business website",
        description:
          "Fast, responsive business website — optimized for Google and built with modern tech",
      },
      {
        name: "Custom online system",
        description:
          "Custom solutions — booking systems, management panels, client-facing forms",
      },
      {
        name: "SEO optimization",
        description:
          "Search engine optimization from day one — fast loading, structured data, meta tags",
      },
    ],
  },
} as const;
