import React from "react";

/**
 * InsightsCategoriesSection
 *
 * 4 category cards: Career Guides, Industry Insights, Learning Tips,
 * Future of Work. Color system carried over from the "Our Offices"
 * design: cream page background, mint icon chip with dark teal icon —
 * instead of the original white background with a pink/maroon icon chip.
 */

const CATEGORIES = [
  {
    title: "Career Guides",
    subtitle: "Tips for digital roles",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="#0f766e" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Industry Insights",
    subtitle: "Market trends",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="#0f766e" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M3 17l6-6 4 4 8-8M21 7v6h-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Learning Tips",
    subtitle: "Productivity hacks",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="#0f766e" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0012 3z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Future of Work",
    subtitle: "What's coming next",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="#0f766e" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M9.5 2a3.5 3.5 0 00-3.5 3.5v.6A3.5 3.5 0 003 9.5a3.5 3.5 0 003 3.44V16a3.5 3.5 0 003.5 3.5v0A3.5 3.5 0 0013 16V5.5A3.5 3.5 0 009.5 2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 2a3.5 3.5 0 013.5 3.5v.6A3.5 3.5 0 0121 9.5a3.5 3.5 0 01-3 3.44V16a3.5 3.5 0 01-3.5 3.5v0A3.5 3.5 0 0111 16V5.5A3.5 3.5 0 0114.5 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function CategoryCard({ category }) {
  return (
    <div className="rounded-2xl bg-white border border-black/5 shadow-sm p-6 text-center">
      <div className="w-12 h-12 rounded-xl bg-[#d3f0e8] flex items-center justify-center mx-auto mb-5">
        {category.icon}
      </div>
      <h3 className="font-bold text-slate-900 mb-1.5">{category.title}</h3>
      <p className="text-sm text-gray-500">{category.subtitle}</p>
    </div>
  );
}

export default function InsightsCategoriesSection() {
  return (
    <section className="w-full py-20 px-6" style={{ backgroundColor: "#fdf2e9" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}