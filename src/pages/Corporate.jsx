import React from "react";
import SiteNavBar from "../components/layout/SiteNavBar";
import CorporateHero from "../components/corporate/CorporateHero";
import CorporateSolutionsSection from "../components/corporate/CorporateSolutionsSection";
import HowWeWorkSection from "../components/corporate/HowWeWorkSection";
import CorporateCTASection from "../components/corporate/CorporateCTASection";
import CherryVilleFooter from "../components/layout/CherryVilleFooter";

export default function Corporate() {
  return (
    <>
      <SiteNavBar />
      <CorporateHero />
      <CorporateSolutionsSection />
      <HowWeWorkSection />
      <CorporateCTASection />
      <CherryVilleFooter />
    </>
  );
}