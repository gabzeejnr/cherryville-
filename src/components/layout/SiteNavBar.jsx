import React from "react";
import { Link } from "react-router-dom";



const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Fellowship", to: "/fellowship" },
  { label: "Corporate", to: "/corporate" },
  { label: "Partnerships", to: "#" },
  { label: "Insights", to: "#" },
  { label: "Contact", to: "#" },
];

export default function SiteNavBar() {
  return (
    <header className="w-full px-6 lg:px-12 py-6 relative z-20 flex items-center justify-between gap-4">
      <Link to="/" className="flex items-center gap-2.5 group">
        <div className="w-8 h-8 rounded-md bg-[#d4f870] flex items-center justify-center">
          <span className="text-slate-950 font-extrabold text-base leading-none">C</span>
        </div>
        <span className="text-xl font-bold tracking-tight text-white">CherryVille</span>
      </Link>

      <nav
        aria-label="Main Navigation"
        className="hidden lg:flex items-center space-x-1 px-3 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 shadow-lg text-sm"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="px-3.5 py-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/[0.08] transition font-medium whitespace-nowrap"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div>
        <a
          href="#"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#d4f870] hover:bg-[#c5ec5f] text-slate-950 text-sm font-semibold transition-all duration-200 shadow-md whitespace-nowrap"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}