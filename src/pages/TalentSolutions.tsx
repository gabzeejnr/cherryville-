import { useState } from "react";
import { useGoToTopOnLoad } from "../hooks/load.hook";
import useTitle from "../hooks/title.hook"
import Hero from "../components/talent-solutions/Hero";
import Positioning from "../components/talent-solutions/Positioning";
import ServiceLines from "../components/talent-solutions/ServiceLines";
import Engagement from "../components/talent-solutions/Engagement";
import RequestAProposal from "../components/forms/RequestAProposal";
import CTA from "../components/talent-solutions/CTA";

export default function TalentSolutions() {

    const [isOpen, setIsOpen] = useState(false)

    useTitle("Talent Solutions");
    useGoToTopOnLoad("talent-solutions");

    return (
        <>
            <Hero setIsOpen={setIsOpen} />
            <Positioning />
            <ServiceLines />
            <Engagement />
            <CTA setIsOpen={setIsOpen} />
            {isOpen && <RequestAProposal setIsOpen={setIsOpen} />}
        </>
    )
}