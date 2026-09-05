import React from "react";



export default function AboutHero() {
  return (
    <section
      className="w-full py-24 px-6 text-center relative overflow-hidden"
      style={{
        backgroundColor: "#0b2220",
        backgroundImage:
          "radial-gradient(circle at 50% 35%, rgba(20, 68, 64, 0.65) 0%, rgba(10, 31, 29, 0.95) 75%, #081a18 100%)",
      }}
    >
      <p className="text-xs font-bold tracking-[0.2em] text-[#d4f870] mb-6">
        ABOUT US
      </p>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] max-w-3xl mx-auto mb-6">
        Empowering <span className="text-[#d4f870]">Growth</span> Through Learning
      </h1>

      <p className="text-base sm:text-lg text-gray-300/90 max-w-xl mx-auto leading-relaxed">
        Building the future of professional development in Africa.
      </p>
    </section>
  );
}