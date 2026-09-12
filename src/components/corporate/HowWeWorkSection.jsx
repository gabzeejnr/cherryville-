import React from "react";

/**
 * HowWeWorkSection — "How We Work"
 *
 * 4 numbered steps (maroon circle + number), each with a title and
 * short description, laid out in a row.
 */

const STEPS = [
  { number: 1, title: "Assess", description: "Understand your priorities" },
  { number: 2, title: "Design", description: "Build tailored curriculum" },
  { number: 3, title: "Deliver", description: "Live, hands-on sessions" },
  { number: 4, title: "Measure", description: "Track growth and impact" },
];

export default function HowWeWorkSection() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          How We Work
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STEPS.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
              style={{ backgroundColor: "#8b0000" }}
            >
              <span className="text-white font-bold text-lg">{step.number}</span>
            </div>
            <h3 className="font-bold text-slate-900 mb-1.5">{step.title}</h3>
            <p className="text-sm text-gray-500">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}