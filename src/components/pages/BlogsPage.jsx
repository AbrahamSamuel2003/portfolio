import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ExternalLink, Github, MessageCircle, Mail,
  CheckCircle2, Code2, Server, Database, Bot, Shield,
  Layers, Terminal, ChevronDown, Sparkles, BookOpen, Clock,
  MapPin, Award, Building2, Cpu, Globe, Download, Smartphone
} from "lucide-react";

const CASE_STUDIES = [
  {
    id: "mailai",
    title: "MailAI — AI Email to WhatsApp Automation Engine",
    category: "AI & Microservices",
    image: "/images/projects/mailai.webp",
    tagline: "Bridging Enterprise Inboxes with WhatsApp via Event-Driven Fastify & Gemini AI",
    period: "2024 – Present",
    accent: "#4452E6",
    bgAccent: "#EEF0FD",
    live: "https://mailai.ss40network.cloud/",
    technologies: ["Fastify", "TypeScript", "Prisma ORM", "Google Gemini AI", "Meta WhatsApp Cloud API", "BullMQ", "Redis", "AES-256-GCM"],
    problem: "C-level executives and business managers receive hundreds of incoming emails daily. When traveling, in transit, or away from workstations, critical business inquiries get buried under newsletters and promotional spam, causing costly delayed responses.",
    architecture: "Engineered as an asynchronous, event-driven Fastify microservice. Outbound and inbound email events are ingested via RFC-compliant webhook adapters, buffered into Redis-backed BullMQ task queues, and evaluated through Google Gemini 2.5 Flash with prompt-engineered triage weights. High-priority messages trigger instant WhatsApp notifications with contextual AI reply drafts.",
    keyHighlights: [
      "Sub-2-second AI email classification separating urgent business queries from promotional clutter.",
      "Two-way WhatsApp reply synthesis: Voice/text notes typed in WhatsApp are transformed into formal, polished email responses.",
      "Strict RFC 2822 compliance preserving existing email thread headers (Message-ID, In-Reply-To, References).",
      "AES-256-GCM token encryption ensuring zero credential leakage across persistent database layers."
    ],
    impact: "Deployed live across executive teams at SS40 Network, reducing client response latency by 85%."
  },
  {
    id: "ruthra-medicines",
    title: "Ruthra Medicines — Bilingual Healthcare E-Commerce",
    category: "Full Stack & SaaS",
    image: "/images/projects/ruthra.webp",
    tagline: "Traditional Siddha & Ayurveda Direct-to-Consumer Platform with Automated Billing",
    period: "2024 – Present",
    accent: "#0D9488",
    bgAccent: "#F0FDFA",
    live: "https://ruthramedicines.com/",
    technologies: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "jsPDF", "Nodemailer", "Bilingual i18n"],
    problem: "Traditional Indian medicine manufacturers (Siddha & Ayurveda) suffer from fragmented manual phone orders, lack of regional Tamil language accessibility, error-prone manual GST invoicing, and disconnected inventory dispatch telemetry.",
    architecture: "Built on Next.js 16 with React 19 Server Components and PostgreSQL via Prisma ORM. Features full client-side and server-side bilingual localization (English & Tamil), a customized categorization taxonomy for traditional healthcare products, and an automated serverless invoice generation pipeline.",
    keyHighlights: [
      "Zero-latency bilingual state machine enabling seamless toggle between Tamil and English across 100+ product formulations.",
      "Automated server-side GST PDF invoice generation with automated client email dispatch upon successful checkout.",
      "Master admin operations console with real-time stock decrementation, inventory alerts, and courier tracking updates.",
      "Type-safe PostgreSQL relational schemas enforcing transactional integrity during multi-item concurrent orders."
    ],
    impact: "Over 500+ orders processed digitally with 100% automated billing accuracy and zero manual paper invoicing."
  },
  {
    id: "gtc",
    title: "Global Talent Connect (GTC) — AI Recruitment & Skill Scoring",
    category: "Full Stack & AI",
    image: "/images/projects/gtc.webp",
    tagline: "Automated 100-Point Candidate Evaluation with Proctored Technical Exams",
    period: "2024 – Present",
    accent: "#6366F1",
    bgAccent: "#EEF2FF",
    live: "https://gtc.ss40network.cloud/",
    technologies: ["TanStack Start", "React 19", "Drizzle ORM", "Groq AI (Llama-3)", "Better-Auth", "Tailwind CSS", "SQLite"],
    problem: "Corporate hiring teams spend upwards of 30 hours per requisition manually reviewing disorganized resumes, conducting repetitive initial screening phone calls, and dealing with skill mismatches during final interview stages.",
    architecture: "A high-throughput talent platform built on TanStack Start and React 19. Resumes are parsed through Groq AI LLM embeddings into structured skill matrices. Candidates complete real-time, proctored browser-based technical assessments, automatically calculating a deterministic 100-point competence score.",
    keyHighlights: [
      "Automated LLM resume parsing extracting technical skills, years of experience, and project validity in seconds.",
      "Browser-proctored technical coding assessments with anti-cheat telemetry and automated test-case evaluation.",
      "Unified 6-stage recruitment lifecycle dashboard tracking candidates from application to offer generation.",
      "Low-latency data modeling utilizing Drizzle ORM and Better-Auth session cryptography."
    ],
    impact: "Shortlisted candidates are qualified with 92% assessment accuracy, cutting initial screening time by 70%."
  },
  {
    id: "zentra-fitness",
    title: "Zentra Fitness — Android Fitness & Calorie Tracking App",
    category: "Mobile & Cloud",
    image: "/images/projects/zentra.webp",
    tagline: "Native Android App Engineered with Kotlin, XML, Firebase Auth & Cloud Firestore",
    period: "2024",
    accent: "#10B981",
    bgAccent: "#ECFDF5",
    apk: "/downloads/Zentra.apk",
    technologies: ["Kotlin", "Android SDK", "XML Layouts", "Firebase Authentication", "Cloud Firestore", "NoSQL", "Android Jetpack"],
    problem: "Fitness enthusiasts struggle with over-complicated, paywalled workout apps and unreliable offline logging. Users require a clean, responsive native Android application for daily calorie tracking, workout logging, and secure real-time cloud data synchronization.",
    architecture: "Developed natively for Android using Kotlin and modular XML layouts. Application state is securely partitioned using Firebase Authentication (supporting session persistence and user data sandboxing). Real-time telemetry, calorie calculations, and fitness logs are synchronized with a cloud-hosted NoSQL Cloud Firestore database, ensuring offline-first resilience and low-latency cloud synchronization.",
    keyHighlights: [
      "Native Android architecture with Kotlin delivering fluid UI response and minimal memory overhead.",
      "Firebase Authentication integration ensuring secure, isolated user session management.",
      "Cloud Firestore NoSQL database modeling for real-time fitness metrics and daily calorie logs.",
      "Native XML layout components optimized across diverse Android screen densities and orientations.",
      "Production-ready signed APK release (20.1 MB) available for immediate device installation."
    ],
    impact: "Functional native mobile application with full cloud connectivity, demonstrating native Android engineering and cloud backend integration."
  },
  {
    id: "addithalam",
    title: "Addithalam Foundation — Bilingual NGO Digital Platform",
    category: "Applications & NGO",
    image: "/images/projects/addithalam.webp",
    tagline: "Empowering Rural Students & Women in IT with Free Tech Education",
    period: "2024 – 2025",
    accent: "#D97706",
    bgAccent: "#FFFBEB",
    live: "https://addithalam-website.vercel.app/",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Noto Sans Tamil", "Lucide React"],
    problem: "Public charitable trusts require an accessible, credible, and transparent digital presence to connect with donors, publish audited governance reports, and recruit underprivileged students across regional language barriers.",
    architecture: "Engineered with Next.js 15 and React 19, adhering to strict WCAG 2.1 AA accessibility standards. Incorporates full bilingual typography utilizing Google's Noto Sans Tamil, responsive mobile navigation, and lightweight fluid micro-animations.",
    keyHighlights: [
      "Bilingual localized curriculum directory detailing free software engineering and cloud training tracks.",
      "Trust governance reporting highlighting student placement milestones, mentor directories, and corporate CSR partnerships.",
      "Optimized Core Web Vitals achieving perfect 100/100 performance and accessibility scores on Google Lighthouse."
    ],
    impact: "Helped connect dozens of students with free tech mentorship and career placement pathways."
  },
  {
    id: "ss40-portal",
    title: "SS40 Network Enterprise Portal & Custom CMS",
    category: "Enterprise Systems",
    image: "/images/projects/ss40.webp",
    tagline: "Unified Multi-Division Digital Architecture for Corporate Services & EdTech",
    period: "2024 – Present",
    accent: "#2C3480",
    bgAccent: "#EEF0FD",
    live: "https://ss40network.com/",
    technologies: ["Next.js 16", "React 19", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Framer Motion", "Cloudflare DNS"],
    problem: "Multi-division enterprise technology corporations struggle with disconnected sub-brand websites, slow marketing update cycles, and manual lead tracking spreadsheets.",
    architecture: "Unified corporate web application and administrative CMS delivering sub-second edge responses. Built with Next.js App Router and Prisma ORM on PostgreSQL.",
    keyHighlights: [
      "Intuitive administrative dashboard allowing non-technical marketing staff to publish case studies and program updates.",
      "Instant lead capture with real-time email routing to engineering and sales management.",
      "Sub-second edge caching ensuring flawless global response times."
    ],
    impact: "Centralized marketing operations across 3 company divisions into a single unified web platform."
  },
  {
    id: "samdani-agency",
    title: "Samdani Agency Stock Management System",
    category: "Business Software",
    image: "/images/projects/ims.webp",
    tagline: "Real-Time Warehouse Inventory Telemetry & Adjustment Logs",
    period: "2024",
    accent: "#0284C7",
    bgAccent: "#F0F9FF",
    live: "https://samdaniagencystockmanagement.vercel.app/",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Local Storage", "Vercel Analytics"],
    problem: "Distribution agencies frequently experience stock shrinkage and inventory discrepancies due to delayed ledger updates during busy multi-truck distribution hours.",
    architecture: "Single-page responsive inventory web app with collapsible adjustment logs, instant stock calculations, and search filtering.",
    keyHighlights: [
      "Collapsible real-time adjustment log preventing interface clutter while preserving complete audit history.",
      "Batch SKU search and barcode-friendly rapid quantity increment/decrement controls."
    ],
    impact: "Streamlined daily agency dispatch operations with zero calculation errors."
  },
  {
    id: "voucherly",
    title: "Voucherly — Offline-First Desktop Invoicing Software",
    category: "Desktop Applications",
    image: "/images/projects/voucherly.webp",
    tagline: "Subscription-Free Desktop Financial Ledger for Small Businesses",
    period: "2024",
    accent: "#4338CA",
    bgAccent: "#EEF2FF",
    github: "https://github.com/AbrahamSamuel2003/voucherly",
    technologies: ["Electron", "React", "Node.js", "Vite", "Local Storage", "PDFKit"],
    problem: "Small retailers and independent contractors are reluctant to pay monthly cloud SaaS fees just to print client bills, and often lose billing capability during network outages.",
    architecture: "Cross-platform desktop application using Electron and React that runs 100% offline with zero cloud dependency.",
    keyHighlights: [
      "Offline-first local SQLite data persistence with zero external network requirement.",
      "Instant PDF invoice rendering with customizable tax categories and currency formatting.",
      "Visual weekly revenue dashboards with payment status tracking."
    ],
    impact: "Enables small businesses to operate with enterprise-grade invoicing without monthly subscriptions."
  },
  {
    id: "ai-importer",
    title: "AI Content Importer — Open Source WordPress Plugin",
    category: "Open Source & Plugins",
    image: "/images/projects/ai-importer.webp",
    tagline: "Automated Bulk Spreadsheet Ingestion with LLM Taxonomy Generation",
    period: "2024",
    accent: "#9333EA",
    bgAccent: "#FAF5FF",
    github: "https://github.com/AbrahamSamuel2003/ai-importer-1",
    technologies: ["PHP", "WordPress Plugin API", "Gemini API", "Groq API", "REST API", "MySQL"],
    problem: "Migrating or importing massive product catalogs from CSV or XML spreadsheets into WordPress manually takes hundreds of hours of tedious copy-pasting.",
    architecture: "A native PHP WordPress plugin leveraging batch API chunking and LLM integrations (Google Gemini & Groq) to automatically generate SEO meta titles, excerpts, and category tags during bulk imports.",
    keyHighlights: [
      "Batch asynchronous processing handling large spreadsheet files without PHP execution timeouts.",
      "AI-driven automated post formatting, SEO meta description generation, and taxonomy classification.",
      "Adheres strictly to WordPress Core VIP security and coding standards."
    ],
    impact: "Over 5,000+ data rows imported across test suites with 90% reduction in editorial time."
  }
];

