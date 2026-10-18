import { useState, useEffect, useCallback, lazy, Suspense } from "react";
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

const BlogsPage = lazy(() => import("./components/pages/BlogsPage.jsx"));

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
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== "undefined") {
      const p = window.location.pathname.toLowerCase();
      const h = window.location.hash.toLowerCase();
      if (p.includes("blogs") || h.includes("blogs")) return "blogs";
    }
    return "home";
  });

  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();

  // Listen to browser Back / Forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname.toLowerCase();
      const h = window.location.hash.toLowerCase();
      setCurrentView(p.includes("blogs") || h.includes("blogs") ? "blogs" : "home");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // High-performance asynchronous IntersectionObserver (Only active on home view)
  useEffect(() => {
    if (currentView !== "home") return;

    const observerCallback = (entries) => {
      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (visibleEntries.length > 0) {
        const primary = visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        )[0];
        if (primary && primary.target.id) {
          setActiveSection((prev) => (prev !== primary.target.id ? primary.target.id : prev));
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0, 0.25, 0.5, 0.75]
    });

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentView]);

  const handleNavigate = useCallback((id) => {
    if (id === "blogs") {
      setCurrentView("blogs");
      if (typeof window !== "undefined" && window.location.pathname !== "/blogs") {
        window.history.pushState({ page: "blogs" }, "", "/blogs");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (currentView === "blogs") {
      setCurrentView("home");
      if (typeof window !== "undefined") {
        window.history.pushState({ page: "home" }, "", "/");
      }
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveSection(id);
        }
      }, 60);
      return;
    }

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  }, [currentView]);

  const handleBackToHome = useCallback(() => {
    setCurrentView("home");
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      window.history.pushState({ page: "home" }, "", "/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (currentView === "blogs") {
    return (
      <Suspense fallback={<div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center text-slate-400 font-mono text-xs">Loading Blogs...</div>}>
        <BlogsPage onBackToHome={handleBackToHome} />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] relative overflow-x-hidden selection:bg-[#4452E6]/15 selection:text-[#2C3480]">

      {/* GLOBAL LIGHT MODE AMBIENT LIGHTING & SUBTLE ARCHITECTURAL GRID (Hardware Accelerated) */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{ transform: "translate3d(0,0,0)", willChange: "transform", contain: "paint" }}
      >
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

      {/* 1. NAVBAR (100% Clean & Untouched) */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Semantic Main Landmark for Accessibility */}
      <main id="main-content" tabIndex="-1">
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
      </main>

      {/* 9. FOOTER (Contains Exclusive Links to Blogs) */}
      <Footer onToTop={handleToTop} onNavigate={handleNavigate} />

    </div>
  );
}