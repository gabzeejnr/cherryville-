import { Dispatch, SetStateAction } from "react";
import styles from "./Enterprise.module.scss";
import RequestAProposalButton from "../RequestAProposalButton";

export default function Closing({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <section className={`${styles.hero} h-screen`}>
            <div className="py-10 px-5 flex h-full flex-col gap-6 items-center justify-center text-center">
                <h1 className="leading-10 lg:leading-15 font-bold text-3xl">Send us the <span className="text-[#d4f870]">capability</span> gap. We will return a <span className="text-[#d4f870]">scoped programme</span>, a delivery <span className="text-[#d4f870]">timeline</span> and a price, not a <span className="text-[#d4f870]">brochure.</span></h1>
                <div>
                    <RequestAProposalButton setIsOpen={setIsOpen} />
                </div>
            </div>
        </section>
    )
}