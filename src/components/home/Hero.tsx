import { ArrowRight } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import styles from "./Home.module.scss";

function MainHero({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <main className="">


            <h1 className="leading-10 lg:leading-15 font-bold text-3xl">
                Build the <span className="text-accent">Technical Capability</span> <br className="hidden sm:inline" />
                your <span className="text-accent">Business</span> Runs On
            </h1>

            <p className="text-base sm:text-lg text-gray-300/90 font-normal max-w-2xl mb-10 leading-relaxed">
                Cherryville designs and delivers technical training for organizations
                across oil and gas, banking, government and the development sector
                — and supplies the skilled talent to keep the work moving.
            </p>

            <div className="flex flex-col lg:flex-row gap-4 lg:max-w-130 sm:w-auto">
                <button type="button" onClick={() => setIsOpen(prev => !prev)}
                    className="bg-accent px-4 inline-flex items-center justify-center gap-2 py-3 rounded-full cursor-pointer w-full">
                    <span className="min-w-fit">Request a Proposal</span><ArrowRight size="20" />
                </button>
                <button type="button"
                    className="bg-heading-secondary px-4 inline-flex items-center justify-center gap-3 py-3 rounded-full cursor-pointer w-full">Explore Our Services</button>
            </div>

        </main >
    )
}

function Stats() {

    const METRICS = [
        { value: "1K+", label: "Individuals Trained" },
        { value: "20+", label: "Technology Courses" },
        { value: "80+", label: "Learning Experiences" },
        { value: "100+", label: "Training Experts" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto gap-8 text-center">
            {METRICS.map(m =>
                <div key={m.label} className="flex flex-col items-center p-3">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">{m.value}</span>
                    <span className="mt-2 text-xs sm:text-sm text-gray-400 font-normal">{m.label}</span>
                </div>
            )}
        </div>
    )
}

export default function Hero({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <section className={styles.hero}>
            <div className="flex flex-col h-screen md:max-h-250 z-50 border">
                <div className="flex items-center px-3 py-15 sm:px-7 md:px-10 lg:px-15 lg:h-[calc(100dvh-10rem)] border">
                    <MainHero setIsOpen={setIsOpen} />
                </div>
                <div className="mt-auto 2xl:mt-0">
                    <Stats />
                </div>
            </div>
        </section>
    )
}