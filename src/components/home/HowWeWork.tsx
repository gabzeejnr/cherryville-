import { Link } from "react-router-dom";


export default function HowWeWork() {
    return (
        <section className="px-3 md:px-10 py-20 bg-cherry">
            <div className="flex flex-col gap-10">
                <p className="flex justify-center text-3xl font-bold text-center">A method, not a menu</p>
                <div className="flex flex-col gap-5" data-aos="zoom-in">
                    <p className="text-center text-base font-medium text-gray-500">
                        Every cherryville programme runs through three governed phases; Definition, Delivery and Closure: with formal assurance gates between them.
                        We agree the capability gap before we design anything, we measure movement while the program is live, and we close with ecvidence rather than a cerificate ceremony.
                    </p>
                    <p className="text-center text-base font-medium text-gray-500">It is a slower conversion at the start.
                        It is the reason our programmes hold up when the training ends.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center mt-10" data-aos="flip-right">
                <Link to="/enterprise-training#delivery-standard">
                    <button type="button" className="bg-accent px-3 py-2 cursor-pointer text-white rounded-full hover:bg-accent-hover">See how we deliver</button></Link>
            </div>
        </section>
    )
}