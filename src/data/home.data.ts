import { TextSearch, Users, GraduationCap, Dome, Activity, Banknote } from "lucide-react";
import { microsoft, amdocs, ey, ibm, infosys, kpmg } from "../libs";
import type { Marquee, Doings, Serve } from "../types/home.types";

const marquee: Marquee[] = [
    {
        image: microsoft,
        name: "Microsoft"
    },
    {
        image: amdocs,
        name: "Amdocs"
    },
    {
        image: ey,
        name: "ey"
    },
    {
        image: ibm,
        name: "ibm"
    },
    {
        image: infosys,
        name: "infosys"
    },{
        image: kpmg,
        name: "kpmg"
    }
]

const doings: readonly Doings[] = [
    {
        title: "Enterprise Training",
        text: "Technical training for your workforce; scoped to your operating environment, delivered by certified trainers, and evidenced with assessment data your executive team can act on.",
        icon: {
            icon: TextSearch,
            bgColor: "teal"
        },
        headingColor: "#132A3E",
        link: {
            text: "Explore Enterprise Training",
            href: "/enterprise-training"
        }
    },
    {
        title: "Talent Solutions",
        text: "Skilled technical people, supplied to your specifications. Embed a specialist in your team, commission talents trained to your standard, or engage a full delivery team for a defined scope.",
        icon: {
            icon: Users,
            bgColor: "green"
        },
        headingColor: "#0E2B1F",
        link: {
            text: "Explore Talent Solutions",
            href: "/talent-solutions"
        }
    },
    {
        title: "Cherryville Academy",
        text: "Career-focused courses for individuals, from complete beginner to advanced practitioner. Every course is built around a job you can name.",
        icon: {
            icon: GraduationCap,
            bgColor: "purple"
        },
        headingColor: "#2A1330",
        link: {
            text: "Browse Courses",
            href: "/academy"
        }
    }
] as const;

const sectorsServed: readonly Serve[] = [
    {
        title: "Oil & Gas",
        text: "turning operational and production data into decisions, and securing the environments that generate it.",
        icon: {
            icon: Activity,
            bgColor: "purple"
        }
    },
    {
        title: "Banking & Financial Services",
        text: "analytics, security operations and the automation of manual back-office work.",
        icon: {
            icon: Banknote,
            bgColor: "green"
        }
    },
    {
        title: "Government & Public Sector",
        text: "digital capability across large workforces, and data that supports policy.",
        icon: {
            icon: Dome,
            bgColor: "blue"
        }
    },
    {
        title: "NGOs & Development Partners",
        text: "employability programmes and staff capability, measured against your results framework.",
        icon: {
            icon: Users,
            bgColor: "brown"
        }
    }
] as const;



export { marquee, doings, sectorsServed }