import type { Dispatch, SetStateAction } from "react";

export function RequestAProposalButton({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <button type="button" onClick={() => setIsOpen(p => !p)}
            className="bg-accent hover:bg-accent-hover cursor-pointer px-3 py-2 rounded-full text-white font-medium"
        >Request a Proposal</button>
    )
}

export function AccentButton({ text, onClick }: {
    text: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}) {
    return (
        <button data-aos="flip-right" className="bg-accent hover:bg-accent-hover text-white px-3 py-2 rounded-full font-medium cursor-pointer"
            onClick={onClick}>{text}</button>
    )
}