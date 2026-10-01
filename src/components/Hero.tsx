import { Fragment } from "react/jsx-runtime";
import type { Heading, HeroType } from "../types";
import styles from "../styles/global.module.scss";

function HighlightText({ heading }: { heading: Heading }) {

    const { title, highlights } = heading;
    if (!highlights || !highlights.length) return <span>{title}</span>
    const parts = title.split(" ");

    return (
        <p>
            {parts.map((part, index) => {
                const isMatch = highlights.some(high => high.toLowerCase() === part.toLowerCase());

                return isMatch ? <span key={index} className="text-accent">{part} </span> : <Fragment key={index}>{part} </Fragment>
            })}
        </p>
    )

}

export default function Hero({ page, heading, subtitles, children }: HeroType) {

    if (!page || !heading.title) return <></>

    return (
        <section className={styles.hero}>
            <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-4 pb-14 text-center max-w-6xl mx-auto">

                <div className="flex flex-col min-h-[50dvh] py-10 justify-center items-center">

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cherry/40 bg-[#163833]/60 backdrop-blur-sm text-cherry text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-10 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-cherry animate-bounce inline-block" />
                        <span className={`${styles.typing}`}>{page}</span>
                    </div>

                    <h1 className="leading-10 lg:leading-15 font-bold text-3xl">
                        <HighlightText heading={heading} />
                    </h1>

                    {subtitles ?
                        Array.isArray(subtitles)
                            ? subtitles.length && subtitles.map(sub =>
                                <p key={sub.slice(0, 10)} className="text-base sm:text-lg text-gray-300/90 font-normal mx-auto mb-10 leading-relaxed">{sub}</p>
                            )
                            : <p className="text-base sm:text-lg text-gray-300/90 font-normal mx-auto mb-10 leading-relaxed">{subtitles}</p>
                        : null
                    }

                    {children &&
                        <div className="flex flex-col sm:flex-row mt-5 items-center gap-4 w-full sm:w-auto">{children}</div>
                    }

                </div>

            </main>
        </section>
    )
}