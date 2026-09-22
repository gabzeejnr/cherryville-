export type Template = {
    heading: {
        text: string,
        highlights: string[]
    },
    headingText: string,
    challenge: string,
    help: {
        title: string,
        text: string
    }[],
    engage: string
}