import { useState, useEffect, useCallback } from "react";
import { motion, useScroll } from "framer-motion";

// Modular Component Architecture
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import SelectedWork from "./components/sections/SelectedWork.jsx";
import Experience from "./components/sections/Experience.jsx";
import Skills from "./components/sections/Skills.jsx";
import Certifications from "./components/sections/Certifications.jsx";
import Contact from "./components/sections/Contact.jsx";

const SECTION_IDS = [
  "home",
  "about",
  "projects",
  "experience",
  "skills",
  "certifications",
  "contact"
];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();

  // Active section spy on scroll (Throttled with requestAnimationFrame to prevent re-render flicker)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const current = SECTION_IDS.find((id) => {
            const el = document.getElementById(id);
            if (!el) return false;
            const rect = el.getBoundingClientRect();
            return rect.top <= 200 && rect.bottom >= 100;
          });
          if (current) {
            setActiveSection((prev) => (prev !== current ? current : prev));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = useCallback((id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  }, []);

  const handleToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] relative overflow-x-hidden selection:bg-[#4452E6]/15 selection:text-[#2C3480]">

      {/* GLOBAL LIGHT MODE AMBIENT LIGHTING & SUBTLE ARCHITECTURAL GRID (GPU isolated to prevent scroll flicker) */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ transform: "translateZ(0)", willChange: "transform" }}>
        {/* Azure Ethereal Top-Left Glow */}
        <div className="absolute -top-32 left-1/4 w-[850px] h-[850px] bg-[#4452E6]/[0.045] rounded-full blur-[120px] transform-gpu" />
        {/* Cobalt Ambient Right Glow */}
        <div className="absolute top-1/3 right-0 w-[650px] h-[650px] bg-[#2C3480]/[0.035] rounded-full blur-[120px] transform-gpu" />
        {/* Soft Blue Bottom Accent */}
        <div className="absolute bottom-1/4 left-0 w-[550px] h-[550px] bg-[#4452E6]/[0.03] rounded-full blur-[120px] transform-gpu" />
        {/* Technical Sub-grid */}
        <div className="absolute inset-0 grid-bg opacity-60" />
      </div>

      {/* TOP SCROLL PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#2C3480] via-[#4452E6] to-[#60A5FA] origin-left z-[100]"
        style={{ scaleX: scrollYProgress, willChange: "transform" }}
      />

      {/* 1. NAVBAR */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* 2. HERO + 3D ARCHITECTURE VISUAL */}
      <Hero onNavigate={handleNavigate} />

      {/* 3. ABOUT ME (IMMEDIATELY NEXT TO HERO) */}
      <About />

      {/* 4. FEATURED PROJECTS CAROUSEL */}
      <SelectedWork />

      {/* 5. EXPERIENCE & CAREER TIMELINE */}
      <Experience />

      {/* 6. TECHNICAL ARSENAL (SKILLS BLUEPRINT) */}
      <Skills />

      {/* 7. CREDENTIALS & CERTIFICATIONS */}
      <Certifications />

      {/* 8. CONTACT HUB */}
      <Contact />

      {/* 9. FOOTER */}
      <Footer onToTop={handleToTop} onNavigate={handleNavigate} />

    </div>
  );
}