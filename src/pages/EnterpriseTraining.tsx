import { useState } from "react";
import useDocumentMeta from "../hooks/documentMetaData.hook";
import Closing from "../components/enterprise-training/Closing";
import DeliveryFormat from "../components/enterprise-training/DeliveryFormat";
import DeliveryStandard from "../components/enterprise-training/DeliveryStandard";
import Hero from "../components/enterprise-training/Hero";
import Introduction from "../components/enterprise-training/Intorduction";
import ServiceLines from "../components/enterprise-training/ServiceLines";
import RequestAProposal from "../components/forms/RequestAProposal";

export default function EnterpriseTraining() {

    const [isOpen, setIsOpen] = useState(false);

    useDocumentMeta({
        title: "Corporate Technical Training in Nigeria",
        description: "Cohort-based technical training, custom curriculum design, capability assessment and white-label delivery for organisations across Nigeria."
    })
    // useGoToTopOnLoad("enterprise-training");

    return (
        <>
            <Hero setIsOpen={setIsOpen} />
            <Introduction />
            <ServiceLines />
            <DeliveryStandard />
            <DeliveryFormat />
            <Closing setIsOpen={setIsOpen} />
            {isOpen && <RequestAProposal setIsOpen={setIsOpen} />}
        </>
    )
}