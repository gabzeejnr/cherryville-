import { useNavigate } from "react-router-dom"

export default function NotFound() {

    const navigate = useNavigate();

    return (
        <main className="min-h-screen flex flex-col gap-4 items-center justify-center">
            This page does not exist...🤗😶‍🌫️
            <div className="flex gap-4">
                <button type="button" className="border p-2 hover:shadow-md rounded-xl" onClick={() => navigate(-1)}>Go Back</button>
                <button type="button" className="border p-2 hover:shadow-md rounded-xl" onClick={()=>navigate("/")}>Go Home</button>
            </div>
        </main>
    )
}