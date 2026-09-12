import React from "react";

/**
 * CherryVilleFooter
 *
 * Content/copy from the Cherryville footer design: logo + tagline, social
 * icons, Programs / Company / Contact columns, the floating "Chat with us"
 * WhatsApp button, and the bottom copyright bar.
 *
 * Visual system carried over from the Technofocus footer design: dark navy
 * background, lime uppercase tracked column headers, lime accent details —
 * instead of the original light background / maroon accents.
 *
 * FUNCTIONALITY: the four social icons are now wired up — WhatsApp and
 * Email are fully functional (open chat / mailto). LinkedIn and Twitter/X
 * use placeholder URLs (SOCIAL_LINKS below) — replace with your real
 * profile links.
 */

const WHATSAPP_NUMBER = "2348064265176"; // TODO: replace with your number

const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/cherryville", // TODO: replace with real handle
  twitter: "https://x.com/cherryville", // TODO: replace with real handle
};

function whatsappUrl(message) {
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
    message
  )}&type=phone_number&app_absent=0`;
}

const PROGRAMS = [
  "Data Analytics & Data Science",
  "Product Management",
  "Artificial Intelligence Fundamentals",
  "Business Analysis",
];

const COMPANY_LINKS = ["About Us", "Corporate Training", "Partnerships", "Contact"];

const LIME = "#d4f870";

function SocialIcon({ children, href = "#" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:text-[#d4f870] hover:border-[#d4f870]/40 transition"
    >
      {children}
    </a>
  );
}

export default function CherryVilleFooter() {
  return (
    <footer className="w-full relative" style={{ backgroundColor: "#0a1628" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: LIME }}>
                <span className="text-slate-950 font-extrabold text-base leading-none">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Cherryville</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering Growth Through Learning
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon href={whatsappUrl("Hello! I'm interested in learning more about Cherryville Limited's programs.")}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </SocialIcon>
              <SocialIcon href="mailto:cherryvilletech@gmail.com">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.linkedin}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.34 18.34H5.67V9.5h2.67v8.84zM7 8.34a1.55 1.55 0 111.55-1.55A1.55 1.55 0 017 8.34zM18.34 18.34h-2.67v-4.3c0-1.03-.02-2.35-1.43-2.35-1.44 0-1.66 1.12-1.66 2.28v4.37H10V9.5h2.56v1.18h.04a2.8 2.8 0 012.53-1.39c2.7 0 3.2 1.78 3.2 4.1v5.05z" />
                </svg>
              </SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.twitter}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.9 2H22l-7.2 8.2L23.3 22h-6.6l-5.2-6.8L5.5 22H2.3l7.7-8.8L1 2h6.8l4.7 6.2L18.9 2zm-1.2 18h1.8L7.4 4H5.5l12.2 16z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Programs */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] mb-5" style={{ color: LIME }}>
              PROGRAMS
            </p>
            <ul className="space-y-3">
              {PROGRAMS.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] mb-5" style={{ color: LIME }}>
              COMPANY
            </p>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] mb-5" style={{ color: LIME }}>
              CONTACT
            </p>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li>
                <a href="mailto:cherryvilletech@gmail.com" className="flex items-center gap-2.5 hover:text-white transition">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  cherryvilletech@gmail.com
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl("Hello! I'm interested in learning more about Cherryville Limited's programs.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  +234 806 426 5176
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2026 Cherryville Limited. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp chat button */}
      <a
        href={whatsappUrl("Hello! I'm interested in learning more about Cherryville Limited's programs.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-lg transition z-40"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.8-.1-.3 0-.4.1-.5.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5C11 10.4 10.5 9 10.3 8.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1.1 2.6c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3z"/>
          <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5.1-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2z"/>
        </svg>
        Chat with us
      </a>
    </footer>
  );
}