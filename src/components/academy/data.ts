import type { Course, Questions } from "./academy.types";

const beginner: Course[] = [
    {
        name: "Digital Foundations & Office Productivity",
        workType: ["organising"],
        learningStyle: "virtual",
        experience: "beginner",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: "Produce professional documents, spreadsheets and presentations, manage email and calendars, organise files, and work confidently with Microsoft 365.",
        jobTitle: "Office Administrator",
        duration: "6 weeks",
        fee: 140_000
    },
    {
        name: "Microsoft Excel Essentials",
        workType: ["numbers"],
        learningStyle: "virtual",
        experience: "beginner",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: "Build accurate formulas, organise and summarise records, and produce charts and reports.",
        jobTitle: "Excel Specialist",
        duration: "6 weeks",
        fee: 140_000
    },
    {
        name: "Introduction to Data Analysis",
        workType: ["numbers"],
        learningStyle: "virtual",
        experience: "beginner",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: "Clean raw data, summarise datasets using tables and charts, and present clear conclusions from data.",
        jobTitle: "Junior Data Analyst",
        duration: "8 weeks",
        fee: 180_000
    },
    {
        name: "Web Development Foundations (HTML, CSS, JavaScript)",
        workType: ["design", "hands-on"],
        learningStyle: "virtual",
        experience: "beginner",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: "Build responsive multi-page websites, create layouts for mobile and desktop, and publish live websites.",
        jobTitle: "Junior Web Developer",
        duration: "8 weeks",
        fee: 180_000
    },
    {
        name: "Product Design Foundations (UI/UX)",
        workType: ["design"],
        learningStyle: "virtual",
        experience: "beginner",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: "Conduct basic user research, create wireframes and clickable Figma prototypes, and produce a portfolio piece.",
        jobTitle: "Junior UI/UX Designer",
        duration: "8 weeks",
        fee: 180_000
    },
    {
        name: "Cybersecurity Fundamentals",
        workType: ["security"],
        learningStyle: "virtual",
        experience: "beginner",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: "Understand networks and vulnerabilities, recognise common attacks, and apply practical security controls.",
        jobTitle: "Junior Cybersecurity Analyst",
        duration: "8 weeks",
        fee: 180_000
    },
    {
        name: "Cloud Computing Fundamentals (Microsoft Azure AZ-900)",
        workType: ["hands-on"],
        learningStyle: "virtual",
        experience: "beginner",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: "Understand Azure services, cloud concepts, pricing, support and governance, and prepare for the AZ-900 examination.",
        jobTitle: "Junior Cloud Support Specialist",
        duration: "6 weeks",
        fee: 140_000
    }
];
const intermediate: Course[] = [
    {
        name: "Data Analytics with Excel & Power BI",
        workType: ["numbers"],
        learningStyle: "virtual",
        experience: "intermediate",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: "Model data across related tables, write DAX measures, and build and publish interactive dashboards.",
        jobTitle: "Data Analyst",
        duration: "10 weeks",
        fee: 250_000
    },
    {
        name: "Python for Data Analysis",
        workType: ["numbers"],
        learningStyle: "virtual",
        experience: "intermediate",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: "Manipulate and clean large datasets with pandas, produce statistical summaries and visualisations, and automate repetitive analysis.",
        jobTitle: "Python Data Analyst",
        duration: "8 weeks",
        fee: 20_0000
    },
    {
        name: "Frontend Development with React",
        workType: ["design", "hands-on"],
        learningStyle: "virtual",
        experience: "intermediate",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: "Build React applications, manage application state, consume live APIs, and deploy production applications.",
        jobTitle: "Frontend Developer",
        duration: "10 weeks",
        fee: 250_000
    },
    {
        name: "Backend Development with C# and .NET",
        workType: ["hands-on"],
        learningStyle: "virtual",
        experience: "intermediate",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: "Build and secure REST APIs, design and query relational databases, and deploy backend services.",
        jobTitle: "Backend Developer",
        duration: "12 weeks",
        fee: 30_0000
    },
    {
        name: "Microsoft Power Platform (Power Apps & Power Automate)",
        workType: ["organising", "hands-on"],
        learningStyle: "virtual",
        experience: "intermediate",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: "Build business applications, automate workflows, and securely connect applications to organisational data.",
        jobTitle: "Power Platform Developer",
        duration: "8 weeks",
        fee: 180_000
    },
    {
        name: "Network & Systems Administration",
        workType: ["hands-on"],
        learningStyle: "virtual",
        experience: "intermediate",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: "Configure and troubleshoot networks, administer users and servers, and support organisational infrastructure.",
        jobTitle: "Systems Administrator",
        duration: "8 weeks",
        fee: 250_000
    },
    {
        name: "Cybersecurity Operations",
        workType: ["organising"],
        learningStyle: "virtual",
        experience: "intermediate",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: "Monitor systems, interpret security alerts, investigate incidents, and work according to security operations procedures.",
        jobTitle: "Security Operations Centre Analyst",
        duration: "8 weeks",
        fee: 20_0000
    },
    {
        name: "Product Management",
        workType: ["organising"],
        learningStyle: "virtual",
        experience: "intermediate",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: "Turn business problems into product requirements, prioritise roadmaps, manage delivery cycles, and work with engineering and design teams.",
        jobTitle: "Product Manager",
        duration: "10 weeks",
        fee: 250_000
    }
];
const advanced: Course[] = [
    {
        name: "Advanced Excel & Financial Modelling",
        workType: ["numbers"],
        learningStyle: "virtual",
        experience: "advanced",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: "Build structured financial models, perform scenario and sensitivity analysis, and automate recurring reporting.",
        jobTitle: "Financial Analyst",
        duration: "8 weeks",
        fee: 30_0000
    },
    {
        name: "Advanced Power BI (DAX, Data Modelling & Deployment)",
        workType: ["numbers"],
        learningStyle: "virtual",
        experience: "advanced",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: "Write complex DAX, design performant data models, and deploy and secure reports across an organisation.",
        jobTitle: "Business Intelligence Developer",
        duration: "8 weeks",
        fee: 30_0000
    },
    {
        name: "Azure Administrator & Solutions Architect (AZ-104, AZ-305)",
        workType: ["hands-on"],
        learningStyle: "virtual",
        experience: "advanced",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: "Administer production Azure environments, design solutions against business and compliance requirements, and prepare for both certification examinations.",
        jobTitle: "Azure Solutions Architect",
        duration: "10 weeks",
        fee: 30_0000
    },
    {
        name: "Full-Stack Development with C# and Blazor",
        workType: ["hands-on"],
        learningStyle: "virtual",
        experience: "advanced",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: "Build complete applications across frontend and backend, implement authentication and data access, and deploy production applications.",
        jobTitle: "Full-Stack Developer",
        duration: "12 weeks",
        fee: 450_000
    },
    {
        name: "Advanced Cybersecurity & Network Security",
        workType: ["security", "hands-on"],
        learningStyle: "virtual",
        experience: "advanced",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: "Design and harden network architectures, conduct vulnerability assessments, and lead structured incident response.",
        jobTitle: "Cybersecurity Engineer",
        duration: "10 weeks",
        fee: 350_000
    },
    {
        name: "Data Engineering (SQL, Pipelines & Warehousing)",
        workType: ["numbers", "hands-on"],
        learningStyle: "virtual",
        experience: "advanced",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: "Write and optimise advanced SQL, build reliable data pipelines, and model data warehouses for analytics.",
        jobTitle: "Data Engineer",
        duration: "12 weeks",
        fee: 450_000
    },
    {
        name: "Data Centre Analysis & Infrastructure Management",
        workType: ["numbers", "hands-on"],
        learningStyle: "virtual",
        experience: "advanced",
        timeframe: [
            "6 months",
            "1 year"
        ],
        outcome: "Analyse infrastructure capacity, availability and performance, plan capacity against demand, and report infrastructure health.",
        jobTitle: "Data Centre Infrastructure Analyst",
        duration: "8 weeks",
        fee: 350_000
    },
    {
        name: "AI & Generative AI for Professionals",
        workType: ["numbers", "organising"],
        learningStyle: "virtual",
        experience: "advanced",
        timeframe: [
            "3 months",
            "6 months",
            "1 year"
        ],
        outcome: "Apply generative AI to professional work, recognise its limitations, and build repeatable AI-assisted workflows.",
        jobTitle: "AI Workflow Specialist",
        duration: "8 weeks",
        fee: 30_0000
    }
];
const courses: Course[] = [
    ...beginner, ...intermediate, ...advanced
]
const questions: Questions[] = [
    {
        id: "workType",
        question: "What kind of work do you enjoy most?",
        options: [
            {
                label: "Working with numbers and finding patterns",
                value: "numbers"
            },
            {
                label: "Designing things people use",
                value: "design"
            },
            {
                label: "Building and fixing things with my hands",
                value: "hands-on"
            },
            {
                label: "Organising people and projects",
                value: "organising"
            },
            {
                label: "Keeping systems safe",
                value: "security"
            }
        ]
    },
    {
        id: "experience",
        question: "How much experience do you have with technology?",
        options: [
            {
                label: "I am starting from scratch",
                value: "beginner"
            },
            {
                label: "I am comfortable with a computer but not with tech work",
                value: "intermediate"
            },
            {
                label: "I already work in tech and want to go deeper",
                value: "advanced"
            }
        ]
    },
    {
        id: "timeframe",
        question: "When do you want to be working in this field?",
        options: [
            {
                label: "Within six months",
                value: "6 months"
            },
            {
                label: "Within a year",
                value: "1 year"
            },
            {
                label: "I am exploring for now",
                value: "unknown"
            }
        ]
    }
]


const threeLevels: {
    title: "Beginner" | "Intermediate" | "Advanced",
    text: string
}[] = [
        {
            title: "Beginner",
            text: "For people with no technical background at all. We assume nothing, we avoid jargon, and we take you to the point where you can do useful paid work."
        },
        {
            title: "Intermediate",
            text: "For practitioners already working in the field who need depth, certification, or a route into a more senior role."
        },
        {
            title: "Advanced",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor in sit faucibus risus lorem leo maximus amet arcu in est."
        }
    ]
const whyCherryville: string[] = [
    "Every facilitator is a Microsoft Certified Trainer.",
    "Every course is built around a named job role, not a technology for its own sake. ",
    "You are assessed at the start, midway and at the end, so your progress is measured rather than assumed. ",
    "We train the same organisations our graduates want to work for, which is how we know what those employers are actually asking for. "
]

export { questions, courses, threeLevels, whyCherryville }