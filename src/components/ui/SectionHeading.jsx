
import { motion } from "framer-motion";

export default function SectionHeading({ badge, title, highlight, subtitle, align = "center" }) {
  const isLeft = align === "left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`mb-6 sm:mb-8 ${isLeft ? "text-left" : "text-center"}`}
    >
      {badge && (
        <div className={`inline-flex items-center px-3 py-1 rounded-full border border-[#4452E6]/25 bg-[#EEF0FD] text-[#4452E6] font-mono text-[11px] font-semibold tracking-wider uppercase mb-3 shadow-xs`}>
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#0F172A] tracking-[-0.01em] leading-tight">
        {title} {highlight && <span className="gradient-text italic font-serif">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`text-[#64748B] font-sans text-sm sm:text-base max-w-2xl mt-2 leading-relaxed ${isLeft ? "" : "mx-auto"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
