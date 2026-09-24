import type { ServiceLines } from "./enterprise.types";


const serviceLines: ServiceLines[] = [
    {
        title: "Technical Capability Development",
        text: "Structured cohort-based training that raises the technical capability of your existing workforce. Programs are scoped to your operatig environment, delivered in person or virtually by Microsoft Certified Trainers, and governed end to end by our programme lifecycle standard from definintion through delivery to a formal closure."
    },
    {
        title: "Custom Curriculum Design",
        text: "Curriculum, facilitator manuals, participant workbooks, competency framework and assessment instruments, built to your specifications. Commission the design alone and run it with your own trainers, or have Cherryville deliver it for you. What we build is yours to own and reuse."
    },
    {
        title: "Measurement & Reporting",
        text: "Training you can evidence. We assess capability before, during, and after delivery analyse the matched cohort, and report the movement to your executive team inn terms they can act on. When yur board asks what the investment produced, you will have an answer with data behind it."
    },
    {
        title: "Partner & White - Label Delivery",
        text: "A delivery aim for consultancies and contractors who have won the work and need the training capability behind it. We deliver under your brand, to your standards, under full confidentiality. Your client relationship remains entirely yours."
    }
] as const

const deliveryStandard: { title: string, text: string[] }[] = [
    {
        title: "Definition",
        text: ["We establish the capability gap, agree measurable objectives with your sponsors and design the curriculum and assessment instruments against them."]
    },
    {
        title: "Delivery",
        text: ["Facilitation by certified trainers, with attendance, participation and graded assessment captured throughout. Mid-programme data lets us correct course while the cohort is still in the room."]
    },
    {
        title: "Closure",
        text: [
            "Post-training assessment, matched-cohort analysis against the baseline, a formal report to your sponsors, and recommendations for what should follow.",
            "Assessment runs on a standard instrument set applied at three points; before, midway and at the end, so the gain we report is a comparison, not an impression. "
        ] as const
    }
] as const;

const deliveryFormat: { title: string, text: string }[] = [
    {
        title: "In-house",
        text: "at your facility, using your systems and your data where permitted. "
    },
    {
        title: "Off-site",
        text: "at conference and hotel venues, with logistics coordinated by Cherryville. "
    },
    {
        title: "Virtual",
        text: "instructor-led, with the same assessment framework applied. "
    },
    {
        title: "Blended",
        text: "virtual foundations followed by intensive in-person practice."
    }
]

export { serviceLines, deliveryStandard, deliveryFormat }