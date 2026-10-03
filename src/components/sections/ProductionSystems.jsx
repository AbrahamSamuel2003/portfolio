import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import ProjectMockup from "../ui/ProjectMockup.jsx";
import { productionSystems } from "../../data/portfolioData.js";

export default function ProductionSystems() {
  return (
    <section id="production-systems" className="py-20 lg:py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto space-y-20 lg:space-y-28">
        
        {/* Section Header */}
        <SectionHeading
          badge="Flagship Engineering"
          title="Production"
          highlight="Systems"
          subtitle="Systems I have worked on and helped build for real-world enterprise production use at SS40 NETWORK PRIVATE LIMITED."
        />

        {/* Flagship Projects Grid / List */}
        <div className="space-y-20 lg:space-y-28">
          {productionSystems.map((system) => {
            return (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className="space-y-8"
              >
                {/* System Header Info Row */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#E2E8F0] pb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-bold text-[#4452E6]">
                        {system.number}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                        {system.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">
                        {system.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2C3480] tracking-tight">
                      {system.title}
                    </h3>
                  </div>

                  {/* Actions & Metrics */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <a
                      href={system.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2C3480] text-white font-bold text-xs hover:bg-[#4452E6] transition-all shadow-md shadow-[#2C3480]/15 cursor-pointer"
                    >
                      <span>Open Live System</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                {/* Main Content Layout: Mockup Frame + Technical Blueprint Details */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Visual Mockup Container (7 cols) */}
                  <div className="lg:col-span-7">
                    <ProjectMockup systemId={system.id} />
                  </div>

                  {/* Technical Architectural Details (5 cols) */}
                  <div className="lg:col-span-5 space-y-6 text-left">
                    <div className="space-y-2">
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-[#64748B]">
                        Business Purpose &amp; Role
                      </h4>
                      <p className="text-sm text-[#334155] leading-relaxed">
                        {system.tagline}
                      </p>
                    </div>

                    {/* Architecture Bullet Highlights */}
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-[#2C3480] flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-[#4452E6]" />
                        <span>Implemented Architecture</span>
                      </h4>
                      <ul className="space-y-2">
                        {system.architectureHighlights.map((item, i) => (
                          <li key={i} className="text-xs text-[#475569] flex items-start gap-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4452E6] mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="space-y-2 pt-2 border-t border-[#E2E8F0]">
                      <h4 className="text-[11px] uppercase tracking-wider font-medium text-[#64748B]">
                        Verified Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {system.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white border border-[#E2E8F0] text-[#334155] shadow-xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