const ESSAYS = [
  {
    id: "why-best-developer",
    title: "Why Abraham Samuel T is Recognized as the Best Full Stack Developer in Tirunelveli",
    readTime: "6 min read",
    date: "October 2026",
    summary: "An in-depth perspective on software engineering standards, academic excellence at Manonmanium Sundaranar University, enterprise platform engineering at SS40 Network, and bridging local Tamil Nadu businesses with world-class cloud technologies.",
    content: [
      {
        heading: "1. The Evolution of Full Stack Engineering in South Tamil Nadu",
        text: "Tirunelveli and the surrounding southern districts of Tamil Nadu have rapidly emerged as a burgeoning hub for technological talent. Historically, local software development was dominated by rigid, monolithic PHP systems and generic WordPress installations. However, as regional enterprises expand into nationwide and global markets, their software requirements have fundamentally transformed. Modern web applications require sub-second edge performance, resilient microservice architectures, airtight cryptographic security, and automated artificial intelligence pipelines."
      },
      {
        heading: "2. The Technical Edge: Engineering Beyond Templates",
        text: "What sets Abraham Samuel T apart as the best full stack developer in Tirunelveli is an unrelenting commitment to production-grade engineering principles. Rather than relying on fragile website builders or superficial templates, Abraham specializes in modern, type-safe architectures: React 19, Next.js 16 (App Router), Fastify REST microservices, TypeScript, PostgreSQL via Prisma/Drizzle ORMs, and cloud-native AI integrations with Google Gemini and Groq LLMs."
      },
      {
        heading: "3. Academic Distinction Rooted in Tirunelveli",
        text: "Academic rigor forms the bedrock of Abraham's engineering philosophy. Graduating with Distinction in his Master of Computer Applications (MCA) from Manonmanium Sundaranar University (Tirunelveli) and earning Grade A Distinction in his B.Sc in Computer Science from St. John's College (Palayamkottai, Tirunelveli), Abraham has married deep theoretical computer science with high-velocity commercial execution."
      },
      {
        heading: "4. Proven Production Track Record at SS40 Network",
        text: "At SS40 NETWORK PRIVATE LIMITED, Abraham leads engineering on high-scale systems including MailAI (an AI email-to-WhatsApp pipeline with BullMQ task queues), Ruthra Medicines (a bilingual Tamil/English healthcare e-commerce platform with automated GST billing), and Global Talent Connect (an automated 100-point candidate screening platform). His work directly impacts real businesses with measurable ROI, zero-downtime deployments, and airtight AES-256-GCM data security."
      }
    ]
  },
  {
    id: "modern-web-architecture",
    title: "How Businesses in Tirunelveli Can Scale Rapidly with Custom Web Apps & AI Pipelines",
    readTime: "5 min read",
    date: "October 2026",
    summary: "A practical guide for startups, retail brands, and enterprises in Tirunelveli on replacing slow legacy websites with modern API-first web applications.",
    content: [
      {
        heading: "The Cost of Legacy Platforms",
        text: "Many traditional businesses in Tirunelveli still operate on outdated software architectures. Slow loading speeds, lack of mobile responsiveness, and manual billing processes silently cost businesses tens of thousands of rupees in lost customer conversions every single month. Modern consumers expect pages that load in under 1 second, bilingual Tamil-English accessibility, and direct WhatsApp communication."
      },
      {
        heading: "Why Next.js & Fastify Deliver Unmatched ROI",
        text: "By migrating from generic monolithic web platforms to custom Next.js and Fastify architectures, businesses gain sub-second page delivery via edge CDNs, automated GST invoice generation, and seamless payment gateway integrations (Razorpay). These custom platforms do not just look stunning—they automate manual back-office tasks and actively drive sales around the clock."
      },
      {
        heading: "Leveraging AI for Customer Support & Lead Conversion",
        text: "With integrations like Meta WhatsApp Cloud API and Google Gemini AI, local businesses can now provide instant 24/7 automated customer responses in both Tamil and English without hiring a large support team. Inquiries are captured, processed, and delivered straight to the business owner's mobile phone in real time."
      }
    ]
  }
];

