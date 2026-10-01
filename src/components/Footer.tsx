import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerLinks, socials } from "../data/footer.data";
import type { FootLink, Social } from "../types/global.types";
import { image } from "../data";


function SocialLink({ social }: { social: Social }) {
    return (
        <a href={social.link} target="_blank">
            <div className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white hover:text-cherry hover:border-accent transition">
                <FontAwesomeIcon icon={social.icon} />
            </div>
        </a>
    )
}

function FooterLinks({ title, links }: FootLink) {
    return (
        <div>
            <p className="text-xs font-bold text-accent tracking-[0.15em] mb-5">{title.toUpperCase()}</p>

            <ul className="space-y-3">
                {links.map(link => <li key={link.text} className="w-fit py-0.5">
                    {link.href === null
                        ? <span className="text-gray-400 text-sm">{link.text}</span>
                        : <Link to={link.href} className="text-gray-400 hover:text-accent text-sm transition">
                            <span className="flex gap-1 items-center">
                                {link.icon && <FontAwesomeIcon icon={link.icon} />}
                                {link.text}
                            </span>
                        </Link>
                    }
                </li>)}
            </ul>
        </div>
    )
}

export default function Footer() {

    return (
        <footer className="relative bg-[#0A1628]">
            <div className="flex flex-col gap-10 md:gap-15 lg:gap-20 md:flex-row md:items-center lg:justify-center-safe mx-auto px-6 lg:px-12 py-16">
                <div>
                    <div className="flex items-center gap-2.5 mb-4">
                        <div className="w-10 h-10 bg-cherry rounded-md overflow-hidden flex items-center justify-center">
                            <img src={image} className="h-full w-full object-contain" />
                        </div>
                        <span className="flex flex-col text-lg font-extrabold tracking-tight text-white">
                            CherryVille
                            <span className="text-accent text-xs -mt-1">Limited</span>
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">Empowering Growth Through Learning</p>
                    <div className="flex items-center gap-3">
                        {socials.map(social => <SocialLink key={social.id} social={social} />)}
                    </div>
                </div>

                <div className="grid gap-10 md:gap-15 sm:grid-cols-2 lg:grid-cols-3">
                    {footerLinks.map(foot => <FooterLinks key={foot.title} title={foot.title} links={foot.links} />)}
                </div>
            </div>

            <div className="md:mx-10 md:px-5 lg:mx-30 pb-5 md:pb-10 border-t border-white/10 mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-gray-500">&copy; 2026 Cherryville Limited. All rights reserved.</p>
                <div className="flex items-center gap-6 text-xs text-gray-400">
                    <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
                </div>
            </div>
        </footer>
    )
}