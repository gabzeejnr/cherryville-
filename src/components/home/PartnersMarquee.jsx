import styles from "./Home.module.scss";

function LogoItem({ name }) {
    return (
        <div className="flex items-center justify-center px-8 shrink-0">
            <span className="text-lg font-extrabold tracking-tight text-gray-400 whitespace-nowrap select-none">
                {name}
            </span>
        </div>
    );
}

export default function Marquee() {

    const LOGOS = [
        { name: "Microsoft", color: "#737373" },
        { name: "Google", color: "#737373" },
        { name: "Amazon", color: "#737373" },
        { name: "IBM", color: "#737373" },
        { name: "Salesforce", color: "#737373" },
        { name: "Oracle", color: "#737373" },
        { name: "SAP", color: "#737373" },
        { name: "Cisco", color: "#737373" },
    ];

    return (
        <section className="w-full py-10 bg-white border-y border-gray-100 overflow-hidden">
            <p className="text-center text-xs font-bold tracking-[0.2em] text-gray-400 pb-6">TRUSTED BY LEARNERS FROM </p>
            <div className="relative flex">
                <div className="absolute left-0 top-0 bottom-0 w-10 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-10 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className={styles["marquee-content"]}>
                    {[...LOGOS, ...LOGOS].map((l, i) => <LogoItem key={`${l.name} - ${i}`} name={l.name} />)}
                </div>
            </div>
        </section>
    );
}
