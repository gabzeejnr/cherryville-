import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import type { Dispatch, SetStateAction } from "react";
import styles from "./Home.module.scss";

function MainHero({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <main className={styles.main}>
            <span className={styles.eyebrow}>
                Enterprise Capability & Talent
            </span>

            <h1 className={styles.heading}>
                Build the{" "}
                <span>Technical Capability</span>{" "}
                your <strong>Business</strong> Runs On
            </h1>

            <p className={styles.description}>
                Cherryville designs and delivers technical training for
                organizations across oil and gas, banking, government and the
                development sector — and supplies the skilled talent to keep
                the work moving.
            </p>

            <div className={styles.actions}>
                <button type="button"
                    onClick={() => setIsOpen(p => !p)} className={styles.primaryButton}>
                    <span>Request a Proposal</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>

                <button type="button" className={styles.secondaryButton}>
                    Explore Our Services
                </button>
            </div>
        </main>
    );
}

function Stats() {

    const METRICS = [
        { value: "1K+", label: "Individuals Trained" },
        { value: "20+", label: "Technology Courses" },
        { value: "80+", label: "Learning Experiences" },
        { value: "100+", label: "Training Experts" },
    ];

    return (
        <div className={styles.stats}>
            {METRICS.map(metric => (
                <div key={metric.label} className={styles.stat}>
                    <span className={`${styles.statValue} count`}>{metric.value}</span>

                    <span className={styles.statLabel}>{metric.label}</span>
                </div>
            ))}
        </div>
    );
}

export default function Hero({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <section className={styles.hero}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <MainHero setIsOpen={setIsOpen} />
                </div>
                <Stats />
            </div>
        </section>
    );
}