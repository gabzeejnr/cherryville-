import Challenge from "./Challenge"
import Engage from "./Engage"
import Hero from "./Hero"
import HowWeHelp from "./HowWehelp"
import type { Template } from "./Sectors.types"

export default function SectorTemplate({
    heading,
    headingText,
    challenge,
    help,
    engage
}: Template) {
    return (
        <div className="bg-cherry pb-10">
            <Hero heading={heading} heroText={headingText} />
            <Challenge challenge={challenge} />
            <HowWeHelp help={help} />
            <Engage engage={engage} />
            <div className="flex justify-center-safe">
                <button type="button" className="bg-accent px-3 py-2 rounded-full cursor-pointer hover:bg-accent-hover">Request a  Proposal</button>
            </div>
        </div>
    )
}