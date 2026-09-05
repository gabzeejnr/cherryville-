import React from "react";

const WHATSAPP_NUMBER = "2348064265176";

export default function ReadyToGrowSection() {
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
    "Hello! I'd like to learn more about your programs."
  )}&type=phone_number&app_absent=0`;

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center px-8 lg:px-16 py-20 text-center relative overflow-hidden"
      style={{
        backgroundColor: "#0b2220",
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(20, 68, 64, 0.6) 0%, rgba(10, 31, 29, 0.95) 70%, #081a18 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 400,
          background:
            "radial-gradient(circle, rgba(46, 125, 114, 0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6b9d88]/40 bg-[#163833]/60 text-[#a5e076] text-xs font-semibold uppercase tracking-widest mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4f870] inline-block" />
          Start Today
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
          Ready to Grow Your <br className="hidden sm:inline" />
          <span className="text-[#d4f870]">Career?</span>
        </h2>

        <p className="text-gray-300/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Join thousands of professionals who've transformed their careers through structured, practical training.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#d4f870] hover:bg-[#c5ec5f] text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg"
          >
            Explore Programs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all duration-200 shadow-lg"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.8-.1-.3 0-.4.1-.5.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5C11 10.4 10.5 9 10.3 8.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1.1 2.6c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3z"/>
              <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5.1-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
