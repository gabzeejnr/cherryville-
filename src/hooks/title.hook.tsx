import { useEffect } from "react";

export default function useTitle(title: string) {

    const chars = "-.|;, "
    const reg = new RegExp(`[${chars}]`)
    const parsedTitle: string[] = [];

    const parsed = title.split(reg);

    const small: string[] = ["and", "in", "of", "on"];

    parsed.forEach((t) => {
        if (small.includes(t.toLowerCase())) {
            parsedTitle.push(t)
        } else {
            const push = t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
            parsedTitle.push(push);
        }
    })


    useEffect(function () {
        document.title = `CherryVille - ${parsedTitle.join(" ")}`
    }, [document.title])

}