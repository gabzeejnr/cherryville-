import { Outlet } from "react-router-dom";
import SiteNavBar from "../components/SiteNavBar";
import CherryVilleFooter from "../components/CherryVilleFooter";
import Footer from "../components/Footer";

export default function MainLayout() {
    return (
        <main>
            <SiteNavBar />
            <Outlet />
            <Footer />
            {/* <CherryVilleFooter /> */}
        </main>
    )
}