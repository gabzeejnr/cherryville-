export default function AcademyTeaser() {
    return (
        <section className="px-3 md:px-5 py-20 bg-cherry">
            <div className="flex flex-col gap-5">
                <p className="flex justify-center text-3xl font-bold text-center">Not here on behalf of an organisation?</p>
                <p className="text-center text-lg font-medium text-gray-600">
                    Cherryville academy runs courses for individuals at every level; including for people who have never worked in tech before.
                    <br />
                    {" "}
                    Tell us what interests you and we will point you to one course, not a catalogue.
                </p>
            </div>
            <div className="flex justify-center mt-10">
                <button type="button" className="bg-accent hover:bg-accent-hover text-white px-3 py-2 rounded-full font-medium cursor-pointer">Find your course</button>
            </div>
        </section>
    )
}