import React from "react";

const METRICS = [
  { value: "10M+", label: "Individuals Trained" },
  { value: "800+", label: "Technology Courses" },
  { value: "80+", label: "Learning Experiences" },
  { value: "100+", label: "Training Experts" },
];

function HeroSection() {
  return (
    <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-4 pb-14 text-center max-w-6xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6b9d88]/40 bg-[#163833]/60 backdrop-blur-sm text-[#a5e076] text-xs font-semibold uppercase tracking-widest mb-10 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#d4f870] inline-block" />
        MICROSOFT LEARNING PARTNER
      </div>

      <h1 className="text-4.5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.12] mb-6">
        Empowering the <br className="hidden sm:inline" />
        <span className="text-[#d4f870]">Microsoft</span> Partner Ecosystem
      </h1>

      <p className="text-base sm:text-lg text-gray-300/90 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
        Expert-led certification training across Azure Cloud &amp; AI, AI
        Business Solutions, and Security — delivered by Microsoft alumni for
        the Microsoft community.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#d4f870] hover:bg-[#c5ec5f] text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg"
        >
          <span>Explore Courses</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            viewBox="0 0 24 24"
          >
            <path
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <a
          href="#"
          className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#173733]/70 hover:bg-[#1f4540]/80 border border-white/20 text-white font-medium text-sm transition-all duration-200 backdrop-blur-sm"
        >
          Our Platforms
        </a>
      </div>
    </main>
  );
}

function StatsFooterBar() {
  return (
    <footer
      className="w-full relative z-10 border-t border-white/[0.08] bg-black/10 backdrop-blur-xs py-10 px-6 lg:px-16"
      data-purpose="metrics-counter-bar"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {METRICS.map((metric) => (
          <div key={metric.label} className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {metric.value}
            </span>
            <span className="mt-2 text-xs sm:text-sm text-gray-400 font-medium">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default function TechnofocusHero() {
  return (
    <div
      className="font-sans antialiased text-white h-screen flex flex-col justify-between selection:bg-[#d4f870] selection:text-slate-900 relative overflow-x-hidden"
      style={{
        backgroundColor: "#0b2220",
        backgroundImage:
          "radial-gradient(circle at 50% 35%, rgba(20, 68, 64, 0.65) 0%, rgba(10, 31, 29, 0.95) 75%, #081a18 100%), radial-gradient(rgba(255, 255, 255, 0.12) 1.2px, transparent 1.2px)",
        backgroundSize: "100% 100%, 34px 34px",
        backgroundPosition: "center center, center center",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 350,
          background:
            "radial-gradient(circle, rgba(46, 125, 114, 0.22) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <HeroSection />
      <StatsFooterBar />
    </div>
  );
}
