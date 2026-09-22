import { useState } from 'react';
import Hero from '../components/home/Hero';
import Marquee from '../components/home/PartnersMarquee';
import WhatDoWeDo from '../components/home/WhatDoWeDo.tsx';
import SectorsWeServe from '../components/home/SectorsWeServe.tsx';
import HowWeWork from '../components/home/HowWeWork.tsx';
import AcademyTeaser from '../components/home/AcademyTeaser.tsx';
import Closing from '../components/home/Closing.tsx';
import RequestAProposal from '../components/forms/RequestAProposal.tsx';

export default function Home() {

    const [isOpen, setIsOpen] = useState(false);

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
