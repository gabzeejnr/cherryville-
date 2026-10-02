import Section from "../Section";
import { sectorsServed } from "../../data";
import type { Serve } from "../../types";
import styles from "./Home.module.scss";

function Card({ sector }: { sector: Serve }) {
    const { title, text } = sector;
    const { icon: Icon, bgColor } = sector.icon;

    return (
        <article className={styles.sectorCard}>
            <div className={styles.sectorIcon} style={{ background: bgColor }}>
                <Icon color="white" />
            </div>

            <p className={styles.sectorText}>
                <span>{title}: </span>
                {text}
            </p>
        </article>
    );
}

export default function SectorsWeServe() {
    return (
        <Section className="px-3 md:px-5 py-20" title="We Work Where Technical Capabilities Carry Weight"
            subtitle="Different sectors buy training for different reasons. We build the programme around yours.">
            <div className={styles.sectorGrid}>
                {sectorsServed.map((sector, i) => (
                    <div data-aos="slide-right" data-aos-delay={i * 300} key={sector.text}>
                        <Card sector={sector} />
                    </div>
                ))}
            </div>
        </Section>
    );
}