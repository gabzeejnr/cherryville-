import React from "react";

/**
 * PartnershipsHero — Partnerships page top section
 *
 * Content/copy from "Grow Impact, Together" design: eyebrow, heading,
 * and the subtext about collaborating with governments, institutions,
 * and organizations. Visual system carried over from the "Three
 * Platforms. One Mission." hero: dark green gradient background, lime
 * small-caps eyebrow, two-line heading (first line white, second line
 * bold lime).
 */

export default function PartnershipsHero() {
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
        PARTNER WITH US
      </p>

      <h1 className="max-w-3xl mx-auto mb-6 leading-[1.15]">
        <span className="block text-4xl sm:text-5xl md:text-6xl font-normal text-white">
          Grow Impact,
        </span>
        <span className="block text-4xl sm:text-5xl md:text-6xl font-bold text-[#d4f870]">
          Together
        </span>
      </h1>

      <p className="text-base sm:text-lg text-gray-300/90 max-w-xl mx-auto leading-relaxed">
        We collaborate with governments, institutions, and organizations
        to spark growth at scale.
      </p>
    </section>
  );
}