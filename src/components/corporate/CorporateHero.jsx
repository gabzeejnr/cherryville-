import React from "react";

/**
 * CorporateHero — Corporate page top section
 *
 * Content/copy from "Corporate Training Solutions" design: eyebrow,
 * heading, and the subtext about team capability driving results.
 * Visual system carried over from the "Three Platforms. One Mission."
 * hero: dark green gradient background, lime small-caps eyebrow,
 * two-line heading (first line white, second line bold lime).
 */

export default function CorporateHero() {
  return (
    <section
      className="w-full py-24 px-6 relative overflow-hidden flex flex-col items-center text-center"
      style={{
        backgroundColor: "#0b2220",
        backgroundImage:
          "radial-gradient(circle at 50% 35%, rgba(20, 68, 64, 0.65) 0%, rgba(10, 31, 29, 0.95) 75%, #081a18 100%)",
      }}
    >
      <p className="text-xs font-bold tracking-[0.2em] text-[#d4f870] mb-6">
        FOR ORGANIZATIONS
      </p>

      <h1 className="max-w-3xl mx-auto mb-6 leading-[1.15]">
        <span className="block text-4xl sm:text-5xl md:text-6xl font-normal text-white">
          Corporate Training
        </span>
        <span className="block text-4xl sm:text-5xl md:text-6xl font-bold text-[#d4f870]">
          Solutions
        </span>
      </h1>

      <p className="text-base sm:text-lg text-gray-300/90 max-w-xl mx-auto leading-relaxed">
        High-growth organizations know: a team's capability drives
        business results.
      </p>
    </section>
  );
}