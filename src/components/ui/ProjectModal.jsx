import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink, Code2, Download, CheckCircle2, X,
  Bot, Layers, Monitor, Zap, Smartphone
} from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  // Prevent background scrolling and attach ESC listener
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
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
  }, [project, onClose]);

  const getCategoryIcon = (category) => {
    if (!category) return <Monitor size={15} className="text-sky-600" />;
    if (category.includes("AI")) return <Bot size={15} className="text-[#4452E6]" />;
    if (category.includes("SaaS") || category.includes("Full Stack")) return <Layers size={15} className="text-[#2C3480]" />;
    if (category.includes("Plugin")) return <Zap size={15} className="text-indigo-600" />;
    if (category.includes("Mobile") || category.includes("Android") || category.includes("App")) return <Smartphone size={15} className="text-emerald-600" />;
    return <Monitor size={15} className="text-sky-600" />;
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-hidden cursor-pointer bg-[#0F172A]/55 backdrop-blur-sm"
          style={{ willChange: "opacity" }}
        >
          {/* Modal Surface */}
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
            {/* Header */}
            <div className="p-5 sm:p-7 pb-4 sm:pb-5 border-b border-[#E2E8F0] bg-white flex flex-col gap-4 flex-shrink-0">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1.5 min-w-0">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#EEF0FD] border border-[#4452E6]/20 text-xs font-semibold text-[#2C3480]">
                    {getCategoryIcon(project.category)}
                    <span className="truncate">{project.category}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C3480] tracking-tight leading-tight">
                    {project.title}
                  </h3>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close project details"
                  className="p-2 rounded-xl text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] border border-[#E2E8F0] transition-colors cursor-pointer flex-shrink-0"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Action Bar */}
              {(project.live || project.github || project.apk) && (
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2C3480] text-white text-xs sm:text-sm font-semibold hover:bg-[#4452E6] transition-colors duration-200 shadow-xs cursor-pointer active:scale-98"
                    >
                      <span>Visit Live Application</span>
                      <ExternalLink size={14} />
                    </a>
                  )}

                  {project.apk && (
                    <a
                      href={project.apk}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-colors duration-200 shadow-xs cursor-pointer active:scale-98"
                    >
                      <Download size={14} />
                      <span>Download Android APK (20 MB)</span>
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
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

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 modal-scrollbar">
              {project.image && (
                <div className="relative w-full rounded-2xl overflow-hidden bg-slate-100 border border-[#E2E8F0] shadow-sm">
                  <img
                    src={project.image}
                    alt={`${project.title} full UI preview`}
                    width="700"
                    height="350"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
              )}

              <div className="space-y-1.5">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] font-semibold">
                  What It Is
                </h4>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  {project.overview || project.shortDesc}
                </p>
              </div>

              {project.problemSolved && (
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                  <h4 className="text-xs font-bold text-[#2C3480]">
                    Problem Solved &amp; Real-World Utility
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>
              )}

              {project.keyFeatures && (
                <div className="space-y-2.5">
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] font-semibold">
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {project.keyFeatures.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
                        <CheckCircle2 size={16} className="text-[#4452E6] mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.technologies && (
                <div className="space-y-2">
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] font-semibold">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 sm:px-7 sm:py-3.5 border-t border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between gap-3 flex-shrink-0">
              <span className="text-xs text-[#64748B] font-mono hidden sm:inline">
                Press ESC or click outside to dismiss
              </span>
              <button
                onClick={onClose}
                className="ml-auto px-4 py-2 rounded-xl border border-[#E2E8F0] bg-white text-xs font-medium text-[#334155] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors cursor-pointer shadow-2xs"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
