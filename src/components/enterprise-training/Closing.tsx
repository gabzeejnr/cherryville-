import { Dispatch, SetStateAction } from "react";
import styles from "./Enterprise.module.scss";

export default function Closing({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <section className={styles.hero}>
            <div className="py-10 px-5 flex flex-col gap-6 items-center justify-center text-center">
                <h1 className="leading-10 lg:leading-15 font-bold text-3xl">Send us the <span className="text-[#d4f870]">capability</span> gap. We will return a <span className="text-[#d4f870]">scoped programme</span>, a delivery <span className="text-[#d4f870]">timeline</span> and a price, not a <span className="text-[#d4f870]">brochure.</span></h1>
                <div>
                    <button type="button" onClick={() => setIsOpen(prev => !prev)}
                        className="bg-accent px-4 inline-flex items-center justify-center gap-3 py-3 rounded-full cursor-pointer w-full">
                        <span className="min-w-fit">Request a Proposal</span><span>&rarr;</span>
                    </button>
                </div>
            </div>
        </section>
    )
}