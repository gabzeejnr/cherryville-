import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home",         to: "/" },
  { label: "About Us",     to: "/about" },
  { label: "Programs",     to: "/programs" },
  { label: "Fellowship",   to: "/fellowship" },
  { label: "Corporate",    to: "/corporate" },
  { label: "Partnerships", to: "#" },
  { label: "Insights",     to: "#" },
  { label: "Contact",      to: "#" },
];

export default function SiteNavBar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 lg:px-12 py-4 flex items-center justify-between bg-white border-b border-gray-100 sticky top-0 z-50 relative">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2.5 shrink-0">
        <div className="w-8 h-8 rounded-md bg-[#d4f870] flex items-center justify-center">
          <span className="text-slate-950 font-extrabold text-base leading-none">C</span>
        </div>
        <span className="text-lg font-extrabold tracking-tight text-slate-900">CherryVille</span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-1 text-sm">
        {NAV_LINKS.map((link) => {
          const active = pathname === link.to;
          return (
            <Link
              key={link.label}
              to={link.to}
              className={`px-3.5 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
                active
                  ? "bg-slate-100 text-slate-900"
                  : "text-gray-500 hover:text-slate-900 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Right side: CTA + hamburger */}
      <div className="flex items-center gap-3">
        <Link
          to="/contact"
          className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#d4f870] hover:bg-[#c5ec5f] text-slate-950 text-sm font-semibold transition-all duration-200 shadow-sm whitespace-nowrap"
        >
          Get Started
        </Link>

        {/* Hamburger — visible below lg */}
        <button
          className="lg:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10 rounded-lg hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-slate-900 rounded-full transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-900 rounded-full transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-900 rounded-full transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl lg:hidden z-50">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    active
                      ? "bg-slate-100 text-slate-900"
                      : "text-gray-600 hover:text-slate-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 rounded-xl bg-[#d4f870] text-slate-950 text-sm font-extrabold text-center"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
