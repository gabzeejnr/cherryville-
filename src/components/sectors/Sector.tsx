import { useState } from "react";
import useTitle from "../../hooks/title.hook";
import RequestAProposal from "../forms/RequestAProposal";
import Challenge from "./Challenge";
import Engage from "./Engage";
import Hero from "./Hero";
import HowWeHelp from "./HowWehelp";
import type { Template } from "./Sectors.types";
import { useGoToTopOnLoad } from "../../hooks/load.hook";
import RequestAProposalButton from "../RequestAProposalButton";

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
                <RequestAProposalButton setIsOpen={setIsOpen} />
            </div>
            {isOpen && <RequestAProposal setIsOpen={setIsOpen} />}
        </div>
    )
}