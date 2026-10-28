import { useState, memo } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Check, Building2, Linkedin, Github, Instagram, MessageCircle, ArrowUpRight, MapPin } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";

const Contact = memo(function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSent(false), 3500);
  };

  return (
    <section id="contact" className="py-10 sm:py-14 px-6 relative z-10 overflow-hidden">
      {/* Subtle Background Radial Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#4452E6]/[0.035] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Contact"
          title="Contact"
          highlight="Me"
          subtitle="Get in touch for engineering roles, technical discussions, or collaborations in Tirunelveli and globally."
        />

        {/* Main Grid: Channels & Form */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left: Contact Channels & Credentials (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2.5 sm:gap-3">
              {[
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  val: "+91 6383813648",
                  href: "https://wa.me/916383813648?text=Hi%20Abraham,%20I%20saw%20your%20portfolio",
                  color: "text-emerald-600",
                  bg: "bg-emerald-50"
                },
                {
                  icon: Mail,
                  label: "Email",
                  val: "abrahamsamuel645@gmail.com",
                  href: "mailto:abrahamsamuel645@gmail.com",
                  color: "text-[#4452E6]",
                  bg: "bg-[#EEF0FD]"
                },
                {
                  icon: Phone,
                  label: "Phone Direct",
                  val: "+91 6383813648",
                  href: "tel:6383813648",
                  color: "text-sky-600",
                  bg: "bg-sky-50"
                },
                {
                  icon: Building2,
                  label: "Company",
                  val: "SS40 NETWORK",
                  href: "https://ss40network.com/",
                  color: "text-[#2C3480]",
                  bg: "bg-indigo-50"
                },
                {
                  icon: MapPin,
                  label: "Location",
                  val: "Tirunelveli, Tamil Nadu, India",
                  href: "https://maps.google.com/?q=Tirunelveli,+Tamil+Nadu",
                  color: "text-rose-600",
                  bg: "bg-rose-50"
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FAFC] shadow-sm transition-[border-color,background-color] duration-200 group cursor-pointer card-stable ${
                    c.label === "Location" ? "col-span-2 sm:col-span-1 justify-center" : ""
                  }`}
                >
                  <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                    <c.icon className={c.color} size={17} />
                  </div>
                  <div className="min-w-0 flex-1 w-full">
                    <p className="text-[10px] sm:text-[11px] font-mono text-[#64748B]">{c.label}</p>
                    <p className="text-xs sm:text-sm font-semibold text-[#0F172A] truncate">{c.val}</p>
                  </div>
                  <ArrowUpRight size={14} className="text-[#94A3B8] group-hover:text-[#2C3480] transition-colors hidden sm:block" />
                </a>
              ))}
            </div>

            {/* Social Channels (LinkedIn, Instagram, GitHub) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <span className="text-xs text-[#64748B] font-mono">Social &amp; Profiles</span>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <a
                  href="https://www.linkedin.com/in/abraham-samuel-developer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-semibold text-[#0F172A] hover:text-[#4452E6] hover:border-[#4452E6]/30 transition-[color,border-color] duration-200 cursor-pointer shadow-2xs"
                >
                  <Linkedin size={13} className="text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/abr_samuell/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-semibold text-[#0F172A] hover:text-[#E4405F] hover:border-[#E4405F]/30 transition-[color,border-color] duration-200 cursor-pointer shadow-2xs"
                >
                  <Instagram size={13} className="text-[#E4405F]" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://github.com/AbrahamSamuel2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-semibold text-[#0F172A] hover:text-[#4452E6] hover:border-[#4452E6]/30 transition-[color,border-color] duration-200 cursor-pointer shadow-2xs"
                >
                  <Github size={13} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Direct Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-xl shadow-[#2C3480]/5 text-left">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2C3480] mb-6 flex items-center justify-center lg:justify-start gap-2 text-center lg:text-left">
                <span>Send a Direct Message</span>
              </h3>

              {isSent ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-md shadow-emerald-500/10">
                    <Check size={28} />
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A]">Message Received</h4>
                  <p className="text-xs text-[#64748B] max-w-xs">
                    Thank you for reaching out. I'll review your note and reply promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#64748B] mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter the name..."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-base sm:text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#4452E6] focus:bg-white focus:ring-2 focus:ring-[#4452E6]/10 transition-[border-color,background-color,box-shadow] duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#64748B] mb-1.5">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="Enter the email address..."
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-base sm:text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#4452E6] focus:bg-white focus:ring-2 focus:ring-[#4452E6]/10 transition-[border-color,background-color,box-shadow] duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#64748B] mb-1.5">Project Scope / Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Enter the message or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-base sm:text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#4452E6] focus:bg-white focus:ring-2 focus:ring-[#4452E6]/10 transition-[border-color,background-color,box-shadow] duration-200 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="w-full py-3.5 rounded-xl bg-[#2C3480] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#4452E6] transition-[background-color,box-shadow] duration-200 shadow-lg shadow-[#2C3480]/20 flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
                  >
                    <Send size={14} />
                    <span>Transmit Message</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
});

export default Contact;
