import { useState, useEffect, useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import {
  Mail, Phone, Download, Code2, Smartphone, GraduationCap, Briefcase,
  ExternalLink, Sparkles, ChevronRight, Award, Calendar, Globe, Terminal,
  Menu, X, Send, Check, Zap, Cpu, Database, Layout, Rocket,
  Target, Heart, Users, Lightbulb, Shield, Cloud, BarChart3,
  Smartphone as PhoneIcon, Coffee, Monitor, ArrowUp
} from "lucide-react";

/* ─── REUSABLE SECTION HEADER ─── */
const SectionHeader = ({ badge, title, highlight, sub }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-[#A1A1AA] text-sm font-medium mb-6">
      <Sparkles size={13} className="text-cyan-400" />{badge}
    </div>
    <h2 className="text-4xl md:text-5xl font-bold text-[#FAFAFA] mb-4 leading-tight">
      {title} <span className="gradient-text">{highlight}</span>
    </h2>
    {sub && <p className="text-[#A1A1AA] text-lg max-w-xl mx-auto leading-relaxed">{sub}</p>}
  </motion.div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { scrollYProgress } = useScroll();
  const navItems = ["home", "about", "education", "skills", "certifications", "projects", "contact"];

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

  const goto = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setActiveSection(id); setMobileMenuOpen(false); };
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const sendEmail = (e) => { e.preventDefault(); setEmailSent(true); setFormData({ name: "", email: "", message: "" }); setTimeout(() => setEmailSent(false), 3000); };

  /* ─── DATA ─── */
  const skillsData = {
    "Programming Languages": ["Python", "C++", "PHP", "JavaScript", "Kotlin"],
    "Frontend Technologies": ["HTML5", "CSS3", "React", "Tailwind CSS", "FormSubmit"],
    "Mobile & Backend": ["Android", "Kotlin", "Firebase", "MongoDB"],
    "Tools & Platforms": ["VS Code", "WordPress", "GitHub", "Android Studio", "Git", "Figma"]
  };
  const skillMeta = {
    "Programming Languages": { icon: Terminal, desc: "Core languages for backend logic & algorithms" },
    "Frontend Technologies": { icon: Layout, desc: "Building responsive, accessible user interfaces" },
    "Mobile & Backend": { icon: PhoneIcon, desc: "Native Android apps with cloud integration" },
    "Tools & Platforms": { icon: Cpu, desc: "Professional dev environment & collaboration" },
  };

  const projects = [
    {
      title: "AI Content Importer – WordPress Plugin ⭐",
      description: "A powerful, AI-driven WordPress plugin that transforms CSV and XML data into high-quality published posts using Google Gemini and Groq AI. Features a real-time chat agent interface, intelligent column mapping, WooCommerce product support, multilingual content generation via WPML/Polylang, and a full rollback system — all built as a professional SaaS-grade admin dashboard.",
      technologies: ["PHP", "WordPress", "Google Gemini API", "Groq API", "REST API", "Node.js", "JavaScript"],
      category: "Plugin", gradient: "from-violet-600 to-purple-800",
      details: [
        "Multi-provider AI integration supporting Google Gemini 2.5 Flash and Groq",
        "AI-powered automatic column mapping from CSV/XML to WordPress post fields",
        "Real-time AI Agent chat interface (Node.js) for conversational import management",
        "Direct AI publishing — generate and publish posts from a single text prompt",
        "WooCommerce product support with automated metadata and attribute management",
        "Multilingual import via WPML and Polylang with per-row language assignment",
        "Full rollback system to undo any import batch and cleanly delete created posts",
        "Modular template architecture separating UI from core plugin logic",
        "Live progress tracking with real-time log viewer in WordPress admin"
      ]
    },
    {
      title: "Voucherly – Desktop Invoicing Solution ⭐",
      description: "Cross-platform desktop application built using Electron and React — a lightweight, offline alternative to subscription-based invoicing tools. Enables multi-business management, smart invoice generation, and real-time financial analytics.",
      technologies: ["Electron", "React", "Node.js", "Vite", "IPC", "JSON Storage"],
      category: "Desktop", gradient: "from-blue-600 to-indigo-800",
      details: [
        "Multi-business management with isolated data and configurations",
        "Invoice creation with smart search and duplication for recurring billing",
        "Real-time analytics dashboard for monthly and yearly insights",
        "Offline-first architecture ensuring complete data privacy",
        "Desktop-web integration using Electron (Main & Renderer processes)",
        "Implementing IPC for secure communication between processes"
      ]
    },
    {
      title: "Intern Management System (IMS)",
      description: "Web-based platform to streamline the internship lifecycle. Enables administrators and team leads to assign tasks, monitor intern performance, and automate evaluation processes through role-based dashboards.",
      technologies: ["PHP", "MySQL", "Bootstrap 5", "JavaScript", "AJAX"],
      category: "Web", gradient: "from-emerald-600 to-teal-800",
      details: [
        "Role-based dashboards for Admin, Team Lead, and Intern",
        "Task assignment, submission, and feedback system",
        "Performance tracking based on completion and deadlines",
        "Automated evaluation and eligibility tracking",
        "Role-based authentication and authorization",
        "Relational database design for real-world applications"
      ]
    },
    {
      title: "Fitness AI Companion",
      description: "Android app generating personalized workout plans based on user's age, fitness goals, and health conditions.",
      technologies: ["Kotlin", "Firebase", "Android", "XML"],
      category: "Mobile", gradient: "from-rose-600 to-pink-800",
      details: [
        "Intelligent algorithm for personalized workout generation",
        "Firebase integration for real-time data sync and authentication",
        "Clean UI following Material Design guidelines",
        "Health condition tracking for safe workout recommendations"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)", institution: "Manonmanium Sundaranar University",
      period: "2024 – 2026", icon: GraduationCap, accent: "cyan",
      status: "Completed", statusCls: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      achievements: ["Focused on advanced software development methodologies", "Specialized in web technologies and mobile application development", "Maintained high academic standards and graduated with distinction"]
    },
    {
      degree: "Bachelor of Science in Computer Science", institution: "St. John's College",
      period: "2021 – 2024", icon: Award, accent: "emerald",
      status: "Grade: A", statusCls: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      achievements: ["Graduated with distinction in core computer science subjects", "Active participant in coding competitions and tech workshops", "Strong foundation in algorithms and data structures"]
    },
    {
      degree: "WordPress Developer Intern", institution: "Smackcoders",
      period: "Nov 2024 – Feb 2025", icon: Briefcase, accent: "cyan",
      status: "Completed ✓", statusCls: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      description: "Successfully completed a WordPress development internship at Smackcoders, gaining practical experience in building, customizing, and managing professional WordPress websites. Worked extensively with industry-standard plugins, themes, and frontend technologies.",
      achievements: ["Received official completion certification from Smackcoders", "Developed and customized WordPress websites using themes and plugins", "Worked with WP Ultimate CSV Importer and AIO Media Library Manager", "Built responsive layouts using HTML, CSS, and JavaScript", "Configured and managed WordPress plugins for enhanced functionality", "Performed website updates, content management, and bug fixes", "Ensured cross-device compatibility and improved UI responsiveness"]
    },
    {
      degree: "Web Development Intern", institution: "Dhatchan Academy",
      period: "June 2025", icon: Briefcase, accent: "violet",
      status: "Completed ✓", statusCls: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      description: "Completed hands-on web development internship with practical experience in modern frameworks and real-world project implementation.",
      achievements: ["Worked on modern web frameworks and responsive design", "Applied industry best practices for web application development", "Collaborated on real-world projects with experienced developers"]
    }
  ];

  const traits = [
    { icon: Lightbulb, title: "Creative Problem Solver", desc: "Enjoys finding innovative solutions to complex challenges", clr: "text-amber-400", bg: "bg-amber-500/10" },
    { icon: Users, title: "Strong Communicator", desc: "Excellent at explaining technical concepts simply", clr: "text-cyan-400", bg: "bg-cyan-500/10" },
    { icon: Rocket, title: "Quick Learner", desc: "Adapts rapidly to new technologies and methodologies", clr: "text-violet-400", bg: "bg-violet-500/10" },
    { icon: Heart, title: "Passionate Teacher", desc: "Loves sharing knowledge and helping others grow", clr: "text-rose-400", bg: "bg-rose-500/10" }
  ];

  const certs = [
    { name: "Angular 7 – Front End Development", provider: "Certification Body", date: "Completed", tags: ["Frontend", "Angular"], icon: Layout, clr: "text-red-400", bg: "bg-red-500/10" },
    { name: "Artificial Intelligence", provider: "NoviTech R&D Pvt. Ltd.", date: "April 12, 2025", tags: ["AI", "ML"], icon: Cpu, clr: "text-violet-400", bg: "bg-violet-500/10" },
    { name: "Blockchain Basics Course", provider: "Certification Body", date: "June 13, 2025", tags: ["Blockchain", "Crypto"], icon: Shield, clr: "text-emerald-400", bg: "bg-emerald-500/10" },
    { name: "Data Analytics – 30-Day Masterclass", provider: "Data Learning Institute", date: "Dec 2024 – Feb 2025", tags: ["Analytics", "Data Sci"], icon: BarChart3, clr: "text-orange-400", bg: "bg-orange-500/10" },
    { name: "Enhancing Soft Skills & Personality", provider: "NPTEL", date: "Feb – Apr 2025", tags: ["Communication", "Leadership"], icon: Users, clr: "text-pink-400", bg: "bg-pink-500/10" },
    { name: "Power BI Workshop", provider: "OfficeMaster", date: "Completed", tags: ["Power BI", "Data Viz"], icon: BarChart3, clr: "text-amber-400", bg: "bg-amber-500/10" },
    { name: "HTML & CSS Bootcamp", provider: "LetsUpgrade", date: "Completed", tags: ["HTML5", "CSS3"], icon: Code2, clr: "text-cyan-400", bg: "bg-cyan-500/10" },
    { name: "AI Tools Workshop", provider: "BE10X", date: "Completed", tags: ["AI Tools", "Productivity"], icon: Zap, clr: "text-purple-400", bg: "bg-purple-500/10" },
    { name: "Front-End Development (HTML/CSS)", provider: "Professional Body", date: "Certified", tags: ["Frontend", "Web Dev"], icon: Layout, clr: "text-green-400", bg: "bg-green-500/10" },
  ];

  const visibleCerts = showAllCerts ? certs : certs.slice(0, 6);

  const catIcon = (cat) => {
    if (cat === "Web") return <Globe className="text-white" size={26} />;
    if (cat === "Desktop") return <Monitor className="text-white" size={26} />;
    if (cat === "Plugin") return <Zap className="text-white" size={26} />;
    return <Smartphone className="text-white" size={26} />;
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
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-400 origin-left z-[100]" style={{ scaleX: scrollYProgress }} />

      {/* ── NAVBAR ── */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <motion.div initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="w-full max-w-5xl">
          <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between border border-white/[0.08] shadow-xl shadow-black/40">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={toTop}>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center font-bold text-[#09090B] text-sm">AS</div>
              <span className="font-semibold text-sm hidden sm:block">Abraham Samuel</span>
            </div>
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map(item => (
                <button key={item} onClick={() => goto(item)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium capitalize transition-all duration-200 ${activeSection === item ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" : "text-[#A1A1AA] hover:text-white hover:bg-white/[0.05]"}`}>
                  {item}
                </button>
              ))}
            </div>
            {/* CTA */}
            <div className="flex items-center gap-2">
              <motion.a href="/Abraham_Samuel_T.pdf" download whileHover={{ scale: 1.03 }}
                className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl border border-cyan-500/30 text-cyan-400 text-sm font-medium hover:bg-cyan-500/10 transition-all">
                <Download size={14} /> Resume
              </motion.a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-xl hover:bg-white/[0.05] text-[#A1A1AA]">
                {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </div>
          {/* Mobile menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                className="glass mt-2 rounded-2xl border border-white/[0.08] p-4 space-y-1">
                {navItems.map(item => (
                  <button key={item} onClick={() => goto(item)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium capitalize transition-all ${activeSection === item ? "bg-cyan-500/10 text-cyan-400" : "text-[#A1A1AA] hover:text-white hover:bg-white/[0.05]"}`}>
                    {item}
                  </button>
                ))}
                <a href="/Abraham_Samuel_T.pdf" download className="flex items-center gap-2 px-4 py-2.5 text-cyan-400 text-sm border-t border-white/[0.06] mt-1 pt-3">
                  <Download size={14} /> Download Resume
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 px-6 z-10">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1fr_420px] gap-14 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-8">
            {/* Availability */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/25 bg-emerald-500/[0.06] text-emerald-400 text-sm font-medium">
              <span className="w-2 h-2 bg-emerald-400 rounded-full pulse-dot" />
              Available for new opportunities
            </motion.div>
            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
                Abraham<br />
                <span className="gradient-text">Samuel T</span>
              </h1>
              <p className="text-[#A1A1AA] text-xl font-medium pt-2">
                Frontend Developer · WordPress Developer · Android Developer
              </p>
            </div>
            {/* Description */}
            <p className="text-[#A1A1AA] text-lg leading-relaxed max-w-xl">
              MCA Graduate building elegant digital experiences with clean code and thoughtful design.
              Specializing in React, WordPress plugin development, and Android applications.
            </p>
            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => goto("projects")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-400 text-[#09090B] font-semibold hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20">
                Explore My Work <ChevronRight size={17} />
              </motion.button>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => goto("contact")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/[0.12] text-[#FAFAFA] font-medium hover:bg-white/[0.05] hover:border-white/[0.2] transition-all">
                Get in Touch <Mail size={17} />
              </motion.button>
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
          </motion.div>
          {/* Right – Stats glass card */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="space-y-4">
            <div className="glass rounded-3xl p-7 border border-white/[0.08] relative">
              <div className="absolute -inset-px bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/5 rounded-3xl pointer-events-none" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "2+", l: "Years Experience", icon: Code2, clr: "text-cyan-400", bg: "bg-cyan-500/10" },
                  { v: "8+", l: "Technologies", icon: Zap, clr: "text-violet-400", bg: "bg-violet-500/10" },
                  { v: "4+", l: "Projects Built", icon: Globe, clr: "text-emerald-400", bg: "bg-emerald-500/10" },
                  { v: "Grade A", l: "BSc CS", icon: Award, clr: "text-amber-400", bg: "bg-amber-500/10" },
                ].map(s => (
                  <div key={s.l} className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                    <div className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
                      <s.icon className={s.clr} size={18} />
                    </div>
                    <div className="text-2xl font-bold text-[#FAFAFA] mb-0.5">{s.v}</div>
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
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass rounded-2xl px-5 py-4 border border-white/[0.08] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center font-bold text-[#09090B] text-sm flex-shrink-0">AS</div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-[#FAFAFA]">Abraham Samuel T</div>
                <div className="text-xs text-[#A1A1AA]">MCA Graduate · Developer</div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full pulse-dot" />
                <span className="text-emerald-400 text-xs">Online</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="About Me" title="More Than" highlight="Just Code" sub="I believe in creating technology that's not just functional, but meaningful and accessible" />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left text */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              {["As a skilled MCA graduate from MS University, I've cultivated expertise in frontend development, WordPress development, and responsive web technologies. My journey has equipped me with hands-on experience in modern frameworks like React and Electron, alongside professional WordPress development at Smackcoders.",
                "I specialize in creating elegant, efficient solutions that blend technical precision with thoughtful design — from building cross-platform desktop applications like Voucherly to crafting custom AI-powered WordPress plugins.",
                "Beyond technical skills, I'm a quick learner with strong communication abilities. I enjoy breaking down complex problems into understandable solutions through collaboration, empathy, and continuous learning."
              ].map((p, i) => (
                <p key={i} className="text-[#A1A1AA] leading-relaxed text-base">{p}</p>
              ))}
              {/* Trait cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {traits.map((t, i) => (
                  <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="glass rounded-2xl p-5 border border-white/[0.07] hover:border-white/[0.14] transition-all group">
                    <div className={`w-10 h-10 rounded-xl ${t.bg} flex items-center justify-center mb-3`}><t.icon className={t.clr} size={20} /></div>
                    <h4 className="font-semibold text-[#FAFAFA] text-sm mb-1">{t.title}</h4>
                    <p className="text-[#A1A1AA] text-xs leading-relaxed">{t.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Right */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
              {/* Current Focus */}
              <div className="glass rounded-2xl p-7 border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center"><Target className="text-cyan-400" size={20} /></div>
                  <div><h3 className="font-bold text-[#FAFAFA]">Current Focus</h3><p className="text-cyan-400 text-sm">Mastering modern web & mobile tech</p></div>
                </div>
                <div className="space-y-3.5">
                  {[["WordPress Development", "Expert", "text-cyan-400"], ["Frontend Development", "Advanced", "text-violet-400"], ["Android Development", "Intermediate", "text-emerald-400"]].map(([skill, level, cls]) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-[#A1A1AA] text-sm">{skill}</span>
                      <span className={`${cls} text-sm font-medium`}>{level}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Approach */}
              <div className="glass rounded-2xl p-7 border border-white/[0.07]">
                <h3 className="font-bold text-[#FAFAFA] mb-5">My Approach</h3>
                <div className="space-y-4">
                  {[
                    { icon: Lightbulb, bg: "bg-amber-500/10", clr: "text-amber-400", h: "User-Centered Design", d: "Always starting with the user's needs and experience" },
                    { icon: Zap, bg: "bg-cyan-500/10", clr: "text-cyan-400", h: "Clean & Efficient Code", d: "Writing maintainable, scalable, and performant code" },
                    { icon: Coffee, bg: "bg-violet-500/10", clr: "text-violet-400", h: "Continuous Learning", d: "Always exploring new technologies and methodologies" },
                  ].map(a => (
                    <div key={a.h} className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg ${a.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}><a.icon className={a.clr} size={15} /></div>
                      <div><h4 className="font-medium text-[#FAFAFA] text-sm">{a.h}</h4><p className="text-[#A1A1AA] text-xs mt-0.5">{a.d}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION & EXPERIENCE ── */}
      <section id="education" className="py-28 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <SectionHeader badge="Journey & Growth" title="Education &" highlight="Experience" sub="My academic journey and professional development timeline" />
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div key={edu.degree} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className={`glass rounded-2xl p-7 border border-white/[0.07] border-l-2 ${accentBorder(edu.accent)} hover:border-white/[0.12] transition-all group`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${accentBg(edu.accent)} flex items-center justify-center flex-shrink-0`}>
                        <edu.icon className={accentText(edu.accent)} size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#FAFAFA]">{edu.degree}</h3>
                        <p className="text-[#A1A1AA] text-sm">{edu.institution}</p>
                        <div className="flex items-center gap-1.5 text-[#A1A1AA] text-xs mt-1">
                          <Calendar size={12} /><span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${edu.statusCls} flex-shrink-0`}>{edu.status}</span>
                  </div>
                  {edu.description && <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">{edu.description}</p>}
                  <ul className="space-y-2">
                    {edu.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#A1A1AA]">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-28 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Technical Expertise" title="Skills &" highlight="Technologies" sub="A comprehensive toolkit for building modern, scalable applications" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {Object.entries(skillsData).map(([cat, skills], i) => {
              const { icon: Icon, desc } = skillMeta[cat];
              return (
                <motion.div key={cat} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
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
                </motion.div>
              );
            })}
          </div>
          {/* Bottom summary */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 glass rounded-2xl p-6 border border-white/[0.07]">
            <div className="grid grid-cols-3 gap-6 text-center">
              {[{ icon: Layout, label: "Frontend Dev", desc: "Responsive, accessible interfaces", clr: "text-cyan-400", bg: "bg-cyan-500/10" },
              { icon: PhoneIcon, label: "Mobile Dev", desc: "Native Android with Kotlin & Firebase", clr: "text-violet-400", bg: "bg-violet-500/10" },
              { icon: Cloud, label: "Backend & DB", desc: "Firebase & MongoDB for data management", clr: "text-emerald-400", bg: "bg-emerald-500/10" }
              ].map(p => (
                <div key={p.label} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl ${p.bg} flex items-center justify-center mb-3`}><p.icon className={p.clr} size={22} /></div>
                  <h4 className="font-semibold text-[#FAFAFA] text-sm mb-1">{p.label}</h4>
                  <p className="text-[#A1A1AA] text-xs">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="py-28 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Certifications & Workshops" title="Learning &" highlight="Credentials" sub="Continuous growth through industry-recognized certifications and workshops" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleCerts.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.09 }}
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
              </motion.div>
            ))}
          </div>
          {certs.length > 6 && (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8">
              <button onClick={() => setShowAllCerts(!showAllCerts)}
                className="px-7 py-3 rounded-xl border border-white/[0.1] text-[#A1A1AA] text-sm font-medium hover:text-white hover:border-white/[0.2] hover:bg-white/[0.05] transition-all">
                {showAllCerts ? "Show Less" : `Show All ${certs.length} Credentials`}
              </button>
            </motion.div>
          )}
          {/* Stats bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 glass rounded-2xl p-6 border border-white/[0.07]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[["6+", "Certifications"], ["3+", "Workshops"], ["4", "Tech Domains"], ["2024–25", "Active Period"]].map(([v, l]) =>
                <div key={l}><div className="text-2xl font-bold gradient-text mb-1">{v}</div><div className="text-[#A1A1AA] text-xs">{l}</div></div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-28 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Project Showcase" title="Featured" highlight="Projects" sub="Real-world applications showcasing problem-solving and technical execution" />
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="glass rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/[0.14] transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40">
                {/* Gradient header */}
                <div className={`relative h-36 bg-gradient-to-br ${p.gradient} p-6 flex items-end overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_60%)]" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    {catIcon(p.category)}
                  </div>
                  <div className="relative z-10">
                    <span className="text-white/70 text-xs font-medium uppercase tracking-wider">{p.category} Project</span>
                    <h3 className="text-white font-bold text-lg leading-tight mt-0.5">{p.title}</h3>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 space-y-5">
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">{p.description}</p>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {p.technologies.map(t => (
                      <span key={t} className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.05] border border-white/[0.07] text-[#A1A1AA] hover:text-cyan-400 hover:border-cyan-500/20 transition-colors">{t}</span>
                    ))}
                  </div>
                  {/* Details */}
                  <div>
                    <h4 className="text-[#FAFAFA] font-semibold text-sm mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {p.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Buttons */}
                  <div className="flex gap-3 pt-1">
                    <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/[0.1] text-[#A1A1AA] text-xs font-medium hover:text-white hover:border-white/[0.2] hover:bg-white/[0.05] transition-all">
                      <ExternalLink size={13} /> View Project
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-28 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Get In Touch" title="Let's Work" highlight="Together" sub="Have a project in mind? I'd love to hear about it" />
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", val: "abrahamsamuel645@gmail.com", href: "mailto:abrahamsamuel645@gmail.com", clr: "text-cyan-400", bg: "bg-cyan-500/10" },
                  { icon: Phone, label: "Phone", val: "6383813648", href: "tel:6383813648", clr: "text-emerald-400", bg: "bg-emerald-500/10" },
                ].map(c => (
                  <a key={c.label} href={c.href} className="glass flex items-center gap-4 rounded-2xl p-5 border border-white/[0.07] hover:border-white/[0.14] transition-all group">
                    <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0`}><c.icon className={c.clr} size={20} /></div>
                    <div><p className="text-[#A1A1AA] text-xs mb-0.5">{c.label}</p><p className="text-[#FAFAFA] font-medium text-sm">{c.val}</p></div>
                  </a>
                ))}
              </div>
              <div className="glass rounded-2xl p-7 border border-white/[0.07] space-y-4">
                <h3 className="font-bold text-[#FAFAFA]">Quick Response Promise</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">I typically respond to messages within 24 hours. Whether it's a full project, freelance work, or just a quick question — I'm happy to talk.</p>
                <div className="flex items-center gap-2 text-emerald-400 text-sm"><span className="w-2 h-2 bg-emerald-400 rounded-full pulse-dot" />Available for new projects</div>
              </div>
            </motion.div>
            {/* Right form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="glass rounded-2xl p-8 border border-white/[0.07]">
                <h3 className="font-bold text-[#FAFAFA] text-xl mb-6">Send a Message</h3>
                {emailSent ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-16 gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <Check className="text-emerald-400" size={32} />
                    </div>
                    <p className="text-[#FAFAFA] font-semibold">Message Sent!</p>
                    <p className="text-[#A1A1AA] text-sm">I'll get back to you soon.</p>
                  </motion.div>
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
                      <textarea id="message" required rows={5} placeholder="Tell me about your project..."
                        value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-[#FAFAFA] placeholder-[#52525B] text-sm focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.06] transition-all resize-none" />
                    </div>
                    <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-cyan-400 text-[#09090B] font-semibold hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20">
                      <Send size={16} /> Send Message
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
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
              <div className="text-xs text-[#A1A1AA]">Frontend · WordPress · Android Developer</div>
            </div>
          </div>
          <p className="text-[#A1A1AA] text-xs">© 2025 Abraham Samuel T. All rights reserved.</p>
          <motion.button onClick={toTop} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl border border-white/[0.1] bg-white/[0.04] flex items-center justify-center text-[#A1A1AA] hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
            <ArrowUp size={17} />
          </motion.button>
        </div>
      </footer>

    </div>
  );
}