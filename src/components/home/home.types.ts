import type { LucideIcon } from "lucide-react";

export type Doings = {
    title: string,
    text: string,
    icon: {
        icon: LucideIcon,
        bgColor: string,
        color?: string
    },
    headingColor: string,
    link: {
        text: string,
        href: string
    }
}

export type Serve = {
    title: string,
    text: string,
    icon: {
        icon: LucideIcon,
        bgColor: string
    }
}