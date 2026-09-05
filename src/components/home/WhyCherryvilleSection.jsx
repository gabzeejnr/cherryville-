import React from "react";

const REASONS = [
  {
    title: "Structured, not random",
    description: "A clear growth path, not a confusing content library",
    tint: "#e7f4f2",
    accent: "#0f766e",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#0f766e" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="0.5" fill="#0f766e" />
      </svg>
    ),
  },
  {
    title: "Practical and hands-on",
    description: "Learn by doing, with real projects and feedback",
    tint: "#f2f8e2",
    accent: "#4d7c0f",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#4d7c0f" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Outcome-driven",
    description: "We measure growth by jobs secured and promotions earned",
    tint: "#eef1f6",
    accent: "#334155",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#334155" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 12.5L7 21l5-2.5L17 21l-1.5-8.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Built for real life",
    description: "Designed for busy professionals and career changers",
    tint: "#fbeaf0",
    accent: "#9d174d",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#9d174d" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="9" cy="8" r="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5 20c.2-2.3 1.7-4 3.5-4.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function ReasonCard({ reason }) {
  return (
    <div className="rounded-2xl overflow-hidden border-2 border-black/10 shadow-xl bg-white h-full flex flex-col">
      <div className="p-6" style={{ backgroundColor: reason.tint }}>
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md">
            {reason.icon}
          </div>
          <span
            className="text-[11px] font-extrabold px-3 py-1.5 rounded-full text-white tracking-wide"
            style={{ backgroundColor: reason.accent }}
          >
            Details
          </span>
        </div>
      </div>

      <div className="px-6 py-7 flex-1">
        <h3 className="text-lg font-extrabold text-slate-900 mb-2 tracking-tight">{reason.title}</h3>
        <div
          className="w-10 h-1 rounded-full mb-4"
          style={{ backgroundColor: reason.accent }}
        />
        <p className="text-sm font-bold text-gray-600 leading-relaxed">
          {reason.description}
        </p>
      </div>
    </div>
  );
}

export default function WhyCherryvilleSection() {
  return (
    <section className="w-full min-h-screen py-20 px-8 lg:px-16 bg-white flex flex-col justify-center">
      <div className="text-center mb-14">
        <span className="inline-block text-xs font-bold px-4 py-1.5 rounded-full border border-gray-200 text-slate-700 mb-6">
          Why Us
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
          Why Cherryville?
        </h2>
        <p className="text-gray-500 font-semibold max-w-xl mx-auto leading-relaxed">
          We don't just teach — we transform careers and build capabilities that last.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full">
        {REASONS.map((reason) => (
          <ReasonCard key={reason.title} reason={reason} />
        ))}
      </div>
    </section>
  );
}
