import React from "react";

/**
 * PartnershipOfferingsSection
 *
 * Content/copy from the 4-card design: Program Deployment, Youth
 * Development, Workforce Development, Sponsored Learning. Visual system
 * carried over from the LevelUp/EventsUp/StepUp cards: solid
 * gradient-colored card, icon up top, bold title, uppercase tracked
 * subtitle below — the description text is folded into that uppercase
 * line since this UI has no separate description paragraph.
 */

const OFFERINGS = [
  {
    title: "Program Deployment",
    subtitle: "WE RUN TRAINING PROGRAMS UNDER YOUR INITIATIVE",
    gradient: "linear-gradient(135deg, #16323a 0%, #0b1c22 100%)",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Youth Development",
    subtitle: "GROWTH PATHWAYS FOR STUDENTS AND GRADUATES",
    gradient: "linear-gradient(135deg, #0e1f2b 0%, #060f16 100%)",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="9" cy="8" r="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5 20c.2-2.3 1.7-4 3.5-4.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Workforce Development",
    subtitle: "SECTOR-SPECIFIC UPSKILLING PROGRAMS",
    gradient: "linear-gradient(135deg, #123024 0%, #081813 100%)",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Sponsored Learning",
    subtitle: "FUND SEATS FOR TARGETED GROUPS",
    gradient: "linear-gradient(135deg, #0f5132 0%, #14532d 100%)",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 12.5L7 21l5-2.5L17 21l-1.5-8.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function OfferingCard({ offering }) {
  return (
    <div className="rounded-2xl p-8" style={{ background: offering.gradient }}>
      <div className="mb-8">{offering.icon}</div>
      <h3 className="text-lg font-bold text-white mb-2">{offering.title}</h3>
      <p className="text-xs font-bold tracking-[0.08em] text-gray-400 leading-relaxed">
        {offering.subtitle}
      </p>
    </div>
  );
}

export default function PartnershipOfferingsSection() {
  return (
    <section className="w-full py-20 px-6" style={{ backgroundColor: "#fdf2e9" }}>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {OFFERINGS.map((offering) => (
          <OfferingCard key={offering.title} offering={offering} />
        ))}
      </div>
    </section>
  );
}