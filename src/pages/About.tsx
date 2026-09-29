import {useDocumentMeta} from "../hooks";
import Hero from "../components/about/Hero";
import HowWeAewStructured from "../components/about/HowWeAreStructured";
import Founder from "../components/about/Founder";

export default function About() {

    useDocumentMeta({
        title: "About Cherryville Limited | Tech Training & Talent, Lagos ",
        description: "Cherryville Limited is a Lagos-based education technology and capacity development company delivering technical training and talent solutions across Nigeria."
    })

    return (
        <>
            <Hero />
            <HowWeAewStructured />
            <Founder />
        </>
    );
}