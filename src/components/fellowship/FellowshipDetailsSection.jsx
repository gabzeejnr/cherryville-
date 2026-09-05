import React from "react";

/**
 * FellowshipDetailsSection — "What You Get" / "Who It's For"
 *
 * Content/copy from the two-column design: the 5 "What You Get" items
 * and the 3 "Who It's For" items. Layout carried over from the "Platform
 * Overview" design: left column is a grid of icon+title+subtitle cards
 * (mapped from "What You Get"), right column is a cream sidebar with a
 * checklist (mapped from "Who It's For") and a CTA button.
 *
 * NOTE: the sidebar CTA button ("Apply Now") isn't from the source
 * content — Image 1 didn't include button text for this section, so
 * this is a placeholder. Swap the label/href for the real copy.
 */

const WHAT_YOU_GET = [
  {
    title: "Step-by-step Learning",
    subtitle: "Structured pathway for beginners",
  },
  {
    title: "Project-Based Training",
    subtitle: "Build a portfolio that proves skills",
  },
  {
    title: "Mentorship",
    subtitle: "Direct access to industry experts",
  },
  {
    title: "Career Support",
    subtitle: "Résumé, interview prep, employer connections",
  },
  {
    title: "Certificate",
    subtitle: "Recognized credential for your journey",
  },
];

const WHO_ITS_FOR = [
  "Complete beginners ready to start their tech journey",
  "Individuals transitioning into digital careers",
  "Graduates seeking a clear path to professional growth",
];

function AwardIcon() {
  return (
    <svg className="w-5 h-5 text-[#0f766e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 12.5L7 21l5-2.5L17 21l-1.5-8.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-[#0f766e] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FellowshipDetailsSection() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-8">
        {/* Left: What You Get grid */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">What You Get</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {WHAT_YOU_GET.map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-5"
                style={{ backgroundColor: "#fdf2e9" }}
              >
                <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center mb-4">
                  <AwardIcon />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Who It's For sidebar */}
        <div className="rounded-2xl p-6 h-fit" style={{ backgroundColor: "#fdf2e9" }}>
          <h3 className="font-bold text-slate-900 mb-5">Who It's For</h3>
          <ul className="space-y-4 mb-6">
            {WHO_ITS_FOR.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-white transition"
            style={{ backgroundColor: "#0f2e2a" }}
          >
            Apply Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}