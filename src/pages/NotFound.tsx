import { Link, useNavigate } from "react-router-dom"
import useDocumentMeta from "../hooks/documentMetaData.hook";
import notFound from "../assets/images/not-found.png";
import { ArrowLeft, Headphones } from "lucide-react";

export default function NotFound() {

    const navigate = useNavigate();

    useDocumentMeta({
        title: "Page Not Found",
        description: ""
    })

    return (
        <main className="min-h-screen flex flex-col gap-4 items-center justify-center bg-[#F8F8F8]">
            <div className="flex flex-col items-center text-center">

                <div className="bg-accent rounded-full w-fit p-1">
                    <img src={notFound} alt="Not Found Image" width="150" />
                </div>

                <h2 className="text-xl md:text-4xl mt-5 font-medium">Error 404</h2>
                <span className="text-2xl font-semibold md:mt-1">Oops! Page not found.</span>

                <div className="max-w-150 mt-2 md:mt-5 text-[15px] md:text-base font-medium">Looks like this page took a wrong turn. Let's get you back on track.</div>

                <div className="flex gap-4 mt-10">
                    <button type="button" className="text-white font-semibold p-2 hover:shadow-md rounded-xl flex gap-2 items-center-safe bg-accent cursor-pointer" onClick={() => navigate("/")}><ArrowLeft size="15" /> Back to Home</button>
                    <button type="button" className="border p-2 hover:shadow-md rounded-xl" onClick={() => navigate(-1)}>Go Back</button>
                </div>

                <div className="text-sm mt-10">
                    <Link to="/contact" className="underline flex gap-2 items-center-safe">
                        <Headphones />
                        <span className="block place-self-end">Contact Customer Support</span>
                    </Link>
                </div>
            </div>
        </main>
    )
}