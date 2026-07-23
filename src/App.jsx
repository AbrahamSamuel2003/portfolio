import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Download,
  Code2,
  Smartphone,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Sparkles,
  ChevronRight,
  Award,
  Calendar,
  Globe,
  Terminal,
  Github,
  Menu,
  X,
  Send,
  Check,
  Zap,
  Cpu,
  Database,
  Layout,
  Rocket,
  Target,
  Heart,
  Users,
  Lightbulb,
  Palette,
  Shield,
  Cloud,
  Server,
  BarChart3,
  Smartphone as PhoneIcon,
  Coffee,
  Monitor
} from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "skills", "certifications", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setEmailSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setEmailSent(false), 3000);
  };

  const skillsData = {
    "Programming Languages": ["Python", "C++", "PHP", "JavaScript", "Kotlin"],
    "Frontend Technologies": ["HTML5", "CSS3", "React", "Tailwind CSS", "FormSubmit"],
    "Mobile & Backend": ["Android", "Kotlin", "Firebase", "MongoDB"],
    "Tools & Platforms": ["VS Code", "WordPress", "GitHub", "Android Studio", "Git", "Figma"]
  };

  const projects = [
    {
      title: "AI Content Importer – WordPress Plugin ⭐",
      description: "A powerful, AI-driven WordPress plugin that transforms CSV and XML data into high-quality published posts using Google Gemini and Groq AI. Features a real-time chat agent interface, intelligent column mapping, WooCommerce product support, multilingual content generation via WPML/Polylang, and a full rollback system — all built as a professional SaaS-grade admin dashboard.",
      technologies: ["PHP", "WordPress", "Google Gemini API", "Groq API", "Action Scheduler", "REST API", "Node.js", "JavaScript"],
      category: "Plugin",
      gradient: "from-violet-600 to-purple-700",
      details: [
        "Multi-provider AI integration supporting Google Gemini 2.5 Flash and Groq for intelligent content generation",
        "AI-powered automatic column mapping from CSV/XML data to WordPress post fields",
        "Real-time AI Agent chat interface (Node.js server) for conversational import management",
        "Direct AI publishing — generate and publish full blog posts from a single text prompt without uploading a file",
        "WooCommerce product support with automated metadata and attribute management",
        "Multilingual import support via WPML and Polylang with per-row language assignment",
        "Background job scheduling with Action Scheduler for large-scale imports without timeouts",
        "Automated SEO meta generation (Google title & meta description) per imported post",
        "Smart duplicate detection to skip rows with identical titles and prevent double-posting",
        "Full rollback system to undo any import batch and cleanly delete created posts",
        "Modular template architecture separating UI (import, logs, settings) from core plugin logic",
        "Live progress tracking with real-time log viewer and import status dashboard in WordPress admin"
      ]
    },
    {
      title: "Voucherly – Desktop Invoicing Solution ⭐",
      description: "Voucherly is a cross-platform desktop application built using Electron and React to provide a lightweight, offline alternative to subscription-based invoicing tools. The application enables users to manage multiple businesses, generate invoices efficiently, and track financial performance through real-time analytics.",
      technologies: ["Electron", "React", "Node.js", "Vite", "IPC", "JSON Storage"],
      category: "Desktop",
      gradient: "from-blue-600 to-indigo-600",
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
      description: "The Intern Management System (IMS) is a web-based platform designed to streamline the internship lifecycle. It enables administrators and team leads to assign tasks, monitor intern performance, and automate evaluation processes through role-based dashboards.",
      technologies: ["PHP", "MySQL", "Bootstrap 5", "JavaScript", "AJAX"],
      category: "Web",
      gradient: "from-emerald-500 to-teal-600",
      details: [
        "Role-based dashboards for Admin, Team Lead, and Intern",
        "Task assignment, submission, and feedback system",
        "Performance tracking based on completion and deadlines",
        "Automated evaluation and eligibility tracking",
        "Implementing role-based authentication and authorization",
        "Designing relational databases for real-world applications"
      ]
    },
    {
      title: "Fitness AI Companion",
      description: "Android app generating personalized workout plans based on user's age, fitness goals, and health conditions.",
      technologies: ["Kotlin", "Firebase", "Android", "XML"],
      category: "Mobile",
      gradient: "from-purple-500 to-pink-500",
      details: [
        "Created intelligent algorithm for personalized workout generation",
        "Integrated Firebase for real-time data sync and user authentication",
        "Designed clean, intuitive UI following Material Design guidelines",
        "Implemented health condition tracking for safe workout recommendations"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Manonmanium Sundaranar University",
      period: "2024 – 2026",
      icon: GraduationCap,
      color: "text-blue-400",
      status: "Completed",
      statusColor: "bg-green-500/20 text-green-400",
      achievements: [
        "Focused on advanced software development methodologies",
        "Specialized in web technologies and mobile application development",
        "Maintained high academic standards and graduated with distinction"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "St. John's College",
      period: "2021 – 2024",
      icon: Award,
      color: "text-green-400",
      status: "Grade: A",
      statusColor: "bg-green-500/20 text-green-400",
      achievements: [
        "Graduated with distinction in core computer science subjects",
        "Active participant in coding competitions and tech workshops",
        "Developed strong foundation in algorithms and data structures"
      ]
    },
    {
      degree: "WordPress Developer Intern",
      institution: "Smackcoders",
      period: "Nov 2024 – Feb 2025",
      icon: Briefcase,
      color: "text-indigo-400",
      status: "Completed ✓",
      statusColor: "bg-green-500/20 text-green-400",
      description: "Successfully completed a WordPress development internship at Smackcoders, gaining practical experience in building, customizing, and managing professional WordPress websites. Worked extensively with industry-standard plugins, themes, and frontend technologies to deliver responsive, user-friendly web solutions.",
      achievements: [
        "Successfully completed the internship and received official certification from Smackcoders",
        "Developed and customized WordPress websites using themes and plugins",
        "Worked with industry-leading plugins like WP Ultimate CSV Importer and AIO Media Library Manager",
        "Assisted in building responsive layouts using HTML, CSS, and basic JavaScript",
        "Configured and managed WordPress plugins for enhanced functionality",
        "Performed website updates, content management, and bug fixes",
        "Ensured cross-device compatibility and improved UI responsiveness"
      ]
    },
    {
      degree: "Web Development Intern",
      institution: "Dhatchan Academy",
      period: "June 2025",
      icon: Briefcase,
      color: "text-purple-400",
      status: "Completed ✓",
      statusColor: "bg-green-500/20 text-green-400",
      description: "Completed hands-on web development internship gaining practical experience in modern web development technologies and real-world project implementation.",
      achievements: [
        "Worked on modern web frameworks and responsive design",
        "Applied industry best practices for web application development",
        "Collaborated on real-world projects with experienced developers"
      ]
    }
  ];

  const personalTraits = [
    {
      icon: Lightbulb,
      title: "Creative Problem Solver",
      description: "Enjoys finding innovative solutions to complex challenges",
      color: "text-yellow-500"
    },
    {
      icon: Users,
      title: "Strong Communicator",
      description: "Excellent at explaining technical concepts in simple terms",
      color: "text-blue-500"
    },
    {
      icon: Rocket,
      title: "Quick Learner",
      description: "Adapts rapidly to new technologies and methodologies",
      color: "text-purple-500"
    },
    {
      icon: Heart,
      title: "Passionate Teacher",
      description: "Loves sharing knowledge and helping others grow",
      color: "text-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-gray-900 overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.05)_0%,transparent_50%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      </div>

      {/* Navigation - Minimalist Design */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <Code2 size={20} className="text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-gray-900">Abraham Samuel</span>
                <div className="h-0.5 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-1" />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {["home", "about", "education", "skills", "certifications", "projects", "contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-5 py-2.5 rounded-lg transition-all duration-300 ${activeSection === item
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-600"
                    }`}
                >
                  <span className="capitalize font-medium tracking-wide">{item}</span>
                  {activeSection === item && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.a
                href="/Abraham_Samuel_T.pdf"
                download="Abraham_Samuel_T_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all shadow-md"
              >
                <Download size={18} />
                <span className="font-medium">Resume</span>
              </motion.a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="p-4 space-y-1">
                {["home", "about", "education", "skills", "certifications", "projects", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeSection === item
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                      }`}
                  >
                    <span className="capitalize font-medium">{item}</span>
                  </button>
                ))}
                <a
                  href="/Abraham_Samuel_T.pdf"
                  download="Abraham_Samuel_T_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-medium mt-4 shadow-md"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section - Modern Minimalist */}
      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Welcome Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full"
              >
                <Sparkles size={16} />
                <span className="text-sm font-medium">Welcome to my portfolio</span>
              </motion.div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Abraham Samuel
                  </span>
                </h1>
                <div className="text-2xl md:text-3xl text-gray-600">
                  <span className="font-light">Building digital experiences with </span>
                  <span className="font-semibold text-blue-600">code</span>
                  <span className="font-light"> & </span>
                  <span className="font-semibold text-purple-600">creativity</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                I'm a passionate MCA student specializing in frontend development and Android applications.
                I create elegant, efficient solutions that blend technical precision with thoughtful design.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {["Frontend Developer", "WordPress Developer", "Android Developer", "Problem Solver"].map((tag, idx) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * idx }}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default shadow-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.a
                  href="#projects"
                  onClick={() => scrollToSection("projects")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-lg font-medium hover:shadow-xl hover:shadow-blue-500/20 transition-all shadow-lg"
                >
                  <span>Explore My Work</span>
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="#contact"
                  onClick={() => scrollToSection("contact")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 bg-white border border-gray-300 text-gray-700 px-8 py-3.5 rounded-lg font-medium hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm"
                >
                  <span>Get in Touch</span>
                  <Mail size={18} />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-xl">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-3">
                      <Code2 className="text-white" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">2+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>

                  <div className="text-center p-6 bg-purple-50 rounded-xl">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3">
                      <Smartphone className="text-white" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">8+</div>
                    <div className="text-gray-600">Technologies</div>
                  </div>

                  <div className="text-center p-6 bg-green-50 rounded-xl">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-3">
                      <Globe className="text-white" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">2</div>
                    <div className="text-gray-600">Live Projects</div>
                  </div>

                  <div className="text-center p-6 bg-amber-50 rounded-xl">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-3">
                      <Award className="text-white" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">Grade A</div>
                    <div className="text-gray-600">BSc CS</div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="space-y-4">
                    <a href="mailto:abrahamsamuel645@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <Mail size={18} className="text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Email</div>
                        <div className="font-medium">abrahamsamuel645@gmail.com</div>
                      </div>
                    </a>

                    <a href="tel:6383813648" className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors group">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <Phone size={18} className="text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Phone</div>
                        <div className="font-medium">6383813648</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <span className="text-blue-600 font-semibold tracking-wider">ABOUT ME</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              More Than Just <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Code</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              I believe in creating technology that's not just functional, but also meaningful and accessible
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  As a skilled MCA graduate from MS University, I've cultivated expertise in frontend development,
                  WordPress development, and responsive web technologies. My journey has equipped me with
                  hands-on experience in modern frameworks like React and Electron, alongside
                  professional WordPress development at Smackcoders.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  I specialize in creating elegant, efficient solutions that blend technical precision
                  with thoughtful design. From building cross-platform desktop applications like
                  Voucherly to managing complex CMS integrations, I'm dedicated to delivering
                  high-quality digital experiences.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Beyond technical skills, I'm known for being a quick learner with strong communication
                  abilities. I enjoy breaking down complex problems into understandable solutions and
                  believe that the best technology is created through collaboration, empathy, and
                  continuous learning.
                </p>
              </div>

              {/* Personal Traits */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                {personalTraits.map((trait, index) => (
                  <motion.div
                    key={trait.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-5 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors shadow-sm"
                  >
                    <div className={`w-12 h-12 rounded-lg ${trait.color.replace('text-', 'bg-')}/10 flex items-center justify-center mb-3`}>
                      <trait.icon className={trait.color} size={24} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{trait.title}</h4>
                    <p className="text-sm text-gray-600">{trait.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Current Focus */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Target className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Current Focus</h3>
                    <p className="text-blue-600">Mastering modern web & mobile technologies</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">WordPress Development</span>
                    <span className="text-blue-600 font-medium">Expert</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Frontend Development</span>
                    <span className="text-purple-600 font-medium">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Android Development</span>
                    <span className="text-green-600 font-medium">Intermediate</span>
                  </div>
                </div>
              </div>

              {/* Approach to Work */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-gray-900">My Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="text-green-600" size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">User-Centered Design</h4>
                      <p className="text-sm text-gray-600">Always starting with the user's needs and experience</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="text-blue-600" size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Clean & Efficient Code</h4>
                      <p className="text-sm text-gray-600">Writing maintainable, scalable, and performant code</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Coffee className="text-purple-600" size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Continuous Learning</h4>
                      <p className="text-sm text-gray-600">Always exploring new technologies and methodologies</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section id="education" className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <GraduationCap className="text-blue-600" size={24} />
              <span className="text-blue-600 font-semibold tracking-wider">JOURNEY & GROWTH</span>
              <Briefcase className="text-purple-600" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Education & <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              My academic journey and professional development timeline
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={`${edu.degree}-${edu.institution}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute lg:relative left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 z-10 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                    <div className={`w-16 h-16 rounded-xl ${edu.color.replace('text-', 'bg-')}/20 border-2 ${edu.color.replace('text-', 'border-')}/30 flex items-center justify-center backdrop-blur-sm`}>
                      <edu.icon className={edu.color} size={24} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mt-8 lg:mt-0`}>
                    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                          <div className="flex items-center gap-2 text-gray-600 mb-3">
                            <Calendar size={16} />
                            <span>{edu.period}</span>
                          </div>
                          <p className="text-lg font-medium text-gray-700">{edu.institution}</p>
                        </div>
                        <span className={`px-4 py-1.5 ${edu.statusColor} rounded-full text-sm font-medium`}>
                          {edu.status}
                        </span>
                      </div>

                      {edu.description && (
                        <p className="text-gray-600 mb-6 leading-relaxed">{edu.description}</p>
                      )}

                      {edu.achievements && (
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900">Key Achievements & Focus Areas:</h4>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                </div>
                                <span className="text-gray-600">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {edu.grade && (
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <div className="flex items-center gap-3">
                            <Award className="text-green-600" size={20} />
                            <span className="font-medium text-gray-900">Academic Excellence: </span>
                            <span className="text-green-600 font-semibold">{edu.grade}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Cpu className="text-blue-600" size={24} />
              <span className="text-blue-600 font-semibold tracking-wider">TECHNICAL EXPERTISE</span>
              <Database className="text-purple-600" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skillsData).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-lg"
              >
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category}</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      className="inline-block px-4 py-2.5 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg text-gray-700 hover:border-blue-300 hover:text-blue-600 hover:shadow transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <Layout className="text-white" size={28} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Frontend Development</h4>
                  <p className="text-gray-600 text-sm">Creating responsive, accessible web interfaces with modern frameworks</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <PhoneIcon className="text-white" size={28} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Mobile Development</h4>
                  <p className="text-gray-600 text-sm">Building native Android applications with Kotlin and Firebase</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                    <Cloud className="text-white" size={28} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Backend & Database</h4>
                  <p className="text-gray-600 text-sm">Working with Firebase, MongoDB for data management</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Award className="text-blue-600" size={24} />
              <span className="text-blue-600 font-semibold tracking-wider">CERTIFICATIONS & WORKSHOPS</span>
              <Award className="text-purple-600" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Certifications & <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Workshops</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Continuous learning through industry-recognized certifications and hands-on workshops
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Award className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
                    <p className="text-blue-600">Industry-recognized qualifications</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Angular Certification */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all group">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">Angular 7 - Front End Development</h4>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar size={14} />
                          <span className="text-sm">Completed</span>
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <Layout className="text-white" size={20} />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">Comprehensive Angular 7 framework training covering components, services, and routing</p>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Frontend</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Angular</span>
                    </div>
                  </div>

                  {/* AI Certification */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-all group">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">Artificial Intelligence</h4>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar size={14} />
                          <span className="text-sm">April 12, 2025</span>
                        </div>
                        <p className="text-sm text-gray-500">NoviTech R&D Pvt. Ltd.</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Cpu className="text-white" size={20} />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">AI fundamentals, machine learning concepts, and practical applications</p>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AI</span>
                      <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">ML</span>
                    </div>
                  </div>

                  {/* Blockchain Certification */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-all group">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">Blockchain Basics Course</h4>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar size={14} />
                          <span className="text-sm">Completed: June 13, 2025</span>
                        </div>
                        <p className="text-sm text-green-600 font-medium">Valid through: June 13, 2026</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <Shield className="text-white" size={20} />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">Blockchain fundamentals, cryptocurrency concepts, and smart contract basics</p>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Blockchain</span>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Crypto</span>
                    </div>
                  </div>

                  {/* Data Analytics Certification */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-all group">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">Data Analytics – 30-Day Masterclass</h4>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar size={14} />
                          <span className="text-sm">Dec 26, 2024 to Feb 6, 2025</span>
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <Database className="text-white" size={20} />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">Data analysis techniques, visualization, and interpretation skills</p>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Analytics</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Data Science</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Workshops & Additional Certs Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Soft Skills Certification */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Soft Skills Development</h3>
                    <p className="text-purple-600">NPTEL Certification</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Enhancing Soft Skills and Personality</h4>
                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <Calendar size={14} />
                    <span className="text-sm">Feb – Apr 2025</span>
                  </div>
                  <p className="text-gray-600 mb-6">Communication, leadership, and professional development skills enhancement</p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Communication</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Leadership</span>
                  </div>
                </div>
              </div>

              {/* Workshops Section */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center">
                    <Rocket className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Workshops</h3>
                    <p className="text-amber-600">Hands-on practical sessions</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Power BI Workshop */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-300 transition-all group">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">Power BI Workshop</h4>
                        <p className="text-sm text-gray-500">OfficeMaster</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <BarChart3 className="text-white" size={20} />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">Data visualization and business intelligence tool training</p>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Power BI</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Data Viz</span>
                    </div>
                  </div>

                  {/* HTML & CSS Bootcamp */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all group">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">HTML & CSS Bootcamp</h4>
                        <p className="text-sm text-gray-500">LetsUpgrade</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <Code2 className="text-white" size={20} />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">Intensive web development fundamentals training</p>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">HTML5</span>
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">CSS3</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Bootcamp</span>
                    </div>
                  </div>

                  {/* AI Tools Workshop */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-all group">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">AI Tools Workshop</h4>
                        <p className="text-sm text-gray-500">BE10X</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center">
                        <Zap className="text-white" size={20} />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">Practical AI tools and productivity enhancement workshop</p>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AI Tools</span>
                      <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium">Productivity</span>
                    </div>
                  </div>

                  {/* Frontend Development Cert */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-all group">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">Front-End Development (HTML/CSS)</h4>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Award size={14} />
                          <span className="text-sm">Certified</span>
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <Layout className="text-white" size={20} />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">Professional certification in frontend web development technologies</p>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Frontend</span>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Web Dev</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certificate Count */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">6+</div>
                <div className="text-blue-100">Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">3+</div>
                <div className="text-blue-100">Workshops</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-blue-100">Tech Domains</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2024-25</div>
                <div className="text-blue-100">Active Learning Period</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Sparkles className="text-blue-600" />
              <span className="text-blue-600 font-semibold tracking-wider">PROJECT SHOWCASE</span>
              <Sparkles className="text-purple-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real-world applications showcasing problem-solving and technical execution
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Project Header */}
                  <div className={`p-8 bg-gradient-to-br ${project.gradient}`}>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          {project.category === "Web" ? (
                            <Globe className="text-white" size={28} />
                          ) : project.category === "Desktop" ? (
                            <Monitor className="text-white" size={28} />
                          ) : project.category === "Plugin" ? (
                            <Zap className="text-white" size={28} />
                          ) : (
                            <Smartphone className="text-white" size={28} />
                          )}
                        </div>
                        <div>
                          <span className="text-white/90 text-sm font-medium">{project.category} Project</span>
                          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        </div>
                      </div>
                      <ExternalLink className="text-white/80 hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <p className="text-gray-700 mb-8 leading-relaxed">{project.description}</p>

                    {/* Key Features */}
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-4">Key Features & Implementation:</h4>
                      <ul className="space-y-3">
                        {project.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                            </div>
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-4">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-4 py-2 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg text-gray-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
                      >
                        View Case Study
                      </motion.button>
                      <div className="flex items-center gap-4">
                        <button className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                          <Github size={20} className="text-gray-700" />
                        </button>
                        <button className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                          <ExternalLink size={20} className="text-gray-700" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 border border-blue-100">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Have a Project in Mind?</h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                I'm always excited to collaborate on interesting projects. Whether it's a web application,
                mobile app, or something entirely new, let's discuss how we can bring your ideas to life.
              </p>
              <motion.a
                href="#contact"
                onClick={() => scrollToSection("contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl transition-all"
              >
                <span>Start a Conversation</span>
                <ChevronRight />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <span className="text-blue-600 font-semibold tracking-wider">GET IN TOUCH</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just want to chat about tech
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Send className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
                  <p className="text-gray-600">I typically respond within 24 hours</p>
                </div>
              </div>

              <form onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Your Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                    placeholder="Tell me about your project or just say hello..."
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-medium text-lg flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-blue-500/20 transition-all"
                >
                  {emailSent ? (
                    <>
                      <Check size={20} />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <a href="mailto:abrahamsamuel645@gmail.com" className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow transition-all group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Primary Email</p>
                      <p className="text-lg font-medium text-gray-900">abrahamsamuel645@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:6383813648" className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow transition-all group">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Phone Number</p>
                      <p className="text-lg font-medium text-gray-900">6383813648</p>
                    </div>
                  </a>

                  <a href="https://linkedin.com/in/abraham-samuel-ui-uxdesiginer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow transition-all group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Linkedin className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">LinkedIn Profile</p>
                      <p className="text-lg font-medium text-gray-900">Abraham Samuel</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Zap className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Quick Response</h4>
                    <p className="text-gray-600">Typically replies within a few hours</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Available for:</span>
                    <span className="text-blue-600 font-medium">Freelance Projects</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Open to:</span>
                    <span className="text-purple-600 font-medium">Collaborations</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Status:</span>
                    <span className="text-green-600 font-medium">Available</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Code2 size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Abraham Samuel T</h3>
                  <p className="text-gray-400">Frontend & Android Developer</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm max-w-md">
                Creating meaningful digital experiences through clean code and thoughtful design.
              </p>
            </div>

            <div className="flex items-center gap-4">
              {[
                { icon: Mail, href: "mailto:abrahamsamuel645@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:6383813648", label: "Phone" },
                { icon: Linkedin, href: "https://linkedin.com/in/abraham-samuel-ui-uxdesiginer", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.includes('http') ? "_blank" : "_self"}
                  rel={item.href.includes('http') ? "noopener noreferrer" : ""}
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-colors group"
                >
                  <item.icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500">© {new Date().getFullYear()} Abraham Samuel T. All rights reserved.</p>
            <p className="text-gray-600 text-sm mt-2">Designed & Built with React, Tailwind CSS & ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;