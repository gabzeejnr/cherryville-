import Section from "../Section";
import { sectorsServed } from "../../data";
import type { Serve } from "../../types";
import styles from "./Home.module.scss";

function Card({ sector }: { sector: Serve }) {

    const { title, text } = sector;
    const { icon: Icon, bgColor } = sector.icon

    return (
        <div className="rounded-2xl py-7 overflow-hidden shadow-sm bg-white text-black flex flex-col gap-4 p-4 items-start justify-center h-50">
            <div className={styles["icon-wrap"]} style={{ background: bgColor }}>
                <Icon color="white" />
            </div>
            <p className="text-sm">
                <span className="font-semibold text-[15px]">{title}: </span>
                {text}
            </p>
        </div>
    )
}

export default function SectorsWeServe() {
    return (
        <Section className="px-3 md:px-5 py-20" title="We Work Where Technical Capabilities Carry Weight"
            subtitle="Different sectors buy training for different reasons. We build the programme around yours.">
            <div className="mt-10 md:mt-15 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {sectorsServed.map((sec, i) => <div data-aos="slide-right" data-aos-delay={i * 300} key={sec.text}>
                    <Card sector={sec} />
                </div>)}
            </div>
        </Section>
    )
}