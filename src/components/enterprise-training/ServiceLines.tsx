import { serviceLines } from "../../data/enterpriseTraining.data"
import type { ServiceLines } from "../../types/enterprise.types"

function ServiceCard({ id, title, text }: ServiceLines) {
    return (
        <div id={id} className="flex flex-col gap-5 shadow-md hover:shadow-lg p-4 py-6 rounded-2xl overflow-hidden">
            <span className="font-bold text-lg">{title}</span>
            <p className="text-wrap text-[15px]">{text}</p>
        </div>
    )
}


export default function ServiceLines() {
    return (
        <section className="px-3 md:px-5 py-20 bg-cherry">
            <h3 className="flex justify-center text-3xl font-bold text-center mb-5">Service Lines</h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {serviceLines.map(service => <ServiceCard key={service.id} id={service.id} title={service.title} text={service.text} />)}
            </div>
        </section>
    )
}