const FAQS = [
  {
    q: "Who is the best full stack developer in Tirunelveli?",
    a: "Abraham Samuel T is widely recognized as the leading Full Stack Developer and AI Systems Engineer in Tirunelveli, Tamil Nadu. With an MCA Distinction from Manonmanium Sundaranar University and a production track record at SS40 NETWORK PRIVATE LIMITED, he builds high-performance web applications using React, Next.js, Fastify, PostgreSQL, and modern AI automation pipelines."
  },
  {
    q: "What programming languages and frameworks does Abraham Samuel specialize in?",
    a: "Abraham specializes in TypeScript, JavaScript (ES6+), React 19, Next.js 16, Fastify, Node.js, PostgreSQL (Prisma/Drizzle ORM), Tailwind CSS, Framer Motion, Google Gemini AI API, Groq LLMs, Meta WhatsApp Cloud API, and Electron desktop development."
  },
  {
    q: "What major production projects has Abraham Samuel built?",
    a: "Key live production systems include MailAI (AI Email-to-WhatsApp triage engine), Ruthra Medicines (bilingual Tamil/English healthcare e-commerce platform with automated GST invoicing), Global Talent Connect (AI candidate skill evaluation platform), Addithalam Foundation (accessible bilingual NGO platform), and the SS40 Network corporate CMS portal."
  },
  {
    q: "Does Abraham Samuel accept freelance, contract, or full-time projects?",
    a: "Yes. Abraham works with local enterprises in Tirunelveli and Tamil Nadu, as well as global remote clients across the globe. He is available for full-stack web application development, custom API architecture, AI automation, and technical software consulting."
  },
  {
    q: "How can I contact Abraham Samuel for a project in Tirunelveli?",
    a: "You can reach Abraham directly via WhatsApp at +91 6383813648, email at abrahamsamuel645@gmail.com, or through LinkedIn at linkedin.com/in/abraham-samuel-developer/."
  }
];

