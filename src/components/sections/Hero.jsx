import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Mail, Download, MapPin } from "lucide-react";
import HeroAvatar from "../ui/HeroAvatar.jsx";

const TARGET_ROLE = "Full Stack Developer";

// Isolated memoized typewriter to completely prevent Hero re-renders and layout flicker
const TypewriterRole = memo(function TypewriterRole() {
  const [displayText, setDisplayText] = useState(TARGET_ROLE);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    if (!isDeleting) {
      if (displayText.length < TARGET_ROLE.length) {
        timer = setTimeout(() => {
          setDisplayText(TARGET_ROLE.slice(0, displayText.length + 1));
        }, 75);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 3000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(TARGET_ROLE.slice(0, displayText.length - 1));
        }, 40);
      } else {
        timer = setTimeout(() => setIsDeleting(false), 500);
      }
    }
    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <span className="text-base sm:text-2xl font-bold text-[#2C3480] inline-block">
      {displayText}
    </span>
  );
});

export default function Hero({ onNavigate }) {
  return (
    <section id="home" className="relative flex items-center pt-14 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-6 z-10">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.05fr_0.95fr] xl:grid-cols-[1fr_1fr] gap-3 sm:gap-8 lg:gap-12 items-center">
        
        {/* Right Animated Avatar Stage (Rendered above fold on mobile, right side on desktop) */}
        <div className="relative w-full flex items-center justify-center order-first lg:order-last pt-0">
          <HeroAvatar />
        </div>

        {/* Left Editorial Content */}
        <div className="space-y-3 sm:space-y-5 text-center lg:text-left order-last lg:order-first flex flex-col items-center lg:items-start">
          {/* Welcome & Location Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <div className="inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-[#4452E6]/25 bg-[#EEF0FD] text-[#4452E6] font-mono text-[11px] sm:text-xs font-semibold tracking-wider uppercase shadow-xs">
              <span>Welcome to My Portfolio</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 font-mono text-[11px] sm:text-xs font-medium shadow-xs">
              <MapPin size={12} className="text-[#4452E6]" />
              <span>Tirunelveli, India</span>
            </div>
          </div>

          {/* Main Name & Title */}
          <div className="space-y-1.5 sm:space-y-2">
            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#0F172A] leading-[1.08]">
              Abraham <br className="hidden sm:inline" />
              <span className="gradient-text italic font-serif">Samuel T</span>
            </h1>

            {/* Dynamic Typewriter Heading (Zero layout shift / flicker) */}
            <div className="flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 min-h-[26px] sm:min-h-[36px]">
              <span className="text-[#64748B] text-sm sm:text-2xl font-normal font-serif italic">I am a</span>
              <TypewriterRole />
              <span className="inline-block w-[2.5px] h-[1.15em] bg-[#4452E6] rounded-full translate-y-[2px]" />
            </div>

            {/* Specialization Tags Row (Zero dots) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 pt-0.5 font-mono text-[11px] sm:text-xs font-semibold text-[#4452E6]">
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#EEF0FD] border border-[#4452E6]/20">Full Stack</span>
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#EEF0FD] border border-[#4452E6]/20">AI Systems</span>
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#EEF0FD] border border-[#4452E6]/20">Enterprise Web</span>
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white border border-slate-200 text-slate-600 font-medium">Tirunelveli, IN</span>
            </div>
          </div>

          {/* Simplified, Professional Bio with Local SEO reinforcement */}
          <p className="text-xs sm:text-base text-[#475569] font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
            Full Stack Developer based in <strong className="text-[#0F172A] font-semibold">Tirunelveli</strong> at <strong className="text-[#0F172A] font-semibold">SS40 NETWORK PRIVATE LIMITED</strong>. I design and build production web applications, scalable backend APIs, and AI automation systems using React, Next.js, Fastify, and modern cloud APIs.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1 w-full">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              onClick={() => onNavigate("projects")}
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-[#2C3480] text-white font-bold text-xs sm:text-sm hover:bg-[#4452E6] transition-[background-color,box-shadow] duration-200 shadow-md shadow-[#2C3480]/20 cursor-pointer min-h-[44px]"
            >
              <span>Explore Projects</span>
              <ChevronRight size={16} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              onClick={() => onNavigate("contact")}
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] font-medium text-xs sm:text-sm hover:bg-[#F8FAFC] hover:border-[#CBD5E1] transition-[background-color,border-color,box-shadow] duration-200 cursor-pointer shadow-xs min-h-[44px]"
            >
              <span>Contact Me</span>
              <Mail size={16} />
            </motion.button>

            <a
              href="/Abraham_Samuel_T.pdf"
              download
              className="inline-flex items-center justify-center gap-1.5 text-xs text-[#64748B] hover:text-[#2C3480] transition-colors py-2 px-2 font-medium min-h-[44px]"
            >
              <Download size={13} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Core Technical Highlights Bar (No dots) */}
          <div className="pt-3 border-t border-[#E2E8F0] grid grid-cols-3 sm:flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-8 text-xs text-[#64748B] w-full">
            <div className="p-2 sm:p-0 rounded-xl bg-white sm:bg-transparent border sm:border-0 border-[#E2E8F0] shadow-2xs sm:shadow-none flex flex-col sm:flex-row items-center gap-0.5 sm:gap-1.5 text-center sm:text-left">
              <strong className="text-[#0F172A] font-semibold text-xs">10+</strong>
              <span className="text-[10px] sm:text-xs">Projects</span>
            </div>
            <div className="p-2 sm:p-0 rounded-xl bg-white sm:bg-transparent border sm:border-0 border-[#E2E8F0] shadow-2xs sm:shadow-none flex flex-col sm:flex-row items-center gap-0.5 sm:gap-1.5 text-center sm:text-left">
              <strong className="text-[#0F172A] font-semibold text-xs">Full Stack</strong>
              <span className="text-[10px] sm:text-xs">@ SS40</span>
            </div>
            <div className="p-2 sm:p-0 rounded-xl bg-white sm:bg-transparent border sm:border-0 border-[#E2E8F0] shadow-2xs sm:shadow-none flex flex-col sm:flex-row items-center gap-0.5 sm:gap-1.5 text-center sm:text-left">
              <strong className="text-[#0F172A] font-semibold text-xs">Enterprise</strong>
              <span className="text-[10px] sm:text-xs">Architect</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
