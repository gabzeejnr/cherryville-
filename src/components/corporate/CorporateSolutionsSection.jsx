import React from "react";

/**
 * CorporateSolutionsSection — "How We Help Organizations"
 *
 * Content/copy from the 4-card design: Workforce Upskilling, Digital
 * Transformation, Operational Excellence, Custom Solutions. Color system
 * carried over from the "Our Offices" design: cream background, dark
 * teal icon chip and heading — instead of the original maroon icon chip
 * on a plain white background.
 *
 * NOTE: the source screenshot for Image 1 started right at the card
 * grid with no section heading visible above it — the eyebrow/heading
 * below ("OUR SOLUTIONS" / "How We Help Organizations") is a reasonable
 * placeholder since a section needs one. Swap it for the real copy if
 * you have it.
 */

const SOLUTIONS = [
  {
    title: "Workforce Upskilling",
    description: "Grow the digital skills your business needs",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M3 17l6-6 4 4 8-8M21 7v6h-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Digital Transformation",
    description: "Help teams adopt new tools and mindsets",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Operational Excellence",
    description: "Improve efficiency and decision-making",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Custom Solutions",
    description: "Co-designed programs for your goals",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function SolutionCard({ solution }) {
  return (
    <div className="rounded-2xl bg-white border border-black/5 shadow-sm p-6">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ backgroundColor: "#0f766e" }}
      >
        {solution.icon}
      </div>
      <h3 className="font-bold text-slate-900 mb-2">{solution.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{solution.description}</p>
    </div>
  );
}

export default function CorporateSolutionsSection() {
  return (
    <section className="w-full py-20 px-6" style={{ backgroundColor: "#fdf2e9" }}>
      <div className="max-w-6xl mx-auto text-center mb-14">
        <p className="text-xs font-bold tracking-[0.2em] text-[#0f766e] mb-4">
          OUR SOLUTIONS
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#0f2e2a" }}>
          How We Help Organizations
        </h2>
      </div>

      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
        {SOLUTIONS.map((solution) => (
          <SolutionCard key={solution.title} solution={solution} />
        ))}
      </div>
    </section>
  );
}