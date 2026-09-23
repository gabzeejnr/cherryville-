import { useState } from "react";
import useTitle from "../../hooks/title.hook";
import RequestAProposal from "../forms/RequestAProposal";
import Challenge from "./Challenge";
import Engage from "./Engage";
import Hero from "./Hero";
import HowWeHelp from "./HowWehelp";
import type { Template } from "./Sectors.types";
import { useGoToTopOnLoad } from "../../hooks/load.hook";

export default function SectorTemplate({
    route,
    heading,
    headingText,
    challenge,
    help,
    engage
}: Template) {

    const title = route;
    const [isOpen, setIsOpen] = useState(false)

    useTitle(title);
    useGoToTopOnLoad(`sectors/${title}`)


    return (
        <div className="bg-cherry pb-10">
            <Hero heading={heading} heroText={headingText} />
            <Challenge challenge={challenge} />
            <HowWeHelp help={help} />
            <Engage engage={engage} />
            <div className="flex justify-center-safe">
                <button type="button" className="bg-accent px-3 py-2 rounded-full cursor-pointer hover:bg-accent-hover"
                    onClick={() => setIsOpen(p => !p)}>Request a  Proposal</button>
            </div>
            {isOpen && <RequestAProposal setIsOpen={setIsOpen} />}
        </div>
    )
}