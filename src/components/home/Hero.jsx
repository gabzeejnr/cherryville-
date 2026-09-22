import { ArrowRight } from "lucide-react";
import styles from "./Home.module.scss";

function MainHero({ setIsOpen }) {
    return (
        <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-4 pb-14 text-center max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6b9d88]/40 bg-[#163833]/60 backdrop-blur-sm text-[#a5e076] text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-10 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4f870] inline-block" />
                <span className={`${styles.typing}`}>MICROSOFT LEARNING PARTNER</span>
            </div>

            <h1 className="leading-10 lg:leading-15 font-bold text-3xl">
                Build the <span className="text-[#d4f870]">Technical Capability</span> <br className="hidden sm:inline" />
                your <span className="text-[#d4f870]">Business</span> Runs On
            </h1>

            <p className="text-base sm:text-lg text-gray-300/90 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">Cherryville designs and deliver techncal training for organizations
                across oil and gas, banking, government and the development sector
                — and supplies the skilled talent to keep the work moving.
            </p>

            <div className="flex flex-col sm:flex-row mt-5 items-center gap-4 w-full sm:w-auto">
                <button type="button" onClick={() => setIsOpen(prev => !prev)}
                    className="bg-accent px-4 inline-flex items-center justify-center gap-2 py-3 rounded-full cursor-pointer w-full">
                    <span className="min-w-fit">Request a Proposal</span><ArrowRight size="20" />
                </button>
                <button type="button"
                    className="bg-heading-secondary px-4 inline-flex items-center justify-center gap-3 py-3 rounded-full cursor-pointer w-full">Explore Our Services</button>
            </div>
        </main>
    )
}

function Stats() {

    const METRICS = [
        { value: "10M+", label: "Individuals Trained" },
        { value: "800+", label: "Technology Courses" },
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

export default function Hero({ setIsOpen }) {
    return (
        <section className={styles.hero}>
            <div className="flex flex-col min-h-screen py-10">
                <MainHero setIsOpen={setIsOpen} />
                <div className="mt-auto">
                    <Stats />
                </div>
            </div>
        </section>
    )
}