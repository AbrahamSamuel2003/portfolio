import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Calendar, CheckCircle2, ChevronDown } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import { experienceData, educationData } from "../../data/portfolioData.js";

const Experience = memo(function Experience() {
  // State to track which cards are expanded (keyed by company+role)
  // By default, cards are collapsed so they normally show the role, company, period, and status badge.
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (cardKey) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardKey]: !prev[cardKey]
    }));
  };

  return (
    <section id="experience" className="py-10 sm:py-14 px-6 relative z-10">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Section Heading */}
        <SectionHeading
          title="Work"
          highlight="Experience"
          subtitle="My professional work history and educational milestones."
        />

        {/* Work Experience Timeline */}
        <div className="space-y-5">
          {experienceData.map((exp, idx) => {
            const cardKey = exp.company + exp.role;
            const isExpanded = !!expandedCards[cardKey];
            const isPrimary = exp.isCurrent;

            return (
              <motion.div
                key={cardKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`relative rounded-2xl transition-[border-color,box-shadow] duration-200 card-stable ${
                  isPrimary
                    ? "bg-white border-2 border-[#4452E6] shadow-lg shadow-[#4452E6]/8"
                    : "bg-white border border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1]"
                }`}
              >
                {/* Active Indicator Flag */}
                {isPrimary && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0 px-3.5 py-1 rounded-full bg-[#2C3480] text-white font-bold text-[10px] tracking-wider uppercase shadow-md shadow-[#2C3480]/20 flex items-center whitespace-nowrap z-10">
                    <span>Current Role</span>
                  </div>
                )}

                {/* Collapsible Card Header (Normally Displays Role, Company, Period, Status) */}
                <div
                  onClick={() => toggleCard(cardKey)}
                  className="p-5 sm:p-7 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-between gap-4 cursor-pointer select-none group"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleCard(cardKey);
                    }
                  }}
                >
                  {/* Left Role & Company Info */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#2C3480] group-hover:text-[#4452E6] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-[#4452E6] font-semibold text-sm sm:text-base">
                      {exp.company}
                    </p>
                  </div>

                  {/* Right Timing, Status & Dropdown Chevron */}
                  <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 pt-1 sm:pt-0">
                    <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-mono">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${exp.statusCls}`}>
                      {exp.status}
                    </span>

                    {/* Smooth Chevron Indicator Button */}
                    <div
                      className={`w-8 h-8 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-center text-[#2C3480] group-hover:bg-[#EEF0FD] group-hover:border-[#4452E6]/30 group-hover:text-[#4452E6] transition-all duration-300 shadow-2xs ${
                        isExpanded ? "rotate-180 bg-[#EEF0FD] text-[#4452E6] border-[#4452E6]/30" : ""
                      }`}
                      title={isExpanded ? "Collapse Details" : "Expand Details"}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                {/* Dropdown Accordion Content (Revealed on Click) */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden will-change-[height,opacity]"
                    >
                      <div className="px-5 sm:px-7 pb-6 sm:pb-7 pt-2 border-t border-[#E2E8F0] space-y-4">
                        {/* Role Description */}
                        <p className="text-sm text-[#334155] leading-relaxed text-center sm:text-left pt-2">
                          {exp.description}
                        </p>

                        {/* Detailed Highlights */}
                        <div className="space-y-2.5 pt-1 text-left">
                          {exp.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
                              <CheckCircle2
                                size={15}
                                className={`mt-0.5 flex-shrink-0 ${isPrimary ? "text-[#4452E6]" : "text-[#94A3B8]"}`}
                              />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Academic Milestones (Secondary Layout) */}
        <div className="pt-8 border-t border-[#E2E8F0] space-y-6">
          <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs uppercase tracking-widest font-bold text-[#64748B]">
            <GraduationCap size={16} className="text-[#4452E6]" />
            <span>Academic Qualifications</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {educationData.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-xl bg-white border border-[#E2E8F0] space-y-2 shadow-sm hover:border-[#CBD5E1] transition-colors text-center sm:text-left flex flex-col items-center sm:items-start"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-mono text-[#334155] font-medium">{edu.period}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${edu.statusCls}`}>
                    {edu.status}
                  </span>
                </div>
                <h3 className="font-bold text-[#0F172A] text-sm leading-snug">{edu.degree}</h3>
                <p className="text-xs text-[#475569] font-medium">{edu.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
});

export default Experience;
