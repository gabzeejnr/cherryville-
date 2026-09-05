import React, { useState } from "react";

const WHATSAPP_NUMBER = "2348064265176";

const PROGRAMS = [
  {
    id: "data-analytics",
    title: "Data Analytics & Data Science",
    subtitle: "From Zero to Data Professional",
    duration: "12 Weeks",
    commitment: "10-15 hours/week",
    accentBar: "linear-gradient(to right, #2f8fe0, #22d3ee)",
    iconBg: "#2f8fe0",
    about:
      "Grow into a data-driven career. Learn to analyze information, generate insights, and support smart decisions — from zero to data-confident.",
    idealFor: "Beginners and career switchers looking to break into the data field.",
    highlights: [
      "Master Excel, SQL, Python, and visualization tools",
      "Work on 5+ real-world projects for your portfolio",
      "Learn from industry practitioners",
      "Job readiness support and interview prep",
    ],
    curriculum: [
      "Foundations of data & statistics",
      "SQL and database querying",
      "Python for data analysis",
      "Dashboards, storytelling & final capstone",
    ],
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M4 20V10M10 20V4M16 20v-7M22 20v-3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "product-management",
    title: "Product Management",
    subtitle: "Build Products Users Love",
    duration: "10 Weeks",
    commitment: "8-10 hours/week",
    accentBar: "linear-gradient(to right, #a855f7, #ec4899)",
    iconBg: "#c026d3",
    about:
      "Learn how great products get built — from discovery and roadmapping to shipping features users actually want, backed by real stakeholder and data-driven decision making.",
    idealFor: "Aspiring PMs, technical leads, and founders shaping product direction.",
    highlights: [
      "Product discovery & user research",
      "Roadmapping and prioritization frameworks",
      "Cross-functional collaboration with eng & design",
      "Portfolio-ready case studies",
    ],
    curriculum: [
      "Product strategy fundamentals",
      "User research & discovery",
      "Roadmaps, specs & prioritization",
      "Launch, metrics & final capstone",
    ],
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "ai-fundamentals",
    title: "Artificial Intelligence Fundamentals",
    subtitle: "Your Gateway to the AI Revolution",
    duration: "8 Weeks",
    commitment: "6-8 hours/week",
    accentBar: "linear-gradient(to right, #7f1d1d, #b91c1c)",
    iconBg: "#8b0000",
    about:
      "Build a working understanding of AI and machine learning — how models are trained, where they fit into real products, and how to apply them responsibly.",
    idealFor: "Anyone who wants a practical, non-fluffy foundation in AI before going deeper.",
    highlights: [
      "Core ML & AI concepts, explained clearly",
      "Hands-on with popular AI tools & APIs",
      "Prompt engineering fundamentals",
      "Ethics, limitations & responsible use",
    ],
    curriculum: [
      "What AI actually is (and isn't)",
      "Machine learning basics",
      "Working with AI tools & APIs",
      "Applied mini-project & wrap-up",
    ],
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M9.5 2a3.5 3.5 0 00-3.5 3.5v.6A3.5 3.5 0 003 9.5a3.5 3.5 0 003 3.44V16a3.5 3.5 0 003.5 3.5v0A3.5 3.5 0 0013 16V5.5A3.5 3.5 0 009.5 2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 2a3.5 3.5 0 013.5 3.5v.6A3.5 3.5 0 0121 9.5a3.5 3.5 0 01-3 3.44V16a3.5 3.5 0 01-3.5 3.5v0A3.5 3.5 0 0111 16V5.5A3.5 3.5 0 0114.5 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "business-analysis",
    title: "Business Analysis",
    subtitle: "Bridge Business and Technology",
    duration: "12 Weeks",
    commitment: "8-10 hours/week",
    accentBar: "linear-gradient(to right, #10b981, #14b8a6)",
    iconBg: "#10b981",
    about:
      "Learn to translate business needs into technical requirements, run stakeholder discovery, and drive projects that actually solve the right problem.",
    idealFor: "Professionals moving into BA roles, or technical staff who work closely with business teams.",
    highlights: [
      "Requirements gathering & documentation",
      "Process mapping & gap analysis",
      "Stakeholder communication",
      "Agile & waterfall delivery basics",
    ],
    curriculum: [
      "Foundations of business analysis",
      "Requirements & documentation",
      "Process mapping & stakeholder management",
      "Capstone: real-world case study",
    ],
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function whatsappUrl(program) {
  const message = `Hello! I want to enroll in the ${program.title} program.`;
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}

function ProgramCard({ program, onViewDetails }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-black/5 shadow-sm bg-white flex flex-col">
      <div className="h-1.5 w-full" style={{ background: program.accentBar }} />
      <div className="p-6 flex flex-col flex-1">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
          style={{ backgroundColor: program.iconBg }}
        >
          {program.icon}
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug">{program.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{program.subtitle}</p>
        <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {program.duration}
        </div>
        <button
          onClick={() => onViewDetails(program)}
          className="mt-auto inline-flex items-center gap-1.5 text-slate-900 font-semibold text-sm hover:gap-2.5 transition-all"
        >
          View Details
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function ProgramModal({ program, onClose }) {
  if (!program) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl bg-white shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition z-10"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="px-8 pt-8 pb-2">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
            style={{ backgroundColor: program.iconBg }}
          >
            {program.icon}
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-1">{program.title}</h2>
          <p className="text-sm font-semibold" style={{ color: program.iconBg }}>{program.subtitle}</p>
          <div className="flex items-center gap-3 mt-4 mb-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {program.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
              {program.commitment}
            </span>
          </div>
        </div>

        <div className="px-8 py-6">
          <h4 className="text-sm font-bold text-slate-900 mb-2">About This Program</h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{program.about}</p>
          <h4 className="text-sm font-bold text-slate-900 mb-2">Ideal For</h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{program.idealFor}</p>
          <h4 className="text-sm font-bold text-slate-900 mb-3">Program Highlights</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-6">
            {program.highlights.map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </div>
            ))}
          </div>
          <h4 className="text-sm font-bold text-slate-900 mb-3">Curriculum Overview</h4>
          <ol className="space-y-2">
            {program.curriculum.map((item, i) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div className="px-8 pb-8 pt-2 border-t border-gray-100 flex items-center justify-end">
          <a
            href={whatsappUrl(program)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm transition"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.8-.1-.3 0-.4.1-.5.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5C11 10.4 10.5 9 10.3 8.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1.1 2.6c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3z"/>
              <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5.1-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2z"/>
            </svg>
            Chat with us
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProgramsSection() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <section className="w-full min-h-screen py-20 px-8 lg:px-16 bg-white flex flex-col justify-center">
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
          Launch Your Tech Career
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
          Industry-aligned programs designed to take you from beginner to professional.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full">
        {PROGRAMS.map((program) => (
          <ProgramCard key={program.id} program={program} onViewDetails={setSelectedProgram} />
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href="#programs"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-slate-900 font-semibold text-sm hover:bg-gray-50 transition"
        >
          View All Programs
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <ProgramModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />
    </section>
  );
}
