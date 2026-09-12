import React from "react";

/**
 * FreeResourceSection — "Free Resource" download card
 *
 * Centered white card: download icon, title, quoted resource name, and
 * a maroon "Download Now" button.
 *
 * FUNCTIONALITY: there's no hosted PDF for the resource yet, so the
 * button opens WhatsApp with a pre-filled message requesting it — same
 * pattern used elsewhere on this site. Replace WHATSAPP_NUMBER with your
 * real number, and swap this for a direct file link once the PDF exists.
 */

const WHATSAPP_NUMBER = "2348064265176"; // TODO: replace with your number

function whatsappUrl(message) {
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
    message
  )}&type=phone_number&app_absent=0`;
}

export default function FreeResourceSection() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-md mx-auto rounded-2xl bg-white border border-black/5 shadow-sm px-10 py-12 text-center">
        <svg
          className="w-9 h-9 mx-auto mb-6"
          fill="none"
          stroke="#8b0000"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <h3 className="text-xl font-bold text-slate-900 mb-3">Free Resource</h3>
        <p className="text-gray-500 mb-8">
          "5 Skills That Accelerate Career Growth in 2026"
        </p>

        <a
          href={whatsappUrl("Hi! I'd like to get the '5 Skills That Accelerate Career Growth in 2026' resource.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
          style={{ backgroundColor: "#8b0000" }}
        >
          Download Now
        </a>
      </div>
    </section>
  );
}