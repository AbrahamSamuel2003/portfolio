import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Download, Home, User, FolderGit2, Briefcase, Mail
} from "lucide-react";
import avatarImg from "../../assets/avatar-round.png";

const DESKTOP_NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" }
];

const MOBILE_NAV_ITEMS = [
  { label: "Home", id: "home", icon: Home },
  { label: "About", id: "about", icon: User },
  { label: "Projects", id: "projects", icon: FolderGit2 },
  { label: "Experience", id: "experience", icon: Briefcase },
  { label: "Contact", id: "contact", icon: Mail }
];

export default function Navbar({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── 1. DESKTOP FLOATING NAVBAR (Hidden on mobile) ── */}
      <header className="hidden md:flex fixed top-3 sm:top-4 left-0 right-0 z-50 justify-center px-4 transition-all duration-300 pointer-events-none">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-5xl pointer-events-auto"
        >
          <nav
            className={`rounded-2xl transition-all duration-300 flex items-center justify-between border ${
              isScrolled
                ? "py-2.5 px-5 sm:px-6 bg-white/95 backdrop-blur-xl border-[#E2E8F0] shadow-md shadow-[#2C3480]/5"
                : "py-2.5 px-5 sm:px-6 bg-white/85 backdrop-blur-md border-[#E2E8F0] shadow-xs"
            }`}
          >
            {/* Brand Logo with Avatar Image */}
            <div
              onClick={() => onNavigate("home")}
              className="flex items-center gap-3 cursor-pointer group select-none"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-[#4452E6]/25 overflow-hidden shadow-md shadow-[#2C3480]/15 group-hover:ring-[#4452E6] group-hover:scale-105 transition-all flex-shrink-0 bg-slate-100">
                <img
                  src={avatarImg}
                  alt="Abraham Samuel"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs tracking-wider uppercase text-[#0F172A] group-hover:text-[#4452E6] transition-colors">
                  ABRAHAM SAMUEL
                </span>
                <span className="text-[10px] text-[#64748B] font-medium leading-none">
                  Full Stack Developer
                </span>
              </div>
            </div>

            {/* Desktop Nav Items */}
            <div className="flex items-center gap-1">
              {DESKTOP_NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#EEF0FD] text-[#2C3480] font-semibold border border-[#4452E6]/25"
                        : "text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Resume Button */}
            <motion.a
              href="/Abraham_Samuel_T.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2C3480] text-white text-xs font-semibold hover:bg-[#4452E6] transition-all shadow-sm shadow-[#2C3480]/20 cursor-pointer"
            >
              <Download size={13} />
              <span>Resume</span>
            </motion.a>
          </nav>
        </motion.div>
      </header>

      {/* ── 2. MOBILE TOP HEADER BAR (Minimal & Native) ── */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-b border-[#E2E8F0] px-4 py-2.5 flex items-center justify-between shadow-2xs">
        <div
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <div className="w-7 h-7 rounded-full ring-2 ring-[#4452E6]/25 overflow-hidden flex-shrink-0">
            <img
              src={avatarImg}
              alt="Abraham Samuel"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xs tracking-wider uppercase text-[#0F172A]">
              ABRAHAM SAMUEL
            </span>
            <span className="text-[9px] text-[#64748B] font-medium leading-none">
              Full Stack Developer
            </span>
          </div>
        </div>

        <a
          href="/Abraham_Samuel_T.pdf"
          download
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#2C3480] text-white text-[11px] font-semibold hover:bg-[#4452E6] transition-all shadow-xs cursor-pointer active:scale-95"
        >
          <Download size={12} />
          <span>Resume</span>
        </a>
      </header>

      {/* ── 3. MOBILE BOTTOM NAVIGATION TAB BAR (App-Native UI from Screenshot) ── */}
      <nav
        aria-label="Mobile Navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-[#E2E8F0] shadow-[0_-4px_20px_rgba(44,52,128,0.06)] px-2 pt-1 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
      >
        <div className="flex items-center justify-around max-w-md mx-auto">
          {MOBILE_NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;

            return (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.92 }}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-2xl transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#EEF0FD] text-[#2C3480]"
                    : "text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                <div className="relative">
                  <Icon size={19} strokeWidth={isActive ? 2.3 : 1.7} />
                </div>
                <span
                  className={`text-[10px] mt-0.5 tracking-tight ${
                    isActive ? "font-bold text-[#2C3480]" : "font-medium"
                  }`}
                >
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
