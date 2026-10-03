import { useState } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import { certificationsData } from "../../data/portfolioData.js";

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visibleCerts = showAll ? certificationsData : certificationsData.slice(0, 6);

  return (
    <section id="certifications" className="py-10 sm:py-14 px-6 relative z-10 border-t border-[#E2E8F0]">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Credentials"
          title="Verified"
          highlight="Certifications"
          subtitle="Accredited professional certifications and technical coursework."
        />

        {/* Compact 2-Column Mobile & Multi-Column Desktop Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 text-left">
          {visibleCerts.map((c, idx) => {
            const Icon = c.icon;

            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
                className="p-3 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:border-[#4452E6]/30 hover:shadow-md transition-all flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-1">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#EEF0FD] border border-[#4452E6]/20 flex items-center justify-center text-[#4452E6] group-hover:scale-105 transition-transform flex-shrink-0">
                      <Icon size={14} className="sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#64748B] truncate">{c.date}</span>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#2C3480] text-xs leading-snug group-hover:text-[#4452E6] transition-colors line-clamp-2">
                      {c.name}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-[#64748B] mt-0.5 truncate">
                      {c.provider}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-1 pt-0.5">
                    {c.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] truncate max-w-[85px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Download / View Actions - 2 buttons side-by-side matching screenshot */}
                <div className="pt-2 sm:pt-3 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-1.5 sm:gap-2">
                  <span className="text-[9px] font-mono text-[#94A3B8] uppercase tracking-wider hidden sm:inline">
                    PDF
                  </span>
                  <div className="grid grid-cols-2 sm:flex items-center gap-1.5 w-full sm:w-auto">
                    {c.fileUrl && (
                      <>
                        <a
                          href={encodeURI(c.fileUrl)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1 px-1.5 sm:px-2 py-1.5 rounded-lg border border-[#E2E8F0] bg-white text-[#2C3480] text-[10px] sm:text-[11px] font-semibold hover:bg-[#F8FAFC] hover:border-[#CBD5E1] transition-all cursor-pointer"
                          title="View Certificate in browser"
                        >
                          <span>View</span>
                          <ExternalLink size={10} />
                        </a>
                        <a
                          href={encodeURI(c.fileUrl)}
                          download={c.fileName || "Certificate.pdf"}
                          className="inline-flex items-center justify-center gap-1 px-1.5 sm:px-2.5 py-1.5 rounded-lg bg-[#2C3480] text-white text-[10px] sm:text-[11px] font-semibold hover:bg-[#4452E6] transition-all shadow-xs cursor-pointer"
                          title="Download Certificate PDF"
                        >
                          <Download size={10} />
                          <span>Get</span>
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Show All Toggle */}
        {certificationsData.length > 6 && (
          <div className="text-center pt-2">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-xs font-semibold text-[#2C3480] hover:bg-[#F8FAFC] hover:border-[#CBD5E1] transition-all cursor-pointer shadow-xs"
            >
              {showAll ? "Show Less" : `View All ${certificationsData.length} Credentials`}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
