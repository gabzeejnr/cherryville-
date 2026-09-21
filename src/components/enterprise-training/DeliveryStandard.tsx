import { deliveryStandard } from "./data"

function DeliveryCard({ title, text }: {
    title: string,
    text: string[]
}) {
    return (
        <div className="px-5 py-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-lg font-semibold">{title}</span>
            <div className="flex flex-col gap-4 mt-5">
                {text.map(t => <p className="text-[15px] text-wrap">{t}</p>)}
            </div>
        </div>
    )
}

export default function DeliveryStandard() {
    return (
        <section id="delivery-standard" className="px-3 md:px-5 py-20 bg-cherry">
            <h3 className="flex justify-center text-3xl font-bold text-center mb-5">How a Cherryville programme runs</h3>
            <p className="gray-subheading">Our programs are governed by a acntrolled internal standard with the three phases and four assurance gates. Nothing moves forward until the gate is cleared.</p>

            <div className="grid gap-6 py-10 grid-cols-1 md:grid-cols-3">
                {deliveryStandard.map(del => <DeliveryCard title={del.title} text={del.text} />)}
            </div>
        </section>
    )
}