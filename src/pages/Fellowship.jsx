import React from "react";
import SiteNavBar from "../components/SiteNavBar";
import FellowshipHero from "../components/fellowship/FellowshipHero";
import FellowshipDetailsSection from "../components/fellowship/FellowshipDetailsSection";
import ProgramStructureSection from "../components/fellowship/ProgramStructureSection";
import FellowshipApplySection from "../components/fellowship/FellowshipApplySection";
import CherryVilleFooter from "../components/CherryVilleFooter";

export default function Fellowship() {
  return (
    <>
      <SiteNavBar />
      <FellowshipHero />
      <FellowshipDetailsSection />
      <ProgramStructureSection />
      <FellowshipApplySection />
      <CherryVilleFooter />
    </>
  );
}