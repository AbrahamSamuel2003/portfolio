import {
  Mail, MessageSquare, Bot, CheckCircle2,
  FileText, Lock, Server, Activity
} from "lucide-react";

export default function ProjectMockup({ systemId }) {
  if (systemId === "mailai") {
    return (
      <div className="w-full bg-white rounded-2xl border border-[#E2E8F0] shadow-xl shadow-[#2C3480]/5 overflow-hidden text-left font-sans">
        {/* Browser Top Bar */}
        <div className="px-4 py-3 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
          </div>
          <div className="text-[11px] font-mono text-[#64748B] px-3 py-1 rounded bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-2">
            <Lock size={10} className="text-[#4452E6]" />
            <span>https://mailai.ss40network.cloud</span>
          </div>
          <div className="text-[10px] text-[#4452E6] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#EEF0FD] border border-[#4452E6]/20">
            Live Pipeline
          </div>
        </div>

        {/* Inner Workflow Architecture Display */}
        <div className="p-5 space-y-4 text-xs">
          {/* Step 1: Inbound RFC Email */}
          <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
            <div className="flex items-center justify-between text-[#64748B]">
              <div className="flex items-center gap-2 text-[#2C3480] font-semibold">
                <Mail size={13} className="text-[#4452E6]" />
                <span>Inbound Email • Gmail OAuth / IMAP</span>
              </div>
              <span className="text-[10px] text-emerald-600 font-mono font-medium">RFC 2822 Ingestion</span>
            </div>
            <p className="text-[#0F172A] font-medium text-xs">From: client@enterprise.com • Subject: Q3 Enterprise Contract Review</p>
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <span className="px-2 py-0.5 rounded bg-blue-50 text-[#2C3480] text-[10px] font-mono border border-blue-200">
                Thread-ID: #th_9842f
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-mono border border-emerald-200">
                Gemini Triage: High Priority (Score 0.98)
              </span>
            </div>
          </div>

          {/* Step 2: WhatsApp Executive Notification & AI Reply Engine */}
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-800 font-semibold text-[11px]">
                <MessageSquare size={13} className="text-emerald-600" />
                <span>WhatsApp Cloud Alert</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-emerald-100 text-[#334155] text-[11px] leading-relaxed shadow-xs">
                "Priority email from Client on Contract Review. Reply via WhatsApp to auto-draft formal response."
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#EEF0FD]/80 border border-indigo-200 space-y-2">
              <div className="flex items-center gap-1.5 text-[#2C3480] font-semibold text-[11px]">
                <Bot size={13} className="text-[#4452E6]" />
                <span>AI Synthesis (Gemini / Groq)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-indigo-100 text-[#334155] text-[11px] leading-relaxed shadow-xs">
                Client prompt: "Tomorrow 11am works" → Synthesized 3-paragraph executive reply with In-Reply-To header.
              </div>
            </div>
          </div>

          {/* Step 3: Outbound Delivery Status */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#EEF0FD] border border-[#4452E6]/25 text-[11px]">
            <div className="flex items-center gap-2 text-[#0F172A] font-medium">
              <CheckCircle2 size={14} className="text-[#4452E6]" />
              <span>Thread Preservation Active: In-Reply-To &amp; References Injected</span>
            </div>
            <span className="text-[10px] text-[#2C3480] font-mono font-bold">Dispatched • 200 OK</span>
          </div>
        </div>
      </div>
    );
  }

  if (systemId === "gtc") {
    return (
      <div className="w-full bg-white rounded-2xl border border-[#E2E8F0] shadow-xl shadow-[#2C3480]/5 overflow-hidden text-left font-sans">
        {/* Browser Top Bar */}
        <div className="px-4 py-3 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
          </div>
          <div className="text-[11px] font-mono text-[#64748B] px-3 py-1 rounded bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-2">
            <Lock size={10} className="text-[#4452E6]" />
            <span>https://gtc.ss40network.cloud/app/vacancies</span>
          </div>
          <div className="text-[10px] text-[#4452E6] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#EEF0FD] border border-[#4452E6]/20">
            TanStack Start
          </div>
        </div>

        {/* Inner Vacancy Desk & Resume Stream Mockup */}
        <div className="p-5 space-y-4 text-xs">
          {/* Header Row */}
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
            <div>
              <h4 className="text-sm font-bold text-[#0F172A]">Senior Full Stack Engineer — Vacancy Desk</h4>
              <p className="text-[11px] text-[#64748B]">AI Matching Engine Active • 5 RBAC Tenants</p>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#EEF0FD] text-[#2C3480] text-[10px] font-bold border border-[#4452E6]/25">
              Deterministic 100pt Match
            </span>
          </div>

          {/* Candidate Card & Resume In-Place Viewer */}
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#0F172A]">Verified Candidate</span>
                <span className="text-emerald-700 font-bold text-xs bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Fit: 94 / 100
                </span>
              </div>
              <div className="text-[11px] text-[#64748B] space-y-1">
                <p>• 20-MCQ Proctor Exam: <strong className="text-[#2C3480]">Tier 1 Expert (95%)</strong></p>
                <p>• Skills Alignment: <strong className="text-[#0F172A]">React 19, TypeScript, Fastify</strong></p>
                <p>• Anti-Malpractice: <strong className="text-emerald-600">0 Violations Detected</strong></p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#EEF0FD]/80 border border-indigo-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#2C3480] flex items-center gap-1.5">
                  <FileText size={13} className="text-[#4452E6]" /> Resume Stream Engine
                </span>
                <span className="text-[10px] text-[#64748B] font-mono">base64 → blob</span>
              </div>
              <div className="p-2.5 rounded bg-white border border-[#E2E8F0] text-[10px] font-mono text-[#475569] space-y-1 shadow-xs">
                <p className="text-[#4452E6] font-medium">&gt; Parsing: resume_candidate_91.pdf</p>
                <p className="text-[#0F172A]">&gt; Extracted 14 skills via Groq Llama-3</p>
                <p className="text-emerald-600 font-medium">&gt; Render: In-Place PDF Canvas</p>
              </div>
            </div>
          </div>

          {/* Recruitment Pipeline Bar */}
          <div className="grid grid-cols-6 gap-1 text-center font-medium text-[9px] pt-1">
            {["Applied", "Screened", "Shortlisted", "Interview", "Offer", "Placed"].map((stage, idx) => (
              <div
                key={stage}
                className={`py-1.5 rounded-lg border ${
                  idx <= 3
                    ? "bg-[#EEF0FD] border-[#4452E6]/30 text-[#2C3480] font-semibold"
                    : "bg-[#F8FAFC] border-[#E2E8F0] text-[#94A3B8]"
                }`}
              >
                {stage}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Default: ss40
  return (
    <div className="w-full bg-white rounded-2xl border border-[#E2E8F0] shadow-xl shadow-[#2C3480]/5 overflow-hidden text-left font-sans">
      {/* Browser Top Bar */}
      <div className="px-4 py-3 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
        </div>
        <div className="text-[11px] font-mono text-[#64748B] px-3 py-1 rounded bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-2">
          <Lock size={10} className="text-emerald-600" />
          <span>https://ss40network.com</span>
        </div>
        <div className="text-[10px] text-emerald-700 font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-50 border border-emerald-200">
          Next.js 16 + React 19
        </div>
      </div>

      {/* Inner SS40 Network Multi-Wing Architecture */}
      <div className="p-5 space-y-4 text-xs">
        {/* Three Business Wings Grid */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-3 rounded-xl bg-teal-50 border border-teal-200">
            <span className="text-[10px] text-teal-700 font-bold uppercase tracking-wider block mb-1">Wing 01</span>
            <span className="text-xs font-semibold text-[#0F172A]">Digital Solutions</span>
          </div>
          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
            <span className="text-[10px] text-blue-700 font-bold uppercase tracking-wider block mb-1">Wing 02</span>
            <span className="text-xs font-semibold text-[#0F172A]">SaaS Products</span>
          </div>
          <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200">
            <span className="text-[10px] text-indigo-700 font-bold uppercase tracking-wider block mb-1">Wing 03</span>
            <span className="text-xs font-semibold text-[#0F172A]">Tech Academics</span>
          </div>
        </div>

        {/* Dynamic CMS & Lead Telemetry */}
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#0F172A] flex items-center gap-1.5">
                <Server size={13} className="text-[#4452E6]" /> Dynamic Admin CMS
              </span>
              <span className="text-[10px] text-[#64748B]">Prisma + PG</span>
            </div>
            <p className="text-[#64748B] text-[11px] leading-relaxed">
              Full administrative lifecycle over digital solutions, client projects, video happimonials, and student impact case studies.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-emerald-800 flex items-center gap-1.5">
                <Activity size={13} className="text-emerald-600" /> Lead Ingestion CRM
              </span>
              <span className="text-[10px] text-emerald-700 font-mono font-medium">Live Nodemailer</span>
            </div>
            <p className="text-[#64748B] text-[11px] leading-relaxed">
              Automated contact and demo booking pipelines with real-time SMTP notifications and visitor session audit logs.
            </p>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[10px] text-[#64748B] font-mono">
          <span>Speed: Edge ISR Cached</span>
          <span>Scroll: Lenis Smooth Motion</span>
          <span className="text-emerald-700 font-medium">SEO: JSON-LD Structured</span>
        </div>
      </div>
    </div>
  );
}
