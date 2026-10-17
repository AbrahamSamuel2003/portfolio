import { memo } from "react";
import { motion } from "framer-motion";
import { Briefcase, Layers, GraduationCap, Code2, CheckCircle2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import AboutCube3D from "../ui/AboutCube3D.jsx";

const ABOUT_CARDS = [
  {
    icon: Briefcase,
    category: "Current Role",
    title: "Full Stack Developer",
    subtitle: "SS40 NETWORK PRIVATE LIMITED",
    period: "Aug 2026 – Present",
    highlights: [
      "Architecting production SaaS platforms, Fastify REST APIs, and Next.js 16 web applications.",
      "Developing bidirectional AI automation systems with Google Gemini, Groq LLMs, and WhatsApp Cloud APIs.",
      "Enforcing strict RFC 2822 compliance, AES-256-GCM token encryption, and session-based RBAC security.",
      "Mentoring interns, reviewing code quality, and helping them build and launch live software features."
    ],
    accent: "#4452E6",
    bgAccent: "#EEF0FD"
  },
  {
    icon: Layers,
    category: "Projects Snapshot",
    title: "Featured Production Systems",
    subtitle: "Enterprise Platforms & Web Apps",
    period: "2024 – Present",
    highlights: [
      "MailAI: Executive AI triage pipeline delivering priority email alerts directly to WhatsApp.",
      "Ruthra Medicines: Bilingual Siddha & Ayurveda e-commerce with automated PDF billing and courier dispatch.",
      "Global Talent Connect & SS40 Portal: 100-point candidate screening and high-throughput corporate CMS.",
      "Engineered complete web applications with real-time alerts, secure checkout, and easy-to-use dashboards."
    ],
    accent: "#2C3480",
    bgAccent: "#EEF0FD"
  },
  {
    icon: GraduationCap,
    category: "Education",
    title: "Master of Computer Applications",
    subtitle: "Manonmanium Sundaranar University, Tirunelveli",
    period: "2024 – 2026",
    highlights: [
      "Graduated with Distinction in advanced distributed software architectures and database design.",
      "B.Sc in Computer Science: St. John's College, Palayamkottai, Tirunelveli (2021 – 2024) — Graduated with Grade A Distinction.",
      "Strong theoretical and applied foundation in algorithms, system security, and cloud architectures."
    ],
    accent: "#0D9488",
    bgAccent: "#F0FDFA"
  },
  {
    icon: Code2,
    category: "Internships",
    title: "Professional Internships",
    subtitle: "Smackcoders & Dhatchan Academy",
    period: "Nov 2024 – June 2025",
    highlights: [
      "Smackcoders (WordPress Developer Intern): Engineered custom PHP plugins, batch CSV/XML data importers, and MySQL optimizations.",
      "Dhatchan Academy (Web Development Intern): Designed responsive, accessible UI components adhering to production standards.",
      "Gained hands-on experience in cross-functional team sprints, code reviews, and enterprise client requirements."
    ],
    accent: "#D97706",
    bgAccent: "#FFFBEB"
  }
];

const About = memo(function About() {
  return (
    <section id="about" className="py-10 sm:py-14 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="About Me"
          title="Executive"
          highlight="Profile"
          subtitle="A high-level summary of my professional role, production projects, academic credentials, and internships."
        />

        {/* Executive Bio Lead-in Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45 }}
          className="p-5 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5 card-stable"
        >
          <div className="space-y-1.5 max-w-3xl">
            <h3 className="text-base sm:text-lg font-bold text-[#2C3480] tracking-tight flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-0.5 sm:gap-2">
              <span className="text-[#0F172A] sm:text-[#2C3480]">Abraham Samuel T</span>
              <span className="hidden sm:inline text-[#94A3B8] font-normal">—</span>
              <span className="text-[#4452E6] sm:text-[#2C3480] font-semibold text-xs sm:text-lg">
                Full Stack Software Engineer
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Based in <strong className="text-[#0F172A] font-semibold">Tirunelveli, Tamil Nadu</strong> and engineering at <strong className="text-[#0F172A] font-semibold">SS40 NETWORK PRIVATE LIMITED</strong>, I specialize in building high-throughput web portals, event-driven backend services, and purposeful AI pipelines. I focus on building reliable, secure, and production-tested software that solves real business friction for regional and global clients.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-col items-center sm:items-end justify-center gap-2 flex-shrink-0 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-[#EEF0FD] text-[#2C3480] font-semibold border border-[#4452E6]/20">
              MCA Distinction
            </span>
            <span className="px-3 py-1 rounded-full bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]">
              Full Stack @ SS40
            </span>
            <span className="px-3 py-1 rounded-full bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]">
              Tirunelveli, TN
            </span>
          </div>
        </motion.div>

        {/* ── MOBILE VIEW: 3D ROTATING CUBE (< md) ── */}
        <div className="block md:hidden w-full">
          <AboutCube3D cards={ABOUT_CARDS} />
        </div>

        {/* ── DESKTOP VIEW: 2x2 EXECUTIVE GRID (≥ md) ── */}
        <div className="hidden md:grid md:grid-cols-2 gap-4 sm:gap-6">
          {ABOUT_CARDS.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:border-[#4452E6]/35 hover:shadow-md transition-[border-color,box-shadow] duration-200 flex flex-col justify-between space-y-4 group card-stable text-left"
              >
                {/* Card Top: Category, Icon & Status Badge */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                        style={{ backgroundColor: card.bgAccent, color: card.accent }}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block font-semibold">
                          {card.category}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-[#2C3480] leading-tight group-hover:text-[#4452E6] transition-colors">
                          {card.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Organization & Period */}
                  <div className="flex items-center justify-between gap-2 text-xs pt-0.5 border-b border-[#E2E8F0] pb-2.5">
                    <span className="font-semibold text-[#0F172A] truncate">
                      {card.subtitle}
                    </span>
                    <span className="text-[#64748B] font-mono text-[11px] flex-shrink-0">
                      {card.period}
                    </span>
                  </div>

                  {/* Highlights Bullet Matrix */}
                  <div className="space-y-2 pt-1">
                    {card.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#475569] leading-relaxed">
                        <CheckCircle2 size={14} className="text-[#4452E6] mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
  
});

export default About;
