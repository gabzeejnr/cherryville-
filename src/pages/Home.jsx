import SiteNavBar from '../components/layout/SiteNavBar'
import LogoRow from '../components/home/TrustedByMarquee'
import OurFocusSection from '../components/home/OurFocusSection'
import PlatformsSection from '../components/shared/ProgramsSection'
import WhyCherryvilleSection from '../components/home/WhyCherryvilleSection'
import WhoWeServeSection from '../components/home/WhoWeServeSection'
import ReadyToGrowSection from '../components/home/ReadyToGrowSection'
import CherryVilleFooter from '../components/layout/CherryVilleFooter'
import TechnofocusHero from '../components/home/Herosection'

export default function Home() {
  return (
    <>
      <SiteNavBar/>
      <TechnofocusHero/>
      <LogoRow/>
      <OurFocusSection/>
      <PlatformsSection/>
      <WhyCherryvilleSection/>
      <WhoWeServeSection/>
      <ReadyToGrowSection/>
      <CherryVilleFooter/>
    </>
  )
}
