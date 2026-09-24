import Section from "../../Section";
import AcademyWhatsapp from "../Whatsapp";

export default function CTA() {
    return (
        <Section subtitle="Speak to an advisor before you enrol. It takes ten minutes and it saves you from paying for the wrong course.">
            <div className="flex justify-center mt-5">
                <AcademyWhatsapp text="Hello! I'm interested in learning more about Cherryville Limited's programs." />
            </div>
        </Section>
    )
}