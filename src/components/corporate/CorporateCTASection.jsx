import React from "react";

/**
 * CorporateCTASection — "Let's Build Your Team's Capability"
 *
 * Content/copy from the consultation CTA design: heading, subtext, and
 * both buttons (Request Proposal, Quick Question). Visual system carried
 * over from the "Ready to Start Learning?" design: full-bleed dark green
 * gradient background, white heading, lime primary pill button, outlined
 * secondary button — instead of the original white card with a maroon
 * button.
 */

export default function CorporateCTASection() {
  return (
    <section
      className="w-full py-20 px-6 flex flex-col items-center text-center"
      style={{
        backgroundColor: "#0b2220",
        backgroundImage:
          "radial-gradient(circle at 50% 35%, rgba(20, 68, 64, 0.65) 0%, rgba(10, 31, 29, 0.95) 75%, #081a18 100%)",
      }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Let's Build Your Team's Capability
      </h2>
      <p className="text-gray-300/90 mb-9 max-w-xl mx-auto leading-relaxed">
        Request a free consultation and proposal for your organization.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#d4f870] hover:bg-[#c5ec5f] text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Request Proposal
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/5 transition"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Quick Question
        </a>
      </div>
    </section>
  );
}