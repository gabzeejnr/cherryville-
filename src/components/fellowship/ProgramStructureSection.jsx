import React from "react";

/**
 * ProgramStructureSection — "Program Structure"
 *
 * Content/copy from the 3-phase design: Phase 1 Foundations, Phase 2
 * Specialization, Phase 3 Career Launch, with their descriptions. Visual
 * system carried over from the LevelUp/EventsUp/StepUp cards: solid
 * gradient-colored card (no white background, no badge pill), icon up
 * top, bold title, uppercase tracked subtitle below — the "Phase N" label
 * is folded into that uppercase subtitle line since this UI has no
 * separate badge.
 */

const PHASES = [
  {
    title: "Foundations",
    subtitle: "PHASE 1 — CORE SKILLS & FUNDAMENTALS",
    gradient: "linear-gradient(135deg, #16323a 0%, #0b1c22 100%)",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Specialization",
    subtitle: "PHASE 2 — DEEP DIVE INTO YOUR TRACK",
    gradient: "linear-gradient(135deg, #0e1f2b 0%, #060f16 100%)",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Career Launch",
    subtitle: "PHASE 3 — PROJECTS & JOB READINESS",
    gradient: "linear-gradient(135deg, #0f5132 0%, #14532d 100%)",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function PhaseCard({ phase }) {
  return (
    <div className="rounded-2xl p-8" style={{ background: phase.gradient }}>
      <div className="mb-8">{phase.icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
      <p className="text-xs font-bold tracking-[0.1em] text-gray-400">{phase.subtitle}</p>
    </div>
  );
}

export default function ProgramStructureSection() {
  return (
    <section className="w-full py-20 px-6" style={{ backgroundColor: "#fdf2e9" }}>
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Program Structure
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {PHASES.map((phase) => (
          <PhaseCard key={phase.title} phase={phase} />
        ))}
      </div>
    </section>
  );
}