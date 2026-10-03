import { memo } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import { skillsData } from "../../data/portfolioData.js";

const Skills = memo(function Skills() {
  return (
    <section id="skills" className="py-10 sm:py-14 px-6 relative z-10">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Skills"
          title="Technical"
          highlight="Skills"
          subtitle="Technologies, frameworks, and programming languages I work with in production."
        />

        {/* Technical Architecture Rows */}
        <div className="space-y-6">
          {Object.entries(skillsData).map(([category, data], idx) => {
            const Icon = data.icon;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:border-[#4452E6]/40 hover:shadow-md transition-[border-color,box-shadow] duration-200 group card-stable"
              >
                <div className="grid lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Category Header (4 cols) */}
                  <div className="lg:col-span-4 space-y-2 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#EEF0FD] border border-[#4452E6]/25 flex items-center justify-center text-[#4452E6] group-hover:scale-105 transition-transform flex-shrink-0">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#2C3480] tracking-tight">
                        {category}
                      </h3>
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed pt-1 max-w-sm lg:max-w-none">
                      {data.desc}
                    </p>
                  </div>

                  {/* Skills Cluster Badges (8 cols) */}
                  <div className="lg:col-span-8 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                    {data.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-mono rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#334155] hover:text-[#4452E6] hover:border-[#4452E6]/40 hover:bg-[#EEF0FD] transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Engineering Philosophy Footnote */}
        <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div className="flex items-center gap-2 text-[#0F172A] font-semibold">
            <ShieldCheck size={16} className="text-[#4452E6]" />
            <span>Strict Type-Safety &amp; Zero Unverified Claims</span>
          </div>
          <p className="text-center sm:text-right">
            Every technology listed is actively utilized in our production systems and internal tools.
          </p>
        </div>

      </div>
    </section>
  );
});

export default Skills;
