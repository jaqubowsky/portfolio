export default {
  meta: {
    title: 'Jakub Nalewajk - Fullstack & Next.js Developer for Hire',
    description:
      'Fullstack & Next.js developer from Poland. I build fast web apps and custom websites - from database design to deployment. 3+ years of experience. Get in touch.',
    keywords:
      'Jakub Nalewajk, Fullstack Developer, Next.js developer, React developer, hire fullstack developer, hire Next.js developer, freelance fullstack developer, freelance Next.js developer, freelance React developer, TypeScript developer, portfolio, web developer, web developer Poland, custom websites, web applications, SEO optimization, freelance developer Poland, fullstack developer for hire, Next.js developer for hire, React developer for hire, web developer for hire',
    blogTitle: 'Blog - Jakub Nalewajk',
    blogDescription:
      'Practical articles about Next.js, React, TypeScript, and building websites. Tutorials, problem-solving, and lessons from real projects.',
    notFoundTitle: '404 - Page Not Found | Jakub Nalewajk',
    notFoundDescription:
      "The page you're looking for doesn't exist. Head back to Jakub Nalewajk's portfolio.",
  },
  nav: {
    home: 'Home',
    experience: 'Experience',
    projects: 'Projects',
    services: 'Services',
    skills: 'Skills',
    contact: 'Contact',
    blog: 'Blog',
    closeMenu: 'Close menu',
  },
  hero: {
    jobTitle: 'Fullstack Developer',
    description:
      'Fullstack & Next.js Developer with 3+ years of experience. I build fast web applications and custom websites - from database design to deployment. Available as a freelancer or as a developer on your team.',
    cta: 'Get in Touch',
    downloadCv: 'Download CV',
  },
  stats: {
    experience: 'Years of experience',
    projects: 'Projects delivered',
    clients: 'Happy clients',
  },
  experience: {
    badge: 'Experience',
    title: "Where I've Worked",
    description: "Commercial projects I've worked on - from architecture to deployment.",
    jobs: [
      {
        company: 'CodeYourBrand',
        role: 'Frontend Developer',
        tech: 'Next.js, Strapi, Nx, Turborepo',
        period: 'Oct 2025 – Present',
        location: 'Remote',
        bullets: [
          "Owned development of Maspex Photo Service for one of Central Europe's largest FMCG companies; built customer-facing app and admin panel using Turborepo and Next.js, delivered in under 6 months.",
          'Led development of a Dubai Real Estate platform as project owner - designed layered architecture with Nx, Next.js 16, and Strapi CMS, and built a reusable component library documented with Storybook.',
          'Shipped features and reviewed PRs across the team for the TwoContinents travel platform.',
        ],
      },
      {
        company: 'Instago Inc.',
        role: 'Fullstack Developer',
        tech: 'Next.js, Express',
        period: 'Aug 2023 – Oct 2025',
        location: 'Warsaw, Poland',
        bullets: [
          'Built e-commerce platform for B2B food ordering that handled 3,500+ orders monthly.',
          'Built ordering interface for Mezze Foods restaurant B2B clients - replaced phone orders. PayU and Stripe payments.',
          'Built InstagoAI - an AI website builder. Non-technical users can put up a site in under 15 minutes.',
        ],
      },
    ],
  },
  projects: {
    badge: 'Projects',
    title: "Things I've Built",
    description:
      'Tools I built for myself and use every day. Each project started because I hit a real problem and decided to solve it.',
    items: [
      {
        description:
          'While treating gut issues with a clinical dietitian, I was juggling 20+ supplements and antibiotics across multiple protocols. Built a fullstack PWA where AI parses doctor protocols (PDF, Excel, images), links them to my inventory, and builds a daily plan - with stock forecasting, push notifications, and one-tap check-off.',
      },
      {
        description:
          'Got tired of manually browsing job offers across multiple boards. Built a fullstack platform with a Turborepo monorepo - scrapes Polish job portals, generates vector embeddings with Transformers.js, and re-ranks offers against my profile. Supabase with pgvector for similarity search, all AI inference runs locally in TypeScript.',
      },
      {
        description:
          'Lost track of my subscriptions - had no idea how much I was paying monthly. Built a fullstack app with MySQL + Prisma, Stripe payments for premium, currency exchange rate syncing, and spending analytics with Recharts. Tiered server actions with auth, rate limiting, and Sentry.',
      },
    ],
  },
  services: {
    badge: 'Services',
    title: 'What I Can Build for You',
    description:
      'I build custom websites and web applications for businesses and individuals. Hairdresser, gardener, online store - I get you online.',
    items: [
      {
        icon: 'mdi:web',
        title: 'Business Website',
        description:
          'Fast, responsive website for your business - optimized for Google so your customers can find you.',
      },
      {
        icon: 'mdi:application-outline',
        title: 'Online System',
        description:
          'More than a website - booking system, order management panel, or a form for your clients. Built around how your business works.',
      },
      {
        icon: 'mdi:chart-line',
        title: 'Google-Ready',
        description:
          'Every project is built with search engines in mind from day one - speed, proper structure, meta tags. So Google can find you.',
      },
    ],
    processBadge: 'Process',
    processTitle: 'How We Work Together',
    processDescription:
      'You work directly with me - no middlemen, no unnecessary meetings. A simple business website? Ready in 2–3 weeks. No waiting on a team - we gather requirements and I get straight to work.',
    steps: [
      {
        title: "Let's Talk",
        description: 'Drop me a message - tell me what you need. Initial consultations are free.',
      },
      {
        title: 'Quote & Plan',
        description:
          'We plan the look, features, and scope together. You decide - I advise and quote. No hidden costs.',
      },
      {
        title: 'Building',
        description:
          'I build the site and show you progress along the way. Got feedback? We adjust right away, not at the end.',
      },
      {
        title: 'Site Ready',
        description:
          "Your site goes live - fast, Google-ready, and working on every device. After launch I don't disappear - I stay in touch.",
      },
    ],
    cta: "Let's discuss your project",
    supportNote:
      "After launch I don't disappear - I provide full technical support and stay in touch for any changes or questions.",
  },
  caseStudy: {
    badge: 'Case Study',
    title: 'What a Finished Project Looks Like',
    description: 'My own portfolio site - designed and built from scratch.',
    project: {
      name: 'jnalewajk.me',
      subtitle: 'Business website with blog',
      problem:
        'I needed a site that shows what I do and what I have worked on - with a blog, contact form, and two languages.',
      solution:
        'Loads in under 1.5 seconds, ranks on Google, works on mobile. Contact form, blog, and automatic language switching. Built by me from scratch.',
      results: [
        { value: '95+', label: 'Google Performance' },
        { value: '<1.5s', label: 'Load time' },
        { value: '2', label: 'Languages (PL/EN)' },
      ],
      tech: ['Fast website', 'Contact form', 'Blog', 'Google-ready', 'Responsive'],
      cta: 'Want something like this?',
      timeline: '~3 weeks',
      timelineLabel: 'Delivery time',
    },
  },
  skills: {
    badge: 'Skills',
    title: 'What I Work With',
    description: 'Technologies I use daily.',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps',
      other: 'Other',
    },
  },
  contact: {
    badge: 'Contact',
    title: "Let's Work Together",
    description:
      "Looking to hire a fullstack developer for your team? Need a custom website or web app? Drop me a message - I'll respond within 24 hours.",
    sendMessage: 'Send a Message',
    responseTime: "I'll respond within 24 hours.",
    reachOut: 'Reach Out Directly',
  },
  contactForm: {
    name: 'Name',
    namePlaceholder: 'John Doe',
    email: 'Email',
    emailPlaceholder: 'john@doe.com',
    message: 'Message',
    messagePlaceholder:
      'Briefly describe what you need - e.g. a business website, booking system...',
    sending: 'Sending...',
    send: 'Send Message',
    success: 'Message sent successfully. I will get back to you soon.',
    error: 'Failed to send message. Please try again.',
    subject: 'Contact from homepage',
  },
  blog: {
    heading: 'Blog',
    backToBlog: 'Back to Blog',
    postsTagged: 'Posts tagged',
    by: 'by',
    on: 'on',
    postMeta: '{author} · {date}',
    onThisPage: 'On this page',
    sharePost: 'Share this post on:',
    shareVia: 'Share via',
    prev: 'Prev',
    next: 'Next',
  },
  notFound: {
    heading: '404',
    subtitle: 'Nothing here... yet.',
    backHome: 'Back to Home',
    imgAlt: 'Jakub Nalewajk searching with a magnifying glass',
  },
  footer: {
    copyright: 'Jakub Nalewajk',
    status: 'System Status',
  },
  servicesPage: {
    metaTitle: 'Services - Custom Websites & Web Apps | Jakub Nalewajk',
    metaDescription:
      'I build custom websites and web applications for businesses and individuals. Hairdresser, gardener, online store - I get you online.',
    metaKeywords:
      'custom websites, web development Poland, freelance fullstack developer, business website, web applications, booking system, SEO optimization, React developer, Next.js developer, Node.js developer, affordable website, professional website, website for small business',
    heroTitle: 'A Professional Website for Your Business',
    heroDescription:
      "Need a website that attracts customers? Tell me what you need - I'll build it. Fast, no jargon, exactly the way you want it.",
    heroCta: "Let's talk - it's free",
    contactDescription:
      "Need a website for your business? Have an idea for an online system? Drop me a message - I'll respond within 24 hours. Initial consultations are free.",
    contactSource: 'Inquiry from services page',
    appIdea: {
      badge: 'Got an idea?',
      title: 'Every good project starts with a problem',
      description:
        "You don't need to know how to build it - just tell me what bothers you. I'll figure out the solution.",
      items: [
        {
          icon: 'mdi:briefcase-search-outline',
          problem:
            'I was browsing job offers across multiple portals at once - wasting time searching manually.',
          solution:
            'I built an app that collects offers from many portals and shows the ones that best match my profile.',
        },
        {
          icon: 'mdi:credit-card-outline',
          problem:
            'I lost track of my subscriptions - had no idea how much I was paying monthly for various services.',
          solution:
            'I built an app to track subscriptions - I see how much I spend, when things renew, and can cancel quickly.',
        },
      ],
      cta: "Let's discuss your idea",
      problemLabel: 'Problem',
      solutionLabel: 'Solution',
    },
    faq: {
      badge: 'FAQ',
      title: 'Frequently Asked Questions',
      description: 'Answers to the questions I hear most often from clients.',
      items: [
        {
          question: 'How much does a website cost?',
          answer:
            "Every project is different, so there's no one-size-fits-all price. One thing I can guarantee - working directly with me, you'll pay less and get your site faster than with an agency. No unnecessary formalities - we get straight to work. Reach out, tell me what you need - you'll get a clear quote with no hidden costs.",
          link: {
            href: '/en/blog/how-much-does-website-cost',
            text: 'See what websites cost in 2026 →',
          },
        },
        {
          question: 'Can I edit the content myself afterwards?',
          answer:
            "You have two options. I can build the site with an admin panel - then you edit text, images, and everything yourself, whenever you want. We'll decide together what should be editable and what never changes - you don't pay for things you don't need. If you'd rather not deal with that - we stay in touch and I handle all changes for you.",
        },
        {
          question: 'I already have a website but it looks outdated. Can you help?',
          answer:
            "Yes - I can migrate your project to modern technologies, improve the design, speed it up, and optimize it for Google. You don't have to start from scratch.",
        },
        {
          question: 'Do I need to handle the domain and hosting myself?',
          answer:
            'No - I take care of everything. Domain, hosting, setup, the padlock next to your address - I handle it all from A to Z. Domain and hosting costs are on you, but I help pick the best option and configure everything.',
        },
        {
          question: 'What happens after launch? Am I on my own?',
          answer:
            'No. After your site goes live, I provide technical support and stay in touch. If something needs to be changed, fixed, or added - just reach out.',
        },
      ],
    },
  },
  seo: {
    jobTitle: 'Fullstack Developer / Next.js Developer',
    knowsAbout: [
      'web development',
      'web applications',
      'custom websites',
      'fullstack development',
      'Node.js',
      'Drizzle',
      'PostgreSQL',
      'Next.js',
      'React',
      'TypeScript',
      'technical SEO optimization',
    ],
    serviceName: 'Strona na Miarę – Jakub Nalewajk | Fullstack & Next.js Developer',
    serviceType: 'Web development, custom websites, and web applications',
    serviceDescription:
      'Freelance fullstack and Next.js developer from Pułtusk, Poland - available for hire. Building custom websites, online systems, and web applications with React, Next.js, and Node.js.',
    countryName: 'Poland',
    offerCatalogName: 'Development services',
    offers: [
      {
        name: 'Custom business website',
        description:
          'Fast, responsive business website - optimized for Google and built with modern tech',
      },
      {
        name: 'Custom online system',
        description: 'Custom solutions - booking systems, management panels, client-facing forms',
      },
      {
        name: 'Technical Google optimization',
        description:
          'Website built so Google loves it - fast loading, proper structure, meta tags, structured data',
      },
    ],
  },
} as const
