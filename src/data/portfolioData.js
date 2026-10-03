import {
  Code2, GraduationCap, Briefcase, Globe, Terminal,
  Zap, Cpu, Database, Layout, Rocket,
  Target, Heart, Users, Lightbulb, Shield, Cloud, BarChart3,
  Monitor, Lock, Bot, Layers, FileText, Server, Building2,
  Workflow, ArrowRight, MessageSquare, Mail, Phone, CheckCircle2,
  Palette, FileSpreadsheet, Award
} from "lucide-react";

/* ─── TECHNICAL ARSENAL DATA ─── */
export const skillsData = {
  "Frontend Architecture": {
    icon: Layout,
    desc: "Building high-performance, responsive, type-safe user interfaces",
    skills: ["React 19", "Next.js 16 (App Router)", "TanStack Start", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Radix UI Primitives", "Framer Motion", "HTML5 / Semantic CSS3"]
  },
  "Backend & API Systems": {
    icon: Server,
    desc: "Event-driven microservices, RFC-compliant email engines, and real-time APIs",
    skills: ["Node.js", "Fastify", "Next.js Server Functions", "RESTful APIs", "Gmail OAuth 2.0", "IMAP / SMTP (ImapFlow)", "BullMQ Task Queues", "Redis Caching", "Nodemailer"]
  },
  "Databases & ORMs": {
    icon: Database,
    desc: "Type-safe relational schema modeling, migrations, and low-latency storage",
    skills: ["PostgreSQL", "SQLite (better-sqlite3)", "Prisma ORM", "Drizzle ORM", "Redis (ioredis)", "MongoDB"]
  },
  "AI & Communication Pipelines": {
    icon: Bot,
    desc: "LLM integration, automated triage, proctored evaluations, and messaging bots",
    skills: ["Google Gemini API (2.5 Flash)", "Groq LLM (Llama-3)", "Meta WhatsApp Cloud API", "Baileys Socket Adapter", "Razorpay Payment Gateway", "PDFKit Invoicing Engine"]
  },
  "Security, DevOps & Tooling": {
    icon: Shield,
    desc: "Cryptographic credential isolation, session RBAC, and deployment automation",
    skills: ["AES-256-GCM Encryption", "Better-Auth / Passkeys", "Role-Based Access Control (RBAC)", "Git / GitHub Version Control", "Vite Bundler", "Linux VPS / Nginx", "Pino Logging"]
  }
};

/* ─── FLAGSHIP PRODUCTION SYSTEMS (SS40 NETWORK) ─── */
export const productionSystems = [
  {
    id: "mailai",
    number: "01",
    title: "MailAI — AI Email → WhatsApp Reply System",
    badge: "Production System",
    role: "Full Stack Developer",
    company: "SS40 NETWORK PRIVATE LIMITED",
    tagline: "Bridging corporate email inboxes directly to executive WhatsApp channels with AI-powered triage and strict RFC 2822 thread preservation.",
    description: "An intelligent executive communication pipeline connecting email inboxes directly to WhatsApp. Features real-time priority email filtering with Google Gemini & Groq, interactive WhatsApp draft previews, natural language reply synthesis, and RFC 2822 header-compliant email dispatch that strictly preserves conversation threads.",
    category: "Full Stack / AI System",
    accent: "cyan",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    liveUrl: "https://mailai.ss40network.cloud/",
    githubUrl: null,
    metrics: [
      { label: "AI Response Triage", value: "< 2.5s" },
      { label: "RFC 2822 Compliance", value: "100%" },
      { label: "Token Security", value: "AES-256-GCM" }
    ],
    technologies: ["Fastify", "TypeScript", "Prisma ORM", "Google Gemini API", "Groq LLM", "WhatsApp Cloud API", "Baileys", "Gmail OAuth2", "IMAP/SMTP", "BullMQ", "Redis", "Razorpay", "PDFKit"],
    architectureHighlights: [
      "AI Email Ingestion Pipeline: Classifies incoming emails by urgency, sentiment, and action items using Gemini & Groq while suppressing marketing spam.",
      "Bidirectional WhatsApp Channel: Delivers instant executive alerts and turns brief natural-language WhatsApp replies into polished professional email drafts.",
      "Strict RFC 2822 Thread Preservation: Injects In-Reply-To, References, and external Thread-ID headers so replies land cleanly inside existing client email threads.",
      "Enterprise Security: AES-256-GCM credential encryption for OAuth & IMAP passwords with session state machine tracking.",
      "Billing & Queues: Automated Razorpay GST checkout, instant PDFKit GST invoice generation, Zoho Mail delivery, and BullMQ background job queues."
    ]
  },
  {
    id: "gtc",
    number: "02",
    title: "Global Talent Connect (GTC)",
    badge: "Enterprise SaaS Platform",
    role: "Full Stack Developer",
    company: "SS40 NETWORK PRIVATE LIMITED",
    tagline: "Autonomous talent intelligence infrastructure connecting verified technical talent, global enterprise employers, and accredited academies.",
    description: "A comprehensive employment intelligence platform connecting pre-evaluated technical candidates, enterprise employers, and accredited training institutions through an autonomous deterministic matching and proctoring loop.",
    category: "Enterprise SaaS",
    accent: "violet",
    gradient: "from-violet-500/20 via-indigo-500/10 to-transparent",
    liveUrl: "https://gtc.ss40network.cloud/",
    githubUrl: null,
    metrics: [
      { label: "Matching Vectors", value: "100-Point" },
      { label: "Assessment MCQs", value: "20 Proctored" },
      { label: "Multi-Tenant Roles", value: "5 RBAC Levels" }
    ],
    technologies: ["TanStack Start", "React 19", "TypeScript", "Drizzle ORM", "SQLite", "Better-Auth", "Groq LLM", "Radix UI", "Tailwind CSS"],
    architectureHighlights: [
      "Deterministic 100-Point Matching Engine: Multi-factor scoring evaluating candidate skill proficiency weights (40%), proctored exam score (35%), availability (15%), and proximity (10%).",
      "Candidate Resume → Vacancy Desk Workflow: Automated resume upload (.pdf, .docx, .txt), base64 blob persistence, Groq LLM skill extraction, and in-place streaming viewer for hiring managers.",
      "6-Stage Recruitment Pipeline: Complete hiring lifecycle on Vacancy Desk (Applied → Screened → Shortlisted → Interview → Offer → Placed) with anti-malpractice gating.",
      "AI Proctored Technical Assessments: Dynamically generated 20-MCQ skill exams with browser focus tracking and tier-based verified scoring (Expert, Proficient, Standard).",
      "Enterprise RBAC & Passkeys: Multi-tenant role segregation for Candidate, Employer, Partner, and Admin with WebAuthn/Passkey authentication support."
    ]
  },
  {
    id: "ss40",
    number: "03",
    title: "SS40 Network Enterprise Portal & CMS",
    badge: "Enterprise Web Platform",
    role: "Full Stack Developer",
    company: "SS40 NETWORK PRIVATE LIMITED",
    tagline: "Unified digital headquarters and high-scale CMS for SS40 Network's Digital Solutions, SaaS Products, and Tech Academics.",
    description: "The primary digital platform and custom Content Management System for SS40 NETWORK PRIVATE LIMITED, presenting three core business wings: Digital Solutions, SaaS Products, and Tech Academics.",
    category: "Enterprise Web Platform",
    accent: "emerald",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    liveUrl: "https://ss40network.com/",
    githubUrl: null,
    metrics: [
      { label: "Core Business Wings", value: "3 Divisions" },
      { label: "Render Mode", value: "Edge-Optimized" },
      { label: "CMS Telemetry", value: "Full Audit Logs" }
    ],
    technologies: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Framer Motion", "Lenis Scroll", "Nodemailer", "Sharp"],
    architectureHighlights: [
      "Full-Stack Enterprise Architecture: Built on Next.js App Router and React 19 with PostgreSQL database persistence and Prisma ORM.",
      "Custom Admin Content Management: Complete administrative control over digital products, client case studies, student capstones, video happimonials, and organization logos.",
      "Lead Ingestion CRM & Alerts: Direct contact and demo booking pipelines with real-time Nodemailer dispatch and visitor session telemetry.",
      "High-Performance Visual Design: Edge-optimized caching, Lenis smooth scrolling, interactive impact mockups, spotlight cards, and Sharp image optimization.",
      "SEO & Structured Schema: Automated JSON-LD metadata for organization, local business, and sitelink hierarchies."
    ]
  }
];

/* ─── ALL SELECTED WORK / PROJECT ARCHIVE ─── */
export const allProjects = [
  {
    id: "mailai",
    title: "MailAI — AI Email → WhatsApp",
    category: "AI / Automation",
    shortDesc: "Executive AI email triage, WhatsApp alert bot, and smart reply engine.",
    overview: "MailAI bridges corporate email with WhatsApp to help busy professionals stay responsive without being glued to their inboxes.",
    problemSolved: "Executives receive hundreds of emails daily and often miss urgent inquiries when traveling or away from their desks. MailAI filters spam, delivers smart WhatsApp summaries, and turns quick voice or text notes into polished professional email replies.",
    keyFeatures: [
      "Filters out marketing junk and delivers instant WhatsApp alerts only for urgent emails.",
      "Converts quick natural-language replies into polite, professional email drafts.",
      "Preserves original email threads so clients see standard, seamless email replies."
    ],
    technologies: ["Fastify", "TypeScript", "Prisma ORM", "Gemini AI", "WhatsApp Cloud API", "BullMQ"],
    live: "https://mailai.ss40network.cloud/",
    github: null,
    highlight: "SS40 Production System",
    accent: "cyan"
  },
  {
    id: "gtc",
    title: "Global Talent Connect (GTC)",
    category: "Full Stack & SaaS",
    shortDesc: "100-point talent matching platform with proctored assessments and smart resume screening.",
    overview: "Global Talent Connect is an automated recruitment platform that connects pre-evaluated developers with enterprise employers.",
    problemSolved: "Hiring teams waste countless hours manually reviewing resumes and dealing with mismatched skill sets. GTC automatically parses resumes, conducts proctored online skill evaluations, and ranks candidates using a clear 100-point score.",
    keyFeatures: [
      "Automatic resume parsing that extracts technical skills directly into applicant profiles.",
      "Built-in proctored technical exams to verify candidate competence before interviews.",
      "Clear 6-stage recruitment dashboard from initial application to final offer."
    ],
    technologies: ["TanStack Start", "React 19", "Drizzle ORM", "Groq AI", "Better-Auth", "Tailwind CSS"],
    live: "https://gtc.ss40network.cloud/",
    github: null,
    highlight: "SS40 Production System",
    accent: "violet"
  },
  {
    id: "ss40",
    title: "SS40 Network Enterprise Portal",
    category: "Full Stack & SaaS",
    shortDesc: "Enterprise corporate web platform with a custom admin CMS and client lead capture.",
    overview: "The official web portal and unified administrative command center for SS40 Network's software and education divisions.",
    problemSolved: "Growing technology companies need a fast, reliable website where marketing teams can update products, post case studies, and capture client inquiries without engineering bottlenecks.",
    keyFeatures: [
      "Custom content management system (CMS) allowing non-technical staff to update content.",
      "Instant lead capture with real-time email notifications to sales and management.",
      "Fast edge-optimized page delivery ensuring sub-second load times."
    ],
    technologies: ["Next.js 16", "React 19", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Framer Motion"],
    live: "https://ss40network.com/",
    github: null,
    highlight: "SS40 Production System",
    accent: "emerald"
  },
  {
    id: "ai-importer",
    title: "AI Content Importer WordPress Plugin",
    category: "Plugins & WordPress",
    shortDesc: "Automates WordPress content creation by converting raw spreadsheets using AI.",
    overview: "An open-source WordPress plugin that transforms raw CSV or XML spreadsheets into structured blog posts and products with AI assistance.",
    problemSolved: "Manually copying hundreds of spreadsheet rows into WordPress is tedious and time-consuming. This plugin analyzes data rows and automatically generates SEO-friendly titles, summaries, and categories.",
    keyFeatures: [
      "Imports bulk CSV/XML data files in seconds.",
      "Leverages Gemini and Groq AI to generate compelling post excerpts and taxonomies.",
      "Built with native WordPress security standards and batch processing."
    ],
    technologies: ["PHP", "WordPress Plugin API", "Gemini API", "Groq API", "REST API"],
    live: null,
    github: "https://github.com/AbrahamSamuel2003/ai-importer-1",
    highlight: "Open Source Plugin",
    accent: "purple"
  },
  {
    id: "voucherly",
    title: "Voucherly – Desktop Invoicing",
    category: "Applications",
    shortDesc: "Offline-first desktop billing software with invoice generation and financial analytics.",
    overview: "A lightweight cross-platform desktop application designed for small businesses to generate professional invoices offline.",
    problemSolved: "Many small businesses don't want to pay monthly SaaS fees or rely on cloud internet connections just to print client bills. Voucherly runs locally on Windows and Mac with zero subscriptions.",
    keyFeatures: [
      "Works 100% offline with zero cloud dependency or subscription fees.",
      "Generates clean PDF invoices with taxes, itemized lists, and discount calculations.",
      "Includes visual dashboards for weekly revenue and payment tracking."
    ],
    technologies: ["Electron", "React", "Node.js", "Vite", "Local Storage"],
    live: null,
    github: "https://github.com/AbrahamSamuel2003/voucherly",
    highlight: "Desktop Software",
    accent: "blue"
  },
  {
    id: "ims",
    title: "Intern Management System (IMS)",
    category: "Applications",
    shortDesc: "Role-based internship lifecycle platform with daily task tracking and evaluations.",
    overview: "A centralized web platform that helps companies manage student internships, project assignments, and performance reviews.",
    problemSolved: "Managing student internships across email and messy spreadsheets leads to missed tasks and delayed feedback. IMS provides a single portal for daily check-ins, mentor assignments, and certificate generation.",
    keyFeatures: [
      "Separate dashboards for students, supervisors, and administrators.",
      "Daily task submission and progress tracking with file attachments.",
      "End-of-term evaluation scoring and automatic completion certificate logging."
    ],
    technologies: ["PHP", "MySQL", "Bootstrap 5", "JavaScript", "AJAX"],
    live: null,
    github: "https://github.com/AbrahamSamuel2003/intern-management-system",
    highlight: "Web System",
    accent: "amber"
  }
];

/* ─── CAREER TIMELINE & EXPERIENCE ─── */
export const experienceData = [
  {
    role: "Full Stack Developer",
    company: "SS40 NETWORK PRIVATE LIMITED",
    period: "August 2026 – Present",
    type: "Full-time Professional",
    isCurrent: true,
    accent: "cyan",
    status: "Active / Present",
    statusCls: "bg-[#EEF0FD] text-[#2C3480] border border-[#4452E6]/30",
    description: "Building production web applications, scalable cloud backends, and smart AI automation tools.",
    highlights: [
      "MailAI Platform: Created an AI assistant that delivers urgent email alerts to WhatsApp and enables instant smart replies.",
      "Global Talent Connect: Built an intelligent recruitment web app that screens resumes automatically and conducts proctored skill tests.",
      "Enterprise Web Portals: Developed fast company web portals with custom administrative control panels and secure payments."
    ]
  },
  {
    role: "WordPress Developer Intern",
    company: "Smackcoders",
    period: "Nov 2024 – Feb 2025",
    type: "Internship",
    isCurrent: false,
    accent: "emerald",
    status: "Completed ✓",
    statusCls: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    description: "Developed custom WordPress plugins and optimized database performance.",
    highlights: [
      "Built data-import and media management WordPress plugins using PHP and MySQL.",
      "Designed mobile-friendly page layouts and improved load speeds."
    ]
  },
  {
    role: "Web Development Intern",
    company: "Dhatchan Academy",
    period: "June 2025",
    type: "Internship",
    isCurrent: false,
    accent: "violet",
    status: "Completed ✓",
    statusCls: "bg-[#EEF0FD] text-[#4452E6] border border-[#4452E6]/25",
    description: "Created responsive frontend interfaces and collaborated with senior developers.",
    highlights: [
      "Developed modern, accessible web interfaces using HTML5, CSS3, and JavaScript.",
      "Participated in team code reviews and followed production web standards."
    ]
  }
];

/* ─── EDUCATION ─── */
export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Manonmanium Sundaranar University",
    period: "2024 – 2026",
    status: "Graduated with Distinction",
    statusCls: "bg-[#EEF0FD] text-[#2C3480] border border-[#2C3480]/25",
    highlights: [
      "Specialized in advanced full-stack software development, distributed systems, and modern web architectures.",
      "Led technical projects covering AI integration, relational database design, and cloud workflows."
    ]
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "St. John's College",
    period: "2021 – 2024",
    status: "Grade: A Distinction",
    statusCls: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    highlights: [
      "Graduated with Grade A distinction in core computer science subjects.",
      "Strong foundation in algorithms, data structures, object-oriented programming, and relational databases."
    ]
  }
];

