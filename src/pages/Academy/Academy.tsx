import useTitle from "../../hooks/title.hook";
import { useGoToTopOnLoad } from "../../hooks/load.hook";
import CourseFinder from "../../components/academy/index/CourseFinder";
import Hero from "../../components/academy/index/Hero";
import ThreeLevels from "../../components/academy/index/ThreeLevels";
import WhyCherryville from "../../components/academy/index/WhyCherryville";
import CTA from "../../components/academy/index/CTA";

export default function Academy(){

    useTitle("Academy")
    useGoToTopOnLoad("academy");

    return(
        <>
        <Hero />
        <CourseFinder />
        <ThreeLevels />
        <WhyCherryville />
        <CTA />
        </>
    )
}