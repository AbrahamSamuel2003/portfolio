import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Instagram, MessageCircle, Mail } from "lucide-react";
import avatarImg from "../../assets/avatar-round.png";

export default function Footer({ onToTop, onNavigate }) {
  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
    { label: "Articles & Works", id: "blogs" }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/abraham-samuel-developer/",
      icon: Linkedin,
      color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/30"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/abr_samuell/",
      icon: Instagram,
      color: "hover:text-[#E4405F] hover:border-[#E4405F]/30"
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/916383813648?text=Hi%20Abraham,%20I%20saw%20your%20portfolio",
      icon: MessageCircle,
      color: "hover:text-emerald-600 hover:border-emerald-300"
    },
    {
      name: "GitHub",
      href: "https://github.com/AbrahamSamuel2003",
      icon: Github,
      color: "hover:text-[#2C3480] hover:border-[#2C3480]/30"
    },
    {
      name: "Email",
      href: "mailto:abrahamsamuel645@gmail.com",
      icon: Mail,
      color: "hover:text-[#4452E6] hover:border-[#4452E6]/30"
    }
  ];

  return (
    <footer className="relative z-10 border-t border-[#E2E8F0] bg-white pt-14 pb-24 sm:pb-8 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Top Tier: Brand, Navigation & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Role (6 cols) */}
          <div className="md:col-span-6 space-y-3 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-10 h-10 rounded-full ring-2 ring-[#4452E6]/25 overflow-hidden shadow-md shadow-[#2C3480]/15 flex-shrink-0 bg-slate-100">
                <img
                  src={avatarImg}
                  alt="Abraham Samuel"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0F172A] tracking-tight">
                  Abraham Samuel T
                </h3>
                <p className="text-xs text-[#64748B]">
                  Full Stack Developer | SS40 NETWORK PRIVATE LIMITED
                </p>
              </div>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed max-w-md pt-1 mx-auto md:mx-0">
              Engineering high-throughput production web applications, event-driven backend services, and AI automation systems. Based in Tirunelveli, Tamil Nadu.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-2 text-center md:text-left flex flex-col items-center md:items-start">
            <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider block font-semibold">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-y-1.5 gap-x-6 text-xs text-center md:text-left">
              {quickLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate && onNavigate(item.id)}
                  className={`text-center md:text-left hover:text-[#2C3480] transition-colors cursor-pointer py-1 ${
                    item.id === "blogs" ? "text-[#4452E6] font-semibold" : "text-[#64748B]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect Channels (3 cols) */}
          <div className="md:col-span-3 space-y-2 text-center md:text-left flex flex-col items-center md:items-start">
            <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider block font-semibold">
              Direct Connect
            </span>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    title={item.name}
                    className={`w-9 h-9 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-center text-[#64748B] transition-[color,border-color,background-color] duration-200 cursor-pointer shadow-2xs ${item.color} hover:bg-white`}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Back-to-Top */}
        <div className="pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-[#64748B] font-mono text-center sm:text-left">
            <span>© 2026 Abraham Samuel T. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <button
              onClick={() => onNavigate && onNavigate("blogs")}
              className="text-[#2C3480] hover:text-[#4452E6] font-semibold transition-colors cursor-pointer"
            >
              Technical Publications &amp; Works
            </button>
          </div>

          <motion.button
            onClick={onToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-xs font-semibold text-[#2C3480] hover:text-[#4452E6] hover:border-[#4452E6]/30 hover:bg-[#EEF0FD] transition-[background-color,border-color,color] duration-200 cursor-pointer shadow-2xs"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}
