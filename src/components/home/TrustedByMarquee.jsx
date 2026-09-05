import React from "react";

const LOGOS = [
  { name: "Microsoft", color: "#737373" },
  { name: "Google", color: "#737373" },
  { name: "Amazon", color: "#737373" },
  { name: "IBM", color: "#737373" },
  { name: "Salesforce", color: "#737373" },
  { name: "Oracle", color: "#737373" },
  { name: "SAP", color: "#737373" },
  { name: "Cisco", color: "#737373" },
];

function LogoItem({ name }) {
  return (
    <div className="flex items-center justify-center px-8 shrink-0">
      <span className="text-lg font-extrabold tracking-tight text-gray-400 whitespace-nowrap select-none">
        {name}
      </span>
    </div>
  );
}

export default function LogoRow() {
  return (
    <section className="w-full py-10 bg-white border-y border-gray-100 overflow-hidden">
      <p className="text-center text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
        Trusted by learners from
      </p>
      <div className="relative flex">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex animate-marquee"
          style={{
            animation: "marquee 30s linear infinite",
          }}
        >
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} name={logo.name} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
