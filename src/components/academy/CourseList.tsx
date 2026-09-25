import { useState } from "react";
import Section from "../Section";
import { Plus, Minus } from "lucide-react";
import { addDot } from "../../utils/text.utils";
import type { Course } from "../../types/academy.types";
import styles from "../../styles/global.module.scss";

function Card({ course }: { course: Course }) {

    const [open, setOpen] = useState<boolean>(false);
    const {
        name, whoIsItFor, outcome,
        duration, learningStyle
    } = course;

    return (
        <div className="w-100 px-3 text-white transition-all duration-[5s]">
            {!open
                ? <div className="flex items-center justify-between p-3 transition-all duration-[5s] shadow-accent-hover shadow-xs rounded-xl bg-accent">
                    <span>{name}</span>
                    <button type="button" onClick={() => setOpen(p => !p)}>
                        <Plus />
                    </button>
                </div>
                : <div className="flex flex-col gap-2 shadow-md p-3 transition-all duration-[5s] shadow-accent-hover rounded-xl bg-accent ">
                    <div className="flex justify-between">
                        <span>{name}</span>
                        <button type="button" onClick={() => setOpen(p => !p)}>
                            <Minus />
                        </button>
                    </div>
                    <div className="flex flex-col mt-2 md:mt-3">
                        <h3 className="font-bold">Who is it for?</h3>
                        <span className="text-[15px]">{whoIsItFor}</span>
                    </div>
                    <div className="mt-2 md:mt-3">
                        <ul className="list-disc list-inside">
                            <span className="text-sm font-bold">At the end of the course, you will be able to</span>
                            {outcome.map(out => <li key={out}>{addDot(out)}</li>)}
                        </ul>
                    </div>
                    <div className="block mt-2 md:mt-3">
                        <span className="font-bold">Duration: </span>
                        <span>{duration}</span>
                    </div>
                    <span className="block">
                        <span className="font-bold">Format: </span>
                        <span>{learningStyle}</span>
                    </span>
                </div>
            }
        </div>
    )
}


export default function CourseList({ courses }: { courses: Course[] }) {
    return (
        <Section title="Courses" bg="bg-bg">
            <div className="mt-10">
                {courses
                    ? <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-center">
                        {courses.map(course => <div data-aos="fade-up" key={course.name}>
                            <Card course={course} />
                        </div>)}
                    </div>
                    : <div>Couldn't get courses... Please reload to try again</div>
                }
            </div>
        </Section>
    )
}