import Section from "../../Section";
import { whyCherryville } from "../data";

export default function WhyCherryville() {
    return (
        <Section bg="black" title="Why Cherryville?">
            <ul>
                {whyCherryville.map(why => <li>{why.trim()}</li>)}
            </ul>
        </Section>
    )
}