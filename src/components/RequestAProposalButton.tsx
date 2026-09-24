import type { Dispatch, SetStateAction } from "react";

export default function RequestAProposalButton({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <button type="button" onClick={() => setIsOpen(true)}
            className="bg-accent hover:bg-accent-hover cursor-pointer px-3 py-2 rounded-full text-white font-medium"
        >Request a Proposal</button>
    )
}