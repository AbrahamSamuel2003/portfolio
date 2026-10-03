import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Bot, Layers, Monitor, Zap, Lock, ArrowUpRight } from "lucide-react";

export default function CardSpread({ projects }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCardIdx, setSelectedCardIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const filterCategories = ["All", "AI / Automation", "Full Stack & SaaS", "Applications", "Plugins & WordPress"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const getCategoryIcon = (category) => {
    if (category.includes("AI")) return <Bot size={18} className="text-[#4452E6]" />;
    if (category.includes("SaaS")) return <Layers size={18} className="text-[#2C3480]" />;
    if (category.includes("Plugin")) return <Zap size={18} className="text-indigo-600" />;
    return <Monitor size={18} className="text-sky-600" />;
  };

  const currentProject = filteredProjects[selectedCardIdx] || filteredProjects[0];

  return (
    <div className="w-full space-y-10">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {filterCategories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setActiveFilter(cat);
              setSelectedCardIdx(0);
            }}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
              activeFilter === cat
                ? "bg-[#2C3480] text-white shadow-md shadow-[#2C3480]/20"
                : "bg-white text-[#64748B] border border-[#E2E8F0] hover:text-[#0F172A] hover:bg-[#F8FAFC] shadow-2xs"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Interactive Card Spread Stage */}
      <div
        className="relative min-h-[360px] sm:min-h-[400px] flex items-center justify-center py-8 px-4 select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full max-w-4xl h-[280px] sm:h-[320px] flex items-center justify-center">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const total = filteredProjects.length;
              const isSelected = selectedCardIdx === idx;
              
              // Calculate fanning rotation and offset
              const offsetIndex = idx - Math.floor(total / 2);
              const baseRotation = offsetIndex * (isHovered ? 8 : 4);
              const baseTranslateX = offsetIndex * (isHovered ? 75 : 45);
              const baseTranslateY = Math.abs(offsetIndex) * 12;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{
                    opacity: 1,
                    scale: isSelected ? 1.05 : 0.95,
                    x: isSelected ? 0 : baseTranslateX,
                    y: isSelected ? -20 : baseTranslateY,
                    rotate: isSelected ? 0 : baseRotation,
                    zIndex: isSelected ? 30 : 10 + (total - Math.abs(offsetIndex))
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  onClick={() => setSelectedCardIdx(idx)}
                  className={`absolute w-[260px] sm:w-[300px] p-6 rounded-2xl cursor-pointer border transition-colors duration-300 ${
                    isSelected
                      ? "bg-white border-2 border-[#4452E6] shadow-2xl shadow-[#4452E6]/15"
                      : "bg-white/95 border-[#E2E8F0] hover:border-[#4452E6]/40 shadow-lg shadow-black/5"
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center">
                      {getCategoryIcon(project.category)}
                    </div>
                    <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                      {project.highlight}
                    </span>
                  </div>

                  {/* Card Title & Desc */}
                  <h4 className="font-bold text-[#2C3480] text-base leading-snug mb-2 line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-[#64748B] text-xs leading-relaxed line-clamp-3 mb-4">
                    {project.shortDesc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="text-[10px] px-2 py-0.5 rounded bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Selection Indicator */}
                  <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-[11px]">
                    <span className={isSelected ? "text-[#4452E6] font-semibold" : "text-[#94A3B8]"}>
                      {isSelected ? "Selected Archive" : "Click to view"}
                    </span>
                    {project.live ? (
                      <span className="text-[#4452E6] font-semibold flex items-center gap-0.5">
                        Live <ArrowUpRight size={12} />
                      </span>
                    ) : project.github ? (
                      <span className="text-[#2C3480] font-semibold flex items-center gap-0.5">
                        GitHub <Code2 size={12} />
                      </span>
                    ) : (
                      <span className="text-[#94A3B8] flex items-center gap-0.5">
                        <Lock size={10} /> Private
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Selected Project Full Details Drawer */}
      {currentProject && (
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-md shadow-[#2C3480]/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#4452E6] uppercase tracking-wide">
                {currentProject.category}
              </span>
              <span className="text-[#CBD5E1]">•</span>
              <span className="text-xs text-[#64748B] font-mono">{currentProject.highlight}</span>
            </div>
            <h3 className="text-xl font-bold text-[#2C3480]">{currentProject.title}</h3>
            <p className="text-sm text-[#475569] max-w-xl">{currentProject.shortDesc}</p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {currentProject.live && (
              <a
                href={currentProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#2C3480] text-white text-xs font-bold hover:bg-[#4452E6] transition-all shadow-md shadow-[#2C3480]/15 cursor-pointer"
              >
                <ArrowUpRight size={14} /> Open Live System
              </a>
            )}
            {currentProject.github && (
              <a
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] text-xs font-medium hover:bg-[#F8FAFC] transition-all cursor-pointer shadow-xs"
              >
                <Code2 size={13} /> View Repository
              </a>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
