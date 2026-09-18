import { sectorsServed } from "./data";
import styles from "./Home.module.scss";
import { Serve } from "./home.types";

function Card({ sector }: { sector: Serve }) {

    const { title, text } = sector;

    const { icon: Icon, bgColor } = sector.icon
    return (
        <div className="rounded-2xl overflow-hidden shadow-sm bg-white flex flex-col gap-4 p-4 items-start justify-center ">
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
        <section className="px-3 md:px-5 py-20 bg-[#fdf2e9]">
            <div className="flex flex-col gap-5">
                <p className="flex justify-center text-3xl font-bold text-center">We Work Where Technical Capabilities Carry Weight</p>
                <p className="text-center text-lg font-medium text-gray-600">Different sectors buy training for different reasons. We build the programme around yours.</p>
            </div>
            <div className="mt-10 md:mt-15 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {sectorsServed.map(sec => <Card sector={sec} />)}
            </div>
        </section>
    )
}