export default memo(function BlogsPage({ onBackToHome }) {
  const [activeTab, setActiveTab] = useState("all");
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Dynamic SEO Metadata for Googlebot indexing
    const prevTitle = document.title;
    document.title = "Engineering Blogs, Architecture Case Studies & Works — Abraham Samuel T";

    const canonical = document.querySelector("link[rel='canonical']");
    const prevCanonicalHref = canonical ? canonical.getAttribute("href") : "https://abrahamsamuel.vercel.app/";
    if (canonical) {
      canonical.setAttribute("href", "https://abrahamsamuel.vercel.app/blogs");
    }

    return () => {
      document.title = prevTitle;
      if (canonical) {
        canonical.setAttribute("href", prevCanonicalHref);
      }
    };
  }, []);

  const filteredCaseStudies = activeTab === "all" || activeTab === "projects"
    ? CASE_STUDIES
    : [];

  const filteredEssays = activeTab === "all" || activeTab === "essays"
    ? ESSAYS
    : [];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] relative selection:bg-[#4452E6]/15 selection:text-[#2C3480]">
      
      {/* ── TOP STICKY BREADCRUMB & RETURN BAR ── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] px-4 sm:px-6 py-3 shadow-2xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2C3480] hover:text-[#4452E6] transition-colors cursor-pointer py-1 px-2.5 rounded-lg hover:bg-[#EEF0FD]"
          >
            <ArrowLeft size={16} />
            <span>Back to Main Portfolio</span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF0FD] border border-[#4452E6]/20 text-[#4452E6] text-xs font-medium">
              <MapPin size={12} />
              Tirunelveli, Tamil Nadu
            </span>
            <a
              href="https://wa.me/916383813648?text=Hi%20Abraham,%20I%20read%20your%20engineering%20blog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#2C3480] text-white text-xs font-semibold hover:bg-[#4452E6] transition-colors shadow-sm cursor-pointer"
            >
              <MessageCircle size={14} />
              <span>Discuss a Project</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO BANNER ── */}
      <section className="pt-10 sm:pt-14 pb-8 sm:pb-12 px-4 sm:px-6 border-b border-[#E2E8F0] bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#4452E6]/[0.035] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto space-y-4 sm:space-y-5 text-center sm:text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF0FD] border border-[#4452E6]/25 text-[#4452E6] text-xs font-semibold">
            <BookOpen size={13} />
            <span>Technical Insights, Publications &amp; Works Directory</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0F172A] tracking-tight leading-[1.12] max-w-4xl">
            Full Stack Engineering, Production Architectures &amp; Works by{" "}
            <span className="gradient-text italic font-serif">Abraham Samuel T</span>
          </h1>

          <p className="text-sm sm:text-base text-[#475569] max-w-3xl leading-relaxed">
            The definitive engineering index covering enterprise web platforms, custom AI automation pipelines, bilingual e-commerce systems, and thought leadership from the best Full Stack Developer in Tirunelveli, Tamil Nadu.
          </p>

          {/* Filter Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {[
              { id: "all", label: "All Content" },
              { id: "projects", label: "Project Deep Dives & Works" },
              { id: "essays", label: "SEO & Engineering Articles" },
              { id: "faqs", label: "Frequently Asked Questions" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#2C3480] text-white shadow-sm"
                    : "bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:bg-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-16">
        
        {/* ── SECTION 1: DETAILED PROJECT CASE STUDIES & WORKS ── */}
        {(activeTab === "all" || activeTab === "projects") && (
          <section className="space-y-8">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#4452E6] uppercase tracking-wider">
                <Code2 size={15} />
                <span>Production Portfolio &amp; Works</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                Architectural Deep Dives into Live Systems
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] max-w-2xl">
                Comprehensive breakdowns of production web platforms, API microservices, and AI integrations built for regional and global deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:gap-8">
              {filteredCaseStudies.map((study) => (
                <article
                  key={study.id}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1] transition-all space-y-6"
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F1F5F9] pb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-md bg-[#EEF0FD] text-[#2C3480] text-[11px] font-semibold border border-[#4452E6]/20">
                          {study.category}
                        </span>
                        <span className="text-xs text-[#94A3B8] font-mono">{study.period}</span>
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                        {study.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-[#4452E6] pt-0.5">
                        {study.tagline}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {study.live && (
                        <a
                          href={study.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2C3480] text-white text-xs font-semibold hover:bg-[#4452E6] transition-colors"
                        >
                          <span>Live Site</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                      {study.apk && (
                        <a
                          href={study.apk}
                          download
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-xs"
                        >
                          <Download size={13} />
                          <span>Download APK (20 MB)</span>
                        </a>
                      )}
                      {study.github && (
                        <a
                          href={study.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] text-xs font-semibold hover:bg-white transition-colors"
                        >
                          <Github size={13} />
                          <span>Source</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Visual Preview Screenshot */}
                  {study.image && (
                    <div className="relative w-full rounded-2xl overflow-hidden bg-slate-100 border border-[#E2E8F0] shadow-2xs">
                      <img
                        src={study.image}
                        alt={`${study.title} preview screenshot`}
                        width="700"
                        height="330"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto max-h-[380px] object-cover object-top hover:scale-[1.01] transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Problem & Architecture Grid */}
                  <div className="grid md:grid-cols-2 gap-5 text-xs sm:text-sm leading-relaxed">
                    <div className="space-y-2 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                      <h4 className="font-bold text-[#0F172A] flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#64748B]">
                        <span>The Problem Solved</span>
                      </h4>
                      <p className="text-[#475569]">{study.problem}</p>
                    </div>

                    <div className="space-y-2 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                      <h4 className="font-bold text-[#0F172A] flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#64748B]">
                        <span>System Architecture</span>
                      </h4>
                      <p className="text-[#475569]">{study.architecture}</p>
                    </div>
                  </div>

                  {/* Key Highlights Bullets */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#64748B]">
                      Key Technical Deliverables
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#334155]">
                      {study.keyHighlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-[#4452E6] flex-shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Arsenal Tags & Impact Footnote */}
                  <div className="pt-3 border-t border-[#F1F5F9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="font-mono text-[11px] text-[#64748B] mr-1">Stack:</span>
                      {study.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] text-[#334155] text-[11px] font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {study.impact && (
                      <span className="font-semibold text-[#0F172A] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-lg">
                        Impact: {study.impact}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ── SECTION 2: SEO ESSAYS & TECHNICAL THOUGHT LEADERSHIP ── */}
        {(activeTab === "all" || activeTab === "essays") && (
          <section className="space-y-8">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#4452E6] uppercase tracking-wider">
                <BookOpen size={15} />
                <span>Engineering Articles &amp; SEO Guides</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                Insights on Software Architecture in Tirunelveli
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] max-w-2xl">
                Essays exploring technical best practices, high-scalability web engineering, and the regional digital transformation in South Tamil Nadu.
              </p>
            </div>

            <div className="space-y-8">
              {filteredEssays.map((essay) => (
                <article
                  key={essay.id}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm space-y-6"
                >
                  <div className="border-b border-[#F1F5F9] pb-4 space-y-2">
                    <div className="flex items-center gap-3 text-xs text-[#64748B] font-mono">
                      <span>{essay.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {essay.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                      {essay.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed italic">
                      {essay.summary}
                    </p>
                  </div>

                  <div className="space-y-6 text-xs sm:text-sm text-[#334155] leading-relaxed">
                    {essay.content.map((sec, i) => (
                      <div key={i} className="space-y-2">
                        <h4 className="text-sm sm:text-base font-bold text-[#2C3480]">
                          {sec.heading}
                        </h4>
                        <p>{sec.text}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ── SECTION 3: FREQUENTLY ASKED QUESTIONS (RICH SNIPPETS) ── */}
        {(activeTab === "all" || activeTab === "faqs") && (
          <section className="space-y-6 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-semibold text-[#4452E6] uppercase tracking-wider">
                Direct Answers
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                Frequently Asked Questions for Hiring in Tirunelveli
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Quick answers regarding technical capabilities, engagement models, and local expertise.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {FAQS.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className="border border-[#E2E8F0] rounded-2xl overflow-hidden transition-colors bg-[#F8FAFC]"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#0F172A] hover:text-[#2C3480] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={16}
                        className={`text-[#64748B] transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? "rotate-180 text-[#2C3480]" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0] pt-3"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ── BOTTOM CTA BANNER ── */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#2C3480] to-[#4452E6] text-white text-center space-y-4 shadow-xl shadow-[#2C3480]/15">
          <h3 className="text-xl sm:text-3xl font-bold tracking-tight">
            Ready to Build an Exceptional Web Platform?
          </h3>
          <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Whether you need a custom enterprise web application, high-scale API microservice, or AI automation pipeline in Tirunelveli or worldwide, let's talk.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/916383813648?text=Hi%20Abraham,%20I%20reviewed%20your%20case%20studies%20and%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2C3480] font-bold text-xs sm:text-sm hover:bg-[#EEF0FD] transition-colors shadow-md cursor-pointer"
            >
              <MessageCircle size={16} className="text-emerald-600" />
              <span>Message on WhatsApp</span>
            </a>
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 bg-white/10 text-white font-medium text-xs sm:text-sm hover:bg-white/20 transition-colors cursor-pointer"
            >
              <ArrowLeft size={16} />
              <span>Return to Portfolio</span>
            </button>
          </div>
        </section>

      </main>

      {/* ── DEDICATED BLOG FOOTER ── */}
      <footer className="border-t border-[#E2E8F0] bg-white py-8 px-4 sm:px-6 text-center text-xs text-[#64748B]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 Abraham Samuel T — Best Full Stack Developer in Tirunelveli, Tamil Nadu.</p>
          <button
            onClick={onBackToHome}
            className="text-[#2C3480] hover:text-[#4452E6] font-semibold cursor-pointer"
          >
            ← Back to Portfolio
          </button>
        </div>
      </footer>

    </div>
  );
});
