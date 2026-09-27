import type { IconDefinition } from "@fortawesome/free-brands-svg-icons"


type Navlink = {
    label: string,
    link?: string
    children?: {
        label: string,
        link: string
    }[]
}

type FootLink = {
    title: string,
    links: {
        text: string,
        href: string | null,
        icon?: IconDefinition
    }[]
}

type Social = {
    id: string,
    icon: IconDefinition,
    link: string
}


export type { Navlink, FootLink, Social }