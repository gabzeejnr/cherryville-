import React from "react";

/**
 * PartnershipsCTASection — "Let's Create Growth That Lasts"
 *
 * Content/copy from the CTA card design: heading, subtext, and both
 * buttons (Become a Partner, Contact Partnerships Team). Visual system
 * carried over from the "Ready to Explore Our Platforms?" design:
 * full-bleed dark green gradient background, white heading, lime primary
 * pill button — instead of the original light card with a maroon button.
 * The secondary button keeps an outlined style since the reference UI
 * only showed one button; this matches the pattern used elsewhere on
 * this site for a second CTA on a dark background.
 */

export default function PartnershipsCTASection() {
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
        Let's Create Growth That Lasts
      </h2>
      <p className="text-gray-300/90 mb-9 max-w-xl mx-auto leading-relaxed">
        Partner with us to make a measurable impact.
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
          Become a Partner
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/5 transition"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Contact Partnerships Team
        </a>
      </div>
    </section>
  );
}