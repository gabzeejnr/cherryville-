import { Link } from "react-router-dom";
import Section from "../Section";
import { classroom } from "../../libs";

export default function AcademyTeaser() {
    return (
        <Section bg="bg-cherry">
            <div className="grid lg:grid-cols-2 items-center-safe gap-5">
                <div className="">
                    <div className="flex flex-col gap-5">
                        <p className="flex justify-center text-3xl font-bold text-center">Not here on behalf of an organisation?</p>
                        <p className="text-center text-lg font-medium text-text" data-aos="zoom-in">
                            Cherryville academy runs courses for individuals at every level; including for people who have never worked in tech before.
                            <br />
                            {" "}
                            Tell us what interests you and we will point you to one course, not a catalogue.
                        </p>
                    </div>
                    <div className="flex justify-center mt-10" data-aos="flip-left">
                        <Link to="/academy" className="bg-accent hover:bg-accent-hover text-white px-3 py-2 rounded-full font-medium cursor-pointer">Find your course</Link>
                    </div>
                </div>
                <div className="rounded-4xl overflow-hidden"
                    data-aos="slide-left">
                    <div className="overflow-hidden bg-white p-4">
                        <img src={classroom} alt="Teaching" className="rounded-4xl" />
                    </div>
                </div>
            </div>
        </Section>
    )
}