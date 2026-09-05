import React from "react";

const AUDIENCES = [
  {
    title: "Job Seekers",
    description:
      "Break into tech with the skills and certifications employers are actively hiring for.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bg: "#1e3a5f",
    iconBg: "#2f8fe0",
  },
  {
    title: "Working Professionals",
    description:
      "Upskill without pausing your career. Learn at your own pace with cohort support.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bg: "#0e2b1f",
    iconBg: "#1fa971",
  },
  {
    title: "Teams & Organizations",
    description:
      "Equip your team with the skills to compete in a fast-changing technology landscape.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="9" cy="7" r="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="7" r="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 20c0-3 3-5 7-5s7 2 7 5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 14c2.5.5 4 2.2 4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bg: "#2a1330",
    iconBg: "#c23fa0",
  },
];

function AudienceCard({ item }) {
  return (
    <div
      className="rounded-2xl p-8 flex flex-col gap-5 border-2 border-white/10 shadow-xl"
      style={{ backgroundColor: item.bg }}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg shrink-0"
        style={{ backgroundColor: item.iconBg }}
      >
        {item.icon}
      </div>
      <div>
        <h3 className="text-white text-xl font-extrabold mb-2">{item.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

export default function WhoWeServeSection() {
  return (
    <section
      className="w-full min-h-screen py-20 px-8 lg:px-16 flex flex-col justify-center"
      style={{ backgroundColor: "#0b1f1e" }}
    >
      <div className="text-center mb-14">
        <p className="text-xs font-bold tracking-[0.2em] text-[#a5e076] mb-4 uppercase">
          Who We Serve
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Built for Every Stage
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
          Whether you're starting out, levelling up, or building a team — we have a path for you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 w-full">
        {AUDIENCES.map((item) => (
          <AudienceCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
