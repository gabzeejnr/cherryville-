export function addDot(text: string) {
    const t = text.trim();
    const l = t.length;
    let p: string;

    if (t.charAt(l - 1) === ".") {
        p = t
    } else {
        p = t + "."
    }

    return p
}