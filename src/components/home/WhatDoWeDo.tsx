import { Link } from "react-router-dom";
import { doings } from "../../data/home.data";
import type { Doings } from "../../types/home.types";
import styles from "./Home.module.scss";

function Card({ doing }: { doing: Doings }) {

    const { headingColor, link, text, title } = doing;
    const Icon = doing.icon.icon
    const { color, bgColor } = doing.icon;

    return (
        <div className="rounded-2xl overflow-hidden shadow-sm bg-white flex flex-col h-75 sm:h-85 md:h-90 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
            <div className="flex flex-col gap-4 flex-1 border-b pb-3 px-5 pt-7 text-white"
                style={{ backgroundColor: headingColor }}>
                <div className={styles["icon-wrap"]} style={{ background: bgColor }}>
                    <Icon color={color ?? "white"} />
                </div>
                <span className="font-semibold text-lg">{title}</span>
            </div>
            <div className="flex flex-col gap-6 flex-2 px-5 pt-4 pb-3">
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{text}</p>
            </div>
            <div className="mt-auto px-3 pb-5">
                <Link to={link.href} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-colors text-white"
                    style={{ background: bgColor }}>
                    {link.text}
                </Link>
            </div>
        </div>
    )
}

export default function WhatDoWeDo() {

    return (
        <section className="px-3 md:px-10 py-20 bg-cherry">
            <h2 className="flex justify-center text-3xl md:text-4xl font-medium mb-4">What We Do</h2>
            <div className="mt-10 md:mt-15 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {doings.map(d => <div data-aos="fade-up">
                    <Card key={d.text} doing={d} />
                </div>)}
            </div>
        </section>
    )
}