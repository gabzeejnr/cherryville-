import React from "react";

/**
 * OurStorySection — About page "Our Story" section
 *
 * Two-column layout: story text on the left, a 2x2 grid of stat cards
 * on the right (maroon accent numbers, white cards, soft shadow).
 */

const STATS = [
  { value: "1,500+", label: "Learners Supported" },
  { value: "85%", label: "Completion Rate" },
  { value: "300+", label: "Career Transitions" },
  { value: "50+", label: "Partners" },
];

function StatCard({ stat }) {
  return (
    <div className="rounded-2xl bg-white border border-black/5 shadow-sm px-6 py-8 text-center">
      <p className="text-3xl sm:text-4xl font-extrabold mb-2" style={{ color: "#8b0000" }}>
        {stat.value}
      </p>
      <p className="text-sm text-gray-500">{stat.label}</p>
    </div>
  );
}

export default function OurStorySection() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
            Our Story
          </h2>
          <div className="space-y-5 text-gray-500 leading-relaxed">
            <p>
              We started Cherryville Limited because we saw too much learning
              that led nowhere — and too much untapped potential waiting for
              the right opportunity.
            </p>
            <p>
              We built this company to close that gap. To make learning a
              true growth engine: for careers, for organizations, and for
              economies.
            </p>
            <p>
              Every program we create, every partnership we enter, is
              anchored in one belief: people and teams grow fastest when
              learning is structured, practical, and connected to real-world
              value.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}