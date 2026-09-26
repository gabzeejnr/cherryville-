export type Navlink = {
    label: string,
    link?: string
    children?:{
        label:string,
        link:string
    }[]
}