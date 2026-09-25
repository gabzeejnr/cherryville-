import useDocumentMeta from "../../hooks/documentMetaData.hook";
import { useGoToTopOnLoad } from "../../hooks/load.hook";
import CourseFinder from "../../components/academy/index/CourseFinder";
import Hero from "../../components/academy/index/Hero";
import ThreeLevels from "../../components/academy/index/ThreeLevels";
import WhyCherryville from "../../components/academy/index/WhyCherryville";
import CTA from "../../components/academy/CTA";
import AcademyWhatsapp from "../../components/academy/Whatsapp";

export default function Academy() {

    useDocumentMeta({
        title: "Tech Courses in Lagos | Beginner to Advanced",
        description: "Career-focused technical courses for individuals in Nigeria. Start with no experience or specialise at advanced level. Every course is built around a named job role."
    })
    useGoToTopOnLoad("academy");

    return (
        <>
            <Hero />
            <CourseFinder />
            <ThreeLevels />
            <WhyCherryville />
            <CTA subtitle="Speak to an advisor before you enrol. It takes ten minutes and it saves you from paying for the wrong course.">
                <AcademyWhatsapp text="Hello! I'm interested in learning more about Cherryville Limited's programs." />
            </CTA>
        </>
    )
}