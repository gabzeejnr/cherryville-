import type { ReactNode } from "react";

export default function Section({ className, bg, title, subtitle, subtitleArray, children }: {
    className?: string,
    title?: string,
    subtitle?: string,
    subtitleArray?: string[],
    bg?: "bg-cherry" | "bg-bg",
    children?: ReactNode
}) {
    return (
        <section className={`min-h-screen px-3 flex flex-col justify-center-safe md:px-10 py-20 ${bg ?? "bg-cherry"} ${className}`}>
            <div className="flex flex-col gap-4 lg:gap-8">
                {title && <h2 className="flex justify-center text-2xl md:text-3xl font-medium mb-4 text-center">{title}</h2>}
                {subtitleArray
                    ? subtitleArray.map(sub => (<p key={sub} className="text-center text-lg font-medium text-gray-600">{sub.trim()}</p>))
                    : subtitle
                        ? <p className="text-center text-lg font-medium text-gray-600">{subtitle.trim()}</p>
                        : null
                }
            </div>
            <div>
                {children}
            </div>
        </section>
    )
}