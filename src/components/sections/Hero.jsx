import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Mail, Download } from "lucide-react";
import HeroAvatar from "../ui/HeroAvatar.jsx";
import Magnetic from "../ui/Magnetic.jsx";

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
    <span className="text-xs xs:text-sm sm:text-xl lg:text-2xl font-bold text-[#2C3480] inline-block">
      {displayText}
    </span>
  );
});

export default function Hero({ onNavigate }) {
  return (
    <section id="home" className="relative flex items-center pt-14 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-6 z-10">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-[1fr_auto] lg:grid-cols-[1.05fr_0.95fr] xl:grid-cols-[1fr_1fr] gap-x-3 gap-y-3 sm:gap-x-6 sm:gap-y-4 lg:gap-x-12 lg:gap-y-5 items-center">
        
        {/* 1. Header Content Block (Col 1 on mobile, Col 1 Row 1 on desktop) */}
        <div className="col-span-1 min-w-0 space-y-2 sm:space-y-3 lg:space-y-3.5 text-left flex flex-col items-start">
          {/* Welcome Badge with smooth entrance */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
            className="flex flex-wrap items-center justify-start gap-2"
          >
            <div className="inline-flex items-center px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-[#4452E6]/25 bg-[#EEF0FD] text-[#4452E6] font-mono text-[10px] sm:text-xs font-semibold tracking-wider uppercase shadow-xs">
              <span>Welcome to My Portfolio</span>
            </div>
          </motion.div>

          {/* Main Name & Title with smooth entrance */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1], delay: 0.22 }}
            className="space-y-1 sm:space-y-1.5 min-w-0 w-full"
          >
            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-[#0F172A] leading-[1.08]">
              Abraham <br className="inline" />
              <span className="gradient-text italic font-serif">Samuel T</span>
            </h1>

            {/* Dynamic Typewriter Heading (Zero layout shift / flicker) */}
            <div className="flex items-center justify-start gap-1 sm:gap-2 min-h-[20px] sm:min-h-[32px]">
              <span className="text-[#64748B] text-xs xs:text-sm sm:text-xl lg:text-2xl font-normal font-serif italic">I am a</span>
              <TypewriterRole />
              <span className="inline-block w-[2px] sm:w-[2.5px] h-[1.1em] sm:h-[1.15em] bg-[#4452E6] rounded-full translate-y-[1px]" />
            </div>

            {/* Specialization Tags Row (Zero dots) */}
            <div className="flex flex-wrap items-center justify-start gap-1 sm:gap-1.5 pt-0.5 font-mono text-[9px] xs:text-[10px] sm:text-xs font-semibold text-[#4452E6]">
              <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#EEF0FD] border border-[#4452E6]/20 whitespace-nowrap">Full Stack</span>
              <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#EEF0FD] border border-[#4452E6]/20 whitespace-nowrap">AI Systems</span>
              <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#EEF0FD] border border-[#4452E6]/20 whitespace-nowrap">Enterprise Web</span>
            </div>
          </motion.div>
        </div>

        {/* 2. Hero Avatar Card (Col 2 on mobile, Col 2 Row 1..4 on desktop) */}
        <div className="col-span-1 lg:col-span-1 lg:row-span-4 flex items-center justify-end lg:justify-center self-center pt-0">
          <HeroAvatar />
        </div>

        {/* 3. Bio Paragraph with smooth entrance */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1], delay: 0.4 }}
          className="col-span-2 lg:col-span-1 text-xs sm:text-base text-[#475569] font-normal leading-relaxed max-w-xl text-left"
        >
          Designing and building production web applications, scalable backend APIs, and AI automation systems at <strong className="text-[#0F172A] font-semibold">SS40 NETWORK PRIVATE LIMITED</strong>, based in <strong className="text-[#0F172A] font-semibold">Tirunelveli</strong>.
        </motion.p>

        {/* 4. Action CTAs with smooth entrance */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1], delay: 0.52 }}
          className="col-span-2 lg:col-span-1 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-start gap-2 sm:gap-3 pt-0.5 w-full"
        >
          <Magnetic strength={0.32}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              onClick={() => onNavigate("projects")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#2C3480] text-white font-bold text-xs sm:text-sm hover:bg-[#4452E6] transition-[background-color,box-shadow] duration-200 shadow-md shadow-[#2C3480]/20 cursor-pointer min-h-[44px]"
            >
              <span>Explore Projects</span>
              <ChevronRight size={15} />
            </motion.button>
          </Magnetic>

          <Magnetic strength={0.32}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              onClick={() => onNavigate("contact")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] font-medium text-xs sm:text-sm hover:bg-[#F8FAFC] hover:border-[#CBD5E1] transition-[background-color,border-color,box-shadow] duration-200 cursor-pointer shadow-xs min-h-[44px]"
            >
              <span>Contact Me</span>
              <Mail size={15} />
            </motion.button>
          </Magnetic>

          <a
            href="/Abraham_Samuel_T.pdf"
            download
            className="hidden sm:inline-flex items-center justify-center gap-1.5 text-xs text-[#64748B] hover:text-[#2C3480] transition-colors py-2 px-2 font-medium min-h-[44px]"
          >
            <Download size={13} />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* 5. Core Technical Highlights Bar with smooth entrance */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1], delay: 0.64 }}
          className="col-span-2 lg:col-span-1 pt-2.5 sm:pt-3 border-t border-[#E2E8F0] grid grid-cols-3 sm:flex flex-wrap items-center justify-start gap-1.5 sm:gap-8 text-xs text-[#64748B] w-full"
        >
          <div className="p-2 sm:p-0 rounded-xl bg-white sm:bg-transparent border sm:border-0 border-[#E2E8F0] shadow-2xs sm:shadow-none flex flex-col sm:flex-row items-center gap-0.5 sm:gap-1.5 text-center sm:text-left">
            <strong className="text-[#0F172A] font-semibold text-xs">10+</strong>
            <span className="text-[9px] xs:text-[10px] sm:text-xs">Projects</span>
          </div>
          <div className="p-2 sm:p-0 rounded-xl bg-white sm:bg-transparent border sm:border-0 border-[#E2E8F0] shadow-2xs sm:shadow-none flex flex-col sm:flex-row items-center gap-0.5 sm:gap-1.5 text-center sm:text-left">
            <strong className="text-[#0F172A] font-semibold text-xs">Full Stack</strong>
            <span className="text-[9px] xs:text-[10px] sm:text-xs">@ SS40</span>
          </div>
          <div className="p-2 sm:p-0 rounded-xl bg-white sm:bg-transparent border sm:border-0 border-[#E2E8F0] shadow-2xs sm:shadow-none flex flex-col sm:flex-row items-center gap-0.5 sm:gap-1.5 text-center sm:text-left">
            <strong className="text-[#0F172A] font-semibold text-xs">Enterprise</strong>
            <span className="text-[9px] xs:text-[10px] sm:text-xs">Architect</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
