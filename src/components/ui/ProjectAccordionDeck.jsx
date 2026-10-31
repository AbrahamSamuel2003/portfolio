import { useState, memo } from "react";
import { Download, Code2, ArrowUpRight } from "lucide-react";
import { allProjects } from "../../data/portfolioData.js";

const ProjectAccordionDeck = memo(function ProjectAccordionDeck({ 
  projects = allProjects, 
  onSelectProject 
}) {
  // Default active project
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="w-full my-4">
      {/* Accordion Deck Container (Executive Light & Frosted Glass Canvas) */}
      <div className="relative flex h-[520px] w-full gap-2 overflow-hidden rounded-3xl p-2 bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm">
        {projects.map((project, idx) => {
          const isActive = activeIdx === idx;
          const indexNumber = String(idx + 1).padStart(2, "0");

          return (
            <div
              key={project.id}
              onMouseEnter={() => setActiveIdx(idx)}
              className={`relative h-full overflow-hidden rounded-2xl cursor-pointer select-none transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] bg-white ${
                isActive
                  ? "flex-[4.8] ring-2 ring-[#4452E6]/30 border border-[#4452E6]/40 shadow-lg z-10"
                  : "flex-1 border border-[#E2E8F0] hover:border-[#4452E6]/40 shadow-2xs opacity-90 hover:opacity-100"
              }`}
            >
              {/* Background Cover Image */}
              <img
                src={project.image}
                alt={project.title}
                width="800"
                height="520"
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out ${
                  isActive ? "scale-105" : "scale-100 grayscale-[25%] opacity-85"
                }`}
              />

              {/* Soft Light Gradient on Inactive Spines for Clear Text Contrast */}
              {!isActive && (
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
              )}

              {/* Top Index Badge */}
              <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                <span
                  className={`px-2.5 py-1 text-xs font-mono font-bold rounded-lg backdrop-blur-md transition-all duration-300 ${
                    isActive
                      ? "bg-[#2C3480] text-white shadow-xs scale-105"
                      : "bg-white/95 text-[#2C3480] border border-[#E2E8F0] shadow-2xs"
                  }`}
                >
                  {indexNumber}
                </span>

                {isActive && project.highlight && (
                  <span className="text-[11px] font-mono text-[#2C3480] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white/90 border border-[#4452E6]/25 shadow-xs backdrop-blur-md animate-fade-in">
                    {project.highlight}
                  </span>
                )}
              </div>

              {/* COLLAPSED SPINE: Vertical Text (Visible only when inactive) */}
              {!isActive && (
                <div className="absolute inset-0 z-10 flex flex-col justify-end items-center pb-6 pointer-events-none">
                  <div className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-3">
                    <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-widest truncate max-h-[140px]">
                      {project.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
                    <span className="text-xs font-bold text-[#1E293B] uppercase tracking-wider truncate max-h-[180px]">
                      {project.title.split("—")[0].trim()}
                    </span>
                  </div>
                </div>
              )}

              {/* EXPANDED CONTENT: Ultra-Minimal Frosted Floating Bar */}
              {isActive && (
                <div className="absolute bottom-3 inset-x-3 p-3.5 sm:p-4 rounded-xl bg-white/94 backdrop-blur-md border border-white/80 shadow-md z-10 flex items-center justify-between gap-3 animate-fade-in transition-all duration-300">
                  {/* Category & Project Title */}
                  <div className="min-w-0 space-y-0.5 text-left">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#4452E6] font-semibold block">
                      {project.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#1E293B] tracking-tight truncate">
                      {project.title}
                    </h3>
                  </div>

                  {/* Actions: Direct Project Link + Specs Modal */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#2C3480] text-white text-xs font-semibold hover:bg-[#4452E6] transition-all shadow-xs cursor-pointer active:scale-98"
                      >
                        <span>Open Live</span>
                        <ArrowUpRight size={13} />
                      </a>
                    )}

                    {project.apk && (
                      <a
                        href={project.apk}
                        download
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-all shadow-xs cursor-pointer active:scale-98"
                      >
                        <Download size={13} />
                        <span>APK</span>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-[#CBD5E1] text-[#0F172A] text-xs font-semibold hover:bg-[#F8FAFC] transition-all shadow-2xs cursor-pointer active:scale-98"
                      >
                        <Code2 size={13} />
                        <span>Code</span>
                      </a>
                    )}

                    {onSelectProject && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(project.id);
                        }}
                        className="inline-flex items-center gap-1 px-3.5 py-2 rounded-lg bg-[#EEF0FD] border border-[#4452E6]/25 text-[#2C3480] text-xs font-semibold hover:bg-[#E0E4FC] transition-all cursor-pointer active:scale-98"
                      >
                        <span>Specs &rarr;</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default ProjectAccordionDeck;
