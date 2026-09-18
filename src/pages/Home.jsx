import Hero from '../components/home/Hero'
import Marquee from '../components/home/PartnersMarquee'
import WhatDoWeDo from '../components/home/WhatDoWeDo.tsx'
import OurFocusSection from '../components/home/OurFocusSection.tsx'
import PlatformsSection from '../components/shared/ProgramsSection'
import WhyCherryvilleSection from '../components/home/WhyCherryvilleSection'
import WhoWeServeSection from '../components/home/WhoWeServeSection'
import ReadyToGrowSection from '../components/home/ReadyToGrowSection'
import SectorsWeServe from '../components/home/SectorsWeServe.tsx'

export default function Home() {
    return (
        <>
            <Hero />
            <Marquee />
            <WhatDoWeDo />
            <SectorsWeServe />
            <OurFocusSection />
            <PlatformsSection />
            <WhyCherryvilleSection />
            <WhoWeServeSection />
            <ReadyToGrowSection />
        </>
    )
}
