import { useState, useMemo, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft, ChevronRight, ExternalLink, Code2,
  Bot, Layers, Monitor, Zap, CheckCircle2, X
} from "lucide-react";

export default function ProjectCarousel({ projects }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollPercent, setScrollPercent] = useState(0);

  // Mouse drag-to-scroll states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const categories = ["All", "Full Stack & SaaS", "AI / Automation", "Applications", "Plugins & WordPress"];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
    const maxScroll = scrollWidth - clientWidth;
    setScrollPercent(maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0);
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

  // Seamless horizontal scroll on mouse wheel
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // Native trackpad horizontal scroll
      if (e.shiftKey) return; // Shift + Wheel native

      if (Math.abs(e.deltaY) > 0) {
        const canScroll =
          (e.deltaY > 0 && el.scrollLeft < el.scrollWidth - el.clientWidth - 4) ||
          (e.deltaY < 0 && el.scrollLeft > 4);

        if (canScroll) {
          e.preventDefault();
          el.scrollBy({ left: e.deltaY * 1.25, behavior: "auto" });
        }
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
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

  // Mouse Drag-to-Scroll Handlers
  const handleMouseDown = (e) => {
    if (e.button !== 0 || !scrollRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setStartScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    scrollRef.current.scrollLeft = startScrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = Math.max(340, scrollRef.current.clientWidth * 0.75);
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
    return <Monitor size={15} className="text-sky-600" />;
  };

  return (
    <div className="w-full space-y-5">
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
                <span className={`ml-1.5 text-[10px] ${activeCategory === cat ? "text-blue-200" : "text-[#94A3B8]"}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Scroll Controls (Left & Right Full Traversal) */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <span className="text-xs font-mono text-[#64748B]">
            {filteredProjects.length} {filteredProjects.length === 1 ? "Project" : "Projects"}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left fully"
              title="Scroll left"
              className="w-9 h-9 rounded-xl border border-[#E2E8F0] bg-white text-[#2C3480] hover:text-[#4452E6] hover:bg-[#EEF0FD] hover:border-[#4452E6]/30 disabled:opacity-35 disabled:pointer-events-none transition-[background-color,border-color,color] duration-200 flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right fully"
              title="Scroll right"
              className="w-9 h-9 rounded-xl border border-[#E2E8F0] bg-white text-[#2C3480] hover:text-[#4452E6] hover:bg-[#EEF0FD] hover:border-[#4452E6]/30 disabled:opacity-35 disabled:pointer-events-none transition-[background-color,border-color,color] duration-200 flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Track with Full Left/Right Drag, Wheel & Touch Support */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={`flex gap-5 overflow-x-auto pb-4 pt-1 px-1 select-none project-scroll no-scrollbar ${
          isDragging ? "cursor-grabbing scroll-auto" : "cursor-grab scroll-smooth"
        }`}
        style={{
          WebkitOverflowScrolling: "touch",
          overscrollBehaviorX: "contain"
        }}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => {
              if (!hasDragged) {
                setSelectedProject(project);
              }
            }}
            className="w-[300px] sm:w-[340px] max-w-[350px] flex-shrink-0 flex flex-col justify-between p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:border-[#4452E6]/40 hover:shadow-md transition-[border-color,box-shadow] duration-200 snap-start text-left group cursor-pointer card-stable"
          >
            <div className="space-y-3">
              {/* Category & Highlight */}
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#EEF0FD] border border-[#4452E6]/20 text-[11px] font-semibold text-[#2C3480]">
                  {getCategoryIcon(project.category)}
                  <span className="truncate max-w-[130px]">{project.category}</span>
                </div>

                {project.highlight && (
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E2E8F0] truncate">
                    {project.highlight}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-[#2C3480] tracking-tight group-hover:text-[#4452E6] transition-colors line-clamp-1">
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
                  <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#94A3B8]">
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2C3480] text-white text-xs font-semibold hover:bg-[#4452E6] transition-colors duration-200 shadow-xs cursor-pointer"
                  >
                    <span>Open Live</span>
                    <ExternalLink size={12} />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
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

        {/* End Clearance Spacer so the final card is 100% visible and never clipped */}
        <div className="w-8 sm:w-14 flex-shrink-0" aria-hidden="true" />
      </div>

      {/* Horizontal Scroll Progress Track & Directional Hint */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1 px-1">
        <span className="text-[11px] font-mono text-[#64748B] flex items-center gap-1.5">
          <span>← Drag, swipe, or use arrows to scroll all {filteredProjects.length} projects →</span>
        </span>

        {/* Dynamic Progress Indicator Bar */}
        <div className="w-36 sm:w-48 h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden flex-shrink-0">
          <div
            className="h-full bg-gradient-to-r from-[#2C3480] to-[#4452E6] rounded-full transition-all duration-150"
            style={{ width: `${Math.max(16, scrollPercent)}%` }}
          />
        </div>
      </div>

      {/* Project Explanation Overlay Modal (Mounted via React Portal to document.body) */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <div
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-hidden cursor-pointer"
              >
                {/* Frosted Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-[#0F172A]/50 backdrop-blur-sm pointer-events-none"
                />

                {/* Modal Dialog Surface (Stops propagation so clicking inside does not dismiss) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 12 }}
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative z-10 w-full max-w-xl max-h-[90vh] sm:max-h-[85vh] bg-white rounded-3xl border border-[#E2E8F0] shadow-2xl flex flex-col overflow-hidden text-left cursor-default card-stable"
                >
                  {/* Pinned Top Header: Category, Title, Action CTAs (Visit Live Application at top!) & Close button */}
                  <div className="p-5 sm:p-7 pb-4 sm:pb-5 border-b border-[#E2E8F0] bg-white flex flex-col gap-4 flex-shrink-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1.5 min-w-0">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#EEF0FD] border border-[#4452E6]/20 text-xs font-semibold text-[#2C3480]">
                          {getCategoryIcon(selectedProject.category)}
                          <span className="truncate">{selectedProject.category}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#2C3480] tracking-tight leading-tight">
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

                    {/* TOP ACTION BAR: Visit Live Application (prominently at top!) */}
                    {(selectedProject.live || selectedProject.github) && (
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
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="px-4 py-2 rounded-xl border border-[#E2E8F0] bg-white text-xs font-medium text-[#334155] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors cursor-pointer shadow-2xs"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
