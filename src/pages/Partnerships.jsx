import React from "react";
import SiteNavBar from "../components/SiteNavBar";
import PartnershipsHero from "../components/partnerships/PartnershipsHero";
import PartnershipOfferingsSection from "../components/partnerships/PartnershipOfferingsSection";
import PartnershipsCTASection from "../components/partnerships/PartnershipsCTASection";
import CherryVilleFooter from "../components/CherryVilleFooter";

export default function Partnerships() {
  return (
    <>
      <SiteNavBar />
      <PartnershipsHero />
      <PartnershipOfferingsSection />
      <PartnershipsCTASection />
      <CherryVilleFooter />
    </>
  );
}