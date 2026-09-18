import React from "react";
import SiteNavBar from "../components/SiteNavBar";
import ContactHero from "../components/contact/ContactHero";
import ContactFormSection from "../components/contact/ContactFormSection";
import CherryVilleFooter from "../components/CherryVilleFooter";

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