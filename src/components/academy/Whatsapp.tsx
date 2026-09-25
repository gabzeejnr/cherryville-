import whatsapp from "../../assets/SVG/whatsApp.webp";

export default function AcademyWhatsapp({ text }: { text: string }) {
    return (
        <a href={`https://api.whatsapp.com/send/?phone=2348064265176&text=${encodeURIComponent(text)}`}
            hrefLang="utf-8" target="_blank">
            <div className="flex items-center gap-2 w-fit p-2 rounded-full bg-green-600">
                <img src={whatsapp} width="30" />
                <p className="text-white font-medium">Speak to an advisor</p>
            </div></a>
    )
}