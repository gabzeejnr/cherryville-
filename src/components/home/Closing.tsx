import type { Dispatch, SetStateAction } from "react";
import RequestAProposalButton from "../RequestAProposalButton";

export default function Closing({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <section className="px-3 md:px-5 py-20 bg-cherry h-screen flex flex-col justify-center-safe">
            <div className="flex flex-col gap-5">
                <p className="flex justify-center text-3xl font-bold text-center">Tell us what your people need to be able to do.</p>
                <p className="text-center text-lg font-medium text-gray-600">
                    Send us the capability gap and we will come back with a scoped programme, a timeline and a price.
                </p>
            </div>
            <div className="flex items-center justify-center mt-10">
                <RequestAProposalButton setIsOpen={setIsOpen} />
            </div>
        </section>
    )
}