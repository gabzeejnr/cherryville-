import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { serviceLines as talents } from "../data/talentSolutions.data";
import { serviceLines as enterprises } from "../data/enterpriseTraining.data";
import type { Dispatch, SetStateAction } from "react";
import type { Navlink } from "../types/global.types";
import styles from "./FootNav.module.scss";

const NAV_LINKS: Navlink[] = [
    {
        label: "Home",
        link: "/"
    },
    {
        label: "Enterprise Training",
        children: enterprises.map(enterprise => ({
            label: enterprise.title,
            link: `/enterprise-training#${enterprise.id}`
        }))
    },
    {
        label: "Talent Solutions",
        children: talents.map(talent => ({
            label: talent.title,
            link: `/talent-solutions#${talent.id}`
        }))
    },
    {
        label: "Academy",
        children: [
            {
                label: "Hub",
                link: "/academy"
            },
            {
                label: "Beginner",
                link: "/academy/beginner"
            },
            {
                label: "Intermediate",
                link: "/academy/intermediate"
            },
            {
                label: "Advanced",
                link: "/academy/advanced"
            },
            {
                label: "Private Training",
                link: "/academy/private-training"
            }
        ]
    },
    {
        label: "About Us",
        link: "/about"
    }
];

function DropDown({ setMenuOpen }: { setMenuOpen: Dispatch<SetStateAction<boolean>> }) {
    const { pathname } = useLocation();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <div className={`${styles.dropdown} lg:hidden`}>
            <nav className="flex flex-col px-4 py-6 gap-1">
                {NAV_LINKS.map(link => {
                    const active = pathname === link.link;
                    const hasChildren = !!link.children?.length;
                    const isOpen = openDropdown === link.label;

                    if (hasChildren) {
                        return (
                            <div key={link.label}>
                                <button onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                                    className="w-full px-4 py-4 rounded-xl text-sm font-medium text-gray-600 hover:text-white hover:bg-accent-hover text-left">
                                    {link.label}
                                </button>

                                {isOpen && (
                                    <div className="flex flex-col ml-4">
                                        {link.children!.map(child => {
                                            const activeChild = pathname === child.link;

                                            return (
                                                <Link key={child.label} to={child.link} onClick={() => setMenuOpen(false)}
                                                    className={`px-4 py-3 rounded-xl text-sm ${activeChild
                                                        ? "bg-accent text-slate-900"
                                                        : "text-gray-600 hover:text-slate-900 hover:bg-accent-hover"
                                                        }`}
                                                >{child.label}</Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    }

                    return (
                        <NavLink
                            key={link.label}
                            to={link.link!}
                            onClick={() => setMenuOpen(false)}
                            className={`px-4 py-4 rounded-xl text-sm font-medium transition-colors ${active
                                ? "bg-accent text-white"
                                : "text-gray-600 hover:text-white hover:bg-accent-hover"
                                }`}
                        >
                            {link.label}
                        </NavLink>
                    );
                })}
            </nav>
        </div>
    );
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
            <NavLink to="/" className="flex items-center gap-2 shrink-0">
                <div className="flex items-center justify-center rounded-md bg-[#D4F870] w-7 h-7">
                    <span className="text-slate-900 font-extrabold text-base leading-none">C</span>
                </div>
                <span className="text-lg font-extrabold tracking-tight text-slate-800">CherryVille</span>
            </NavLink>

            <nav className="hidden lg:flex items-center gap-1 text-sm">
                {NAV_LINKS.map(link => {
                    const active = pathname === link.link;

                    return (
                        <div key={link.label} className="relative group">
                            <Link to={link.link ?? "#"} className={`flex items-center gap-1 px-3.5 ${isScrolled ? "py-1" : "py-2"}
                             rounded-full font-medium transition-colors whitespace-nowrap ${active
                                    ? "bg-slate-100 text-slate-900"
                                    : "text-gray-500 hover:text-slate-900 hover:bg-gray-50"
                                }`}>{link.label}</Link>

                            {link.children && (
                                <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100
                                    group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                                    <div className="min-w-48 rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                                        {link.children.map(child => (
                                            <Link key={child.label} to={child.link} className=" block rounded-lg px-3 py-2.5 text-sm text-gray-600 transition-colors
                                            hover:bg-gray-50 hover:text-slate-900">
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>

            {menuOpen && <DropDown setMenuOpen={setMenuOpen} />}

            <div className="flex items-center justify-center gap-3">
                <Link to="/contact" className={` items-center justify-center px-4 ${isScrolled ? "py-1.75" : "py-2"} rounded-full bg-accent hover:bg-brand-hover text-slate-900 text-sm font-semibold transition-all duration-300 shadow-sm whitespace-nowrap`}>
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