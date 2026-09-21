import Closing from "../components/enterprise-training/Closing"
import DeliveryFormat from "../components/enterprise-training/DeliveryFormat"
import DeliveryStandard from "../components/enterprise-training/DeliveryStandard"
import Hero from "../components/enterprise-training/Hero"
import Introduction from "../components/enterprise-training/Intorduction"
import ServiceLines from "../components/enterprise-training/ServiceLines"

export default function EnterpriseTrainng() {
    return (
        <>
        <Hero />
        <Introduction />
        <ServiceLines />
        <DeliveryStandard />
        <DeliveryFormat />
        <Closing />
        </>
    )
}