import React from "react";
import SiteNavBar from "../components/layout/SiteNavBar";
import InsightsHero from "../components/insights/InsightsHero";
import InsightsCategoriesSection from "../components/insights/InsightsCategoriesSection";
import FreeResourceSection from "../components/insights/FreeResourceSection";
import CherryVilleFooter from "../components/layout/CherryVilleFooter";

export default function Insights() {
  return (
    <>
      <SiteNavBar />
      <InsightsHero />
      <InsightsCategoriesSection />
      <FreeResourceSection />
      <CherryVilleFooter />
    </>
  );
}