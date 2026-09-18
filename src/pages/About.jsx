import SiteNavBar from "../components/SiteNavBar";
import AboutHero from "../components/about/AboutHero";
import OurStorySection from "../components/about/OurStorySection";
import MissionVisionSection from "../components/about/MissionVisionSection";
import OurApproachSection from "../components/about/OurApproachSection";
import CherryVilleFooter from "../components/CherryVilleFooter";

export default function About() {
  return (
    <>
      <SiteNavBar />
      <AboutHero />
      <OurStorySection />
      <MissionVisionSection />
      <OurApproachSection />
      <CherryVilleFooter />
    </>
  );
}