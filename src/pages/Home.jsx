import { useState } from 'react';
import Hero from '../components/home/Hero';
import Marquee from '../components/home/PartnersMarquee';
import WhatDoWeDo from '../components/home/WhatDoWeDo.tsx';
import SectorsWeServe from '../components/home/SectorsWeServe.tsx';
import HowWeWork from '../components/home/HowWeWork.tsx';
import AcademyTeaser from '../components/home/AcademyTeaser.tsx';
import Closing from '../components/home/Closing.tsx';
import RequestAProposal from '../components/forms/RequestAProposal.tsx';
import useDocumentMeta from '../hooks/documentMetaData.hook';
import { useGoToTopOnLoad } from '../hooks/load.hook.tsx';

export default function Home() {

    const [isOpen, setIsOpen] = useState(false);

    useDocumentMeta({
        title: "Cherryville Limited | Corporate Tech Training & Talent Solutions in Nigeria",
        description: "Technical training and skilled tech talent for organisations in oil and gas, banking, government and the development sector. Delivered by Microsoft Certified Trainers."
    })
    useGoToTopOnLoad();

    return (
        <>
            <Hero setIsOpen={setIsOpen} />
            <Marquee />
            <WhatDoWeDo />
            <SectorsWeServe />
            <HowWeWork />
            <AcademyTeaser />
            <Closing setIsOpen={setIsOpen} />
            {isOpen && <RequestAProposal setIsOpen={setIsOpen} />}
        </>
    )
}
