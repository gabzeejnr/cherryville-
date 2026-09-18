import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./FootNav.module.scss"

const NAV_LINKS = [
    {
        label: "Home",
        to: "/"
    },
    {
        label: "About Us",
        to: "/about"
    },
    {
        label: "Programs",
        to: "/programs"
    },
    {
        label: "Fellowship",
        to: "/fellowship"
    },
    {
        label: "Corporate",
        to: "/corporate"
    },
    {
        label: "Partnerships",
        to: "/partnerships"
    },
    {
        label: "Insights",
        to: "/insights"
    },
    {
        label: "Contact",
        to: "/contact"
    },
];

function DropDown() {

    const { pathname } = useLocation();

    return (
        <div className={`${styles.dropdown} lg:hidden`}>
            <nav className="flex flex-col px-4 py-6 gap-1">
                {NAV_LINKS.map(link => {
                    const active = pathname === link.to;
                    return <Link key={link.label} to={link.to} onClick={() => setMenuOpen(false)}
                        className={`px-4 py-4 rounded-xl text-sm font-medium transition-colors ${active
                            ? "bg-accent text-slate-900" : "text-gray-600 hover:text-slate-900 hover:bg-accent-hover"
                            }`}
                    >
                        {link.label}
                    </Link>
                })}
            </nav>
        </div>
    )
}


export default function SiteNavBar() {

    const { pathname } = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsReady(true);
            if (window.scrollY > 300) setIsScrolled(true);
        }, 100);

        function _scroll() {
            if (!isReady) return;
            if (window.scrollY > 300) setIsScrolled(true);
            else setIsScrolled(false);
        }

        window.addEventListener("scroll", _scroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", _scroll);
        };

    }, [isReady])


    return (
        <header className={`sticky top-0 z-100 flex items-center justify-between px-6 lg:px-8 ${isScrolled ? "py-3" : "py-4"} bg-white border-b border-gray-100 transition-all duration-200`}>
            <Link to="/" className="flex items-center gap-2 shrink-0">
                <div className="flex items-center justify-center rounded-md bg-[#D4F870] w-7 h-7">
                    <span className="text-slate-900 font-extrabold text-base leading-none">C</span>
                </div>
                <span className="text-lg font-extrabold tracking-tight text-slate-800">CherryVille</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 text-sm">
                {NAV_LINKS.map(link => {
                    const active = pathname === link.to;
                    return <Link key={link.label} to={link.to}
                        className={`px-3.5 ${isScrolled ? "py-1" : "py-2"} rounded-full font-medium transition-colors whitespace-nowrap ${active
                            ? "bg-slate-100 text-slate-900" : "text-gray-500 hover:text-slate-900 hover:bg-gray-50 hover:underline"
                            }`}>{link.label}</Link>
                })}
            </nav>

            {menuOpen && <DropDown />}

            <div className="flex items-center justify-center gap-3">
                <Link to="/contact" className={`hidden sm:inline-flex items-center justify-center px-4 ${isScrolled ? "py-1.75" : "py-2"} rounded-full bg-accent hover:bg-brand-hover text-slate-900 text-sm font-semibold transition-all duration-300 shadow-sm whitespace-nowrap`}>
                    Get Started
                </Link>

                <button className="lg:hidden h-10 w-10 flex items-center justify-center" onClick={() => setMenuOpen(p => !p)}
                    aria-label="Toggle Menu" aria-expanded={menuOpen}>
                    <span className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`} />
                </button>
            </div>
        </header>
    )
}