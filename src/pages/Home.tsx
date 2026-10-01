import { useState } from 'react';
import { useDocumentMeta, useGoToTopOnLoad } from '../hooks';
import Hero from '../components/home/Hero';
import Marquee from '../components/home/PartnersMarquee';
import WhatDoWeDo from '../components/home/WhatDoWeDo';
import SectorsWeServe from '../components/home/SectorsWeServe';
import HowWeWork from '../components/home/HowWeWork';
import AcademyTeaser from '../components/home/AcademyTeaser';
import Closing from '../components/home/Closing';
import RequestAProposal from '../components/forms/RequestAProposal';

export default function Home() {

    const [isOpen, setIsOpen] = useState(false);

    useDocumentMeta({
        title: "Corporate Tech Training & Talent Solutions in Nigeria",
        description: "Technical training and skilled tech talent for organisations in oil and gas, banking, government and the development sector. Delivered by Microsoft Certified Trainers."
    })
    useGoToTopOnLoad("");

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