/* ─── ENGINEERING PRINCIPLES / ABOUT ─── */
export const engineeringPrinciples = [
  {
    icon: Server,
    title: "Production Reliability & Type Safety",
    description: "Building systems with strict TypeScript validation, resilient error boundaries, and defensive backend handling to guarantee 99.9% uptime."
  },
  {
    icon: Shield,
    title: "Security & Standards Compliance",
    description: "Enforcing AES-256-GCM token encryption, session-based RBAC authentication, and strict adherence to RFC email standards."
  },
  {
    icon: Zap,
    title: "Low Latency & Scalability",
    description: "Designing database indexes, edge caching strategies, and Redis background queues (BullMQ) to maintain sub-second response times."
  },
  {
    icon: Bot,
    title: "Purpose-Driven AI Engineering",
    description: "Leveraging Google Gemini and Groq LLMs not as gimmicks, but to automate high-friction operational workflows like email triage and talent screening."
  }
];

/* ─── CREDENTIALS & CERTIFICATIONS (14 Verified Certificates) ─── */
export const certificationsData = [
  {
    name: "Artificial Intelligence",
    provider: "NoviTech R&D Pvt. Ltd.",
    date: "April 2025",
    tags: ["AI & ML", "Neural Networks", "Python"],
    icon: Cpu,
    fileUrl: "/certificates/Artificial Intelligence.pdf",
    fileName: "Artificial_Intelligence.pdf"
  },
  {
    name: "TCS iON Career Edge – Young Professional",
    provider: "Tata Consultancy Services (TCS iON)",
    date: "April 2024",
    tags: ["Business Communication", "Professional Acumen", "TCS"],
    icon: Briefcase,
    fileUrl: "/certificates/TCS iON Career Edge - Y oung P rofes s ional .pdf",
    fileName: "TCS_iON_Career_Edge.pdf"
  },
  {
    name: "Enhancing Soft Skills & Personality",
    provider: "NPTEL – IIT Kanpur (Elite Certification)",
    date: "April 2025",
    tags: ["Interpersonal", "Leadership", "NPTEL"],
    icon: Users,
    fileUrl: "/certificates/Enhancing Soft Skills and Personality (1).pdf",
    fileName: "NPTEL_Enhancing_Soft_Skills.pdf"
  },
  {
    name: "UI/UX Design Mastery",
    provider: "Juno School of Design",
    date: "June 2025",
    tags: ["Figma", "Design Systems", "Prototyping"],
    icon: Palette,
    fileUrl: "/certificates/Juno_Certificate_Abraham Samuel _UI-UX_Design_Mastery.pdf",
    fileName: "UI_UX_Design_Mastery.pdf"
  },
  {
    name: "UI/UX Design for Beginners",
    provider: "Juno School of Design",
    date: "June 2025",
    tags: ["Wireframing", "User Journeys", "Heuristics"],
    icon: Layout,
    fileUrl: "/certificates/Juno_Certificate_Abraham Samuel _UI-UX_Design_for_Beginners.pdf",
    fileName: "UI_UX_Design_Beginners.pdf"
  },
  {
    name: "Excel Mastery – Complete Course",
    provider: "Juno School",
    date: "June 2025",
    tags: ["Formulas", "Data Analysis", "Reporting"],
    icon: FileSpreadsheet,
    fileUrl: "/certificates/Juno_Certificate_Abraham Samuel _Excel_Mastery-_Full_Course.pdf",
    fileName: "Excel_Mastery_Course.pdf"
  },
  {
    name: "Data Analytics – Masterclass",
    provider: "Data Learning Institute",
    date: "Feb 2025",
    tags: ["Analytics", "Business Intelligence", "SQL"],
    icon: BarChart3,
    fileUrl: "/certificates/Data Analytics.pdf",
    fileName: "Data_Analytics.pdf"
  },
  {
    name: "Angular 7 – Front End Development",
    provider: "Technical Certification Body",
    date: "May 2025",
    tags: ["Angular", "TypeScript", "SPA Architecture"],
    icon: Code2,
    fileUrl: "/certificates/angular 7.pdf",
    fileName: "Angular_7_Development.pdf"
  },
  {
    name: "Blockchain Basics & Architecture",
    provider: "Professional Tech Coursework",
    date: "June 2025",
    tags: ["Blockchain", "Distributed Ledgers", "Security"],
    icon: Shield,
    fileUrl: "/certificates/block chain.pdf",
    fileName: "Blockchain_Basics.pdf"
  },
  {
    name: "Power BI Workshop",
    provider: "OfficeMaster",
    date: "July 2025",
    tags: ["Power BI", "Data Modeling", "Dashboards"],
    icon: BarChart3,
    fileUrl: "/certificates/power bi wrokshop.pdf",
    fileName: "Power_BI_Workshop.pdf"
  },
  {
    name: "Front End Web Development",
    provider: "Developer Track Certification",
    date: "May 2025",
    tags: ["Frontend", "JavaScript", "Responsive UI"],
    icon: Globe,
    fileUrl: "/certificates/Front End Development.pdf",
    fileName: "Front_End_Development.pdf"
  },
  {
    name: "Front End Development – HTML5 & Web Standards",
    provider: "Web Standards Certification",
    date: "May 2025",
    tags: ["HTML5", "Modern CSS", "Accessibility"],
    icon: Layout,
    fileUrl: "/certificates/Front End Development html.pdf",
    fileName: "Front_End_HTML5.pdf"
  },
  {
    name: "HTML & CSS Bootcamp",
    provider: "LetsUpgrade",
    date: "July 2025",
    tags: ["HTML5", "CSS3", "Bootcamp"],
    icon: Terminal,
    fileUrl: "/certificates/htmlcssbootcamp.pdf",
    fileName: "HTML_CSS_Bootcamp.pdf"
  },
  {
    name: "UI/UX Product Design Specialization",
    provider: "Design Certification",
    date: "July 2025",
    tags: ["UX Research", "Visual Design", "Design Thinking"],
    icon: Layers,
    fileUrl: "/certificates/UXUI Design.pdf",
    fileName: "UI_UX_Design_Specialization.pdf"
  }
];
