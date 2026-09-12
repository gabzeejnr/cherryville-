import React from "react";
import SiteNavBar from "../components/layout/SiteNavBar";
import ContactHero from "../components/contact/ContactHero";
import ContactFormSection from "../components/contact/ContactFormSection";
import CherryVilleFooter from "../components/layout/CherryVilleFooter";

export default function Contact() {
  return (
    <>
      <SiteNavBar />
      <ContactHero />
      <ContactFormSection />
      <CherryVilleFooter />
    </>
  );
}