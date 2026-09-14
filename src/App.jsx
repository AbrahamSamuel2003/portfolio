import { useState, useEffect, useRef } from "react";
import { m, useScroll, AnimatePresence } from "framer-motion";
import {
  Mail, Phone, Download, Code2, GraduationCap, Briefcase,
  ExternalLink, Sparkles, ChevronRight, Award, Calendar, Globe, Terminal,
  Menu, X, Send, Check, Zap, Cpu, Database, Layout, Rocket,
  Target, Heart, Users, Lightbulb, Shield, Cloud, BarChart3,
  Monitor, ArrowUp, CheckCircle2, Lock, Bot, Layers,
  FileText, Server, Building2, Workflow
} from "lucide-react";

/* ─── REUSABLE SECTION HEADER ─── */
const SectionHeader = ({ badge, title, highlight, sub }) => (
  <m.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 lg:mb-20">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-[#A1A1AA] text-sm font-medium mb-6">
      <Sparkles size={13} className="text-cyan-400" />{badge}
    </div>
    <h2 className="text-4xl md:text-5xl font-bold text-[#FAFAFA] mb-4 leading-tight">
      {title} <span className="gradient-text">{highlight}</span>
    </h2>
    {sub && <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto leading-relaxed">{sub}</p>}
  </m.div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const projectScrollRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const navItems = ["home", "about", "experience", "skills", "projects", "certifications", "contact"];

  useEffect(() => {
    const onScroll = () => {
      const cur = navItems.find(s => {
        const el = document.getElementById(s);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 120 && r.bottom >= 120;
      });
      if (cur) setActiveSection(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Project carousel: IntersectionObserver for active dot */
  useEffect(() => {
    const container = projectScrollRef.current;
    if (!container) return;
    const cards = Array.from(container.querySelectorAll(".project-card"));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cards.indexOf(entry.target);
            if (idx !== -1) setActiveProjectIdx(idx);
          }
        });
      },
      { root: container, threshold: 0.5 }
    );
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  const scrollToProjectCard = (idx) => {
    const container = projectScrollRef.current;
    if (!container) return;
    const cards = Array.from(container.querySelectorAll(".project-card"));
    if (cards[idx]) cards[idx].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  const goto = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const sendEmail = (e) => {
    e.preventDefault();
    setEmailSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setEmailSent(false), 3000);
  };

  /* ─── DATA ─── */
  const skillsData = {
    "Frontend Engineering": ["React 19", "Next.js 16", "TanStack Start", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Radix UI", "Framer Motion", "HTML5 / CSS3"],
    "Backend & APIs": ["Node.js", "Fastify", "Next.js App Router", "REST APIs", "Gmail OAuth 2.0", "IMAP / SMTP", "BullMQ", "Redis", "Nodemailer"],
    "Databases & ORMs": ["PostgreSQL", "SQLite", "Prisma ORM", "Drizzle ORM", "Redis (ioredis)", "MongoDB"],
    "AI & Integrations": ["Google Gemini API", "Groq LLM (Llama-3)", "WhatsApp Cloud API", "Baileys Socket", "Razorpay Payment Gateway", "PDFKit Invoicing"],
    "Security & DevOps": ["AES-256-GCM Encryption", "Better-Auth / RBAC", "Git / GitHub", "Vite", "Sharp Image Engine", "Linux VPS Deployment", "Pino Logging"]
  };

  const skillMeta = {
    "Frontend Engineering": { icon: Layout, desc: "Building responsive, modern, type-safe, and high-performance interfaces" },
    "Backend & APIs": { icon: Server, desc: "Scalable server architectures, OAuth2 flows, email syncing, and queues" },
    "Databases & ORMs": { icon: Database, desc: "Relational modeling, migration pipelines, and fast query execution" },
    "AI & Integrations": { icon: Bot, desc: "LLM prompt engineering, adaptive tests, and real-time WhatsApp automation" },
    "Security & DevOps": { icon: Shield, desc: "Data encryption, token isolation, role-based access control, and deployments" }
  };

  const projects = [
    {
      title: "MailAI — AI Email → WhatsApp Reply System ⭐",
      badge: "Production System",
      description: "An intelligent executive communication pipeline connecting email inboxes directly to WhatsApp. Features real-time priority email filtering with Google Gemini & Groq, interactive WhatsApp draft previews, natural language reply synthesis, and RFC 2822 header-compliant email dispatch that strictly preserves conversation threads.",
      role: "Full Stack Developer",
      technologies: ["Fastify", "TypeScript", "Prisma ORM", "Google Gemini API", "Groq LLM", "WhatsApp Cloud API", "Baileys", "Gmail OAuth2", "IMAP/SMTP", "BullMQ", "Redis", "Razorpay", "PDFKit"],
      category: "Full Stack / AI",
      gradient: "from-cyan-600 via-teal-700 to-blue-900",
      live: "https://mailai.ss40network.cloud/",
      github: null,
      details: [
        "AI Email Ingestion & Filtering: Classifies incoming correspondence by importance, urgency, and action items using Gemini & Groq while suppressing spam",
        "Bidirectional WhatsApp Channel: Delivers instant executive alerts and turns brief WhatsApp replies into professional, context-aware email responses",
        "Strict RFC 2822 Thread Preservation: Automatically maintains In-Reply-To, References, and external Thread-ID headers so replies land cleanly inside existing email threads",
        "Enterprise Security: AES-256-GCM token encryption for OAuth & IMAP/SMTP credentials with session state machine tracking",
        "Billing & Queue Infrastructure: Integrated Razorpay checkout, automated GST calculations with PDFKit invoice generation, Zoho Mail dispatch, and BullMQ task queues"
      ]
    },
    {
      title: "Global Talent Connect (GTC) ⭐",
      badge: "Enterprise SaaS",
      description: "A comprehensive employment intelligence platform connecting pre-evaluated technical candidates, enterprise employers, and accredited training institutions through an autonomous deterministic matching and proctoring loop.",
      role: "Full Stack Developer",
      technologies: ["TanStack Start", "React 19", "TypeScript", "Drizzle ORM", "SQLite", "Better-Auth", "Groq LLM", "Radix UI", "Tailwind CSS"],
      category: "Enterprise SaaS",
      gradient: "from-blue-600 via-indigo-700 to-violet-900",
      live: "https://gtc.ss40network.cloud/",
      github: null,
      details: [
        "Deterministic 100-Point Matching Engine: Multi-factor scoring evaluating candidate skill proficiency weights (40%), proctored exam score (35%), availability (15%), and proximity (10%)",
        "Candidate Resume → Vacancy Desk Workflow: Automated resume upload (.pdf, .docx, .txt), base64 blob storage, Groq LLM skill extraction, and in-place streaming viewer for hiring managers",
        "6-Stage Recruitment Pipeline: Complete hiring lifecycle on Vacancy Desk (Applied → Screened → Shortlisted → Interview → Offer → Placed) with anti-malpractice gating",
        "AI Proctored Technical Assessments: Dynamically generated 20-MCQ skill exams with browser focus loss tracking and tier-based verified scoring (Expert, Proficient, Standard)",
        "Enterprise RBAC & Passkeys: Multi-tenant role segregation for Candidate, Employer, Partner, and Admin with WebAuthn/Passkey authentication support"
      ]
    },
    {
      title: "SS40 Network Enterprise Portal & CMS ⭐",
      badge: "Enterprise Web Platform",
      description: "The primary digital platform and custom Content Management System for SS40 NETWORK PRIVATE LIMITED, presenting three core business wings: Digital Solutions, SaaS Products, and Tech Academics.",
      role: "Full Stack Developer",
      technologies: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Framer Motion", "Lenis Scroll", "Nodemailer", "Sharp"],
      category: "Enterprise Web",
      gradient: "from-emerald-600 via-teal-700 to-cyan-900",
      live: "https://ss40network.com/",
      github: null,
      details: [
        "Full-Stack Enterprise Architecture: Built on Next.js App Router and React 19 with PostgreSQL database persistence and Prisma ORM",
        "Custom Admin Content Management: Complete administrative control over digital products, client case studies, student capstones, video happimonials, and organization logos",
        "Lead Ingestion CRM & Alerts: Direct contact and demo booking pipelines with real-time Nodemailer dispatch and visitor session telemetry",
        "High-Performance Visual Design: Edge-optimized caching, Lenis smooth scrolling, interactive impact mockups, spotlight cards, and Sharp image optimization",
        "SEO & Structured Schema: Automated JSON-LD metadata for organization, local business, and sitelink hierarchies"
      ]
    },
    {
      title: "AI Content Importer – WordPress Plugin ⭐",
      badge: "SaaS Plugin",
      description: "A powerful, AI-driven WordPress plugin that transforms CSV and XML data into high-quality published posts using Google Gemini and Groq AI. Features a real-time chat agent interface, intelligent column mapping, WooCommerce product support, and a complete rollback system.",
      role: "WordPress / Plugin Developer",
      technologies: ["PHP", "WordPress", "Google Gemini API", "Groq API", "REST API", "Node.js", "JavaScript"],
      category: "Plugin",
      gradient: "from-violet-600 to-purple-800",
      live: null,
      github: "https://github.com/AbrahamSamuel2003/ai-importer-1",
      details: [
        "Multi-provider AI integration supporting Google Gemini 2.5 Flash and Groq",
        "AI-powered automatic column mapping from CSV/XML to WordPress post fields",
        "Real-time AI Agent chat interface for conversational import management",
        "Direct AI publishing — generate and publish posts from a single text prompt",
        "Full rollback system to cleanly undo batch imports and delete created entities"
      ]
    },
    {
      title: "Voucherly – Desktop Invoicing Solution ⭐",
      badge: "Desktop App",
      description: "Cross-platform desktop application built using Electron and React — a lightweight, offline-first alternative to subscription-based invoicing tools. Enables multi-business management, smart invoice generation, and real-time financial analytics.",
      role: "Software Developer",
      technologies: ["Electron", "React", "Node.js", "Vite", "IPC", "JSON Storage"],
      category: "Desktop",
      gradient: "from-blue-600 to-indigo-800",
      live: null,
      github: "https://github.com/AbrahamSamuel2003/voucherly",
      details: [
        "Multi-business management with isolated data configurations",
        "Invoice creation with smart search and duplication for recurring billing",
        "Real-time analytics dashboard for monthly and yearly financial insights",
        "Offline-first architecture ensuring complete data privacy via secure IPC"
      ]
    },
    {
      title: "Intern Management System (IMS)",
      badge: "Web App",
      description: "Web-based platform to streamline the internship lifecycle. Enables administrators and team leads to assign tasks, monitor intern performance, and automate evaluation processes through role-based dashboards.",
      role: "Full Stack Developer",
      technologies: ["PHP", "MySQL", "Bootstrap 5", "JavaScript", "AJAX"],
      category: "Web",
      gradient: "from-amber-600 to-orange-800",
      live: null,
      github: "https://github.com/AbrahamSamuel2003/intern-management-system",
      details: [
        "Role-based dashboards for Admin, Team Lead, and Intern",
        "Task assignment, submission, and automated evaluation workflow",
        "Performance metrics tracking based on completion and deadlines",
        "Relational database design for academic and organizational tracking"
      ]
    }
  ];

  const experienceData = [
    {
      role: "Full Stack Developer",
      company: "SS40 NETWORK PRIVATE LIMITED",
      period: "August 2026 – Present",
      type: "Full-time",
      icon: Briefcase,
      accent: "cyan",
      status: "Present",
      statusCls: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
      description: "Engineering production-grade full-stack web applications, AI automation systems, and enterprise cloud solutions. Spearheaded backend architecture, AI pipeline integration, and database management across core flagship products.",
      achievements: [
        "Architected and deployed MailAI (https://mailai.ss40network.cloud/), integrating Gmail OAuth2, IMAP/SMTP, Google Gemini/Groq AI filtering, and Meta WhatsApp Cloud API with RFC 2822 email thread preservation.",
        "Engineered the Global Talent Connect platform (https://gtc.ss40network.cloud/) using TanStack Start, Drizzle ORM, Better-Auth, Groq AI resume parsing, candidate resume-to-database pipelines, in-place blob viewers, and a 6-stage recruitment Vacancy Desk.",
        "Developed full-stack features and dynamic admin CMS systems for the SS40 Network corporate platform (https://ss40network.com/) with Next.js 16, Prisma ORM, PostgreSQL, and CRM lead capture.",
        "Implemented AES-256-GCM encryption for stored user credentials, background BullMQ queues, Razorpay GST billing automation, and real-time server incident alerts."
      ]
    },
    {
      role: "WordPress Developer Intern",
      company: "Smackcoders",
      period: "Nov 2024 – Feb 2025",
      type: "Internship",
      icon: Briefcase,
      accent: "emerald",
      status: "Completed ✓",
      statusCls: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      description: "Worked on professional WordPress plugin development, customization, and backend integration with industry-standard data import and media management tools.",
      achievements: [
        "Received official completion certification from Smackcoders for outstanding contributions",
        "Developed and customized WordPress plugins and themes using PHP, MySQL, and REST APIs",
        "Contributed to WP Ultimate CSV Importer workflows and AIO Media Library Manager features",
        "Built responsive, mobile-optimized frontend components with HTML5, CSS3, and JavaScript",
        "Performed bug fixes, database query optimization, and UI responsiveness enhancements"
      ]
    },
    {
      role: "Web Development Intern",
      company: "Dhatchan Academy",
      period: "June 2025",
      type: "Internship",
      icon: Briefcase,
      accent: "violet",
      status: "Completed ✓",
      statusCls: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
      description: "Gained hands-on experience building modern, responsive web application interfaces and collaborating on production-ready front-end architectures.",
      achievements: [
        "Implemented responsive UI components using modern frontend libraries and frameworks",
        "Applied best practices in cross-browser compatibility and web accessibility",
        "Collaborated with senior developers on project deliverables and code reviews"
      ]
    }
  ];

  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Manonmanium Sundaranar University",
      period: "2024 – 2026",
      icon: GraduationCap,
      accent: "cyan",
      status: "Completed",
      statusCls: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      achievements: [
        "Specialized in advanced full-stack software development, distributed systems, and modern web architectures",
        "Led multiple technical projects covering AI integration, relational database design, and cloud workflows",
        "Maintained high academic standards and graduated with distinction"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "St. John's College",
      period: "2021 – 2024",
      icon: Award,
      accent: "emerald",
      status: "Grade: A",
      statusCls: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      achievements: [
        "Graduated with Grade A distinction in core computer science subjects",
        "Strong foundation in algorithms, data structures, object-oriented programming, and relational databases",
        "Active participant in collegiate coding competitions and software engineering workshops"
      ]
    }
  ];

  const traits = [
    { icon: Server, title: "Full-Stack System Architect", desc: "Designs end-to-end web architectures from responsive UI to resilient APIs & databases", clr: "text-cyan-400", bg: "bg-cyan-500/10" },
    { icon: Bot, title: "AI & Automation Integrator", desc: "Implements production LLM workflows (Gemini, Groq), proctoring, and WhatsApp agents", clr: "text-violet-400", bg: "bg-violet-500/10" },
    { icon: Shield, title: "Security & Quality First", desc: "Enforces AES encryption, type safety, OAuth2 flows, and strict RFC standards", clr: "text-emerald-400", bg: "bg-emerald-500/10" },
    { icon: Rocket, title: "Rapid Problem Solver", desc: "Translates complex business workflows into high-performing, maintainable production software", clr: "text-amber-400", bg: "bg-amber-500/10" }
  ];

  const certs = [
    { name: "Artificial Intelligence", provider: "NoviTech R&D Pvt. Ltd.", date: "April 12, 2025", tags: ["AI", "LLM", "ML"], icon: Cpu, clr: "text-violet-400", bg: "bg-violet-500/10" },
    { name: "Angular 7 – Front End Development", provider: "Certification Body", date: "Completed", tags: ["Frontend", "Web Dev"], icon: Layout, clr: "text-red-400", bg: "bg-red-500/10" },
    { name: "Blockchain Basics Course", provider: "Certification Body", date: "June 13, 2025", tags: ["Blockchain", "Security"], icon: Shield, clr: "text-emerald-400", bg: "bg-emerald-500/10" },
    { name: "Data Analytics – 30-Day Masterclass", provider: "Data Learning Institute", date: "Dec 2024 – Feb 2025", tags: ["Analytics", "Data Sci"], icon: BarChart3, clr: "text-orange-400", bg: "bg-orange-500/10" },
    { name: "Enhancing Soft Skills & Personality", provider: "NPTEL", date: "Feb – Apr 2025", tags: ["Communication", "Leadership"], icon: Users, clr: "text-pink-400", bg: "bg-pink-500/10" },
    { name: "Power BI Workshop", provider: "OfficeMaster", date: "Completed", tags: ["Power BI", "Data Viz"], icon: BarChart3, clr: "text-amber-400", bg: "bg-amber-500/10" },
    { name: "HTML & CSS Bootcamp", provider: "LetsUpgrade", date: "Completed", tags: ["HTML5", "CSS3"], icon: Code2, clr: "text-cyan-400", bg: "bg-cyan-500/10" },
    { name: "AI Tools Workshop", provider: "BE10X", date: "Completed", tags: ["AI Tools", "Productivity"], icon: Zap, clr: "text-purple-400", bg: "bg-purple-500/10" }
  ];

  const visibleCerts = showAllCerts ? certs : certs.slice(0, 6);

  const catIcon = (cat) => {
    if (cat.includes("AI")) return <Bot className="text-white" size={24} />;
    if (cat.includes("SaaS")) return <Layers className="text-white" size={24} />;
    if (cat.includes("Desktop")) return <Monitor className="text-white" size={24} />;
    if (cat.includes("Plugin")) return <Zap className="text-white" size={24} />;
    return <Globe className="text-white" size={24} />;
  };

  const accentBorder = (a) => a === "cyan" ? "border-l-cyan-500" : a === "emerald" ? "border-l-emerald-500" : "border-l-violet-500";
  const accentText = (a) => a === "cyan" ? "text-cyan-400" : a === "emerald" ? "text-emerald-400" : "text-violet-400";
  const accentBg = (a) => a === "cyan" ? "bg-cyan-500/10" : a === "emerald" ? "bg-emerald-500/10" : "bg-violet-500/10";

  /* ═══════════════════════════════ RENDER ═══════════════════════════════ */
  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA] relative overflow-x-hidden">

      {/* GLOBAL BG */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-cyan-500/[0.035] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-violet-500/[0.04] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-emerald-500/[0.025] rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-bg opacity-60" />
      </div>

      {/* SCROLL PROGRESS */}
      <m.div className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-400 origin-left z-[100]" style={{ scaleX: scrollYProgress, willChange: 'transform' }} />

      {/* ── NAVBAR ── */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <m.div initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="w-full max-w-5xl">
          <div className="glass-nav rounded-2xl px-5 py-3 flex items-center justify-between shadow-xl shadow-black/40">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={toTop}>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center font-bold text-[#09090B] text-sm shadow-md shadow-cyan-500/20">AS</div>
              <div className="hidden sm:block">
                <span className="font-semibold text-sm block leading-none text-[#FAFAFA]">Abraham Samuel</span>
                <span className="text-[10px] text-cyan-400 font-medium">Full Stack Developer</span>
              </div>
            </div>
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map(item => (
                <button key={item} onClick={() => goto(item)}
                  className={`px-3 py-2 rounded-xl text-sm font-medium capitalize transition-all duration-200 ${activeSection === item ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" : "text-[#A1A1AA] hover:text-white hover:bg-white/[0.05]"}`}>
                  {item}
                </button>
              ))}
            </div>
            {/* CTA */}
            <div className="flex items-center gap-2">
              <m.a href="/Abraham_Samuel_T.pdf" download whileHover={{ scale: 1.03 }}
                className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl border border-cyan-500/30 text-cyan-400 text-sm font-medium hover:bg-cyan-500/10 transition-all">
                <Download size={14} /> Resume
              </m.a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-xl hover:bg-white/[0.05] text-[#A1A1AA]">
                {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </div>
          {/* Mobile menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <m.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                className="glass-nav mt-2 rounded-2xl p-4 space-y-1">
                {navItems.map(item => (
                  <button key={item} onClick={() => goto(item)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium capitalize transition-all ${activeSection === item ? "bg-cyan-500/10 text-cyan-400" : "text-[#A1A1AA] hover:text-white hover:bg-white/[0.05]"}`}>
                    {item}
                  </button>
                ))}
                <a href="/Abraham_Samuel_T.pdf" download className="flex items-center gap-2 px-4 py-2.5 text-cyan-400 text-sm border-t border-white/[0.06] mt-1 pt-3">
                  <Download size={14} /> Download Resume
                </a>
              </m.div>
            )}
          </AnimatePresence>
        </m.div>
      </div>

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 px-6 z-10">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1fr_420px] gap-14 items-center">
          {/* Left */}
          <m.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-8">
            {/* Availability */}
            <m.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/[0.08] text-cyan-300 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 bg-emerald-400 rounded-full pulse-dot" />
              Full Stack Developer at SS40 NETWORK PRIVATE LIMITED
            </m.div>
            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight">
                Abraham<br />
                <span className="gradient-text">Samuel T</span>
              </h1>
              <p className="text-[#FAFAFA] text-lg sm:text-xl font-medium pt-2 flex flex-wrap items-center gap-2">
                <span>Full Stack Developer</span>
                <span className="text-cyan-400">•</span>
                <span className="text-[#A1A1AA]">AI Systems</span>
                <span className="text-cyan-400">•</span>
                <span className="text-[#A1A1AA]">Enterprise Web Architectures</span>
              </p>
            </div>
            {/* Description */}
            <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed max-w-xl">
              MCA Graduate engineering production web applications, event-driven backend services, and AI automation systems at <strong className="text-white font-medium">SS40 NETWORK PRIVATE LIMITED</strong>. Specializing in React, Next.js, Fastify, TanStack Start, Prisma/Drizzle ORMs, Google Gemini/Groq AI pipelines, and Meta WhatsApp Cloud integrations.
            </p>
            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <m.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => goto("projects")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-400 text-[#09090B] font-semibold hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20">
                Explore Production Work <ChevronRight size={17} />
              </m.button>
              <m.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => goto("contact")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/[0.12] text-[#FAFAFA] font-medium hover:bg-white/[0.05] hover:border-white/[0.2] transition-all">
                Get in Touch <Mail size={17} />
              </m.button>
            </div>
            {/* Social row */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Mail, href: "mailto:abrahamsamuel645@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:6383813648", label: "Phone" },
              ].map(s => (
                <a key={s.label} href={s.href}
                  className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-[#A1A1AA] hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/[0.06] transition-all">
                  <s.icon size={16} />
                </a>
              ))}
              <div className="w-px h-5 bg-white/[0.1] mx-1" />
              <span className="text-[#A1A1AA] text-sm">abrahamsamuel645@gmail.com</span>
            </div>
          </m.div>

          {/* Right – Stats glass card */}
          <m.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="space-y-4">
            <div className="glass rounded-3xl p-7 border border-white/[0.08] relative">
              <div className="absolute -inset-px bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/5 rounded-3xl pointer-events-none" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "3+", l: "SS40 Production Systems", icon: Globe, clr: "text-cyan-400", bg: "bg-cyan-500/10" },
                  { v: "Full Stack", l: "Developer @ SS40", icon: Server, clr: "text-violet-400", bg: "bg-violet-500/10" },
                  { v: "15+", l: "Verified Technologies", icon: Zap, clr: "text-emerald-400", bg: "bg-emerald-500/10" },
                  { v: "MCA", l: "MS University", icon: GraduationCap, clr: "text-amber-400", bg: "bg-amber-500/10" },
                ].map(s => (
                  <div key={s.l} className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                    <div className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
                      <s.icon className={s.clr} size={18} />
                    </div>
                    <div className="text-xl font-bold text-[#FAFAFA] mb-0.5">{s.v}</div>
                    <div className="text-[#A1A1AA] text-xs">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-white/[0.06] space-y-3">
                <a href="mailto:abrahamsamuel645@gmail.com" className="flex items-center gap-3 text-[#A1A1AA] hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0"><Mail className="text-cyan-400" size={13} /></div>
                  <span className="text-sm">abrahamsamuel645@gmail.com</span>
                </a>
                <a href="tel:6383813648" className="flex items-center gap-3 text-[#A1A1AA] hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0"><Phone className="text-emerald-400" size={13} /></div>
                  <span className="text-sm">6383813648</span>
                </a>
              </div>
            </div>
            {/* Floating identity card */}
            <m.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass rounded-2xl px-5 py-4 border border-white/[0.08] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center font-bold text-[#09090B] text-sm flex-shrink-0 shadow-md shadow-cyan-500/20">AS</div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-[#FAFAFA]">Abraham Samuel T</div>
                <div className="text-xs text-[#A1A1AA]">Full Stack Developer · SS40 NETWORK</div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full pulse-dot" />
                <span className="text-emerald-400 text-xs">Active</span>
              </div>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-16 lg:py-28 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="About Me" title="Engineering Modern" highlight="Web & AI Systems" sub="Bridging full-stack software architecture with intelligent automation to build scalable, business-critical platforms" />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left text */}
            <m.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              {[
                "As a Full Stack Developer at SS40 NETWORK PRIVATE LIMITED and an MCA graduate from MS University, I build high-performance web systems and AI-integrated platforms. My daily engineering involves architecting TypeScript & Node.js backend services, designing type-safe database schemas with Prisma and Drizzle ORMs, and creating interactive user interfaces with React 19, Next.js, and TanStack Start.",
                "At SS40 Network, I have delivered real-world systems like MailAI (an AI email-to-WhatsApp pipeline preserving RFC 2822 threads), Global Talent Connect (an enterprise recruitment platform with a 100-point matching engine and dynamic resume blob viewers), and the SS40 corporate platform with custom CMS and lead automation.",
                "My technical foundation also includes hands-on experience in WordPress plugin development, Electron desktop applications, and database optimizations gained through dedicated internships at Smackcoders and Dhatchan Academy, enabling me to solve end-to-end engineering challenges with confidence."
              ].map((p, i) => (
                <p key={i} className="text-[#A1A1AA] leading-relaxed text-base">{p}</p>
              ))}
              {/* Trait cards */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {traits.map((t, i) => (
                  <m.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="glass rounded-2xl p-5 border border-white/[0.07] hover:border-white/[0.14] transition-all group">
                    <div className={`w-10 h-10 rounded-xl ${t.bg} flex items-center justify-center mb-3`}><t.icon className={t.clr} size={20} /></div>
                    <h4 className="font-semibold text-[#FAFAFA] text-sm mb-1">{t.title}</h4>
                    <p className="text-[#A1A1AA] text-xs leading-relaxed">{t.desc}</p>
                  </m.div>
                ))}
              </div>
            </m.div>

            {/* Right */}
            <m.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
              {/* Current Focus */}
              <div className="glass rounded-2xl p-7 border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center"><Target className="text-cyan-400" size={20} /></div>
                  <div><h3 className="font-bold text-[#FAFAFA]">Current Focus</h3><p className="text-cyan-400 text-sm">Full-Stack & AI Systems at SS40</p></div>
                </div>
                <div className="space-y-3.5">
                  {[
                    ["Full-Stack & API Architecture", "Production Lead", "text-cyan-400"],
                    ["AI Workflows & LLM Integration", "Advanced (Gemini / Groq)", "text-violet-400"],
                    ["Database Design & ORMs", "Advanced (Prisma / Drizzle)", "text-emerald-400"],
                    ["Secure Auth & Encryption", "AES-256 / Better-Auth", "text-amber-400"]
                  ].map(([skill, level, cls]) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-[#A1A1AA] text-sm">{skill}</span>
                      <span className={`${cls} text-xs font-semibold px-2 py-0.5 rounded-md bg-white/[0.04]`}>{level}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Approach */}
              <div className="glass rounded-2xl p-7 border border-white/[0.07]">
                <h3 className="font-bold text-[#FAFAFA] mb-5">Engineering Principles</h3>
                <div className="space-y-4">
                  {[
                    { icon: Server, bg: "bg-cyan-500/10", clr: "text-cyan-400", h: "Production Reliability", d: "Writing type-safe, resilient code with end-to-end error traps and logging" },
                    { icon: Shield, bg: "bg-emerald-500/10", clr: "text-emerald-400", h: "Security & Standards", d: "Encrypted credentials, RBAC isolation, and compliance with RFC mail standards" },
                    { icon: Zap, bg: "bg-amber-500/10", clr: "text-amber-400", h: "Performance & Latency", d: "Optimized database queries, background queues, and edge-friendly rendering" },
                  ].map(a => (
                    <div key={a.h} className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg ${a.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}><a.icon className={a.clr} size={15} /></div>
                      <div><h4 className="font-medium text-[#FAFAFA] text-sm">{a.h}</h4><p className="text-[#A1A1AA] text-xs mt-0.5">{a.d}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE & EDUCATION ── */}
      <section id="experience" className="py-16 lg:py-28 px-6 relative z-10">
        <div id="education" className="max-w-5xl mx-auto">
          <SectionHeader badge="Career Journey" title="Experience &" highlight="Education" sub="My professional progression as a software engineer and academic timeline" />
          
          {/* Work Experience */}
          <div className="space-y-6 mb-12">
            <h3 className="text-xl font-bold text-[#FAFAFA] flex items-center gap-2 mb-6">
              <Briefcase className="text-cyan-400" size={20} /> Professional Experience
            </h3>
            {experienceData.map((exp, i) => (
              <m.div key={exp.role + exp.company} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className={`glass rounded-2xl p-7 border border-white/[0.07] border-l-2 ${accentBorder(exp.accent)} hover:border-white/[0.12] transition-all group`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${accentBg(exp.accent)} flex items-center justify-center flex-shrink-0`}>
                        <exp.icon className={accentText(exp.accent)} size={22} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-lg font-bold text-[#FAFAFA]">{exp.role}</h4>
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#A1A1AA]">{exp.type}</span>
                        </div>
                        <p className="text-cyan-400 text-sm font-medium">{exp.company}</p>
                        <div className="flex items-center gap-1.5 text-[#A1A1AA] text-xs mt-1">
                          <Calendar size={12} /><span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${exp.statusCls} flex-shrink-0`}>{exp.status}</span>
                  </div>
                  {exp.description && <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">{exp.description}</p>}
                  <ul className="space-y-2">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#A1A1AA]">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </m.div>
            ))}
          </div>

          {/* Academic Background */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#FAFAFA] flex items-center gap-2 mb-6">
              <GraduationCap className="text-emerald-400" size={20} /> Academic Background
            </h3>
            {educationData.map((edu, i) => (
              <m.div key={edu.degree} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className={`glass rounded-2xl p-7 border border-white/[0.07] border-l-2 ${accentBorder(edu.accent)} hover:border-white/[0.12] transition-all group`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${accentBg(edu.accent)} flex items-center justify-center flex-shrink-0`}>
                        <edu.icon className={accentText(edu.accent)} size={22} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#FAFAFA]">{edu.degree}</h4>
                        <p className="text-[#A1A1AA] text-sm">{edu.institution}</p>
                        <div className="flex items-center gap-1.5 text-[#A1A1AA] text-xs mt-1">
                          <Calendar size={12} /><span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${edu.statusCls} flex-shrink-0`}>{edu.status}</span>
                  </div>
                  <ul className="space-y-2">
                    {edu.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#A1A1AA]">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </m.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-16 lg:py-28 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Technical Expertise" title="Skills &" highlight="Technologies" sub="Verified technical stack utilized across production systems, enterprise platforms, and API workflows" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(skillsData).map(([cat, skills], i) => {
              const { icon: Icon, desc } = skillMeta[cat] || { icon: Cpu, desc: "Technical tools and capabilities" };
              return (
                <m.div key={cat} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="glass rounded-2xl p-6 border border-white/[0.07] hover:border-cyan-500/20 transition-all duration-300 group hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/15 transition-colors">
                    <Icon className="text-cyan-400" size={21} />
                  </div>
                  <h3 className="font-bold text-[#FAFAFA] mb-1 text-sm">{cat}</h3>
                  <p className="text-[#A1A1AA] text-xs leading-relaxed mb-5">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(s => (
                      <span key={s} className="px-3 py-1.5 text-xs font-medium bg-white/[0.05] border border-white/[0.08] rounded-lg text-[#A1A1AA] hover:text-cyan-400 hover:border-cyan-500/20 hover:bg-cyan-500/[0.05] transition-all cursor-default">
                        {s}
                      </span>
                    ))}
                  </div>
                </m.div>
              );
            })}
          </div>

          {/* Bottom summary */}
          <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 glass rounded-2xl p-6 border border-white/[0.07]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { icon: Layout, label: "Full-Stack Web", desc: "React 19, Next.js 16, TanStack Start & Fastify", clr: "text-cyan-400", bg: "bg-cyan-500/10" },
                { icon: Bot, label: "AI & Automation", desc: "Google Gemini, Groq LLM & WhatsApp Cloud APIs", clr: "text-violet-400", bg: "bg-violet-500/10" },
                { icon: Database, label: "Data & Security", desc: "Prisma, Drizzle, PostgreSQL, SQLite & AES-256", clr: "text-emerald-400", bg: "bg-emerald-500/10" }
              ].map(p => (
                <div key={p.label} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl ${p.bg} flex items-center justify-center mb-3`}><p.icon className={p.clr} size={22} /></div>
                  <h4 className="font-semibold text-[#FAFAFA] text-sm mb-1">{p.label}</h4>
                  <p className="text-[#A1A1AA] text-xs">{p.desc}</p>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-16 lg:py-28 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader badge="Project Showcase" title="Featured" highlight="Projects" sub="Real-world production systems and software engineered for enterprise scale and intelligent automation" />
        </div>

        {/* ── Desktop: two-column grid ── */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
          {projects.map((p, i) => (
            <m.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className="glass rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/[0.14] transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 flex flex-col justify-between">
              <div>
                {/* Gradient header */}
                <div className={`relative h-40 bg-gradient-to-br ${p.gradient} p-6 flex items-end overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_60%)]" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-md">
                    {catIcon(p.category)}
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">{p.category}</span>
                      {p.badge && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-black/40 text-cyan-300 border border-cyan-400/30">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight">{p.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-5">
                  <div className="flex items-center gap-2 text-xs text-cyan-400 font-medium">
                    <Briefcase size={13} /> Role: {p.role}
                  </div>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">{p.description}</p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.technologies.map(t => (
                      <span key={t} className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.05] border border-white/[0.07] text-[#A1A1AA] hover:text-cyan-400 hover:border-cyan-500/20 transition-colors">{t}</span>
                    ))}
                  </div>

                  {/* Key details */}
                  <div>
                    <h4 className="text-[#FAFAFA] font-semibold text-sm mb-3">Key Implemented Features:</h4>
                    <ul className="space-y-2">
                      {p.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex flex-wrap gap-3">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-400 text-[#09090B] text-xs font-semibold hover:bg-cyan-300 transition-all shadow-md shadow-cyan-500/20">
                    <ExternalLink size={13} /> Live System
                  </a>
                )}
                {p.github ? (
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-cyan-500/30 text-cyan-400 text-xs font-medium hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all">
                    <ExternalLink size={13} /> View on GitHub
                  </a>
                ) : !p.live ? (
                  <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/[0.07] text-[#52525B] text-xs font-medium cursor-default select-none">
                    <Lock size={13} /> Enterprise Internal
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/[0.07] text-[#71717A] text-xs font-medium">
                    <Shield size={12} className="text-cyan-400/70" /> SS40 Network Production
                  </span>
                )}
              </div>
            </m.div>
          ))}
        </div>

        {/* ── Mobile: horizontal snap carousel ── */}
        <div className="lg:hidden">
          <div
            ref={projectScrollRef}
            className="project-scroll flex gap-4 overflow-x-auto px-6"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          >
            {projects.map((p, i) => (
              <m.div
                key={p.title}
                className="project-card glass rounded-2xl overflow-hidden border border-white/[0.07] flex-shrink-0 flex flex-col justify-between"
                style={{ scrollSnapAlign: "start", width: "86vw" }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div>
                  {/* Gradient header */}
                  <div className={`relative h-36 bg-gradient-to-br ${p.gradient} p-5 flex items-end overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_60%)]" />
                    <div className="absolute top-4 right-4 w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      {catIcon(p.category)}
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">{p.category}</span>
                        {p.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/40 text-cyan-300 border border-cyan-400/30">
                            {p.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-white font-bold text-base leading-tight">{p.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-4">
                    <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-medium">
                      <Briefcase size={12} /> {p.role}
                    </div>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed line-clamp-3">{p.description}</p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {p.technologies.slice(0, 6).map(t => (
                        <span key={t} className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.05] border border-white/[0.07] text-[#A1A1AA]">{t}</span>
                      ))}
                      {p.technologies.length > 6 && (
                        <span className="px-2 py-1 text-xs text-[#71717A]">+{p.technologies.length - 6} more</span>
                      )}
                    </div>

                    {/* Key features */}
                    <div>
                      <h4 className="text-[#FAFAFA] font-semibold text-xs mb-2">Key Highlights:</h4>
                      <ul className="space-y-1.5">
                        {p.details.slice(0, 3).map((d, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                            <span className="line-clamp-2">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="p-5 pt-0 flex flex-wrap gap-2">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-400 text-[#09090B] text-xs font-semibold hover:bg-cyan-300 transition-all">
                      <ExternalLink size={12} /> Live Site
                    </a>
                  )}
                  {p.github ? (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-cyan-500/30 text-cyan-400 text-xs font-medium hover:bg-cyan-500/10 transition-all">
                      <ExternalLink size={12} /> GitHub
                    </a>
                  ) : !p.live ? (
                    <span className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/[0.07] text-[#52525B] text-xs font-medium">
                      <Lock size={12} /> Private Repo
                    </span>
                  ) : null}
                </div>
              </m.div>
            ))}
            <div className="flex-shrink-0 w-2" aria-hidden="true" />
          </div>

          {/* ── Dot indicators ── */}
          <div className="flex justify-center items-center gap-2 mt-5 px-6">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToProjectCard(idx)}
                aria-label={`Go to project ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  activeProjectIdx === idx
                    ? "bg-cyan-400 w-6 h-2"
                    : "bg-white/20 hover:bg-white/40 w-2 h-2"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="py-16 lg:py-28 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Certifications & Workshops" title="Learning &" highlight="Credentials" sub="Continuous technical growth through accredited industry certifications and specialized workshops" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleCerts.map((c, i) => (
              <m.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.09 }}
                className="glass rounded-2xl p-6 border border-white/[0.07] hover:border-white/[0.14] transition-all group hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0`}><c.icon className={c.clr} size={20} /></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#FAFAFA] text-sm leading-snug">{c.name}</h4>
                    <p className="text-[#A1A1AA] text-xs mt-1">{c.provider}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[#A1A1AA] text-xs mb-4"><Calendar size={11} />{c.date}</div>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map(t => <span key={t} className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.05] border border-white/[0.07] text-[#A1A1AA]">{t}</span>)}
                </div>
              </m.div>
            ))}
          </div>
          {certs.length > 6 && (
            <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8">
              <button onClick={() => setShowAllCerts(!showAllCerts)}
                className="px-7 py-3 rounded-xl border border-white/[0.1] text-[#A1A1AA] text-sm font-medium hover:text-white hover:border-white/[0.2] hover:bg-white/[0.05] transition-all">
                {showAllCerts ? "Show Less" : `Show All ${certs.length} Credentials`}
              </button>
            </m.div>
          )}
          {/* Stats bar */}
          <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 glass rounded-2xl p-6 border border-white/[0.07]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[["3+", "SS40 Live Systems"], ["6+", "Industry Certifications"], ["5", "Core Engineering Domains"], ["2026", "Active Full Stack Era"]].map(([v, l]) =>
                <div key={l}><div className="text-2xl font-bold gradient-text mb-1">{v}</div><div className="text-[#A1A1AA] text-xs">{l}</div></div>
              )}
            </div>
          </m.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-16 lg:py-28 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Get In Touch" title="Let's Build" highlight="Together" sub="Interested in collaborating on high-scale web platforms, backend systems, or AI integrations?" />
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left info */}
            <m.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", val: "abrahamsamuel645@gmail.com", href: "mailto:abrahamsamuel645@gmail.com", clr: "text-cyan-400", bg: "bg-cyan-500/10" },
                  { icon: Phone, label: "Phone", val: "+91 6383813648", href: "tel:6383813648", clr: "text-emerald-400", bg: "bg-emerald-500/10" },
                  { icon: Building2, label: "Current Company", val: "SS40 NETWORK PRIVATE LIMITED", href: "https://ss40network.com/", clr: "text-violet-400", bg: "bg-violet-500/10" },
                ].map(c => (
                  <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass flex items-center gap-4 rounded-2xl p-5 border border-white/[0.07] hover:border-white/[0.14] transition-all group">
                    <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0`}><c.icon className={c.clr} size={20} /></div>
                    <div><p className="text-[#A1A1AA] text-xs mb-0.5">{c.label}</p><p className="text-[#FAFAFA] font-medium text-sm">{c.val}</p></div>
                  </a>
                ))}
              </div>
              <div className="glass rounded-2xl p-7 border border-white/[0.07] space-y-4">
                <h3 className="font-bold text-[#FAFAFA]">Prompt Response Guarantee</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">I am committed to quick turnaround times. Whether you want to discuss full-stack engineering, AI integrations, or software opportunities, feel free to reach out directly.</p>
                <div className="flex items-center gap-2 text-cyan-400 text-sm"><span className="w-2 h-2 bg-cyan-400 rounded-full pulse-dot" />Full Stack Developer · SS40 NETWORK PRIVATE LIMITED</div>
              </div>
            </m.div>

            {/* Right form */}
            <m.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="glass rounded-2xl p-8 border border-white/[0.07]">
                <h3 className="font-bold text-[#FAFAFA] text-xl mb-6">Send a Direct Message</h3>
                {emailSent ? (
                  <m.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-16 gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <Check className="text-emerald-400" size={32} />
                    </div>
                    <p className="text-[#FAFAFA] font-semibold">Message Received!</p>
                    <p className="text-[#A1A1AA] text-sm">Thank you for reaching out. I'll get back to you promptly.</p>
                  </m.div>
                ) : (
                  <form onSubmit={sendEmail} className="space-y-5">
                    {[
                      { id: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                      { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                    ].map(f => (
                      <div key={f.id}>
                        <label className="block text-[#A1A1AA] text-xs font-medium mb-2">{f.label}</label>
                        <input id={f.id} type={f.type} required placeholder={f.placeholder}
                          value={formData[f.id]} onChange={e => setFormData({ ...formData, [f.id]: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-[#FAFAFA] placeholder-[#52525B] text-sm focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.06] transition-all" />
                      </div>
                    ))}
                    <div>
                      <label className="block text-[#A1A1AA] text-xs font-medium mb-2">Message</label>
                      <textarea id="message" required rows={5} placeholder="Tell me about your project or inquiry..."
                        value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-[#FAFAFA] placeholder-[#52525B] text-sm focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.06] transition-all resize-none" />
                    </div>
                    <m.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-cyan-400 text-[#09090B] font-semibold hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20">
                      <Send size={16} /> Send Message
                    </m.button>
                  </form>
                )}
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 border-t border-white/[0.06] px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center font-bold text-[#09090B] text-xs">AS</div>
            <div>
              <div className="text-sm font-semibold text-[#FAFAFA]">Abraham Samuel T</div>
              <div className="text-xs text-[#A1A1AA]">Full Stack Developer · SS40 NETWORK PRIVATE LIMITED</div>
            </div>
          </div>
          <p className="text-[#A1A1AA] text-xs">© 2026 Abraham Samuel T. All rights reserved.</p>
          <m.button onClick={toTop} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl border border-white/[0.1] bg-white/[0.04] flex items-center justify-center text-[#A1A1AA] hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
            <ArrowUp size={17} />
          </m.button>
        </div>
      </footer>

    </div>
  );
}