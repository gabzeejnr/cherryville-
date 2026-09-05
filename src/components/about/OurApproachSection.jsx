import React from "react";

/**
 * OurApproachSection — About page "Our Approach"
 *
 * Content/copy from the "Our Approach" design: heading, subtext, and the
 * four steps (Structured Curriculum, Hands-On Learning, Performance
 * Tracking, Career Integration). Visual system carried over from the
 * Technofocus stats-bar design: dark green gradient background, icon
 * chip (instead of a numbered circle), bold white title, gray subtext.
 */

const STEPS = [
  {
    title: "Structured Curriculum",
    description: "Every learner follows a purposeful growth path",
    icon: (
      <svg className="w-5 h-5 text-[#d4f870]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Hands-On Learning",
    description: "Real projects, real tools, real growth",
    icon: (
      <svg className="w-5 h-5 text-[#d4f870]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.1-3.1a4 4 0 01-5.4 5.4L6.5 21 3 17.5 12.4 8.6a4 4 0 015.4-5.4l-3.1 3.1z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Performance Tracking",
    description: "We measure progress, not just attendance",
    icon: (
      <svg className="w-5 h-5 text-[#d4f870]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M3 17l6-6 4 4 8-8M21 7v6h-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Career Integration",
    description: "Outcomes are résumé lines and promotions",
    icon: (
      <svg className="w-5 h-5 text-[#d4f870]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function OurApproachSection() {
  return (
    <section
      className="w-full py-20 px-6"
      style={{
        backgroundColor: "#0b2220",
        backgroundImage:
          "radial-gradient(circle at 50% 35%, rgba(20, 68, 64, 0.65) 0%, rgba(10, 31, 29, 0.95) 75%, #081a18 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
          Our Approach
        </h2>
        <p className="text-gray-300/80">The methodology behind our success</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STEPS.map((step) => (
          <div key={step.title} className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5">
              {step.icon}
            </div>
            <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-[180px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}