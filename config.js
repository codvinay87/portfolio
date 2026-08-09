/**
 * Vakya Portfolio Configuration & Data Layer
 * 
 * Edit this file to customize all text, SEO meta tags, case studies, and contact details
 * on your portfolio site. No build step or backend required — changes here update the live site.
 */

window.PORTFOLIO_CONFIG = {
  // Brand & SEO Information
  brand: {
    name: "Vakya",
    tagline: "verified builds",
    title: "Freelance Web Developer & AI Engineer | Vakya Studio",
    metaDescription: "Expert Freelance Web Developer and AI Engineer specializing in full-stack web applications, AI integrations, performance optimization, and application rebuilds.",
    keywords: "Freelance Web Developer, AI Engineer, Full-Stack Engineer, Web Optimization, React Developer, Next.js, Python FastAPI, Web Application Rebuild",
    siteUrl: "https://paraddise.netlify.app",
    ogImage: "https://paraddise.netlify.app/assets/logo/vakya-logo-mark.svg",
    author: {
      name: "Vinay Singhania / Vakya Studio",
      jobTitle: "Freelance Full-Stack & AI Engineer",
      location: "Remote / Worldwide"
    }
  },

  // Hero Section
  hero: {
    eyebrow: "FREELANCE WEB DEVELOPER · AI PRODUCTS",
    headlinePrefix: "Stop losing money on ",
    headlineAccent: "code that doesn't work.",
    sub: "I turn broken apps and raw ideas into fast, stable, high-performance web products you can actually ship.",
    ctaPrimary: "See the proof →",
    ctaSecondary: "Book a free diagnosis",
    microTrust: "Free 15-min call. No pitch — just a plan."
  },

  // Trust Bar & Social Proof
  trust: {
    rating: "4.9",
    projectsLine: "60+ shipped web projects",
    techLogos: [
      "REACT", "NEXT.JS", "PYTHON", "FASTAPI",
      "OPENAI", "LANGCHAIN", "POSTGRESQL", "AWS",
      "DOCKER", "TYPESCRIPT"
    ]
  },

  // About Section & Terminal Log
  about: {
    eyebrow: "WHY CLIENTS COME BACK",
    headline: "I've seen what \"almost done\" really looks like.",
    paragraphs: [
      "Rage-quit MVPs. AI wrappers that hallucinate in production. Freelancers who vanished mid-sprint. As a freelance web developer and AI specialist, I've rebuilt all of it — and I always tell you what's actually broken before you spend another dollar.",
      "No jargon. No vanishing acts. Just a working, search-optimized web product, and a paper trail so you always know what you're paying for."
    ],
    chips: [
      "Fixed scope, fixed price",
      "Daily async updates",
      "You own 100% of the code"
    ],
    terminalStats: [
      { key: "projects_rescued", value: "28" },
      { key: "avg_response_time", value: "\"< 4h\"" },
      { key: "client_ghosting", value: "false" },
      { key: "code_ownership", value: "\"100% yours\"" },
      { key: "status", value: "\"ready to build\"" }
    ]
  },

  // Case Studies (PSR Format: Problem -> Solution -> Result)
  caseStudies: [
    {
      id: "case-01",
      slug: "ai-customer-support-bot",
      tag: "CASE 01 · AI CUSTOMER SUPPORT",
      title: "The bot that kept lying to customers",
      problem: "Support bot hallucinated pricing, forgot context every message, escalations piling up.",
      solution: "Rebuilt on retrieval-grounded responses with function calling, guardrails, and human handoff.",
      result: "Shipped in 3 weeks. Escalations dropped, response time under 2 seconds.",
      fullDescription: "A comprehensive rebuild of a customer support AI assistant for an e-commerce platform. Replaced an unstable third-party wrapper with a custom Python FastAPI backend, Pinecone vector embeddings, and LangChain guardrails.",
      clientIndustry: "E-Commerce & Customer Service Tech",
      technologies: ["Python", "FastAPI", "OpenAI API", "Pinecone", "React", "TypeScript"],
      metrics: [
        { value: "98", suffix: "/100", label: "Page Speed" },
        { value: "63", suffix: "%", label: "Faster Resolution" },
        { value: "41", suffix: "%", label: "Support Cost Cut" }
      ],
      "image": "assets/case-studies/case-01.svg"
    },
    {
      id: "case-02",
      slug: "saas-dashboard-stripe-billing",
      tag: "CASE 02 · SAAS DASHBOARD",
      title: "The app three freelancers couldn't finish",
      problem: "18 months, three developers, still no working billing flow. Users churning weekly.",
      solution: "Rebuilt the data layer, fixed race conditions, shipped Stripe billing end-to-end.",
      result: "Live in 5 weeks. Churn stabilized, first paying cohort renewed at full price.",
      fullDescription: "Architectural overhaul and complete full-stack web optimization of a B2B SaaS analytics dashboard. Resolved complex React state management bugs and implemented robust webhooks for Stripe recurring subscriptions.",
      clientIndustry: "B2B SaaS Analytics",
      technologies: ["Next.js", "React", "Stripe API", "PostgreSQL", "Node.js", "Tailwind CSS"],
      metrics: [
        { value: "34", suffix: "%", label: "Revenue Growth" },
        { value: "72", suffix: "%", label: "30-Day Retention" },
        { value: "6", suffix: "×", label: "Faster Load Time" }
      ],
      "image": "assets/case-studies/case-02.svg"
    },
    {
      id: "case-03",
      slug: "edtech-platform-cloud-modernization",
      tag: "CASE 03 · EDTECH PLATFORM MODERNIZATION",
      title: "The school platform bleeding money on a patchwork cloud setup",
      problem: "A K-12 school management platform was spread across a tangle of disconnected cloud services — costly, hard to scale, and nearly impossible to monitor when something broke.",
      solution: "Consolidated the entire backend onto a single managed Kubernetes platform, rebuilt the data-sync engine connecting the platform to the school's student-records system, and redesigned the notification system from the ground up.",
      result: "Cloud costs cut by more than half. The rebuilt notification system was load-tested at 100,000 alerts delivered in under 3 minutes with zero manual scaling.",
      fullDescription: "Led backend modernization for a school management platform serving multiple campuses. Consolidated a fragmented multi-service cloud setup into one managed Kubernetes environment, cutting infrastructure costs by over 50% while adding centralized monitoring and automated deployments. Rebuilt the sync engine linking the platform to an external student-records system using a caching layer to detect and push only changed records, eliminating the mismatches and slowdowns of the old approach. Also introduced a caching-backed permissions layer for API access control, and shipped a full attendance-tracking system supporting QR/NFC check-in with real-time analytics.",
      clientIndustry: "K-12 Education Technology (SaaS)",
      technologies: ["Node.js", "Kubernetes", "PostgreSQL", "Redis", "Elasticsearch", "Flutter"],
      metrics: [
        { value: "50", suffix: "%+", label: "Cloud Cost Cut" },
        { value: "100K", suffix: "", label: "Alerts Sent in <3 Min" },
        { value: "10+", suffix: "", label: "Core Modules Modernized" }
      ],
      "image": "assets/case-studies/case-03.svg"
    }
  ],

  // Tech Stack Categories
  techStack: [
    { group: "AI / LLM", items: ["OpenAI API", "Anthropic Claude", "LangChain", "Pinecone / pgvector"] },
    { group: "Backend", items: ["Node.js", "Python / FastAPI", "PostgreSQL", "Redis", "Elasticsearch"] },
    { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { group: "Mobile", items: ["Flutter", "GetX"] },
    { group: "Infra", items: ["Docker", "Kubernetes", "AWS", "Vercel", "GitHub Actions"] }
  ],

  // Client Testimonials
  testimonials: [
    { quote: "Finally, a freelance web developer who told me the truth about my own code instead of just billing hours." },
    { quote: "Two developers before him couldn't finish it. He shipped our AI integration in three weeks." },
    { quote: "Worth every dollar — our web application load times improved 6x and churn dropped immediately." },
    { quote: "He rebuilt our entire cloud setup and cut our monthly bill in half — without a single day of downtime for our schools." }
  ],

  // Process & Pricing Philosophy
  process: [
    { num: "01 — DIAGNOSIS", title: "We talk it through", desc: "I walk through your web app idea or your broken build with you — free, no pitch. Just an honest read on what it actually takes." },
    { num: "02 — ROADMAP", title: "Full roadmap & sprint stories", desc: "You get a complete roadmap broken into sprints and user stories — every web optimization feature mapped, before I write a single line of code." },
    { num: "03 — YOUR PRICE", title: "You name the number", desc: "Based on the effort laid out in the roadmap, you tell me what you're comfortable investing. Not the other way around." },
    { num: "04 — BUILD", title: "I get to work", desc: "Development starts against the roadmap you approved — with daily updates, so you always know where your money went." }
  ],

  // Contact Channels & Configuration
  contact: {
    email: "vinaysinghaniaofficial@gmail.com",
    responseTime: "I reply within 4 hours.",

    // Social links displayed in the footer — replace URLs with your real profiles
    socialLinks: [
      { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
      { name: "GitHub", url: "https://github.com/yourprofile" },
      { name: "Upwork", url: "https://upwork.com/freelancers/yourprofile" }
    ],

    // WhatsApp configuration
    whatsapp: {
      number: "919818168852", // e.g. "919876543210" (country code + number, digits only)
      prefilledMessage: "Hi! I found your portfolio and want to talk about a freelance web development project."
    },

    // Google Calendar appointment scheduling embed
    googleCalendarUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Hnd1B3Eq77FrOUb8u-8QjIWXOPEENkIOFOKN4pCTXEuB4HikDucbL_wWPKtfAKfz7_xvIXupJ?gv=true",

    // Calendly booking configuration (fallback if googleCalendarUrl is not set)
    calendly: {
      url: "REPLACE_WITH_YOUR_CALENDLY_URL" // e.g. "https://calendly.com/your-username/15min"
    },

    // Contact form configuration
    form: {
      useNetlifyForms: true, // Native Netlify form capture (zero backend required when deployed on Netlify)
      endpoint: "REPLACE_WITH_YOUR_FORMSPREE_ENDPOINT" // Optional fallback for non-Netlify environments (Formspree / Web3Forms)
    }
  }
};