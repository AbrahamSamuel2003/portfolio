import { useState, useMemo, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft, ChevronRight, ExternalLink, Code2,
  Bot, Layers, Monitor, Zap, CheckCircle2, X, Download, Smartphone
} from "lucide-react";

export default function ProjectCarousel({ projects }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const categories = ["All", "Full Stack & SaaS", "AI / Automation", "Mobile & Cloud", "Applications", "Plugins & WordPress"];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const current = scrollRef.current;
    if (current) {
      current.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (current) current.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [filteredProjects]);

  // Lock background scroll without horizontal layout shift and listen for Escape key
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalPaddingRight = document.body.style.paddingRight;
    const originalOverflow = document.body.style.overflow;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.paddingRight = originalPaddingRight;
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const getCategoryIcon = (category) => {
    if (category.includes("AI")) return <Bot size={15} className="text-[#4452E6]" />;
    if (category.includes("SaaS") || category.includes("Full Stack")) return <Layers size={15} className="text-[#2C3480]" />;
    if (category.includes("Plugin")) return <Zap size={15} className="text-indigo-600" />;
    if (category.includes("Mobile") || category.includes("Android") || category.includes("App")) return <Smartphone size={15} className="text-emerald-600" />;
    return <Monitor size={15} className="text-sky-600" />;
  };

  return (
    <div className="w-full space-y-6">
      {/* Category Filter Pills & Directional Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
          {categories.map((cat) => {
            const count = cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length;
            if (count === 0) return null;

            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-[background-color,color,border-color,box-shadow] duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#2C3480] text-white shadow-xs"
                    : "bg-white text-[#64748B] border border-[#E2E8F0] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                }`}
              >
                <span>{cat}</span>
                <span className={`ml-1.5 text-[10px] ${activeCategory === cat ? "text-blue-200" : "text-[#475569] font-medium"}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Scroll Controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs font-mono text-[#475569] font-medium">
            {filteredProjects.length} {filteredProjects.length === 1 ? "Project" : "Projects"}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="w-8 h-8 rounded-xl border border-[#E2E8F0] bg-white text-[#2C3480] hover:text-[#4452E6] hover:bg-[#EEF0FD] hover:border-[#4452E6]/30 disabled:opacity-35 disabled:pointer-events-none transition-[background-color,border-color,color] duration-200 flex items-center justify-center cursor-pointer shadow-xs"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="w-8 h-8 rounded-xl border border-[#E2E8F0] bg-white text-[#2C3480] hover:text-[#4452E6] hover:bg-[#EEF0FD] hover:border-[#4452E6]/30 disabled:opacity-35 disabled:pointer-events-none transition-[background-color,border-color,color] duration-200 flex items-center justify-center cursor-pointer shadow-xs"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Track */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 pt-1 px-1 scroll-smooth snap-x snap-mandatory select-none project-scroll no-scrollbar"
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="w-[300px] sm:w-[340px] max-w-[350px] flex-shrink-0 flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:border-[#4452E6]/40 hover:shadow-md transition-[border-color,box-shadow] duration-200 snap-start text-left group cursor-pointer card-stable"
          >
            <div className="space-y-3">
              {/* Card Top Preview Banner */}
              {project.image && (
                <div className="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 group-hover:border-[#4452E6]/30 transition-colors">
                  <img
                    src={project.image}
                    alt={`${project.title} preview screenshot`}
                    width="340"
                    height="160"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent pointer-events-none" />
                </div>
              )}

              {/* Category & Highlight */}
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#EEF0FD] border border-[#4452E6]/20 text-[11px] font-semibold text-[#2C3480]">
                  {getCategoryIcon(project.category)}
                  <span className="truncate max-w-[130px]">{project.category}</span>
                </div>

                {project.highlight && (
                  <span className="text-[10px] font-mono text-[#334155] font-medium uppercase tracking-wider px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E2E8F0] truncate">
                    {project.highlight}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5">
                <h3 className="text-lg font-serif font-semibold text-[#2C3480] tracking-tight group-hover:text-[#4452E6] transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                  {project.shortDesc}
                </p>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0]"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#334155] font-semibold bg-[#F1F5F9] rounded border border-[#E2E8F0]">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Actions & Click Hint */}
            <div className="pt-4 mt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Open ${project.title} live system`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2C3480] text-white text-xs font-semibold hover:bg-[#4452E6] transition-colors duration-200 shadow-xs cursor-pointer"
                  >
                    <span>Open Live</span>
                    <ExternalLink size={12} />
                  </a>
                )}

                {project.apk && (
                  <a
                    href={project.apk}
                    download
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Download ${project.title} APK`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors duration-200 shadow-xs cursor-pointer"
                  >
                    <Download size={12} />
                    <span>APK</span>
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E2E8F0] bg-white text-[#0F172A] text-xs font-semibold hover:bg-[#F8FAFC] hover:border-[#CBD5E1] transition-colors duration-200 shadow-2xs cursor-pointer"
                  >
                    <Code2 size={13} />
                    <span>Code</span>
                  </a>
                )}
              </div>

              <span className="text-[11px] font-mono text-[#4452E6] font-medium group-hover:underline">
                Overview &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Project Explanation Overlay Modal (Mounted via React Portal to document.body) */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                key="project-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-hidden cursor-pointer bg-[#0F172A]/50 backdrop-blur-sm"
                style={{ willChange: "opacity" }}
              >
                {/* Modal Dialog Surface (Stops propagation so clicking inside does not dismiss) */}
                <motion.div
                  key="project-modal-surface"
                  initial={{ opacity: 0, scale: 0.95, y: 14 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 10 }}
                  transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.7 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative z-10 w-full max-w-xl max-h-[90vh] sm:max-h-[85vh] bg-white rounded-3xl border border-[#E2E8F0] shadow-2xl flex flex-col overflow-hidden text-left cursor-default card-stable transform-gpu"
                  style={{ willChange: "transform, opacity" }}
                >
                  {/* Pinned Top Header: Category, Title, Action CTAs (Visit Live Application at top!) & Close button */}
                  <div className="p-5 sm:p-7 pb-4 sm:pb-5 border-b border-[#E2E8F0] bg-white flex flex-col gap-4 flex-shrink-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1.5 min-w-0">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#EEF0FD] border border-[#4452E6]/20 text-xs font-semibold text-[#2C3480]">
                          {getCategoryIcon(selectedProject.category)}
                          <span className="truncate">{selectedProject.category}</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C3480] tracking-tight leading-tight">
                          {selectedProject.title}
                        </h3>
                      </div>

                      <button
                        onClick={() => setSelectedProject(null)}
                        aria-label="Close project details"
                        className="p-2 rounded-xl text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] border border-[#E2E8F0] transition-colors cursor-pointer flex-shrink-0"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    {/* TOP ACTION BAR: Visit Live Application / Download APK */}
                    {(selectedProject.live || selectedProject.github || selectedProject.apk) && (
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {selectedProject.live && (
                          <a
                            href={selectedProject.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2C3480] text-white text-xs sm:text-sm font-semibold hover:bg-[#4452E6] transition-colors duration-200 shadow-xs cursor-pointer active:scale-98"
                          >
                            <span>Visit Live Application</span>
                            <ExternalLink size={14} />
                          </a>
                        )}

                        {selectedProject.apk && (
                          <a
                            href={selectedProject.apk}
                            download
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-colors duration-200 shadow-xs cursor-pointer active:scale-98"
                          >
                            <Download size={14} />
                            <span>Download Android APK (20 MB)</span>
                          </a>
                        )}

                        {selectedProject.github && (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] text-xs sm:text-sm font-semibold hover:bg-[#F8FAFC] hover:border-[#CBD5E1] transition-colors duration-200 shadow-2xs cursor-pointer"
                          >
                            <Code2 size={15} />
                            <span>View Code</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Scrollable Body: Content with clean slim custom scrollbar */}
                  <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 modal-scrollbar">
                    {/* Full Preview Banner */}
                    {selectedProject.image && (
                      <div className="relative w-full rounded-2xl overflow-hidden bg-slate-100 border border-[#E2E8F0] shadow-sm">
                        <img
                          src={selectedProject.image}
                          alt={`${selectedProject.title} full UI preview`}
                          width="700"
                          height="350"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-auto object-cover object-top"
                        />
                      </div>
                    )}

                    {/* What It Is / Plain English Summary */}
                    <div className="space-y-1.5">
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] font-semibold">
                        What It Is
                      </h4>
                      <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                        {selectedProject.overview || selectedProject.shortDesc}
                      </p>
                    </div>

                    {/* Problem Solved */}
                    {selectedProject.problemSolved && (
                      <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                        <h4 className="text-xs font-bold text-[#2C3480]">
                          Problem Solved &amp; Real-World Utility
                        </h4>
                        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                          {selectedProject.problemSolved}
                        </p>
                      </div>
                    )}

                    {/* Key Features */}
                    {selectedProject.keyFeatures && (
                      <div className="space-y-2.5">
                        <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] font-semibold">
                          Key Features
                        </h4>
                        <div className="space-y-2">
                          {selectedProject.keyFeatures.map((feat, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
                              <CheckCircle2 size={16} className="text-[#4452E6] mt-0.5 flex-shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] font-semibold">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Clean Footer with Close Button */}
                  <div className="p-4 sm:px-7 sm:py-3.5 border-t border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between gap-3 flex-shrink-0">
                    <span className="text-xs text-[#64748B] font-mono hidden sm:inline">
                      Press ESC or click outside to dismiss
                    </span>
                    <div className="flex items-center gap-2 ml-auto">
                      {selectedProject.live && (
                        <a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2C3480] text-white text-xs font-semibold hover:bg-[#4452E6] transition-all"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                      {selectedProject.apk && (
                        <a
                          href={selectedProject.apk}
                          download
                          className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-all"
                        >
                          <Download size={12} />
                          <span>APK</span>
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="px-4 py-2 rounded-xl border border-[#E2E8F0] bg-white text-xs font-medium text-[#334155] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors cursor-pointer shadow-2xs"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
