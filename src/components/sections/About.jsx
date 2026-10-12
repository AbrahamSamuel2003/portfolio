import { memo } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading.jsx";
import { engineeringPrinciples } from "../../data/portfolioData.js";

const About = memo(function About() {
  return (
    <section id="about" className="py-10 sm:py-14 px-6 relative z-10">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="About"
          title="About"
          highlight="Me"
          subtitle="My background, work at SS40 Network, and software engineering approach."
        />

        {/* Narrative & Principles Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start text-center lg:text-left">
          
          {/* Left Narrative (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5 sm:space-y-6 text-[#334155] text-sm sm:text-base leading-relaxed text-center lg:text-left"
          >
            <p>
              I am a <strong className="text-[#0F172A]">Full Stack Developer</strong> at{" "}
              <span className="text-[#4452E6] font-semibold">SS40 NETWORK PRIVATE LIMITED</span>{" "}
              specializing in resilient web applications, event-driven backend APIs, and production AI automation.
            </p>
            <p>
              I focus on building high-utility software—from RFC-compliant email engines and AES-256 encrypted authentication to deterministic candidate evaluation algorithms.
            </p>

            {/* Quick Credentials Block */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-sm space-y-1 text-xs text-center lg:text-left mx-auto lg:mx-0 max-w-md lg:max-w-none card-stable">
              <div className="text-[#2C3480] font-bold uppercase tracking-wider font-mono text-[11px]">Academic Foundation</div>
              <p className="text-[#0F172A] font-semibold">Master of Computer Applications (MCA) — Graduated with Distinction</p>
              <p className="text-[#64748B] text-[11px]">Manonmanium Sundaranar University (2024 – 2026)</p>
            </div>
          </motion.div>

          {/* Right Engineering Principles Cards (7 cols) - Anti-flicker GPU stabilized */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-2.5 sm:gap-4">
            {engineeringPrinciples.map((principle, idx) => {
              const Icon = principle.icon;

              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="p-3.5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:border-[#4452E6]/30 hover:shadow-md transition-[border-color,box-shadow] duration-200 space-y-2 sm:space-y-3 flex flex-col items-center sm:items-start text-center sm:text-left card-stable"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#EEF0FD] border border-[#4452E6]/25 flex items-center justify-center text-[#4452E6] flex-shrink-0">
                    <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2C3480] tracking-tight leading-snug">
                    {principle.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
});

export default About;
