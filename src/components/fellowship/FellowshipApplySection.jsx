import React from "react";

/**
 * FellowshipApplySection — "Begin Your Growth Journey"
 *
 * Content/copy from the CTA card design: heading, subtext, "Apply Now"
 * and "Download Program Guide" buttons. Color system carried over from
 * the testimonials design: cream background, dark teal heading/accent —
 * instead of the original maroon gradient card.
 *
 * NOTE on functionality: there's no dedicated application form or guide
 * download link yet, so both buttons open WhatsApp with a pre-filled
 * message (same pattern used elsewhere on this site) — replace
 * WHATSAPP_NUMBER and swap either href for a real link once you have one.
 */

const WHATSAPP_NUMBER = "2348064265176"; // TODO: replace with your number

function whatsappUrl(message) {
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
    message
  )}&type=phone_number&app_absent=0`;
}

export default function FellowshipApplySection() {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div
        className="max-w-3xl mx-auto rounded-3xl px-8 sm:px-16 py-14 text-center shadow-sm"
        style={{ backgroundColor: "#fdf2e9" }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#0f2e2a" }}>
          Begin Your Growth Journey
        </h2>
        <p className="text-gray-500 mb-9 leading-relaxed">
          Join our next cohort and transform your career in 6 months.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl("Hello! I'd like to apply for the Fellowship Program.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
            style={{ backgroundColor: "#0f766e" }}
          >
            Apply Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href={whatsappUrl("Hi, I'd like to download the Fellowship Program guide.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm border transition-all duration-200 hover:bg-[#0f2e2a] hover:text-white hover:scale-[1.03]"
            style={{ borderColor: "#0f2e2a", color: "#0f2e2a" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Program Guide
          </a>
        </div>
      </div>
    </section>
  );
}