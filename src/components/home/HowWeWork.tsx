import { Link } from "react-router-dom";
import Section from "../Section";
import imageCover from "../../assets/images/home/main-hero-bg.jpg";

type HoverCardType = {
    background: string,
    title: string,
    text: string,
    top?: string,
    bottom?: string,
    left?: string,
    right?: string
}


function HoverCard({ background, title, text, top, bottom, left, right }: HoverCardType) {

    const cardStyle: React.CSSProperties = {
        background,
        position: "absolute",
        top,
        bottom,
        left,
        right
    }

    return (
        <div className="rounded-2xl shadow-xl p-5 text-white" style={cardStyle}>
            <div className="text-3xl font-bold" style={{fontFamily: "Outfit, sans-serif"}}>{title}</div>
            <div className="text-sm opacity-80 mt-0.5">{text}</div>
        </div>
    )
}

export default function HowWeWork() {
    return (
        <Section>
            <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="flex-1">
                    <div className="flex flex-col gap-10">
                        <p className="flex justify-center lg:justify-start text-3xl font-bold">A method, not a menu</p>
                        <div className="flex flex-col gap-5 text-center lg:text-left" data-aos="zoom-in">
                            <p className="text-wrap text-base font-medium text-gray-500">
                                Every cherryville programme runs through three governed phases; Definition, Delivery and Closure: with formal assurance gates between them.
                                We agree the capability gap before we design anything, we measure movement while the program is live, and we close with ecvidence rather than a cerificate ceremony.
                            </p>
                            <p className="text-wrap text-base font-medium text-gray-500">It is a slower conversion at the start.
                                It is the reason our programmes hold up when the training ends.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start mt-10" data-aos="flip-right">
                        <Link to={{
                            pathname: "/enterprise-training",
                            hash: "#delivery-standard"
                        }}>
                            <button type="button" className="bg-accent px-3 py-2 cursor-pointer text-white rounded-full hover:bg-accent-hover">See how we deliver</button></Link>
                    </div>
                </div>
                <div className="flex-1 relative">
                    {/* <HoverCard title="Test" text="Test Text" background="green" right="-10px" top="-10px" /> */}
                    <div className="w-fit h-fit rounded-4xl overflow-hidden shadow-xl">
                        <img src={imageCover} />
                    </div>
                    {/* <HoverCard title="Test Two" text="Testing this again" background="blue"
                        bottom="-1rem" left="-1rem" /> */}
                </div>
            </div>
        </Section>
    )
}