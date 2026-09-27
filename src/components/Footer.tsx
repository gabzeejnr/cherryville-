import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"

type Social = {
    id: string,
    icon: IconDefinition,
    link: string
}

type FootLink = { title: string, links: { text: string, href: string }[]}

function SocialLink({ social }: { social: Social }) {
    return (
        <a href={social.link} target="_blank">
            <div className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white hover:text-accent hover:border-accent transition">
                <FontAwesomeIcon icon={social.icon} />
            </div>
        </a>
    )
}

function FooterLinks({ title, links }: FootLink ) {
    return (
        <div>
            <p className="text-xs font-bold text-[#D4F870] tracking-[0.15em] mb-5">{title.toUpperCase()}</p>

            <ul className="space-y-3">
                {links.map(link => <li key={link.text}>
                    <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition">{link.href}</Link>
                </li>)}
            </ul>
        </div>
    )
}

export default function Footer() {

    const socials: Social[] = [
        {
            id: "message",
            icon: faWhatsapp,
            link: "https://somekindofwhatsappurl.com"
        },
        {
            id: "email",
            icon: faEnvelope,
            link: "mailto:gabrieldodowei@gmail.com"
        },
        {
            id: "linkedIn",
            icon: faLinkedin,
            link: "https://I_dont_know_linkedin_url.com"
        },
        {
            id: "x",
            icon: faTwitter,
            link: "https://x.com/gabzeejnr"
        }
    ];

    const footerLinks:FootLink[] = [
        {
            title: "Programs",
            links: [
                {
                    text: "Data Analytics & Data Science",
                    href: ``
                }
            ]
        }
    ]

    return (
        <footer className="relaive bg-[#0A1628]">
            <div className="flex flex-col md:flex-row mx-auto px-6 lg:px-12 py-16">
                <div>
                    <div className="flex items-center gap-2.5 mb-4">
                        <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: "#D4F870" }}>
                            <span className="text-slate-950 font-extrabold text-base leading-none">C</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">Cherryville</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">Emowering Growth Through Learning</p>
                    <div className="flex items-center gap-3">
                        {socials.map(social => <SocialLink social={social} />)}
                    </div>
                </div>


            </div>
        </footer>
    )
}