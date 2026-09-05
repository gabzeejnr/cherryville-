import React from "react";


export default function MissionVisionSection() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white border border-black/5 shadow-sm p-8">
          <div className="w-12 h-12 rounded-xl bg-[#d3f0e8] flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-[#0f2e2a]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="8" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="0.5" fill="currentColor" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
          <p className="text-gray-500 leading-relaxed">
            To deliver practical, structured, and outcome-driven training
            that fuels growth for individuals and organizations in a
            rapidly evolving economy.
          </p>
        </div>

        
        <div
          className="rounded-2xl p-8"
          style={{
            background: "linear-gradient(135deg, #0f2e2a 0%, #081a18 100%)",
          }}
        >
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0012 3z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
          <p className="text-gray-300/90 leading-relaxed">
            A generation of globally competitive professionals — confident,
            capable, and continuously growing — equipped with skills that
            create lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
}