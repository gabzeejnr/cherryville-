import React from "react";
import SiteNavBar from "../components/layout/SiteNavBar";
import ProgramsHero from "../components/programs/ProgramsHero";
import ProgramsSection from "../components/shared/ProgramsSection";
import TrainingFormatsSection from "../components/programs/TrainingFormatsSection";
import ProgramIncludesSection from "../components/programs/ProgramIncludesSection";
import ProgramsCTASection from "../components/programs/ProgramsCTASection";
import CherryVilleFooter from "../components/layout/CherryVilleFooter";

export default function Programs() {
  return (
    <>
      <SiteNavBar />
      <ProgramsHero />
      <ProgramsSection />
      <TrainingFormatsSection />
      <ProgramIncludesSection />
      <ProgramsCTASection />
      <CherryVilleFooter />
    </>
  );
}