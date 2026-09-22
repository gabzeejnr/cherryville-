import { deliveryFormat } from "./data"


export default function DeliveryFormat() {
    return (
        <section className="px-3 md:px-5 py-20 bg-cherry">
            <div className="pl-6">
                <ul className="list-disc">
                    {deliveryFormat.map(del => <li>
                        <span className="font-medium">{del.title}</span>: <span className="text-[15px]">{del.text}</span>
                    </li>)}
                </ul>
            </div>
            <div className="mt-5 text-gray-500 font-medium">We run concurrent cohorts across multiple cities where the workforce is distributed, and scale the facilitator bench to the size of the programme. </div>
        </section>
    )
}