import { useState } from "react";
import useDocumentMeta from "../hooks/documentMetaData.hook";
import { useGoToTopOnLoad } from "../hooks/load.hook";
import Hero from "../components/talent-solutions/Hero";
import Positioning from "../components/talent-solutions/Positioning";
import ServiceLines from "../components/talent-solutions/ServiceLines";
import Engagement from "../components/talent-solutions/Engagement";
import RequestAProposal from "../components/forms/RequestAProposal";
import CTA from "../components/talent-solutions/CTA";

export default function TalentSolutions() {

    const [isOpen, setIsOpen] = useState(false)

    useDocumentMeta({
        title: "Tech Talent Solutions & Staff Augmentation in Nigeria",
        description: "Embedded technical specialists, trained-to-specification talent, and project delivery teams for organisations across Nigeria."
    })
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