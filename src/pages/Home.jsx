import Hero from '../components/home/Hero';
import Marquee from '../components/home/PartnersMarquee';
import WhatDoWeDo from '../components/home/WhatDoWeDo.tsx';
import SectorsWeServe from '../components/home/SectorsWeServe.tsx';
import HowWeWork from '../components/home/HowWeWork.tsx';
import AcademyTeaser from '../components/home/AcademyTeaser.tsx';
import Closing from '../components/home/Closing.tsx';

export default function Home() {
    return (
        <>
            <Hero />
            <Marquee />
            <WhatDoWeDo />
            <SectorsWeServe />
            <HowWeWork />
            <AcademyTeaser />
            <Closing />
        </>
    )
}
