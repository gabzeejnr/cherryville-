import Section from "../Section";
import imageStuff from "../../assets/images/home/main-hero-bg1.jpg";

export default function Founder() {
    return (
        <Section bg="bg-cherry">
            <div className="flex flex-col items-center lg:flex-row">
                <div className="flex-1">
                    <div className="max-w-150 flex items-center justify-center">
                        <img src={imageStuff} alt="Gabriel Osho Profile"
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="flex-1" data-aos="fade-up">
                    <h2 className="font-bold md:text-lg lg:text-xl">Gabriel A. Osho — Founder & Principal</h2>

                    <div className="mt-7 flex flex-col gap-5 text-sm lg:text-[17px]">

                        <p className="">
                            Gabriel founded Cherryville after [X] years in programme management, training delivery and data analytics across Nigeria's technology and skills development sector. Before establishing the company he managed multiple concurrent training programmes, working across programme operations, data analysis and compliance.
                        </p>

                        <p className="">
                            Over that period he was responsible for programmes that trained more than 1,000 participants, with over 50 per cent progressing into employment. He holds a B.Tech from the Federal University of Technology, Akure.
                        </p>

                        <p className="">
                            His longer ambition for Cherryville is a technical institute in Ijebu Ode equipping over a thousand young people with in-demand digital skills — combining technical training, professional skills and personal development.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    )
}